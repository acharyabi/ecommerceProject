"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../utils/constants");
const order_entity_1 = require("../order/entities/order.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
const product_entity_1 = require("../products/entities/product.entity");
let CustomerService = class CustomerService {
    constructor(customerModel, userModel, orderModel, paymentModel, productModel, orderProductModel, sequelize) {
        this.customerModel = customerModel;
        this.userModel = userModel;
        this.orderModel = orderModel;
        this.paymentModel = paymentModel;
        this.productModel = productModel;
        this.orderProductModel = orderProductModel;
        this.sequelize = sequelize;
    }
    async create(createCustomerDto) {
        const { orderDetails, paymentDetails } = createCustomerDto;
        const transaction = await this.sequelize.transaction();
        try {
            const customer = await this.customerModel.create({
                first_name: createCustomerDto.first_name,
                last_name: createCustomerDto.last_name,
                email: createCustomerDto.email,
                company: createCustomerDto.company,
                postal_code: createCustomerDto.postalcode,
                city: createCustomerDto.city,
                address: createCustomerDto.address,
                appartment: createCustomerDto.appartment,
            }, { transaction: transaction });
            const user = await this.userModel.create({
                first_name: createCustomerDto.first_name,
                last_name: createCustomerDto.last_name,
                email: createCustomerDto.email,
                postal_code: createCustomerDto.postalcode,
                city: createCustomerDto.city,
                username: createCustomerDto.first_name,
                appartment: createCustomerDto.appartment,
                address: createCustomerDto.address,
            }, { transaction: transaction });
            const order = await this.orderModel.create({
                status: 'pending',
                order_date: createCustomerDto.order_date,
                customer_id: customer.id,
                total_amount: 0,
                user_id: user.id,
            }, { transaction: transaction });
            let totalAmount = 0;
            for (const item of orderDetails) {
                const product = await this.productModel.findOne({
                    where: {
                        id: item.productId,
                    },
                });
                totalAmount += product.price * item.quantity;
                await this.orderProductModel.create({
                    order_id: order.id,
                    product_id: item.productId,
                    quantity: item.quantity,
                }, { transaction: transaction });
                await order.update({
                    total_amount: totalAmount,
                }, { transaction: transaction });
            }
            const payment = await this.paymentModel.create({
                payment_method: 'online',
                status: 'pending',
                amount_paid: paymentDetails.amount_paid,
                card_number: paymentDetails.card_number,
                card_name: paymentDetails.card_name,
                expiry_date: paymentDetails.expiry_date,
                cvc: paymentDetails.cvc,
                order_id: order.id,
            }, { transaction: transaction });
            if (Math.floor(totalAmount) === Math.floor(paymentDetails.amount_paid)) {
                await order.update({
                    status: 'completed',
                }, {
                    transaction: transaction,
                });
                await payment.update({
                    status: 'completed',
                }, { transaction: transaction });
            }
            else {
                throw new common_1.BadRequestException('Total amount does not match the amount paid');
            }
            await transaction.commit();
            return customer;
        }
        catch (error) {
            console.error('Transaction failed:', error);
            await transaction.rollback();
            throw new common_1.BadRequestException('Failed to create customer order');
        }
    }
    async findAll() {
        const allCustomer = await this.customerModel.findAll({
            include: [
                {
                    model: order_entity_1.Order,
                    include: [
                        {
                            model: product_entity_1.Product,
                        },
                    ],
                },
            ],
        });
        return allCustomer;
    }
    findOne(id) {
        return `This action returns a #${id} customer`;
    }
    update(id, updateCustomerDto) {
        return `This action updates a #${id} customer`;
    }
    async remove(id) {
        await this.customerModel.destroy({
            where: {
                id,
            },
        });
        return `customer deleted sucessfully`;
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CUSTOMER_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.USER_REPOSITORY)),
    __param(2, (0, common_1.Inject)(constants_1.ORDER_REPOSITORY)),
    __param(3, (0, common_1.Inject)(constants_1.PAYMENT_REPOSITORY)),
    __param(4, (0, common_1.Inject)(constants_1.PRODUCT_REPOSITORY)),
    __param(5, (0, common_1.Inject)(constants_1.ORDER_PRODUCT_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, sequelize_typescript_1.Sequelize])
], CustomerService);
//# sourceMappingURL=customer.service.js.map
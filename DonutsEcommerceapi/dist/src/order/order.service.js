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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../utils/constants");
const product_entity_1 = require("../products/entities/product.entity");
const payment_entity_1 = require("../payments/entities/payment.entity");
let OrderService = class OrderService {
    constructor(orderModel, productModel, orderProductModel) {
        this.orderModel = orderModel;
        this.productModel = productModel;
        this.orderProductModel = orderProductModel;
    }
    async create(createOrderDto) {
        const order = await this.orderModel.create({
            status: createOrderDto.status,
            order_date: createOrderDto.order_date,
            total_amount: createOrderDto.total_amount,
            user_id: createOrderDto.user_id,
        });
        for (const product of createOrderDto.products) {
            const checkProduct = await this.productModel.findByPk(product.product_id);
            if (!checkProduct) {
                throw new common_1.NotFoundException(`product with id ${product.product_id} not found`);
            }
            await this.orderProductModel.create({
                order_id: order.id,
                product_id: product.product_id,
                quantity: product.quantity,
            });
        }
        return this.orderModel.findByPk(order.id, { include: [product_entity_1.Product] });
    }
    async findAll() {
        const allOrder = this.orderModel.findAll({
            include: [{ model: product_entity_1.Product, through: { attributes: [] } }, payment_entity_1.Payment],
        });
        if (!allOrder) {
            throw new common_1.InternalServerErrorException('Error fetching order');
        }
        return allOrder;
    }
    async findOne(id) {
        const order = await this.orderModel.findOne({
            where: { id },
            include: [product_entity_1.Product],
        });
        if (!order) {
            throw new common_1.BadRequestException(`Order with ID ${id} not exists.`);
        }
        return order;
    }
    async update(id, updateOrderDto) {
        const orderCheck = await this.orderModel.findOne({ where: { id } });
        if (!orderCheck) {
            throw new common_1.BadRequestException(`Order with ID ${id} not exists. so cann't be edited`);
        }
        await this.orderModel.update(updateOrderDto, { where: { id } });
        return this.orderModel.findOne({ where: { id } });
    }
    async remove(id) {
        const orderCheck = await this.orderModel.findOne({ where: { id } });
        if (!orderCheck) {
            throw new common_1.BadRequestException(`Order with ID ${id} not exists. so cann't be deleted`);
        }
        await this.orderModel.destroy({ where: { id } });
        return 'order is sucessfully deleted ';
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.ORDER_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.PRODUCT_REPOSITORY)),
    __param(2, (0, common_1.Inject)(constants_1.ORDER_PRODUCT_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object])
], OrderService);
//# sourceMappingURL=order.service.js.map
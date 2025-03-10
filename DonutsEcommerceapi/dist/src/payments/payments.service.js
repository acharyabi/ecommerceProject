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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../utils/constants");
const order_entity_1 = require("../order/entities/order.entity");
let PaymentsService = class PaymentsService {
    constructor(paymentModel) {
        this.paymentModel = paymentModel;
    }
    async create(createPaymentDto) {
        const payment = await this.paymentModel.create(createPaymentDto);
        return payment;
    }
    async findAll() {
        const payments = await this.paymentModel.findAll({ include: [order_entity_1.Order] });
        if (!payments) {
            throw new common_1.InternalServerErrorException('Error fetching payments');
        }
        return payments;
    }
    async findOne(id) {
        const payment = await this.paymentModel.findByPk(id, {
            include: [order_entity_1.Order],
        });
        if (!payment) {
            throw new common_1.NotFoundException(`payment with ID ${id} not found`);
        }
        return payment;
    }
    async update(id, updatePaymentDto) {
        const payment = await this.paymentModel.findOne({
            where: { id },
        });
        if (!payment) {
            throw new common_1.NotFoundException(`Payment with ID ${id} not found`);
        }
        await this.paymentModel.update(updatePaymentDto, { where: { id } });
        return this.paymentModel.findOne({ where: { id } });
    }
    async remove(id) {
        const payment = await this.paymentModel.findOne({
            where: { id },
        });
        if (!payment) {
            throw new common_1.NotFoundException(`payment with ID ${id} not found. so can't be deleted`);
        }
        await this.paymentModel.destroy({ where: { id } });
        return 'payment is sucessfully deleted ';
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.PAYMENT_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map
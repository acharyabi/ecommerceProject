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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const constants_1 = require("../../utils/constants");
const order_entity_1 = require("../order/entities/order.entity");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const userValidation = await this.userModel.findOne({
            where: {
                email: createUserDto.email,
            },
        });
        if (userValidation) {
            throw new common_1.BadRequestException('user with this email already exists');
        }
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const user = await this.userModel.create({
            ...createUserDto,
            password: hashedPassword,
        });
        return user;
    }
    async findAll() {
        const allUser = await this.userModel.findAll({ include: [order_entity_1.Order] });
        if (!allUser) {
            throw new common_1.InternalServerErrorException('Error fetching users');
        }
        return allUser;
    }
    async findOne(id) {
        const user = await this.userModel.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`user  not found`);
        }
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.userModel.findOne({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`user not found`);
        }
        await this.userModel.update(updateUserDto, { where: { id } });
        return this.userModel.findOne({ where: { id } });
    }
    async remove(id) {
        const user = await this.userModel.findOne({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`user with ID ${id} not found. so can't be deleted`);
        }
        await this.userModel.destroy({ where: { id } });
        return 'user is sucessfully deleted ';
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map
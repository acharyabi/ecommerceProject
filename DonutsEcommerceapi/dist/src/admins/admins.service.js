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
exports.AdminsService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../utils/constants");
const bcrypt = require("bcrypt");
let AdminsService = class AdminsService {
    constructor(adminModel) {
        this.adminModel = adminModel;
    }
    async create(createAdminDto) {
        const adminValidation = await this.adminModel.findOne({
            where: {
                email: createAdminDto.email,
            },
        });
        if (adminValidation) {
            throw new common_1.BadRequestException('Admin with this Email already exists');
        }
        const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
        const user = await this.adminModel.create({
            ...createAdminDto,
            password: hashedPassword,
        });
        return 'Admin created';
    }
    findAll() {
        return `This action returns all admins`;
    }
    findOne(id) {
        return `This action returns a #${id} admin`;
    }
    update(id, updateAdminDto) {
        return `This action updates a #${id} admin`;
    }
    remove(id) {
        return `This action removes a #${id} admin`;
    }
};
exports.AdminsService = AdminsService;
exports.AdminsService = AdminsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.ADMIN_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], AdminsService);
//# sourceMappingURL=admins.service.js.map
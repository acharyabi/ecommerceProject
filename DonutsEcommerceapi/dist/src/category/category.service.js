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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../utils/constants");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async create(createCategoryDto) {
        const categoryCheck = await this.categoryModel.findOne({
            where: {
                category_name: createCategoryDto.category_name,
            },
        });
        if (categoryCheck) {
            throw new common_1.BadRequestException('Category already exist, you can not create the category with same name.');
        }
        const category = await this.categoryModel.create(createCategoryDto);
        return category;
    }
    async findAll() {
        const categories = await this.categoryModel.findAll({
            include: { all: true },
        });
        if (!categories) {
            throw new common_1.InternalServerErrorException('Error fetching category');
        }
        return categories;
    }
    async findOne(id) {
        const singleCategory = await this.categoryModel.findByPk(id, {
            include: { all: true },
        });
        if (!singleCategory) {
            throw new common_1.NotFoundException(`category with ID ${id} not found`);
        }
        return singleCategory;
    }
    async update(id, updateCategoryDto) {
        const singleCategory = await this.categoryModel.findOne({ where: { id } });
        if (!singleCategory) {
            throw new common_1.NotFoundException(`category with ID ${id} not found`);
        }
        await this.categoryModel.update(updateCategoryDto, { where: { id } });
        return this.categoryModel.findOne({ where: { id } });
    }
    async remove(id) {
        const singleCategory = await this.categoryModel.findOne({ where: { id } });
        if (!singleCategory) {
            throw new common_1.NotFoundException(`category with ID ${id} not found. so cann't delete category.`);
        }
        await this.categoryModel.destroy({ where: { id } });
        return `category sucessfully deleted`;
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CATEGORY_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], CategoryService);
//# sourceMappingURL=category.service.js.map
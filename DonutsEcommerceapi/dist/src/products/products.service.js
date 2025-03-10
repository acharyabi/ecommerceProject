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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const sequelize_1 = require("sequelize");
const category_entity_1 = require("../category/entities/category.entity");
const product_slider_image_entity_1 = require("../product-slider-image/entities/product-slider-image.entity");
const constants_1 = require("../../utils/constants");
let ProductsService = class ProductsService {
    constructor(productModel, categoryModel) {
        this.productModel = productModel;
        this.categoryModel = categoryModel;
    }
    async create(createProductDto, dataBuffer, imagename) {
        const timeStamp = Date.now();
        const directoryName = path.join(__dirname, '..', '..', '..', 'imageUploads');
        const imageFileName = `${timeStamp}-${imagename}`;
        const imagePath = path.join(directoryName, imageFileName);
        fs.writeFileSync(imagePath, dataBuffer);
        const imageUrl = `http://localhost:3001/imageUploads/${imagePath}`;
        const productData = { ...createProductDto, image: imageUrl };
        const product = await this.productModel.create(productData);
        if (createProductDto.categoryIds &&
            createProductDto.categoryIds.length > 0) {
            const categories = await this.categoryModel.findAll({
                where: { id: createProductDto.categoryIds },
            });
            await product.$set('categories', categories);
        }
        return product;
    }
    async findAll(categoryIdsArray) {
        if (!categoryIdsArray || categoryIdsArray.length === 0) {
            const allProduct = await this.productModel.findAll({
                include: [category_entity_1.Category, product_slider_image_entity_1.ProductSliderImage],
            });
            if (!allProduct) {
                throw new common_1.InternalServerErrorException('Error fetching Products');
            }
            return allProduct;
        }
        return this.productModel.findAll({
            include: [
                {
                    model: category_entity_1.Category,
                    where: {
                        id: {
                            [sequelize_1.Op.in]: categoryIdsArray,
                        },
                    },
                },
            ],
        });
    }
    async findOne(id) {
        const product = await this.productModel.findByPk(id, {
            include: [category_entity_1.Category, product_slider_image_entity_1.ProductSliderImage],
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
    async update(id, updateProductDto, dataBuffer, imagename) {
        const timeStamp = Date.now();
        const directoryName = path.join(__dirname, '..', '..', '..', 'imageUploads');
        const imageFileName = `${timeStamp}-${imagename}`;
        const imagePath = path.join(directoryName, imageFileName);
        fs.writeFileSync(imagePath, dataBuffer);
        const imageUrl = `http://localhost:3001/imageUploads/${imagename}`;
        const productData = { ...updateProductDto, image: imageUrl };
        const product = await this.productModel.findOne({
            where: { id },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        await this.productModel.update(productData, { where: { id } });
        if (updateProductDto.categoryIds) {
            const categories = await category_entity_1.Category.findAll({
                where: { id: updateProductDto.categoryIds },
            });
            await product.$set('categories', categories);
        }
        return this.productModel.findOne({ where: { id } });
    }
    async remove(id) {
        const product = await this.productModel.findOne({
            where: { id },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found. so can't be deleted`);
        }
        await this.productModel.destroy({ where: { id } });
        return 'Product is sucessfully deleted ';
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.PRODUCT_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.CATEGORY_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object])
], ProductsService);
//# sourceMappingURL=products.service.js.map
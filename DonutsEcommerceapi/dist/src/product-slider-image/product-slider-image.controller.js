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
exports.ProductSliderImageController = void 0;
const common_1 = require("@nestjs/common");
const product_slider_image_service_1 = require("./product-slider-image.service");
const create_product_slider_image_dto_1 = require("./dto/create-product-slider-image.dto");
const update_product_slider_image_dto_1 = require("./dto/update-product-slider-image.dto");
const jwt_auth_gaurd_1 = require("../auth/jwt-auth.gaurd");
const platform_express_1 = require("@nestjs/platform-express");
let ProductSliderImageController = class ProductSliderImageController {
    constructor(productSliderImageService) {
        this.productSliderImageService = productSliderImageService;
    }
    create(createProductSliderImageDto, image) {
        return this.productSliderImageService.create(createProductSliderImageDto, image.buffer, image.originalname);
    }
    findAll() {
        return this.productSliderImageService.findAll();
    }
    findOne(id) {
        return this.productSliderImageService.findOne(+id);
    }
    update(id, updateProductSliderImageDto) {
        return this.productSliderImageService.update(+id, updateProductSliderImageDto);
    }
    remove(id) {
        return this.productSliderImageService.remove(+id);
    }
};
exports.ProductSliderImageController = ProductSliderImageController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_slider_image_dto_1.CreateProductSliderImageDto, Object]),
    __metadata("design:returntype", void 0)
], ProductSliderImageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductSliderImageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductSliderImageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_slider_image_dto_1.UpdateProductSliderImageDto]),
    __metadata("design:returntype", void 0)
], ProductSliderImageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductSliderImageController.prototype, "remove", null);
exports.ProductSliderImageController = ProductSliderImageController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGuard),
    (0, common_1.Controller)('product-slider-image'),
    __metadata("design:paramtypes", [product_slider_image_service_1.ProductSliderImageService])
], ProductSliderImageController);
//# sourceMappingURL=product-slider-image.controller.js.map
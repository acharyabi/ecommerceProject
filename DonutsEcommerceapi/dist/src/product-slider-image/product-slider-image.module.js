"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSliderImageModule = void 0;
const common_1 = require("@nestjs/common");
const product_slider_image_service_1 = require("./product-slider-image.service");
const product_slider_image_controller_1 = require("./product-slider-image.controller");
const product_slider_image_provider_1 = require("./product-slider-image.provider");
const sequelize_1 = require("@nestjs/sequelize");
const product_slider_image_entity_1 = require("./entities/product-slider-image.entity");
let ProductSliderImageModule = class ProductSliderImageModule {
};
exports.ProductSliderImageModule = ProductSliderImageModule;
exports.ProductSliderImageModule = ProductSliderImageModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([product_slider_image_entity_1.ProductSliderImage])],
        controllers: [product_slider_image_controller_1.ProductSliderImageController],
        providers: [product_slider_image_service_1.ProductSliderImageService, ...product_slider_image_provider_1.productSliderImageProvider],
    })
], ProductSliderImageModule);
//# sourceMappingURL=product-slider-image.module.js.map
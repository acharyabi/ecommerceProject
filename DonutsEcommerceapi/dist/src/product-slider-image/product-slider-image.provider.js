"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSliderImageProvider = void 0;
const constants_1 = require("../../utils/constants");
const product_slider_image_entity_1 = require("./entities/product-slider-image.entity");
exports.productSliderImageProvider = [
    {
        provide: constants_1.PRODUCT_IMAGE_SLIDER,
        useValue: product_slider_image_entity_1.ProductSliderImage,
    },
];
//# sourceMappingURL=product-slider-image.provider.js.map
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
exports.ProductSliderImageService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const constants_1 = require("../../utils/constants");
let ProductSliderImageService = class ProductSliderImageService {
    constructor(sliderModel) {
        this.sliderModel = sliderModel;
    }
    async create(createProductSliderImageDto, dataBuffer, imagename) {
        const timeStamp = Date.now();
        const directoryName = path.join(__dirname, '..', '..', '..', 'imageUploads');
        if (!fs.existsSync(directoryName)) {
            fs.mkdirSync(directoryName, { recursive: true });
        }
        const imageFileName = `${timeStamp}-${imagename}`;
        const imagePath = path.join(directoryName, imageFileName);
        fs.writeFileSync(imagePath, dataBuffer);
        const apiUrl = process.env.API_URL || 'http://localhost:3001';
        const imageUrl = `${apiUrl}/imageUploads/${imageFileName}`;
        const sliderData = {
            ...createProductSliderImageDto,
            image: imageUrl,
        };
        const sliderImage = await this.sliderModel.create(sliderData);
        return sliderImage;
    }
    async findAll() {
        const allImage = await this.sliderModel.findAll();
        return allImage;
    }
    async findOne(id) {
        const singleImage = await this.sliderModel.findOne({ where: { id } });
        if (!singleImage) {
            throw new common_1.BadRequestException(`image with id${id} don't exists`);
        }
        return singleImage;
    }
    async update(id, updateProductSliderImageDto) {
        const singleImage = await this.sliderModel.findOne({ where: { id } });
        if (!singleImage) {
            throw new common_1.BadRequestException(`image with id${id} don't exists so can't be updated`);
        }
        await this.sliderModel.update(updateProductSliderImageDto, {
            where: { id },
        });
        return this.sliderModel.findOne({ where: { id } });
    }
    async remove(id) {
        const singleImage = await this.sliderModel.findOne({ where: { id } });
        if (!singleImage) {
            throw new common_1.BadRequestException(`image with id${id} don't exists so can't be deleted`);
        }
        await this.sliderModel.destroy({ where: { id } });
        return `Image deleted successfully`;
    }
};
exports.ProductSliderImageService = ProductSliderImageService;
exports.ProductSliderImageService = ProductSliderImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.PRODUCT_IMAGE_SLIDER)),
    __metadata("design:paramtypes", [Object])
], ProductSliderImageService);
//# sourceMappingURL=product-slider-image.service.js.map
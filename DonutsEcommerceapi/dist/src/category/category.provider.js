"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryProvider = void 0;
const constants_1 = require("../../utils/constants");
const category_entity_1 = require("./entities/category.entity");
exports.categoryProvider = [
    {
        provide: constants_1.CATEGORY_REPOSITORY,
        useValue: category_entity_1.Category,
    },
];
//# sourceMappingURL=category.provider.js.map
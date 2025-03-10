"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminProvider = void 0;
const constants_1 = require("../../utils/constants");
const admin_entity_1 = require("./entities/admin.entity");
exports.adminProvider = [
    {
        provide: constants_1.ADMIN_REPOSITORY,
        useValue: admin_entity_1.Admin,
    },
];
//# sourceMappingURL=admins.provider.js.map
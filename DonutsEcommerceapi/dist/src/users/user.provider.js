"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProvider = void 0;
const constants_1 = require("../../utils/constants");
const user_entity_1 = require("./entities/user.entity");
exports.userProvider = [
    {
        provide: constants_1.USER_REPOSITORY,
        useValue: user_entity_1.User,
    },
];
//# sourceMappingURL=user.provider.js.map
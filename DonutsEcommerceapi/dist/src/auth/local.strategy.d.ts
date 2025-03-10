import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<{
        id: number;
        email: string;
        createdAt?: Date | any;
        updatedAt?: Date | any;
        deletedAt?: Date | any;
        version?: number | any;
        _attributes: import("../admins/entities/admin.entity").Admin;
        dataValues: import("../admins/entities/admin.entity").Admin;
        _creationAttributes: import("../admins/entities/admin.entity").Admin;
        isNewRecord: boolean;
        sequelize: import("sequelize").Sequelize;
        _model: import("sequelize").Model<import("../admins/entities/admin.entity").Admin, import("../admins/entities/admin.entity").Admin>;
    }>;
}
export {};

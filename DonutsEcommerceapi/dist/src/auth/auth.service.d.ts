import { JwtService } from '@nestjs/jwt';
import { Admin } from 'src/admins/entities/admin.entity';
export declare class AuthService {
    private readonly adminModel;
    private jwtService;
    constructor(adminModel: typeof Admin, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        createdAt?: Date | any;
        updatedAt?: Date | any;
        deletedAt?: Date | any;
        version?: number | any;
        _attributes: Admin;
        dataValues: Admin;
        _creationAttributes: Admin;
        isNewRecord: boolean;
        sequelize: import("sequelize").Sequelize;
        _model: import("sequelize").Model<Admin, Admin>;
    }>;
    login(user: Admin): Promise<{
        access_token: string;
    }>;
}

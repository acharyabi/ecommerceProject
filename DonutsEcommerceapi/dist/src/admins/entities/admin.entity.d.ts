import { Model } from 'sequelize-typescript';
export declare class Admin extends Model<Admin> {
    id: number;
    email: string;
    password: string;
}

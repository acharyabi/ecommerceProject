import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
export declare class AdminsService {
    private readonly adminModel;
    constructor(adminModel: typeof Admin);
    create(createAdminDto: CreateAdminDto): Promise<string>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAdminDto: UpdateAdminDto): string;
    remove(id: number): string;
}

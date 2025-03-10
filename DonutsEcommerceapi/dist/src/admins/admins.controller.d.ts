import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminsController {
    private readonly adminsService;
    constructor(adminsService: AdminsService);
    create(createAdminDto: CreateAdminDto): Promise<string>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAdminDto: UpdateAdminDto): string;
    remove(id: string): string;
}

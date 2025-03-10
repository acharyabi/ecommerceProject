import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    create(createCustomerDto: CreateCustomerDto): Promise<import("./entities/customer.entity").Customer>;
    findAll(): Promise<import("./entities/customer.entity").Customer[]>;
    findOne(id: string): string;
    update(id: string, updateCustomerDto: UpdateCustomerDto): string;
    remove(id: string): Promise<string>;
}

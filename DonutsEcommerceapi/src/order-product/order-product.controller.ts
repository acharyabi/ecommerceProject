import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';

/**
 * Controller responsible for handling order-product relationships
 * Provides REST API endpoints for managing associations between orders and products
 * All endpoints are protected with JWT authentication
 */
@UseGuards(JwtAuthGuard)
@Controller('order-product')
export class OrderProductController {
  /**
   * Constructor for OrderProductController
   * @param orderProductService - Service for handling order-product relationship operations
   */
  constructor(private readonly orderProductService: OrderProductService) {}

  /**
   * Creates a new order-product association
   * @param createOrderProductDto - DTO containing order-product relationship data
   * @returns Newly created OrderProduct entity
   */
  @Post()
  create(@Body() createOrderProductDto: CreateOrderProductDto) {
    return this.orderProductService.create(createOrderProductDto);
  }

  /**
   * Retrieves all order-product associations
   * @returns Array of all OrderProduct entities
   */
  @Get()
  findAll() {
    return this.orderProductService.findAll();
  }

  /**
   * Retrieves a single order-product association by ID
   * @param id - The ID of the association to find
   * @returns The found OrderProduct entity
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderProductService.findOne(+id);
  }

  /**
   * Updates an existing order-product association
   * @param id - The ID of the association to update
   * @param updateOrderProductDto - DTO containing updated relationship data
   * @returns The updated OrderProduct entity
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderProductDto: UpdateOrderProductDto,
  ) {
    return this.orderProductService.update(+id, updateOrderProductDto);
  }

  /**
   * Removes an order-product association by ID
   * @param id - The ID of the association to remove
   * @returns Success message after deletion
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderProductService.remove(+id);
  }
}

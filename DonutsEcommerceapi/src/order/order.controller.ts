import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';

/**
 * Controller responsible for handling order-related endpoints
 * Provides REST API endpoints for CRUD operations on orders
 * All endpoints are protected with JWT authentication
 */
@UseGuards(JwtAuthGuard)
@Controller('order')
export class OrderController {
  /**
   * Constructor for OrderController
   * @param orderService - Service for handling order operations
   */
  constructor(private readonly orderService: OrderService) {}

  /**
   * Creates a new order
   * @param createOrderDto - DTO containing order data
   * @returns Newly created Order entity
   */
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  /**
   * Retrieves all orders
   * @returns Array of all Order entities
   */
  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  /**
   * Retrieves a single order by ID
   * @param id - The ID of the order to find
   * @returns The found Order entity
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  /**
   * Updates an existing order
   * @param id - The ID of the order to update
   * @param updateOrderDto - DTO containing updated order data
   * @returns The updated Order entity
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  /**
   * Removes an order by ID
   * @param id - The ID of the order to remove
   * @returns Success message after deletion
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}

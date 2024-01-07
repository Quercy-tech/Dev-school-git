import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CustomersService } from './customers.service';
import {OrdersService} from "../orders/orders.service";
import {Prisma} from "@prisma/client";
import {ForbiddenException} from "../forbidden.exception";

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createProductDto: Prisma.customersCreateInput) {
    return this.customersService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id/orders')
  findOne(@Param('id') id: string) {
    try {
    return this.customersService.getOrdersByCustomerId(+id);
      } catch (error) {
      throw new HttpException("Employee with such id not found", 404)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Prisma.ordersUpdateInput) {
    return this.customersService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}

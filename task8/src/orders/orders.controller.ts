import {Controller, Get, Post, Body, Patch, Param, Delete, HttpException} from '@nestjs/common';
import { OrdersService } from './orders.service';
import {Prisma} from "@prisma/client";
import {EntityExistsPipe} from "../../Pipes/EntityExistsPipe";

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createProductDto: Prisma.ordersCreateInput) {
    return this.ordersService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',EntityExistsPipe) id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Prisma.ordersUpdateInput) {
    return this.ordersService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
   try{ return this.ordersService.remove(+id);}  catch (err) {
    throw new HttpException("No such product found", 404)
  }
  }
}

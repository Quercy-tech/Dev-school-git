import {Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpException} from '@nestjs/common';
import { ProductsService } from './products.service';
import {Prisma} from "@prisma/client";
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()

  create(@Body() createProductDto: Prisma.ProductsCreateInput) {
    try {
      return this.productsService.create(createProductDto);
    } catch (err) {
      throw new HttpException("Invalid product category", 403)
    }
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try{return this.productsService.findOne(+id);
    } catch (err) {
      throw new HttpException("No such product found", 404)
    }

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Prisma.ProductsUpdateInput) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}

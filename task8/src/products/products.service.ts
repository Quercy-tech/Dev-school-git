import {HttpException, Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database/database.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {
  }
  async create(createProductDto: Prisma.ProductsCreateInput) {
    try {
      const product = await this.databaseService.products.create({data: createProductDto})
      return product

    } catch (err) {
      throw new HttpException("Invalid product category", 403)
    }
  }

  findAll() {
    return this.databaseService.products.findMany({});
  }


  async findOne(id: number) {
    const list = await this.databaseService.products.findUnique({
      where: {
        id,
      }

    });
if (!list){
  throw new HttpException("No such product found", 404)
}
      return list

  }

  async update(id: number, updateProductDto: Prisma.ProductsUpdateInput) {
    return this.databaseService.products.update({
      where: {
        id,
      },
      data: updateProductDto
    });
  }

  async remove(id: number) {
    return this.databaseService.products.delete({
      where: {
        id,
      }
    });
  }
}

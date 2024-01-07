import {HttpException, Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database/database.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class OrdersService {
  constructor(private readonly databaseService: DatabaseService) {
  }
  async create(createProductDto: Prisma.ordersCreateInput) {
    return this.databaseService.orders.create({data: createProductDto})
  }

  async findAll() {
    return this.databaseService.orders.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.orders.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateProductDto: Prisma.ordersUpdateInput) {
    return this.databaseService.orders.update({
      where: {
        id,
      },
      data: updateProductDto
    });
  }

  async remove(id: number) {
    try {
      const order = await this.databaseService.orders.delete({
        where: {
          id,
        }
      });
      return order
    } catch (err) {
      throw new HttpException("Order with such id not found", 404)
    }

  }

}


import {HttpException, Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database/database.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class CustomersService {
  constructor(private readonly databaseService: DatabaseService) {
  }
  async create(createProductDto: Prisma.customersCreateInput) {
    return this.databaseService.customers.create({data: createProductDto})
  }

 findAll() {
    return  this.databaseService.customers.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.customers.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateProductDto: Prisma.ordersUpdateInput) {
    return this.databaseService.customers.update({
      where: {
        id,
      },
      data: updateProductDto
    });
  }

  async remove(id: number) {
    return this.databaseService.customers.delete({
      where: {
        id,
      }
    });
  }

  async getOrdersByCustomerId(customerId: number) {

      const customers = await this.databaseService.orders.findMany({
        where: {
          id: customerId,
        }
      });


    if (customers.length == 0) {
      throw new HttpException("Employee with such id not found", 404)
    }

    return customers
  }
}

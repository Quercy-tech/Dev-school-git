import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../prisma/prisma.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class CustomersService {

  constructor(private readonly databaseService: DatabaseService) {
  }
  async create(createCustomerDto: Prisma.customersCreateInput) {
    return this.databaseService.customers.create({data: createCustomerDto})
  }

  async findAll() {
    return this.databaseService.customers.findMany({})
  }

  async findOne(id: number) {
    return this.databaseService.customers.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateCustomerDto: Prisma.customersUpdateInput) {
    return this.databaseService.customers.update({
      where: {
        id,
      },
      data: updateCustomerDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.customers.delete({
      where: {
        id,
      }
    })
  }
}

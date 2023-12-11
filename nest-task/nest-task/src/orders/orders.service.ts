import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../prisma/prisma.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class OrdersService {

  constructor(private readonly EmployeeService: DatabaseService) {
  }
  async create(createOrdersDto: Prisma.ordersCreateInput) {
    return this.EmployeeService.orders.create({data: createOrdersDto})
  }

  async findAll() {
    return this.EmployeeService.orders.findMany({})
  }

  async findOne(id: number) {
    return this.EmployeeService.orders.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateOrdersDto: Prisma.employeesUpdateInput) {
    return this.EmployeeService.employees.update({
      where: {
        id,
      },
      data: updateOrdersDto,
    })
  }
  async remove(id: number) {
    return this.EmployeeService.orders.delete({
      where: {
        id,
      }
    })
  }
}

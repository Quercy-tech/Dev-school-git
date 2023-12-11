import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../prisma/prisma.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class EmployeesService {

  constructor(private readonly EmployeeService: DatabaseService) {
  }
  async create(createEmployeesDto: Prisma.employeesCreateInput) {
    return this.EmployeeService.employees.create({data: createEmployeesDto})
  }

  async findAll() {
    return this.EmployeeService.employees.findMany({})
  }

  async findOne(id: number) {
    return this.EmployeeService.employees.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateEmployeesDto: Prisma.employeesUpdateInput) {
    return this.EmployeeService.employees.update({
      where: {
        id,
      },
      data: updateEmployeesDto,
    })
  }

  async remove(id: number) {
    return this.EmployeeService.employees.delete({
      where: {
        id,
      }
    })
  }
}

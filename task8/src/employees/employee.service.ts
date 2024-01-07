import {HttpException, Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database/database.service";
import {Prisma} from "@prisma/client";
@Injectable()
export class EmployeeService {

  constructor(private readonly databaseService: DatabaseService) {
  }
  async update(id: number, updateProductDto: Prisma.employeesUpdateInput) {
    try {
      const employee = await this.databaseService.employees.update({
            where: {
              id,
            },

            data: updateProductDto
          }
      );
      return employee
    } catch (err) {
      throw new HttpException("Employee with such id not found", 404)
    }
  }

}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException, HttpException
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import {Prisma} from "@prisma/client";
import {ForbiddenException} from "../forbidden.exception";

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Prisma.employeesUpdateInput) {
     try{return this.employeeService.update(+id, updateProductDto);} catch (err) {
       throw new HttpException("Employee with such id not found", 404)
     }

  }
}

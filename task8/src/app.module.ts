import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from "./database/database/database.module";
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeeModule } from './employees/employee.module';

@Module({
  imports: [DatabaseModule, ProductsModule, OrdersModule, CustomersModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

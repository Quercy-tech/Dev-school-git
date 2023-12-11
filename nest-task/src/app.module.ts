import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {DatabaseModule} from "./database/database.module";
import {CustomersModule} from "./customers/customers.module";
import {EmployeesModule} from "./employees/employees.module";
import {OrdersModule} from "./orders/orders.module";

@Module({
    imports: [DatabaseModule, CustomersModule, EmployeesModule, OrdersModule],
    controllers: [DatabaseModule],
    providers: [DatabaseModule],
})

export class AppModule{}
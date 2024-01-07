import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import {OrdersService} from "../src/orders/orders.service";

@Injectable()
export class EntityExistsPipe implements PipeTransform {
    constructor(private readonly ordersService: OrdersService) {}

    async transform(id: number) {
        const item = await this.ordersService.findOne(+id);
        if (!item) {
            throw new NotFoundException('Order not found');
        }
        return +id;
    }
}
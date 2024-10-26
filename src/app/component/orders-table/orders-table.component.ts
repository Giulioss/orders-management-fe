import { Component } from '@angular/core';
import {OrderClient} from '../../common/clients/http-clients/order.client';
import {OrderResponse} from '../../common/clients/responses/order.response';
import {OrderFilterRequest} from '../../common/clients/requests/order-filter.request';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css'
})
export class OrdersTableComponent {

  ordersList: OrderResponse[] = [];

  constructor(private readonly orderClient: OrderClient) {
    this.getTableOrders();
  }

  getTableOrders(page: number = 0, pageSize: number = 10) {
    const request: OrderFilterRequest = {
      page: page,
      pageSize: pageSize
    }

    this.orderClient.getTableOrders(request).subscribe({
      next: (orderList) => this.ordersList = orderList,
      error: (err) => console.error(err)
    });
  }

}

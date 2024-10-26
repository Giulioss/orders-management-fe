import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {OrderFilterRequest} from '../requests/order-filter.request';
import {OrderResponse} from '../responses/order.response';

@Injectable({
  providedIn: "root",
})
export class OrderClient {

  constructor(private readonly http: HttpClient) {}

  getTableOrders(request: OrderFilterRequest) {
    return this.http.post<OrderResponse>("/api/order/find", request);
  }
}

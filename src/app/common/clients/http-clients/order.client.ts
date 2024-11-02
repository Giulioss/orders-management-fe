import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OrdersTableResponse} from '../responses/orders-table.response';

@Injectable({
  providedIn: "root",
})
export class OrderClient {

  constructor(private readonly http: HttpClient) {}

  getTableOrders(pageNumber: number, pageSize: number, sortBy: string, direction: string): Observable<OrdersTableResponse> {
    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString());
    if (sortBy) params = params.set('sortBy', sortBy);
    if (direction) params = params.set('direction', direction);

    return this.http.get<OrdersTableResponse>("/api/order/find", {params});
  }
}

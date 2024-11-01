import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {OrderFilterRequest} from '../requests/order-filter.request';
import {OrderResponse} from '../responses/order.response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class OrderClient {

  constructor(private readonly http: HttpClient) {}

  getTableOrders(pageNumber: number, pageSize: number, sortBy: string, direction: string): Observable<any> {
    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString());
    if (sortBy) params = params.set('sortBy', sortBy);
    if (direction) params = params.set('direction', direction);

    return this.http.get<any>("/api/order/find", {params});
  }
}

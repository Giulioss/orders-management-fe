import {OrderResponse} from './order.response';

export interface OrdersTableResponse {
  totalElements: number;
  orderResponseList: OrderResponse[];
}

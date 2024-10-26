import {OrderStatusEnum} from '../../enums/order-status.enum';

export interface OrderResponse {
  id: number;
  orderStatus: OrderStatusEnum;
  startDateTime: string;
  endDateTime: string;
  note: string;
  numbersOfStep: number
}

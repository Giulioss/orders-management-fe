import {OrderStatusEnum} from '../../enums/order-status.enum';

export interface OrderFilterRequest {
  page?: number;
  pageSize?: number;
  orderStatus?: OrderStatusEnum;
}

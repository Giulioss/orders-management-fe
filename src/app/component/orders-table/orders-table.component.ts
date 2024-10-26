import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {OrderClient} from '../../common/clients/http-clients/order.client';
import {OrderFilterRequest} from '../../common/clients/requests/order-filter.request';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource, MatTextColumn
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortHeader, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTextColumn,
    MatPaginator,
    MatSortHeader,
    MatSortModule
  ],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css'
})
export class OrdersTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'note', 'orderStatus'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private readonly orderClient: OrderClient) {
    this.getTableOrders();
  }

  getTableOrders(page: number = 0, pageSize: number = 10) {
    const request: OrderFilterRequest = {
      page: page,
      pageSize: pageSize
    }

    this.orderClient.getTableOrders(request).subscribe({
      next: (orderList) => this.dataSource = new MatTableDataSource(orderList),
      error: (err) => console.error(err)
    });
  }

}

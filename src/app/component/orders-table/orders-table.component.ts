import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {OrderClient} from '../../common/clients/http-clients/order.client';
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
import {OrderResponse} from '../../common/clients/responses/order.response';

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
  dataSource = new MatTableDataSource<OrderResponse>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.sort.active = "id"
    this.sort.direction = "desc"

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getTableOrders()

    this.paginator.page.subscribe(() => {
      this.getTableOrders();
    });

    this.sort.sortChange.subscribe(() => {
      this.getTableOrders();
    });
  }

  constructor(private readonly orderClient: OrderClient) {}

  getTableOrders() {
    this.orderClient.getTableOrders(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction).subscribe({
      next: (orderList) => {
        this.dataSource = new MatTableDataSource<OrderResponse>(orderList.orderResponseList);

        this.paginator.length = orderList.totalElement;
      },
      error: (err) => console.error(err)
    });
  }

}

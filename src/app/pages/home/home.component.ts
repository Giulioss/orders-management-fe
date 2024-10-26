import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {OrdersTableComponent} from '../../component/orders-table/orders-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    OrdersTableComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './component/header/header.component';
import {SpinnerService} from './common/services/spinner.service';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatProgressSpinner],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(protected readonly spinnerService: SpinnerService) {
  }
}

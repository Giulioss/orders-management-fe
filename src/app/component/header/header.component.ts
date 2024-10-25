import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {TokenService} from '../../common/services/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isAuthenticated = false;

  // TODO Giulio Galletti 25/10/2024: Nicco, trasformalo in un signal che ti piacciono tanto
  constructor(protected readonly tokenService: TokenService) {
    this.tokenService.isAuthenticated().subscribe({
      next: (isValid) => this.isAuthenticated = isValid,
      error: (err) => console.error(err)
    })
  }

}

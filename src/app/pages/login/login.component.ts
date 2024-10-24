import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {AuthClient} from '../../common/clients/http-clients/auth.client';
import {AuthRequest} from '../../common/clients/requests/auth.request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatCard,
    ReactiveFormsModule,
    MatCardHeader,
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup([]);

  constructor(private readonly fb: FormBuilder,
              private readonly loginClient: AuthClient) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  protected login() {
    const authRequest: AuthRequest = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.loginClient.login(authRequest);
  }
}

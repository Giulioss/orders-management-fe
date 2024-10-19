import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: "root",
})
export class LoginClient {

  constructor(private readonly http: HttpClient) {}

  login() {
    return this.http.get<void>("login").subscribe({
      next: () => console.log("ciao"),
      error: err => console.error(err)
    })
  }
}

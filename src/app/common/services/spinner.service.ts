import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loadingSignal: WritableSignal<boolean> = signal(false);

  constructor() { }

  loadingOn() {
    this.loadingSignal.set(true);
  }

  loadingOff() {
    this.loadingSignal.set(false);
  }
}

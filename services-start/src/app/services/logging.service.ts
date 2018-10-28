import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggingService {

  constructor() { }

  logStatusChanged(status: string) {
    console.log('A server status has changed, new status: ' + status);
  }
}

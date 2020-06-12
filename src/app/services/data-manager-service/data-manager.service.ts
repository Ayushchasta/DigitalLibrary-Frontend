import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  serverHostname : string = "http://localhost:8000";

  constructor() { }

  getServerHostname () {
    return this.serverHostname;
  }

}

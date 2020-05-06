import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherserviceService {

  constructor() { }

  getOtherText() {
    return "Text From Other Service";
  }
}

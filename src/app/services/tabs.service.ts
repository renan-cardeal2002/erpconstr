import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private tabSubject = new Subject<any>();
  constructor() {}

  onTabAction() {
    return this.tabSubject.asObservable();
  }

  newTab(data: any) {
    this.tabSubject.next({ action: 'new', data: data });
  }
}

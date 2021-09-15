import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewportWidthService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  monitorWidth(): Observable<BreakpointState> {
    return this.breakpointObserver.observe([
      '(max-width: 997px)'
    ]);
  }
}

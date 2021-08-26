import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    //nav slide in from top to bottom
    trigger('openClose', [
      state('open', style({
        'height': '100vh',
        'opacity': 1,
      })),
      state('closed', style({
        'height': 0,
        'opacity': 0,
      })),
      transition('open <=> closed', [
        animate('0.3s')
      ]),
    ]),
  ]
})

export class MenuComponent implements OnInit {
  //informs if mobile menu is open
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  // open/close nav
  changeNavState() {
    this.isOpen = !this.isOpen;
  }

}

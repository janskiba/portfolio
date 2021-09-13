import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

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

    trigger('animateTop', [
      state('hamburger', style({
        'top': 0,
        'width': '1rem',
      })),
      state('x', style({
        'top': '22px',
        'right': '0',
        'width': '47px',
        'transform': 'rotate(-45deg)',
      })),
      transition('hamburger <=> x', [
        animate('0.3s')
      ]),
    ]),
  ]
})

export class MenuComponent implements OnInit {
  //informs if mobile menu is open
  isOpen = false;

  navLinks: Link[] = [
    { href: '#home', name: 'home' },
    { href: '#about', name: 'about' },
    { href: '#portfolio', name: 'portfolio' },
    { href: '#contact', name: 'contact' }];

  nav = document.querySelector('.menu');
  body = document.querySelector('body');

  constructor() { }

  ngOnInit(): void {
  }

  // open/close nav
  changeNavState() {
    this.isOpen = !this.isOpen;
    this.body?.classList.toggle('hidden');
  }

  handleNav() {
    this.changeNavState();
    //hide nav to prevent coverup of a section title
    setTimeout(() => {
      this.nav?.classList.add('nav-up');
    }, 400);
  }
}

interface Link {
  href: string,
  name: string;
}

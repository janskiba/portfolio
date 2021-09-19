import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewportWidthService } from '../viewport-width.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  //infroms parent component if menu os open to prevent hiding navbar on open menu
  @Output() isOpenEmitter = new EventEmitter<boolean>();

  //informs if mobile menu is open
  isOpen: boolean = false;

  //state of screen size
  isSmallScreen: boolean = false;

  navLinks: Link[] = [
    { href: '#home', name: 'home' },
    { href: '#about', name: 'about' },
    { href: '#portfolio', name: 'portfolio' },
    { href: '#contact', name: 'contact' }];

  nav = document.querySelector('.menu');
  body = document.querySelector('body');

  constructor(private viewportWidthService: ViewportWidthService) {
  }

  ngOnInit(): void {
    //observe width of the vewport and change state if is width <= 997px
    this.viewportWidthService.monitorWidth().subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
        console.log(this.isSmallScreen);
      } else {
        this.isSmallScreen = false;
      }
    });
  }

  // open/close nav
  changeNavState() {
    this.isOpen = !this.isOpen;
    this.body?.classList.toggle('hidden');
    this.isOpenEmitter.emit(this.isOpen);
  }

  handleNav(linkName: string, isMobile: boolean) {
    if (isMobile)
      this.changeNavState();
    //hide nav to prevent coverup of a section title
    if (linkName !== 'home')
      setTimeout(() => {
        this.nav?.classList.add('nav-up');
      }, 400);
  }
}

interface Link {
  href: string,
  name: string;
}

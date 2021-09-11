import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  constructor() { }

  lastKnownScrollPosition: number = 0;

  ngOnInit() {
    const nav = document.querySelector('.menu');

    document.addEventListener('scroll', (e) => {
      if (window.scrollY !== 0)
        nav?.classList.remove('on-top');
      else {
        nav?.classList.add('on-top');
      }

      if (this.lastKnownScrollPosition < window.scrollY) {
        nav?.classList.add('nav-up');
      }
      else {
        nav?.classList.remove('nav-up');
      }
      this.lastKnownScrollPosition = window.scrollY;
    });
  }

  scroll() {
    const about = document.getElementById('about');
    about?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });


  }
}

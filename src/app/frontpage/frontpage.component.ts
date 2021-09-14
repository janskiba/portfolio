import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { FadeInElementsAnimationService } from '../fade-in-elements-animation.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  elementsToAnimate!: NodeListOf<Element>;


  constructor(private fadeInElementsAnimationService: FadeInElementsAnimationService) { }

  startFadeInAnimation: boolean = false;

  lastKnownScrollPosition: number = 0;

  //infroms parent component if menu os open to prevent hiding navbar on open menu
  isOpenMenuEvent!: boolean;

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.startFadeInAnimation = true;
    }, 100);
    const nav = document.querySelector('.menu');

    this.elementsToAnimate = document.querySelectorAll('.to-fade-in');
    console.log(this.elementsToAnimate);

    document.addEventListener('scroll', (e) => {
      this.fadeInElementsAnimationService.isInViewport(this.elementsToAnimate);

      if (window.scrollY !== 0)
        nav?.classList.remove('on-top');
      else {
        nav?.classList.add('on-top');
      }

      if (!this.isOpenMenuEvent && this.lastKnownScrollPosition < window.scrollY) {
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
    about?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }

  isOpenMenu(isOpen: boolean) {
    this.isOpenMenuEvent = isOpen;
  }
}

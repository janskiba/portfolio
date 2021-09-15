import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { FadeInElementsAnimationService } from '../fade-in-elements-animation.service';
import { ViewportWidthService } from '../viewport-width.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  elementsToAnimate!: NodeListOf<Element>;


  constructor(
    private fadeInElementsAnimationService: FadeInElementsAnimationService,
    private viewportWidthService: ViewportWidthService
  ) { }

  startFadeInAnimation: boolean = false;

  lastKnownScrollPosition: number = 0;

  //state of screen size
  isSmallScreen: boolean = false;

  //infroms parent component if menu os open to prevent hiding navbar on open menu
  isOpenMenuEvent!: boolean;

  ngOnInit() {
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

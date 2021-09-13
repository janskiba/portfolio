import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FadeInElementsAnimationService {

  constructor() { }

  isInViewport(element: any) {

    //The method element.getBoundingClientRect() provides the element’s position and its relative position to the viewport.
    //It returns an object that includes element’s height, width, and its distance from the top, left, bottom, and right of the viewport.
    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

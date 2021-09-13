import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FadeInElementsAnimationService {

  constructor() { }

  isInViewport(elementsToAnimate: any[]) {
    //The method element.getBoundingClientRect() provides the element’s position and its relative position to the viewport.
    //It returns an object that includes element’s height, width, and its distance from the top, left, bottom, and right of the viewport.
    elementsToAnimate.forEach(element => {
      //if (element.id == 'contact') {
      const position = element.getBoundingClientRect();

      const animate: boolean = position.top < window.innerHeight - 100 && position.bottom >= 0;

      console.log(element.id, "rect.top - rec.bottom: ", position.bottom);
      //console.log("rect.top: ", rect.top, "rect.bottom: ", rect.bottom, animate);
      if (animate)
        element.classList.add('faded-in');
      //}

    });
  }
}

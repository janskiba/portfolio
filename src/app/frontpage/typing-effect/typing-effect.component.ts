import { Component, ElementRef, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
} from '@angular/animations';
import { ViewportWidthService } from 'src/app/viewport-width.service';
@Component({
  selector: 'app-typing-effect',
  animations: [
    trigger('showHide', [
      state('show', style({
        'opacity': 1
      })),
      state('hide', style({
        'opacity': 0
      })),
    ]),
  ],
  templateUrl: './typing-effect.component.html',
  styleUrls: ['./typing-effect.component.scss'],
})
export class TypingEffectComponent implements OnInit {
  //state of screen size
  isSmallScreen: boolean = false;

  //blinking of cursor
  cursor: boolean = true;

  text: string[] = ["hi, i'm jan,", "a frontend developer"];
  typewriter_display: string[] = ["", ""];

  constructor(private el: ElementRef, private viewportWidthService: ViewportWidthService
  ) { }

  ngOnInit(): void {
    //observe width of the vewport and change state if is width <= 997px
    this.viewportWidthService.monitorWidth().subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
        (this.isSmallScreen);
      } else {
        this.isSmallScreen = false;
      }
    });
    this.startTyping(this.text[0], 0);
  }

  // adds letter by letter characters from desired text to empty string every 100ms
  // starts with frist line passed as an argument in ngOnInit
  startTyping(text: string, index: number) {

    const typeLine = () => {
      const total_length = text.length;
      let current_length = this.typewriter_display[index].length;

      if (current_length < total_length) {
        this.typewriter_display[index] += text[current_length];
        setTimeout(() => { typeLine(); }, 100);
      } else {
        this.manageTyping();
      }
    };
    typeLine();
  }

  manageTyping() {
    //if arrays are equal clear 'typewriter_display' array and start typing again
    //if not only first line is written so start typing second line
    if (this.text[0] == this.typewriter_display[0] && this.text[1] == this.typewriter_display[1]) {

      //interval of blinking cursor
      const cursorInterval = setInterval(() => {
        this.cursor = !this.cursor;
      }, 400);

      //wait start typing whole text again
      setTimeout(() => {
        //manage visibility of a cursor
        this.el.nativeElement.querySelector(".second-line span").classList.add('none');
        this.el.nativeElement.querySelector(".first-line span").classList.remove('none');

        this.typewriter_display = ["", ""];

        //stop cursor from blinking and set its visibility to true
        clearInterval(cursorInterval);
        this.cursor = true;

        setTimeout(() => {
          this.startTyping(this.text[0], 0);
        }, 500);
      }, 3000);
    }
    //when first line is done typing
    else {
      //manage visibility of a cursor
      this.el.nativeElement.querySelector(".second-line span").classList.remove('none');
      this.el.nativeElement.querySelector(".first-line span").classList.add('none');

      // call the same function with second line passed as an argument
      this.startTyping(this.text[1], 1);
    }
  }
}

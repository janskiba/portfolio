import { Component, ElementRef, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
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

  //blinking of cursor
  cursor: boolean = true;

  text: string[] = ["hi, i'm jan,", "a frontend developer"];
  typewriter_display: string[] = ["", ""];

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.animateCursor();
    this.startTyping(this.text[0], 0);
  }

  animateCursor() {
    setInterval(() => {
      this.cursor = !this.cursor;
    }, 500);
  }

  //adds letter by letter characters from desired text to empty string every 100ms
  //starts with frist line passed as an argument in ngOnInit
  startTyping(text: string, index: number) {
    const typeLine = () => {
      const total_length = text.length;
      let current_length = this.typewriter_display[index].length;

      if (current_length < total_length) {
        this.typewriter_display[index] += text[current_length];
        setTimeout(() => { typeLine(); }, 100);
      } else {
        if (this.text[0] == this.typewriter_display[0] && this.text[1] == this.typewriter_display[1]) {
          //wait 2.5 sec and start over
          setTimeout(() => {
            //manage visibility of a cursor
            this.el.nativeElement.querySelector(".second-line span").classList.add('none');
            this.el.nativeElement.querySelector(".first-line span").classList.remove('none');

            this.typewriter_display = ["", ""];
            setTimeout(() => {
              this.startTyping(this.text[0], 0);
            }, 500);
          }, 2000);
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
    };
    typeLine();
  }
}

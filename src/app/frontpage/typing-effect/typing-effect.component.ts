import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  templateUrl: './typing-effect.component.html',
  styleUrls: ['./typing-effect.component.scss'],
})
export class TypingEffectComponent implements OnInit {
  //defines if cursor is visible or not
  cursor = true;
  text = '';
  textArray = ["hi i'm jan a software developer"];

  constructor() { }

  ngOnInit(): void {
    //this.cursorBlink();
  }

  //interval of cursor blink
  cursorBlink() {
    setInterval(() => {
      this.cursor = !this.cursor;
    }, 600);
  }
}

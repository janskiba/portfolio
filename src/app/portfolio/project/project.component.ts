import { Component, Input, OnInit } from '@angular/core';
import { ViewportWidthService } from 'src/app/viewport-width.service';
import { Project } from '../projects.array';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  //state of screen size
  isSmallScreen: boolean = false;

  constructor(private viewportWidthService: ViewportWidthService) { }

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
}

import { Component, OnInit } from '@angular/core';
import { projects, Project } from "./projects.array";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projectsArray: Project[] = projects;

  constructor() { }

  ngOnInit(): void {
  }

}

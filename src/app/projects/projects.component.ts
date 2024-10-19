import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects/projects.service';
import {  NgForOf, NgIf } from '@angular/common';
import { SeeProjectComponent } from '../see-project/see-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgForOf, NgIf, SeeProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: any;
  constructor(private projectsDI: ProjectsService) {
    this.projects = projectsDI;
  }
}

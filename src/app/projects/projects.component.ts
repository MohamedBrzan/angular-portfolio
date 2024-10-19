import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects/projects.service';
import {  NgForOf, NgIf } from '@angular/common';
import { SeeProjectComponent } from '../see-project/see-project.component';
import Project from '../../interfaces/projects';

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
  state!: Project;
  // Control modal visibility
  showModal: boolean = false;

  sendProject(project: Project) {
    this.state = project;
  }

  // Method to open the modal
  openModal() {
    this.showModal = true;
    console.log('model open')
    console.log(this.state)
  }

  // Method called when the modal is closed
  handleClose() {
    this.showModal = false;
    console.log('model closed')
  }
}

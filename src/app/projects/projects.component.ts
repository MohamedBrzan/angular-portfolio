import { Component, OnInit } from '@angular/core';
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
export class ProjectsComponent implements OnInit {
  loading: boolean = true;
  projects: any;
  constructor(private projectsDI: ProjectsService) {
    this.projects = projectsDI;
  }
  state!: Project;
  showModal: boolean = false;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
  sendProject(project: Project) {
    this.state = project;
  }

  openModal() {
    this.showModal = true;
  }

  handleClose() {
    this.showModal = false;
  }
}

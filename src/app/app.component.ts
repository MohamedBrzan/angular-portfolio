import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { CustomCursorComponent } from './custom-cursor/custom-cursor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from "./home/home.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ProjectsComponent,
    CustomCursorComponent,
    FontAwesomeModule,
    HomeComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {}
  loading: boolean = true;
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Simulate async data fetching
    // setTimeout(() => {
      this.loading = false; // Stop showing the loading icon when data is fetched
    // }, 1500); // Simulate a 3-second data fetching delay
  }
}

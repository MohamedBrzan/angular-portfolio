import { Location, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OffcanvasComponent } from "../offcanvas/offcanvas.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgClass, OffcanvasComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentPathname!: string;
  showOffcanvas!: boolean;
  headersLink = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.currentPathname = this.getPathname();
  }

  getPathname(): string {
    return this.location.path();
  }

  toggleShowOffcanvas() {
    this.showOffcanvas = !this.showOffcanvas;
  }
}

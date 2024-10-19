import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [HeaderComponent, NgIf, NgClass],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.scss',
})
export class OffcanvasComponent {
  @Input() showOffcanvas!: boolean;

  // Output event to notify parent when modal is closed
  @Output() onClose = new EventEmitter<void>();

  // Method to close the modal
  closeOffcanvas() {
    this.showOffcanvas = false;
    this.onClose.emit(); // Emit event to parent
  }

  // Methods to add or remove class when hovering over elements
  addHoverClass() {
    document.getElementById('inner_cursor')!.classList.add('open');
    document.getElementById('outer_cursor')!.classList.add('open');
  }

  removeHoverClass() {
    document.getElementById('inner_cursor')!.classList.remove('open');
    document.getElementById('outer_cursor')!.classList.remove('open');
  }
}

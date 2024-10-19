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

}

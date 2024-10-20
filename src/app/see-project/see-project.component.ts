import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Component,  EventEmitter,  Input, Output} from '@angular/core';
import Project from '../../interfaces/projects';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-see-project',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass, ProjectsComponent],
  templateUrl: './see-project.component.html',
  styleUrl: '../projects/projects.component.scss',
})
export class SeeProjectComponent {
  @Input() state!: Project;
  // Input to control modal visibility from parent
  @Input() showCanvas: boolean = false;

  // Output event to notify parent when modal is closed
  @Output() onClose = new EventEmitter<void>();

  // Method to close the modal
  closeCanvas() {
    this.showCanvas = false;
    this.onClose.emit(); // Emit event to parent
  }
}

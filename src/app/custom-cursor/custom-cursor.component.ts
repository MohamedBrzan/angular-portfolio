import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss',
})
export class CustomCursorComponent implements AfterViewInit {
  @ViewChild('innerCursor') innerCursor!: ElementRef;
  @ViewChild('outerCursor') outerCursor!: ElementRef;

  ngAfterViewInit(): void {
    // The logic to move the cursor will be added below
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const x = event.clientX;
    const y = event.clientY;

    // Move inner cursor
    this.innerCursor.nativeElement.style.left = `${x}px`;
    this.innerCursor.nativeElement.style.top = `${y}px`;

    // Move outer cursor
    this.outerCursor.nativeElement.style.left = `${x}px`;
    this.outerCursor.nativeElement.style.top = `${y}px`;
  }

  // Methods to add or remove class when hovering over elements
  addHoverClass() {
    this.innerCursor.nativeElement.classList.add('hovered');
    this.outerCursor.nativeElement.classList.add('hovered');
  }

  removeHoverClass() {
    this.innerCursor.nativeElement.classList.remove('hovered');
    this.outerCursor.nativeElement.classList.remove('hovered');
  }
}

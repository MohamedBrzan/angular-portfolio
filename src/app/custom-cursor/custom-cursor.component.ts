import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss',
})
export class CustomCursorComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
      const cursorElement = document.getElementById('custom-cursor');
      cursorElement!.style.left = `${event.clientX}px`;
      cursorElement!.style.top = `${event.clientY}px`;
    });
  }
}

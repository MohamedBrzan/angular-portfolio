import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  links = [
    {
      name: 'GitHub',
      url: 'https://github.com/MohamedBrzan',
      image: 'assets/github.svg',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mohamed-brzan-01966518a/',
      image: 'assets/linkedin.svg',
    },
    {
      name: 'Whatsapp',
      url: 'whatsapp://send?abid=+201113772369',
      image: 'assets/whatsapp.svg',
    },
    {
      name: 'Gmail',
      url: 'mailto:mohamedbrzan.dev@gmail.com',
      image: 'assets/gmail.svg',
    },
  ];
  langs = [
    'HTML/CSS',
    'Bootstrap',
    'Sass',
    'MUI',
    'Shadcn-UI',
    'JavaScript',
    'TypeScript',
    'React',
    'Next',
    'Angular',
    'Node',
    'Express',
    'MongoDB',
    'Websocket',
    'Jest',
    'Git',
  ];
}

import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import Experience from '../../interfaces/experiences';
import Read from '../../interfaces/read';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  experience: Experience[] = [
    {
      title: 'Software Engineer ( Full Stack )',
      image: 'assets/code.svg',
      desc: `As a Full Stack Software Engineer,
      I'm responsible for developing,
      implementing, and maintaining end-to-end web applications.
      I'm working across both front-end and back-end technologies to design efficient,
      scalable, and user-friendly software solutions. my role involve collaborating closely with cross-functional teams,
      including designers, product managers, and other engineers, to translate business requirements into technical specifications.
      I'm contribute to all phases of the development lifecycle, ensuring code quality, optimizing application performance,
      and addressing complex challenges in a fast-paced environment.`,
      date: {
        from: '2023',
        to: 'Present  ( APPOUT ITS )',
      },
      url: { name: '', link: '' },
    },
    {
      title: 'Web Developer',
      image: 'assets/code.svg',
      desc: 'As a seasoned web developer, I specialize in building robust and user-friendly web applications. My toolkit includes a mix of front-end and back-end technologies, allowing me to create seamless experiences for users.',
      date: {
        from: '2022',
        to: '2023',
      },
      url: { name: '', link: '' },
    },
    {
      title: 'Frontend Developer',
      image: 'assets/code.svg',
      desc: 'As a frontend developer, I specialize in creating engaging and responsive user interfaces. My toolkit includes a mix of front-end technologies that allow me to build seamless web experiences.',
      date: {
        from: '2021',
        to: '2022',
      },
      url: { name: '', link: '' },
    },
    // {
    //   title: 'Army Service',
    //   image: army,
    //   desc: 'In Egypt, military service is mandatory for males between the ages of 18 and 30 for one to three years, depending on their education. As an individual who joined the Egypt army for one year, I underwent basic training and specialized training, which included physical fitness, weapons training, and tactical skills. During my service, I gained valuable experience in leadership, teamwork, and discipline, which have helped me in my personal and professional life. I also had the opportunity to serve my country and contribute to its security and stability. Although military service can be challenging, it is a valuable experience that can help individuals develop important skills and qualities.',
    //   date: {
    //     from: '2020',
    //     to: '2021',
    //   },
    //   url: { name: '', link: '' },
    // },
    // {
    //   title: 'Sales Representative',
    //   image: deal,
    //   desc: 'As a sales representative with 6+ years of experience, I have developed a range of skills and qualities that have helped me succeed in my role. I have learned to actively listen to customers, identify their pain points, and offer solutions that meet their needs',
    //   date: {
    //     from: '2014',
    //     to: '2020',
    //   },
    //   url: { name: '', link: '' },
    // },
  ];
  read: Read[] = [
    {
      title: 'Rich Dad Poor Dad',
      image: 'assets/book.svg',
      desc: 'Rich Dad Poor Dad challenges conventional wisdom about money, urging readers to take control of their financial futures through education, strategic investing, and entrepreneurial pursuits.',
      date: {
        from: '',
        to: '',
      },
      url: { name: '', link: '' },
    },
  ];
  loading: boolean = true;
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Simulate async data fetching
    setTimeout(() => {
      this.loading = false; // Stop showing the loading icon when data is fetched
    }, 1000); // Simulate a 3-second data fetching delay
  }
}

import { Injectable } from '@angular/core';
import Project from '../../../interfaces/projects';



@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  data: Project[] = [
    {
      title: 'YOOM Video Chat',
      desc: 'Many designs websites here',
      about:
        'Flexible website template that can be used to create almost any kind of website imaginable',
      categories: ['frontend', 'backend'],
      image: 'assets/frontend_1.webp',
      techs: [
        'HTML',
        'CSS',
        'Bootstrap',
        'Javascript',
        'typescript',
        'react',
        'next',
        'node',
        'MUI',
        'shadcn-ui',
        'stream',
        'clerk',
      ],
      released: true,
      website: 'https://yoom-today.vercel.app',
      github: 'https://github.com/MohamedBrzan/video_chat_app',
    },
    {
      title: 'Social Media FacX Web App',
      desc: 'Many designs websites here',
      about:
        'Flexible website template that can be used to create almost any kind of website imaginable',
      categories: ['frontend', 'backend'],
      image: 'assets/face_x.webp',
      techs: [
        'HTML',
        'CSS',
        'Bootstrap',
        'Javascript',
        'typescript',
        'react',
        'next',
        'node',
        'express',
        'mongodb',
        'MUI',
        'shadcn-ui',
      ],
      released: false,
      website: 'https://facex-front.onrender.com',
      github: 'https://github.com/MohamedBrzan/FaceX_Frontend',
    },
    {
      title: 'Hippo Digital Website',
      desc: 'Many designs websites here',
      about:
        'Flexible website template that can be used to create almost any kind of website imaginable',
      categories: ['frontend', 'backend'],
      image: 'assets/hippo.webp',
      techs: [
        'HTML',
        'CSS',
        'Bootstrap',
        'Javascript',
        'typescript',
        'react',
        'next',
        'node',
        'express',
        'mongodb',
        'MUI',
        'shadcn-ui',
      ],
      released: true,
      website: 'https://hippoapp.onrender.com/',
      github: 'https://github.com/MohamedBrzan/Hippo_Digital_App',
    },
    {
      title: 'Prismic Landing Page',
      desc: `Prismic it's one of the most popular CMS sites`,
      about:
        'Flexible website template that can be used to create almost any kind of website imaginable',
      categories: ['frontend', 'backend'],
      image: 'assets/prismic.webp',
      techs: [
        'HTML',
        'CSS',
        'Bootstrap',
        'Sass',
        'Javascript',
        'next',
        'typescript',
        'prismic CMS',
        'gsap',
      ],
      released: true,
      website: 'https://prismic-lp.vercel.app/',
      github: 'https://github.com/MohamedBrzan/prismic_LP',
    },
    {
      title: 'High Point Company Website',
      desc: `High Point it's a tech solutions company for solving a tech problems`,
      about:
        'Flexible website template that can be used to create almost any kind of website imaginable',
      categories: ['frontend', 'backend'],
      image: 'assets/high_point.webp',
      techs: [
        'HTML',
        'CSS',
        'Bootstrap',
        'Sass',
        'Javascript',
        'react',
        'node',
        'express',
        'mongodb',
      ],
      released: true,
      website: 'https://hp-tech.com/',
      github: 'https://github.com/MohamedBrzan/high-point-frontend',
    },
    {
      title: 'Aram Tech Website',
      desc: 'Many designs websites here',
      about:
        'Flexible website template that can be used to create almost any kind of website imaginable',
      categories: ['frontend', 'backend'],
      image: 'assets/aram_tech.webp',
      techs: [
        'HTML',
        'CSS',
        'Bootstrap',
        'Javascript',
        'typescript',
        'react',
        'node',
        'express',
        'mongodb',
      ],
      released: true,
      website: 'https://mazeedsoft.onrender.com/',
      github: 'https://github.com/MohamedBrzan/MazeedSoft',
    },
    {
      title: 'Multipurpose Website',
      desc: 'Many designs websites here',
      about:
        'Flexible website template that can be used to create almost any kind of website imaginable',
      categories: ['frontend'],
      image: 'assets/frontend_1.webp',
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      released: true,
      website:
        'https://mohamedbrzan.github.io/multipurpose-bootstrap-template/',
      github:
        'https://github.com/MohamedBrzan/multipurpose-bootstrap-template/',
    },
    {
      title: 'Flourish E-Commerce',
      desc: 'Online platform that showcases furniture products and allows customers to purchase them online.',
      about:
        'Online platform that showcases furniture products and allows customers to purchase them online.',
      categories: ['frontend'],
      image: 'assets/frontend_2.webp',
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      released: true,
      website:
        'https://mohamedbrzan.github.io/Flourish-eCommerce-Template/index-2.html',
      github: 'https://github.com/MohamedBrzan/Flourish-eCommerce-Template',
    },
    {
      title: 'Furnitica Store',
      desc: 'Online platform that showcases furniture products and allows customers to purchase them online.',
      about:
        'Online platform that showcases furniture products and allows customers to purchase them online.',
      categories: ['frontend'],
      image: 'assets/frontend_3.webp',
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      released: true,
      website:
        'https://mohamedbrzan.github.io/Furnitica-Minimalist-Furniture/index-2.html',
      github: 'https://github.com/MohamedBrzan/Furnitica-Minimalist-Furniture',
    },
    {
      title: 'Ruby Jewelry Store',
      desc: 'Ruby is an online platform that showcases jewelry products and allows customers to purchase them online.',
      about:
        'online platform that showcases jewelry products and allows customers to purchase them online.',
      categories: ['frontend'],
      image: 'assets/frontend_4.webp',
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      released: true,
      website: 'https://mohamedbrzan.github.io/Ruby-Jewelry-Store-eCommerce/',
      github: 'https://github.com/MohamedBrzan/Ruby-Jewelry-Store-eCommerce',
    },
    {
      title: 'Stroyka Store',
      desc: 'Stroyka Tools Store, improve your work now.',
      about:
        'A tools website is an online platform that provides tools and resources for various purposes.',
      categories: ['frontend'],
      image: 'assets/frontend_5.webp',
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      released: true,
      website:
        'https://mohamedbrzan.github.io/Stroyka-Tools-Store-HTML-Template/',
      github:
        'hhttps://github.com/MohamedBrzan/Stroyka-Tools-Store-HTML-Template',
    },
    {
      title: 'Molla E-Commerce',
      desc: 'Many styles and designs for E-Commerce websites.',
      about:
        'Flexible website template that can be used to create almost any kind of website imaginable',
      categories: ['frontend'],
      image: 'assets/frontend_6.webp',
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      released: true,
      website: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/',
      github: 'https://github.com/MohamedBrzan/molla-eCommerce-html-template',
    },
    // {
    // 	title: 'E-CommerCe',
    // 	desc: "All what you need you'll find it here.",
    // 	about:
    // 		'An e-commerce website is an online platform that allows businesses to sell goods or services online and collect payment via an online payment system.',
    // 	categories: ['frontend'],
    // image: 'assets/frontend_7.webp',
    // 	techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    // 	released: true,
    // 	website:
    // 		'https://mohamedbrzan.github.io/E-CommerCe/?flexRadioDefault=on#',
    // 	github: 'https://github.com/MohamedBrzan/E-CommerCe',
    // },
    {
      title: 'Oxygen Company',
      desc: 'this is Oxygen Company website to breath the life.',
      about:
        'A company website is an online platform that provides information about a business, its products or services, and its mission and values.',
      categories: ['frontend'],
      image: 'assets/frontend_8.webp',
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      released: true,
      website: 'https://mohamedbrzan.github.io/Oxygen-Company/index.html',
      github: 'https://github.com/MohamedBrzan/Oxygen-Company',
    },
    // {
    // 	title: 'The Company',
    // 	desc: 'you can make you company website now.',
    // 	about:
    // 		'A company website is an online platform that provides information about a business, its products or services, and its mission and values.',
    // 	categories: ['frontend'],
    // image: 'assets/frontend_9.webp',
    // 	techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    // 	released: true,
    // 	website: 'https://mohamedbrzan.github.io/The-Company/',
    // 	github: 'https://github.com/MohamedBrzan/The-Company',
    // },
    {
      title: 'Lumpia E-Commerce',
      desc: 'This is electronic E-commerce for all electronics you need.',
      about:
        'An e-commerce website is an online platform that allows businesses to sell goods or services online and collect payment via an online payment system.',
      categories: ['frontend'],
      image: 'assets/frontend_10.webp',
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      released: true,
      website: 'https://mohamedbrzan.github.io/Lumpia-E-Commerce/',
      github: 'https://github.com/MohamedBrzan/The-Company',
    },
    // {
    // 	title: 'Pizza Restaurant',
    // 	desc: 'All Pizzas special here, try it now.',
    // 	about:
    // 		'A pizza website is an online platform that showcases pizza products and allows customers to order them online.',
    // 	categories: ['frontend'],
    // image: 'assets/frontend_11.webp',
    // 	techs: ['HTML', 'CSS', 'Bootstrap', 'JS', 'React.js'],
    // 	released: true,
    // 	website: 'https://mohamedbrzan.github.io/',
    // 	github: 'https://github.com/MohamedBrzan/MohamedBrzan.github.io',
    // },
  ];
}

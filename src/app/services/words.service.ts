import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  totalProject: any;
  ongoing: any;
  jobsuccess: any;

  constructor() {
    this.totalProject = 0;
    this.ongoing = 0;
    this.jobsuccess = 0;
  }

  aboutMe = `
  I’m a passionate and results-driven Full-Stack Developer with a strong background in building dynamic, scalable, and user-focused web applications. With hands-on experience in Angular, Python, Node.js, Express, and MySQL, I bring a versatile approach to both front-end and back-end development.

On the front end, I focus on crafting responsive, intuitive interfaces that enhance usability and engagement. On the back end, I specialize in building secure, high-performance RESTful APIs and scalable server architectures tailored to real-world needs.

In addition to full-stack development, I have a growing passion for Artificial Intelligence and its ability to drive innovation across industries. I’ve explored how AI can be integrated into web applications to create smarter, more adaptive user experiences—from intelligent automation to personalized content delivery.

Whether I’m optimizing database performance, integrating third-party services, or experimenting with AI-driven features, I approach every challenge with curiosity, persistence, and a strong commitment to clean, maintainable code.

Above all, I enjoy building solutions that are not only technically sound but also meaningful and impactful. I’m constantly learning, evolving, and eager to work on projects that push the boundaries of what’s possible with modern technology.
  `;

  techStack = [
    'Python',
    'Angular',
    'NodeJs',
    'ExpressJs',
    'Html',
    'Bootstrap',
    'FastAPI',
  ];

  myProjects = [
    {
      name: 'Mugivies',
      description: 'Mugivies is a Musical Website',
      techStack: ['Python', 'Angular', 'Typescript', 'Together AI'],
      img: '/img/portfolio/2.png',
    },
    {
      name: 'Api Folder Gen',
      description: 'Mugivies is a Musical Website',
      techStack: ['Python', 'Angular', 'Typescript', 'Together AI'],
      img: '/img/portfolio/2.png',
    },
  ];

  myService = [
    {
      title: 'Web Development',
      description:
        'Developing fast, secure, and scalable web applications using modern frameworks and technologies.',
      img: 'img/svg_icon/1.svg',
    },
    {
      title: 'Backend Development',
      description:
        'Designing and optimizing server-side logic, databases, and APIs for seamless application performance.',
      img: 'img/svg_icon/1.svg',
    },
    {
      title: 'API Development & Integration',
      description:
        'Building RESTful APIs to connect services and enhance application functionality.',
      img: 'img/svg_icon/1.svg',
    },
    {
      title: 'AI Development & Integration',
      description:
        'Using and Artificial Intelligence to enhance application functionality.',
      img: 'img/svg_icon/1.svg',
    },
  ];
}

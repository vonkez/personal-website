import tetherer1 from "./images/tetherer1.png"
import tetherer2 from "./images/tetherer2.png"
import tetherer3 from "./images/tetherer3.png"
import tetherer4 from "./images/tetherer4.png"
import tetherer5 from "./images/tetherer5.png"
import isohtel1 from "./images/isohtel1.jpg"
import mangadex1 from "./images/mangadex1.png"
import tetris1 from "./images/tetris1.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://alkimkivanccivi.com.tr/',
  title: 'JS.',
}

const about = {
  name: 'Alkım Kıvanç Çivi',
  role: 'Computer Engineering Student',
  description:
    'I\'m currently student in Başkent University Computer Engineering department. In 2021, I graduated from Başkent University Computer Programming department with first place. ' +
    "I'm highly interested in working with mobile and web apps. I created mobile apps, web apps, chat bots and scraping tools as hobby projects. You can see some of them below. " +
    "",
  resume: 'https://alkimkivanccivi.com.tr/Alkim-Kivanc-Civi-CV-EN.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/alk%C4%B1m-k%C4%B1van%C3%A7-%C3%A7ivi/',
    github: 'https://github.com/vonkez',
  },
}

const projects = [
  {
    name: 'MangaDex Client',
    description:
      'Mobile app for reading manga(japanese comic) from mangadex.com.\n' +
        'It uses Flutter for UI and gets manga content from MangaDex REST API.\n',
    stack: ['Flutter', 'Dart'],
    sourceCode: 'https://github.com/vonkez/mangadex-flutter-client',
    images: [mangadex1]
  },
  {
    name: 'ISOHTEL 2023',
    description:
      'Introductory website for a symposium.',
    stack: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    livePreview: 'https://isohtel.com',
    images: [isohtel1]

  },
  {
    name: 'Tetherer',
    description:
      'Discord bot for event scheduling with a web dashboard.',
    stack: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'TailwindCSS', 'Docker'],
    images: [tetherer1,tetherer2,tetherer3,tetherer4,tetherer5]
  },
  {
    name: 'Tetris-pygame',
    description:
        'Tetris game make using Python and Pygame.',
    stack: ['Python', 'Pygame'],
    sourceCode: 'https://github.com/vonkez/Tetris-pygame',
    images: [tetris1]

  },
  {
    name: 'R6S Rank Bot ',
    description:
        'Chat bot for R6S Discord server. Assigns roles to members according to their\n' +
        'game ranks.',
    stack: ['Python', 'PostgreSQL', 'TortoiseORM', 'Heroku'],
    sourceCode: 'https://github.com/vonkez/r6s-rank-bot',
  },
  {
    name: 'Language Tree ',
    description:
        'Web app for language learning. Made for Language Tree Erasmus+ project. ' ,
    stack: ['Typescript', 'React', 'Material UI', 'Express.js', 'PostgreSQL', 'TypeOrm', 'Docker'],
  },
]

const skills = [
  'HTML',
  'CSS',
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'Kotlin',
  'Dart',
  'Node.js',
  'React',
  'Flutter',
  'Compose',
  'Express.js',
  'Material UI',
  'TailwindCSS',
  'PostgreSQL',
  'Git',
  'Docker',
]

const contact = {
  email: 'kivanc.civi@gmail.com',
}

export { header, about, projects, skills, contact }

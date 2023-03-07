import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  news,
  notes,
  fresource,
  wrapify,
  tecveyron,
  graphql,
  nextjs,
  fresources,
  werascals,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front end Developer",
    company_name: "werascals",
    icon: werascals,
    iconBg: "#383E56",
    date: "December 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using Html, css, javascript and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Fresources",
    icon: fresources,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "Developing and maintaining web applications using Nextjs.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Junaid proved me wrong.",
    name: "Tariq anwar",
    designation: "CEO",
    company: "Mathsloyal",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:

      "I've never met a web developer who truly cares about their team's success like Junaid does.",
    name: "Chaitanya Anand",
    designation: "CEO",
    company: "Fresources",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "After Junaid optimized our website, our traffic increased by 40%. We can't thank him enough!",
    name: "Dhruv Bakshi",
    designation: "CTO",
    company: "Fresources",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const projects = [
  {
    name: "Wrapify",
    description:
"An Ecommerce website that allows users to purchase mobile skins which are premium in quality and have the feel of love.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wrapify,
    source_code_link: "https://github.com/theonlyjunaid/wrap",
  },
  {
    name: "TechVeyron",
    description:
      "A Blog website that allows users to read blogs and articles related to technology. It has a feature of commenting on the blogs and articles.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tecveyron,
    source_code_link: "https://github.com/theonlyjunaid/techveyron",
  },
  {
    name: "Newsee",
    description:
      "A News website that allows users to read news and articles related to technology, sports, entertainment, etc.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/theonlyjunaid/newsee",
  },
];

export { services, technologies, experiences, testimonials, projects };
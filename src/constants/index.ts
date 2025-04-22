// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
 
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },

  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Kathula-Sandeep/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Cyber Security",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Web Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Testimonials

// Projects
export const PROJECTS = [
  // {
  //   name: "Disney+ Clone",
  //   description:
  //     "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "firebase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project1,
  //   source_code_link: "https://github.com/sanidhyy/disney-clone",
  //   live_site_link: "https://clonedisneyplus.web.app/",
  // },
  // {
  //   name: "Golds Gym",
  //   description:
  //     "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "rapidapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project2,
  //   source_code_link: "https://github.com/sanidhyy/fitness-app",
  //   live_site_link: "https://fitness-gym-react.netlify.app/",
  // },
  // {
  //   name: "Shoppy",
  //   description:
  //     "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "syncfusion",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project3,
  //   source_code_link: "https://github.com/sanidhyy/admin-dashboard",
  //   live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  // },
  
    {
      name: "OnlineCommSim",
      description:
        "A C++ and DSA-based simulation of an online communication app that mimics core functionalities such as user registration, message transmission using queues, chat history using linked lists, and network graph traversal using BFS/DFS algorithms.",
      tags: [
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "data structures",
          color: "green-text-gradient",
        },
        {
          name: "algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: project4, // Replace this with an appropriate placeholder or graphic
      source_code_link: "https://github.com/Kathula Sandeep/OnlineCommSim",
      live_site_link: "", // Leave empty or add a demo video link (e.g., YouTube or Google Drive)
    },
    
    {
      name: "WeatherVerse",
      description:
        "A sleek and responsive weather application built with React. It fetches real-time weather data from APIs, allows users to search for cities, and provides features like temperature, humidity, wind speed, and 5-day forecasts with a clean UI and dark mode support.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: project6, // replace this with your weather app screenshot or image import
      source_code_link: "https://github.com/Kathula-Sandeep/WeatherVerse",
      live_site_link: "https://weather-dashboard-beryl-two.vercel.app/",
    },
    
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@sandeepfreefire181",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/kathula-sandeep-235b85254/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/kathula_sa47441",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Kathula-Sandeep",
  },
] as const;

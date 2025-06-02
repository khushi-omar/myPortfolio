/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Khushi's Portfolio",
  description:
    "Dynamic third-year B.Tech student specializing in IoT and Cybersecurity, passionate about web development, software engineering, and fostering collaborative, tech-driven solutions.",
  og: {
    title: "Khushi Omar Portfolio",
    type: "website",
    url: "http://khushiomar.com/",
  },
};

//Home Page
const greeting = {
  title: "KHUSHI OMAR",
  logo_name: "Khushi Omar",
  nickname: "Web Developer",
  subTitle:
    "Dynamic third-year B.Tech student specializing in IoT and Cybersecurity, passionate about web development, software engineering, and fostering collaborative, tech-driven solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1DG62nMaRGizBwiSOrpJEXcD2gRDjAPSv/view?usp=sharing",
  portfolio_repository: "#",
  githubProfile: "https://github.com/khushi-omar",
};

const socialMediaLinks = [
  // Your Social Media Link
  //github: "https://github.com/khushi-omar",
  //linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  //gmail: "khushiwork.0508@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/khushi-omar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link:
      "https://www.linkedin.com/in/khushi-omar-a21508250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2B%2BKs11UoSWCpZZAjcMvdXA%3D%3D",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:khushiwork.0508@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "UI/UX & Frontend Development",
      fileName: "UIUXImg",
      skills: [
        "⚡ Designing responsive and user-friendly websites using React.js, HTML, and CSS",
        "⚡ Creating component-based UIs with focus on accessibility and cross-device compatibility",
        "⚡ Enhancing user experience through design thinking and modern UI patterns",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "logos:express",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
    {
      title: "Web Development & APIs",
      fileName: "WebDevImg",
      skills: [
        "⚡ Developing full-stack web apps with React.js and Node.js",
        "⚡ Building and integrating RESTful APIs to deliver dynamic content",
        "⚡ Maintaining clean, scalable code with reusable components and proper documentation",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
    {
      title: "IoT, Networking",
      fileName: "IoTCloudImg",
      skills: [
        "⚡ Building IoT-based applications with integrated sensors and actuators",
        "⚡ Configuring and managing network protocols and device security",
        "⚡ Deploying applications to cloud and working with containerization tools",
      ],
      softwareSkills: [
        {
          skillName: "IoT",
          fontAwesomeClassname: "logos:iot",
          style: { backgroundColor: "transparent" },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },

        {
          skillName: "CCNA",
          fontAwesomeClassname: "simple-icons:cisco",
          style: { color: "#1BA0D7" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "JAVA",
      iconifyClassname: "logos:java",
      style: {
        color: "#007396",
      },
      profileLink: "#",
    },
    {
      siteName: "C",
      iconifyClassname: "logos:c",
      style: {
        color: "#A8B9CC",
      },
      profileLink: "#",
    },
    {
      siteName: "C++",
      iconifyClassname: "logos:c-plusplus",
      style: {
        color: "#00599C",
      },
      profileLink: "#",
    },
    {
      siteName: "HTML",
      iconifyClassname: "vscode-icons:file-type-html",
      style: {
        color: "#E34F26",
      },
      profileLink: "#",
    },
    {
      siteName: "CSS",
      iconifyClassname: "vscode-icons:file-type-css",
      style: {
        color: "#1572B6",
      },
      profileLink: "#",
    },
    {
      siteName: "JAVASCRIPT",
      iconifyClassname: "logos:javascript",
      style: {
        color: "#F7DF1E",
      },
      profileLink: "#",
    },
    {
      siteName: "REACT JS",
      iconifyClassname: "logos:react",
      style: {
        color: "#61DAFB",
      },
      profileLink: "#",
    },
    {
      siteName: "APIs",
      iconifyClassname: "mdi:api",
      style: {
        color: "#4A90E2",
      },
      profileLink: "#",
    },
    {
      siteName: "IOT",
      iconifyClassname: "material-symbols:sensors",
      style: {
        color: "#00BCD4",
      },
      profileLink: "#",
    },
    {
      siteName: "SQL",
      iconifyClassname: "vscode-icons:file-type-sql",
      style: {
        color: "#336791",
      },
      profileLink: "#",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. Virendra Swarup Education Centre",
      subtitle: "Xth (ICSE) and XIIth (ICSE)",
      logo_path: "vsec.png",
      alt_name: "DVSEC",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Scored 96.6% in Class X (ICSE) in the year 2020.",
        "⚡ Scored 93% in Class XII (ICSE) in the year 2022.",
        "⚡ Actively participated in school-level competitions/sports and academic events.",
      ],
      website_link: "https://vsecavadhpuri.com/school/pages/",
    },
    {
      title: "Amity University, Noida, Uttar Pradesh",
      subtitle:
        "B.Tech in Computer Science (IoT and Cybersecurity including Blockchain)",
      logo_path: "Amity.png",
      alt_name: "Amity University",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Pursuing core Computer Science concepts with specialization in IoT, Cybersecurity, and Blockchain.",
        "⚡ Covered subjects like Data Structures, Algorithms, Operating Systems, DBMS, and more.",
        "⚡ CGPA: 8.98",
        "⚡ Participated in hackathons, tech workshops, and chapter-led initiatives.",
      ],
      website_link: "https://www.amity.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Design in HTML and CSS",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1VaxDAaAbsp5G2EYzlX49yMIEnUVs4Slo/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#1BA0D7",
    },
    {
      title: "Python for Data Science",
      subtitle: "- NPTEL",
      logo_path: "nptel.png",
      certificate_link:
        "https://drive.google.com/file/d/1bA4vPreyoqmJK_rJlSPaGM3vkDk2yD0v/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#1BA0D7",
    },
    {
      title: "The Modern JavaScript Bootcamp Course",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/16MHZZXmx3V8QFexmLctKcXL1jBbDm6uY/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#1BA0D7",
    },
    {
      title: "Introduction to Internet Of Things",
      subtitle: "- NPTEL",
      logo_path: "nptel.png",
      certificate_link:
        "https://drive.google.com/file/d/1R91-HyIroymo-Bfvcj3xR5OkGL3umdmS/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#1BA0D7",
    },
    {
      title: "Introduction to Networks",
      subtitle: "- CCNA",
      logo_path: "ccna.png",
      certificate_link:
        "https://drive.google.com/file/d/1v6lVREzdLvT6lx634YxsAj38jZ5D9Arn/view?usp=sharing",
      alt_name: "Cisco",
      color_code: "#1BA0D7",
    },
    {
      title: "Data Structures in Java",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1cEUAof_-NpmjIWDmV9TkT5s3AkVmVI8F/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#1BA0D7",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships, Leadership, and Extracurricular Activities",
  description:
    "I am a B.Tech Computer Science student specializing in IoT and Cybersecurity with hands-on experience in full-stack web development and event leadership. I have worked as a web development intern, held key leadership positions in tech clubs, and actively participated in national-level hackathons and simulations.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Software Developer Intern",
          company: "W3Villa Technologies",
          company_url: "https://www.w3villa.com/",
          logo_path: "w3logo.png",
          duration: "May 2025 – July 2025",
          location: "On-Site",
          description: "Cucumber/Selenium testing",
          color: "#000000",
        },
        {
          title: "Web Development Intern",
          company: "CodSoft",
          company_url: "https://codsoft.in/",
          logo_path: "codsoft.jpg",
          duration: "May 2024 – July 2024",
          location: "Remote",
          description:
            "Developed and implemented multiple frontend projects including a learning path dashboard, landing page, portfolio site, and a responsive calculator using HTML, CSS, and JavaScript. Focused on responsive UI/UX and cross-device compatibility, while maintaining clean code and documentation.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "President",
          company: "GeeksforGeeks Student Chapter, Amity University Noida",
          company_url: "https://www.geeksforgeeks.org/",
          logo_path: "gfg.jpg",
          duration: "2024 – Present",
          location: "Noida, India",
          description:
            "Leading the chapter, organizing tech workshops, hackathons, and events to promote coding culture on campus. Managing student teams, collaborations, and brand outreach.",
          color: "#0879bf",
        },
        {
          title: "Public Relations and Marketing Head",
          company: "GeeksforGeeks Student Chapter, Amity University Noida",
          company_url: "https://www.geeksforgeeks.org/",
          logo_path: "gfg.jpg",
          duration: "2023 – 2024",
          location: "Noida, India",
          description:
            "Spearheaded marketing campaigns and PR activities, increasing student engagement through structured events and social media promotions.",
          color: "#9b1578",
        },
        {
          title: "Content Team Member",
          company: "GDSC IINTM X GDSC Amity University Noida",
          company_url: "https://developers.google.com/community/gdsc",
          logo_path: "gdsc.png",
          duration: "2023",
          location: "Remote",
          description:
            "Created promotional content and newsletters for major gaming events. Focused on accurate and appealing communication to boost event participation.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Extracurricular Activities / Events",
      experiences: [
        {
          title: "Organizer – Netflix Code Heist",
          company: "GeeksforGeeks Student Chapter",
          company_url: "https://www.geeksforgeeks.org/",
          logo_path: "gfg.jpg",
          duration: "2024",
          location: "Amity University Noida",
          description:
            "Conducted a mini hackathon blending technical challenges with creative themes to promote coding engagement. Oversaw event planning and team coordination.",
          color: "#ee3c26",
        },
        {
          title: "Participant – AMIMUN (UNHCR Committee)",
          company: "Amity University",
          company_url: "https://www.amity.edu/",
          logo_path: "Amity.png",
          duration: "2024",
          location: "Noida, India",
          description:
            "Represented Turkey in the UNHCR Committee at AMIMUN, showcasing research, diplomacy, and public speaking skills in a Model United Nations setting.",
          color: "#0071C5",
        },
        {
          title: "Hackathon Participant & Organizer",
          company: "Various Events",
          company_url: "#",
          logo_path: "Amity.png",
          duration: "2023 – 2025",
          location: "Amity University Noida",
          description:
            "Participated and contributed in national-level hackathons like D3- DEFINE DESIGN DEMONSTRATE, AMICODE 2.0/3.0, CYBERCUP 3.0. Also helped organize campus tech competitions and events focused on web development and cybersecurity.",
          color: "#4285F4",
        },
      ],
    },
  ],
};
// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//      url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with REACT, API, IOT, GUTHUB and Opensource Development.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Address: Sharda Nagar, Kanpur , Uttar Pradesh",
    locality: "Sharda Nagar",
    country: "India",
    region: "Uttar Pradesh",
    //postalCode: "95129",
    streetAddress: "117/Q/137, sharda nagar, Kanpur",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  //publications,
  contactPageData,
};

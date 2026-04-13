import { Experience } from "../../model/experience";

export const experiences: Experience[] = [
  {
    companyName: "Restaff (Freelance)",
    period: "6/2025 - 2/2026",
    projects: [
      {
        name: "Uphead - CRM",
        description:
          "Uphead - CRM is a CRM system offers features such as customer-contact management, purchase/sale order management,... It also includes reporting and analytics capabilities to help agencies monitor their performance and make data-driven decisions.",
        teamSize: 5,
        role: "I am fully responsible for migrating the legacy MVC application to modern Angular 20 framework. I applied many coding design patterns to ensure the code base is readable and maintainable, leverage almost modern features of Angular framework.",
        technology:
          "ASP.NET Restful API, Azure, SQL Server, Angular 20, PrimeNG",
      },
    ],
  },
  {
    companyName: "CMC Global",
    period: "10/2024 - 6/2025",
    projects: [
      {
        name: "Confidental",
        description:
          "This a digital transformation project to manage the budget and resources for government. The system help customer to manage the process from proposal, approval, budget allocation, expense tracking and reporting.",
        teamSize: "40-50",
        role: "As Solution Architect, I have responsibilities to suggest technical solutions, design system architecture, review code quality, ensure best practices, and mentor team members to enhance their skills. Additionally, I actively participate in requirement analysis and collaborate closely with customers to deliver optimal solutions.",
        technology:
          "ASP.NET Restful API, Azure, SQL Server, React, and Beef Framework",
      },
    ],
  },
  {
    companyName: "Restaff",
    period: "5/2020 - 6/2024",
    projects: [
      {
        name: "Wellbarrier",
        description:
          "Wellbarrier is a comprehensive well integrity management solution that spans the entire well life cycle. It ensures a clear and common understanding of risk among all stakeholders. Wellbarrier empowers engineers in the oil and gas field by enabling them to visualize, communicate, and document well structures efficiently. Managers can monitor well health using products like Risk Management, Well Barrier, Verification, and Monitoring. The project is base on multi-tenant architecture",
        teamSize: 43,
        role: "As a Technical Advisor, I work closely with customers to break down requirements, ensure that the product aligns with reality, provide estimations, write documents, train new team members, and offer advice to overcome obstacles.",
        technology:
          "ASP.NET Restful API, Azure, Dapper, SQL Server, React/Preact, D3.js, Snabdom, NodeJS",
      },
    ],
  },
  {
    companyName: "KMS Technology",
    period: "6/2019 - 5/2020",
    projects: [
      {
        name: "Cin7 - Thunderstorm",
        description: `Thunderstorm is a migration project for customer Cin7 which focus on migrating their database to new architecture. Because of scaling system for more tenants, the existing database can not adapt with this requirement. We investigate and propose solution to migrate database without effect to current system`,
        role: "As Backend Developer, I am responsible for developing new features, fixing bugs, and optimizing performance. I also collaborate closely with frontend developers to ensure seamless integration between the backend and frontend components.",
        teamSize: 12,
        technology: "ASP.NET Core, Restful API, SqlKata, MySQL, AWS",
      },
      {
        name: "Ezlife",
        description: `EZlife is a internal project to build a tool in order to manage human resource. The clients want to know how many headcount are not staffed into any project, or how many ones for each roles. We build a tool to visualize data on charts and integrate with other existing tools`,
        role: "Backend developer",
        teamSize: 12,
        technology: "NodeJS, GraphQL, Sequelize, NextJS",
      },
      {
        name: "CloudHMS",
        description: `CloudHMS is a startup company, provide cloud services for hospitality, from accommodation to experience and travel, with centralize system and provide extensions for OAT to integrate`,
        role: "Backend Developer",
        technology: "ASP.NET Core, Restful API, SqlKata, MySQL, AWS",
        teamSize: 12,
      },
      {
        name: "Christina’s",
        description: `Christina’s a fully-integrated social travel platform ranked number 1 on Trip Advisor. Christina’s provides the best local experiences for travelers from around the world`,
        role: "As Fullstack developer, I am responsible for developing both frontend and backend features, ensuring seamless integration between the two. I work closely with the design team to implement user-friendly interfaces and with the backend team to ensure efficient data handling and processing.",
        teamSize: 21,
        technology:
          "ReactJS, Python (Django), Nodejs, Postgress, Circle CI, Heroku",
      },
    ],
  },
  {
    companyName: "FPT Software",
    period: "5/2017 - 4/2019",
    projects: [
      {
        name: "Quality Control Tool",
        description: `This project is built to control quality of blood by receive analysis signals to statistic and visualize data on some kinds of chart to control the indexes of quality`,
        role: "As Team Leader, Full-stack Developer, I am responsible for leading a team of 5 members, managing project timelines, and ensuring successful delivery. Additionally, I actively contribute as a full-stack developer, working on both frontend and backend tasks to meet project requirements.",
        teamSize: 5,
        technology: "ASP.Net MVC, EF, jQuery, HTML, CSS, MSSQL",
      },
      {
        name: "QTMediaCreator",
        description: ` Create, manage, and stream media content to remote server with multi device and cross platform`,
        role: `C++ Developer, Designer, BA`,
        teamSize: 3,
        technology: "C++, ffmpeg, Qt framework, WPF",
      },
      {
        name: "MR_Sequence",
        description: ` This project is a part of MRI system, it process to setting pulse sequences and pulsed field gradients, resulting in a particular image appearance`,
        role: "As C++ Developer, Tester, I am responsible for developing and testing the pulse sequence settings and pulsed field gradients to ensure accurate image appearance in the MRI system.",
        teamSize: 14,
        technology: "C++, C# .NET, DCMTK, MSSQL, Windows Forms, WPF",
      },
    ],
  },
  {
    companyName: "Freelancer",
    period: "11/2018 - 5/2019",
    hidden: true,
    projects: [
      {
        name: "BeRich",
        description: `Hybrid mobile application, used to manage income, expense, asset and debt, help user to control amount and clear finance in the future`,
        role: "As a Freelance Developer, I am responsible for developing the hybrid mobile application using Angular and Ionic frameworks. I work closely with the client to understand their requirements and deliver a user-friendly and efficient solution.",
        teamSize: 2,
        technology: "Angular, Ionic, ASP.NET Core",
      },
    ],
  },
  {
    companyName: "Global Cyber Soft",
    period: "6/2016 - 1/2017",
    hidden: true,
    projects: [
      {
        name: "Trainee in GCS as Bridge Software Engineer",
        description:
          "I was trained to become a BrSE with soft skills when working in japanese environment and culture",
      },
    ],
  },
  {
    companyName: "Bachelor thesis",
    period: "1/2017 - 6/2017",
    projects: [
      {
        name: "Detect Calcification over Mammography",
        description:
          "Apply image process technique to detect area of calcification of mammography.",
        technology: "DICOM standard, OpenCV, DCMTK, QT framework, WPF",
      },
    ],
  },
];

import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, ThumbsDown, VideoIcon, FolderIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Rahul Rathod",
  initials: "RR",
  url: "mailto:raaulc@outlook.com",
  location: "Leeds, UK",
  locationLink: "https://www.google.com/maps/place/Leeds,+UK",
  description:
    "Software Engineer & Business Intelligence Analyst | ReactJS | SQL | Data Analytics | Mobile | 14+ Years Tech Experience | Transforming data into business value.",
  summary:
    "Software Engineer and Business Intelligence Analyst with over 14 years of experience in full-stack development and data analytics. Achievements include leading cross-functional projects at Sky Betting and Gaming and Marks & Spencer, focusing on ReactJS UI engineering and SQL insights. Skilled in transforming large datasets into actionable business strategies through data storytelling and forecasting. Proven ability to create scalable tech solutions that enhance performance and drive commercial growth.",
  avatarUrl: "/favicons/profile-pic.jpeg",
  skills: [
    "Looker, Power BI, Tableau",
    "Advanced Excel skills",
    "Data visualization techniques",
    "Dashboard design expertise",
    "Advanced SQL proficiency",
    "BigQuery, Snowflake knowledge",
    "Data modeling strategies",
    "ETL pipeline development",
    "A/B and hypothesis testing",
    "Customer segmentation analysis",
    "Cohort analysis methodologies",
    "KPI design principles",
    "Revenue reporting insights",
    "Campaign performance analysis",
    "Pricing and forecasting strategies",
    "Git version control",
    "JIRA project management",
    "Confluence documentation skills",
    "Agile methodology practices",
    "Google Analytics proficiency",
    "Basic Python for data analysis",
    "Data storytelling capabilities",
    "Executive reporting skills",
    "Cross-functional collaboration"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/gadgets", icon: Icons.shop, label: "Gadgets" },
  ],
  contact: {
    email: "raaulc@outlook.com",
    tel: "+44-7424399000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/raaulc",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raaulc/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:raaulc@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
      downloadCV: {
        name: "Download CV",
        url: "https://drive.google.com/file/d/1CDwCkaFrwbFUL8-0kiFEFp1iG3IUXosY/view?usp=sharing",
        icon: Icons.files,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Dharmsinh Desai University",
      href: "https://www.ddu.ac.in/",
      degree: "Bachelor of Engineering: Electronics and Communication",
      logoUrl: "",
      start: "05/2009",
      end: "05/2009",
      location: "Gujarat, India"
    }
  ],
  projects: [
    {
      title: "US Election Betting Odds Dashboard",
      href: "https://github.com/raaulc/data-bi-portfolio",
      dates: "2024",
      active: true,
      description:
        "Developed an interactive dashboard visualizing 2024 U.S. Presidential Election odds, focusing on the two-way contest between Joe Biden and Donald Trump. Integrated polling data from NPR/PBS/Marist and Morning Consult, highlighting key insights from current voter sentiment. The dashboard provides comparative trendlines across candidates and tracks public opinion dynamics on major policy themes such as COVID-19 restrictions and abortion access. Designed to improve poll literacy and help users interpret survey data accurately.",
      technologies: [
        "Looker Studio",
        "Political Forecasting",
        "Polling Data",
        "Data Visualization"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/raaulc/data-bi-portfolio",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Interactive poll tracker visualizing real-time support shifts",
        "Sentiment impact of presidential debates and public events",
        "Analysis of how polls influence majority opinion alignment"
      ],
      image: "",
      video: "",
    },
    {
      title: "Supplier Defect Analysis Dashboard",
      href: "https://github.com/raaulc/data-bi-portfolio",
      dates: "2024",
      active: true,
      description:
        "Created a domain-specific dashboard for analyzing supplier quality issues across defect types and downtime impact. The solution is focused on enhancing visibility into operational inefficiencies, using metrics such as total defects and total production downtime. The dashboard enables stakeholders to identify systemic process issues, prioritize supplier improvement plans, and reduce operational costs through proactive decision-making.",
      technologies: [
        "Looker",
        "Supply Chain",
        "Sales Operations",
        "KPI Visualization"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/raaulc/data-bi-portfolio",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "KPI visualization: Total defects and downtime per supplier",
        "Trendline analysis by product category and production batch",
        "Drill-down capability into supplier-specific quality incidents"
      ],
      image: "",
      video: "",
    },
    {
      title: "E-commerce Campaign Performance Analysis",
      href: "https://github.com/raaulc/data-bi-portfolio",
      dates: "2024",
      active: true,
      description:
        "Designed a data exploration dashboard for Google Ads campaign performance using Looker Studio’s e-commerce dataset. Focused the analysis around ROAS (Return on Ad Spend) to evaluate the effectiveness of each campaign channel. Applied metric prioritization and visual storytelling techniques to surface actionable trends across ad groups, campaigns, and timeframes.",
      technologies: [
        "Looker Studio",
        "Digital Marketing",
        "ROAS",
        "Google Ads"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/raaulc/data-bi-portfolio",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "ROAS comparison across campaign types",
        "Trend analysis on click-through rate (CTR), CPC, and conversion rate",
        "Campaign-level breakdown for optimization recommendations"
      ],
      image: "",
      video: "",
    }
  ],
  blogs: [
    {
      title: "Mastering Looker: Building Actionable BI Dashboards",
      href: "https://medium.com/@raaulc/mastering-looker-bi-dashboards",
      date: "2024-06-01",
      summary: "A practical guide to designing and deploying impactful business intelligence dashboards using Looker Studio, with real-world examples."
    },
    {
      title: "Data Storytelling for Business Analysts",
      href: "https://medium.com/@raaulc/data-storytelling-business-analysts",
      date: "2024-05-15",
      summary: "How to turn raw data into compelling business stories that drive decision-making and stakeholder engagement."
    },
    {
      title: "Automating KPI Reporting in Looker",
      href: "https://medium.com/@raaulc/automating-kpi-reporting-looker",
      date: "2024-04-20",
      summary: "Step-by-step strategies for automating recurring KPI reports and saving analyst time using Looker’s scheduling and alerting features."
    },
    {
      title: "From Excel to Looker: Modernizing Your Analytics Stack",
      href: "https://medium.com/@raaulc/excel-to-looker-modern-analytics",
      date: "2024-03-30",
      summary: "A migration roadmap for teams moving from Excel-based reporting to scalable, cloud-powered analytics with Looker."
    }
  ],
  likesBuilding: "I like building scalable analytics solutions, intuitive dashboards, and tools that turn raw data into business value.",
  contactDetails: {
    email: "raaulc@outlook.com",
    tel: "+44-7424399000"
  },
  youtube: [
    {
      title: "Looker Video Setup",
      description: "Google Looker Studio",
      thumbnail: "/placeholder-product.jpg",
      url: "https://www.youtube.com/watch?v=K3j1FxQu1Js&list=PLb1Ovsa8zsbUMrH0stNeGKAG5fPFL5MbM",
      date: "2024-01-01"
    }
  ],
} as const;

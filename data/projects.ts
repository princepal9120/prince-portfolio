export interface Project {
  title: string;
  description: string;
  type: "fullstack" | "mobile" | "ai";
  technologies: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Microservices Ecommerce ",
    description:
      "Built a scalable ecommerce platform using microservices architecture with gRPC for inter-service communication and GraphQL as the API gateway. Includes services for account management, product catalog, and order processing. Each service has its own database with Account and Order services using PostgreSQL and Catalog service using Elasticsearch for optimal performance.",
    type: "fullstack",
    technologies: [
      "Go",
      "Gin",
      "gRPC",
      "GraphQL",
      "PostgreSQL",
      "Elasticsearch",
      "Docker",
      "Microservices",
    ],
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Aniverse",
    description:
      "Led the development of an AI-powered Anime recommendation system, integrating machine learning algorithms and OpenAI GPT APIs for personalized suggestions, resulting in a 40% increase in user engagement and a 25% uplift in content consumption.",
    type: "fullstack",
    technologies: [
      "Go",
      "Gin",
      "TypeScript",
      "REST APIs",
      "CSS",
      "OpenAI GPT",
      "JWT",
    ],
    image:
      "/project/aniverse.png",
    demoUrl: "https://aniverse.princepal.dev",
    codeUrl: "https://github.com/princepal9120/Aniverse",
  },
  {
    title: "Perception- Agentic Chatbot",
    description:
      "A dynamic AI chatbot that handles multi-step tasks and contextual conversations using LangGraph agents and Groq inference. It combines LangChain orchestration with Streamlit UI for a clean and powerful workflow.",
    type: "ai",
    technologies: [
      "LangGraph",
      "LangChain",
      "Groq",
      "Python",
      "Streamlit",
      "FastAPI",
      "React",
    ],
    image: "./project/perception.png",
    demoUrl: "https://perplexity.princepal.dev",
    codeUrl: "https://github.com/princepal9120/perception",
  },
  {
    title: "EcoQuest",
    description:
      "AI-driven waste reporting system that reduced response time by 30% through image-based reporting.",
    type: "fullstack",
    technologies: [
      "Next.js",
      "Drizzle ORM",
      "PostgreSQL",
      "Gemini Vision API",
      "Google Maps API",
    ],
    image: "./project/ecoquest.png",
    demoUrl: "https://ecoquest.princepal.dev/",
    codeUrl: "https://github.com/prncepal9120/ecoquest",
  },
  {
    title: "Gemini Live Clone - Dora AI",
    description:
      "A real-time AI assistant that sees, hears, thinks, and responds using webcam, audio, and advanced LLM tools like LangGraph and Groq. Dora is an agentic experience built for immersive interaction.",
    type: "ai",
    technologies: [
      "LangGraph",
      "Groq",
      "Gemini API",
      "Whisper",
      "ElevenLabs",
      "Gradio",
      "Python",
    ],
    image:
      "https://images.pexels.com/photos/8294602/pexels-photo-8294602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com/princepal9120/gemini-live-clone",
    codeUrl:
      "https://github.com/princepal9120/ai-learning/tree/main/projects/livecam-ai-assitant",
  },
  
  {
    title: "Learnify",
    description:
      "Scalable LMS platform enabling seamless course creation and enrollment for 500+ users.",
    type: "fullstack",
    technologies: [
      "React.js",
      "React Query",
      "MongoDB",
      "Express.js",
      "Node.js",
    ],
    image: "./project/learnify.png",
    demoUrl: "https://learnify.princepal.dev",
    codeUrl: "https://github.com/princepal9120/Learnify",
  },
  {
    title: "RAG-Chatbot",
    description:
      "A resume-aware chatbot using RAG, LLM function-calling, and LangChain that provides contextual responses.",
    type: "ai",
    technologies: [
      "Next.js",
      "LangChain",
      "AstraDB",
      "Gemini API",
      "TypeScript",
    ],
    image: "./project/chatbot.png",
    demoUrl: "https://chatbot.princepal.dev",
    codeUrl: "https://github.com/princepal9120/PersonalizedChatbot",
  },
  {
    title: "JobConnect Portal",
    description:
      "A full-stack job portal enabling recruiters and candidates to post, search, and apply for jobs with a real-time dashboard for analytics and notifications.",
    type: "fullstack",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "JWT Authentication",
    ],
    image: "./project/jobportal.png",
    demoUrl: "https://talentbridge-1yxp.onrender.com/",
    codeUrl: "https://github.com/princepal9120/TalentBridge",
  },
  {
    title: "Notes API Project",
    description:
      "Developed a RESTful Notes API with CRUD operations and JWT authentication, achieving a 99.9% uptime and supporting over 10,000 daily active users for efficient note management. Integrated a React frontend for user-friendly note creation and organization.",
    type: "fullstack",
    technologies: [
      "NestJS",
      "TypeScript",
      "React",
      "JWT",
      "PostgreSQL",
      "REST APIs",
    ],
    image:
      "./project/notes_api.png",
    demoUrl: "https://nestjs-two-tau.vercel.app",
    codeUrl: "https://github.com/princepal9120/nestjs/notes-api",
  },
  {
    title: "LinkedIn Post Generator",
    description:
      "AI-based tool that generates LinkedIn posts in a user's writing style using few-shot learning.",
    type: "ai",
    technologies: [
      "Python",
      "Streamlit",
      "Meta Llama",
      "Pandas",
      "Few-Shot Learning",
    ],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com/princepal9120/linkedin_post_generator",
    codeUrl: "https://github.com/princepal9120/linkedin_post_generator",
  },

  {
    title: "EmailGenie",
    description:
      "An AI-powered email template generator that creates personalized outreach messages based on user queries using LangChain and Gmail API.",
    type: "ai",
    technologies: ["Typescript", "LangChain", "Gmail API", "NextJs"],
    image: "./project/email.png",
    demoUrl: "https://email-generator-eta.vercel.app",
    codeUrl: "https://github.com/princepal9120/email-generator",
  },
  {
    title: "CricketChat Live",
    description:
      "A real-time chat application for cricket enthusiasts, featuring topic rooms, live scoring updates, and user profiles—built with MERN and Socket.io.",
    type: "fullstack",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "WebSockets",
    ],
    image: "./project/cricket_chat.png",
    demoUrl: "https://cricket-chat-room-client.vercel.app",
    codeUrl: "https://github.com/princepal9120/cricket_chat_room_client",
  },
  {
    title: "Splitmate",
    description:
      "Mobile expense tracking application with group expense management for 300+ users.",
    type: "mobile",
    technologies: [
      "React Native",
      "Expo Router",
      "Firebase",
      "Zustand",
      "AsyncStorage",
    ],
    image:
      "https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://www.youtube.com/watch?v=sVtEbq94MfM",
    codeUrl: "https://github.com/princepal9120/Splitmate",
  },
  {
    title: "Medialarm",
    description:
      "React Native medicine tracker with personalized medication reminders and biometric authentication.",
    type: "mobile",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Async Storage",
      "Expo Notifications",
    ],
    image: "./project/medialarm.jpg",
    demoUrl: "#",
    codeUrl: "https://github.com/princepal9120/Medialarm",
  },
  {
    title: "AI Agent Chatbot",
    description:
      "An intelligent real-time chatbot application leveraging LangGraph and LangChain agents for executing multi-step tasks autonomously. Integrates Groq for ultra-fast inference and Streamlit for an interactive UI, enabling dynamic conversations and agent-based task completion.",
    type: "ai",
    technologies: ["LangGraph", "Groq", "LangChain", "Streamlit", "Python"],
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "https://github.com/princepal9120/agent_chatbot",
  },

  {
    title: "Service Checkout Platform",
    description:
      "A dynamic web application allowing users to browse premium services (fitness, wellness, health, etc.), add them to a cart, and proceed to real-time checkout. Built with React and Zustand for state management and seamless user experience.",
    type: "fullstack",
    technologies: [
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Shadcn UI",
      "Axios",
    ],
    image: "./project/service.png",
    demoUrl: "https://service-basket-express.vercel.app/",
    codeUrl: "https://github.com/prncepal9120/service-basket",
  },

  {
    title: "CabRide",
    description:
      "Ride-hailing app with real-time location tracking via Google Maps API and secure authentication.",
    type: "mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "Clerk",
      "Zustand",
      "Google Maps API",
    ],
    image:
      "https://images.pexels.com/photos/1797542/pexels-photo-1797542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "",
    codeUrl: "https://github.com/CabRide",
  },
  {
    title: "PDFInfo Extractor",
    description:
      "A web-based utility allowing users to upload PDFs, extract key personal and contact details (name, address, phone, email, role) via pdf-lib and regex/NLP, and present them in a clean, responsive interface.",
    type: "ai",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "pdf-lib",
      "JavaScript RegExp",
      "Axios",
    ],
    image:
      "https://images.pexels.com/photos/30268252/pexels-photo-30268252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com/prncepal9120/pdf-data-extractor",
    codeUrl: "https://github.com/prncepal9120/pdf-data-extractor",
  },
  {
    title: "Notes API Project",
    description:
      "Developed a RESTful Notes API with CRUD operations and JWT authentication, achieving a 99.9% uptime and supporting over 10,000 daily active users for efficient note management. Integrated a React frontend for user-friendly note creation and organization.",
    type: "fullstack",
    technologies: [
      "NestJS",
      "TypeScript",
      "React",
      "JWT",
      "PostgreSQL",
      "REST APIs",
    ],
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "#",
  },
];
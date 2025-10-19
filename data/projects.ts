export interface Project {
  id: string;
  title: string;
  description: string;
  type: "fullstack" | "mobile" | "ai";
  category: "web" | "mobile" | "ai" | "backend";
  technologies: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
  status: "operational" | "maintenance" | "archived";
  featured?: boolean;
  videoUrl?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Microservices Ecommerce Platform",
    description: "Built a scalable ecommerce platform using microservices architecture with gRPC for inter-service communication and GraphQL as the API gateway.",
    type: "fullstack",
    category: "backend",
    technologies: ["Go", "Gin", "gRPC", "GraphQL", "PostgreSQL", "Elasticsearch", "Docker", "Microservices"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "#",
    status: "operational",
    featured: true,
    highlights: [
      "Microservices architecture",
      "gRPC inter-service communication",
      "GraphQL API gateway"
    ]
  },
  {
    id: "2",
    title: "Perception - Multi-step Agentic Chatbot",
    description: "A dynamic AI chatbot that handles multi-step tasks and contextual conversations using LangGraph agents and Groq inference.",
    type: "ai",
    category: "ai",
    technologies: ["LangGraph", "LangChain", "Groq", "Python", "Streamlit", "FastAPI", "React"],
    image: "./agent.png",
    demoUrl: "https://perplexity.princepal.dev",
    codeUrl: "https://github.com/princepal9120/perception",
    status: "operational",
    featured: true,
    highlights: [
      "Multi-step task handling",
      "Groq ultra-fast inference",
      "Streamlit interactive UI"
    ]
  },
  {
    id: "3",
    title: "EcoQuest",
    description: "AI-driven waste reporting system that reduced response time by 30% through image-based reporting.",
    type: "fullstack",
    category: "web",
    technologies: ["Next.js", "Drizzle ORM", "PostgreSQL", "Gemini Vision API", "Google Maps API"],
    image: "./ecoquest.png",
    demoUrl: "https://ecoquest.princepal.dev/",
    codeUrl: "https://github.com/prncepal9120/ecoquest",
    status: "operational",
    featured: true,
    highlights: [
      "30% faster response time",
      "Gemini Vision API integration",
      "Real-time waste tracking"
    ]
  },
  {
    id: "4",
    title: "Gemini Live Clone - Dora AI",
    description: "A real-time AI assistant that sees, hears, thinks, and responds using webcam, audio, and advanced LLM tools.",
    type: "ai",
    category: "ai",
    technologies: ["LangGraph", "Groq", "Gemini API", "Whisper", "ElevenLabs", "Gradio", "Python"],
    image: "https://images.pexels.com/photos/8294602/pexels-photo-8294602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com/princepal9120/gemini-live-clone",
    codeUrl: "https://github.com/princepal9120/ai-learning/tree/main/projects/livecam-ai-assitant",
    status: "operational",
    featured: true
  },
  {
    id: "5",
    title: "Learnify",
    description: "Scalable LMS platform enabling seamless course creation and enrollment for 500+ users.",
    type: "fullstack",
    category: "web",
    technologies: ["React.js", "React Query", "MongoDB", "Express.js", "Node.js"],
    image: "./learnify.png",
    demoUrl: "https://learnifywithai.onrender.com",
    codeUrl: "https://github.com/princepal9120/Learnify",
    status: "operational",
    featured: true
  },
  {
    id: "6",
    title: "RAG-Chatbot",
    description: "A resume-aware chatbot using RAG, LLM function-calling, and LangChain that provides contextual responses.",
    type: "ai",
    category: "ai",
    technologies: ["Next.js", "LangChain", "AstraDB", "Gemini API", "TypeScript"],
    image: "./chatbot.png",
    demoUrl: "https://chatbot.princepal.dev",
    codeUrl: "https://github.com/princepal9120/PersonalizedChatbot",
    status: "operational",
    featured: true
  }
];

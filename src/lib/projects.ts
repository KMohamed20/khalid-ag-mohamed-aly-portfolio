export interface Project {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  links: {
    github?: string;
    live?: string;
    docs?: string;
  };
  image: string;
}

export const projects: Project[] = [
  {
    id: "ai-diplomacy",
    title: "AI Diplomacy Lab",
    subtitle: "Multilingual Analysis of Global Policy Discourses",
    technologies: ["Python", "Hugging Face", "BERT", "LangChain", "FastAPI", "PostgreSQL"],
    challenge: "Diplomatic texts are often opaque, multilingual, and culturally nuanced — existing tools ignore African languages.",
    solution: "Built a transformer-based NLP pipeline analyzing French, English, and Tamasheq diplomatic speeches to detect sentiment, bias, and negotiation patterns.",
    results: [
      "Analyzed 12,000+ policy documents across 5 languages",
      "Achieved 92% accuracy in detecting subtle diplomatic cues",
      "Used by a UN-affiliated research group for cross-cultural mediation training"
    ],
    links: {
      github: "https://github.com/khalid-ag-mohamed-aly/ai-diplomacy-lab",
      live: "https://ai-diplomacy.khalid.ag",
      docs: "https://docs.ai-diplomacy.khalid.ag"
    },
    image: "/images/ai-diplomacy.png"
  },
  {
    id: "karal-academy",
    title: "Karal Academy",
    subtitle: "Digital Education in Tamasheq Language",
    technologies: ["Next.js", "TypeScript", "Firebase", "Whisper AI", "React Query"],
    challenge: "No digital learning platform exists for Tamasheq-speaking children in the Sahara.",
    solution: "Created an adaptive e-learning platform with voice-enabled lessons, quizzes, and an AI tutor that responds in Tamazight.",
    results: [
      "Launched with 1,200+ active learners in Niger and Mali",
      "Reduced dropout rate by 65% compared to text-only platforms",
      "Awarded ‘Best Social Impact Tech Project’ at DevFest Africa 2024"
    ],
    links: {
      live: "https://karalacademy.org",
      github: "https://github.com/khalid-ag-mohamed-aly/karal-academy"
    },
    image: "/images/karal-academy.png"
  },
  {
    id: "tamasheq-ai",
    title: "Tamasheq Cultural AI",
    subtitle: "Voice & Text Generation for Endangered Heritage",
    technologies: ["PyTorch", "Whisper", "LLaMA 3", "Hugging Face", "ONNX"],
    challenge: "Tamasheq has no digital voice assistants or text generators — risking cultural extinction.",
    solution: "Fine-tuned LLMs on oral histories, poetry, and proverbs to create the first Tamasheq-speaking AI assistant.",
    results: [
      "Generated 500+ hours of synthetic speech in authentic dialects",
      "Integrated into local radio broadcasts and community apps",
      "Featured in UNESCO’s Digital Heritage Initiative 2025"
    ],
    links: {
      github: "https://github.com/khalid-ag-mohamed-aly/tamasheq-ai",
      live: "https://tamasheq.ai"
    },
    image: "/images/tamasheq-ai.png"
  }
];

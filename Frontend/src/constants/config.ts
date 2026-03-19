type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Phishing-Guard",
    fullName: "Phishing-Guard",
    email: "new-@gmail.com",
  },
  hero: {
    
    name: "Phishing-Guard",
    p: ["One Click. Zero Risk", "Advanced Security Solutions Tailored for Anglers"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Phishing Guard is a comprehensive, AI-powered cybersecurity platform designed to protect individuals, startups, and enterprises from phishing attacks across email, web, and application layers. Built with production-grade React, Node.js, and machine learning integration, it delivers enterprise-level threat detection through an accessible freemium model.`,
    },
    experience: {
      p: "These are some of the siem",
      h2: "Features",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Integerated applications",
      h2: "Reviews.",
      content: `The following applications are presented through concise and structured reviews. Each application is described in terms of its purpose, core features, and functionality, with accompanying  live demonstrations for further reference.`,
    },
  },
};

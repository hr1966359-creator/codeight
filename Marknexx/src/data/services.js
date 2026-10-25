import {
  Globe,
  ShoppingBag,
  Smartphone,
  Camera,
  UserRound,
  Building2
} from "lucide-react";

export const WHATSAPP = "917048931619";

export const whatsappLink =
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hello Codeight, I want to discuss a project."
  )}`;

export const services = [
  {
    id: "website",
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Web Development",
    icon: Globe,
    accent: "violet",

    description:
      "Modern, responsive and conversion-focused websites for businesses, brands and professionals.",

    plans: [
      {
        name: "Starter",
        price: "₹14,999",
        duration: "7 days",

        features: [
          "4–5 page responsive website",
          "Home, About, Services, Contact",
          "WhatsApp button",
          "Google Maps",
          "Contact / enquiry form",
          "Mobile + desktop responsive",
          "Basic SEO",
          "2 revisions"
        ]
      },

      {
        name: "Business",
        price: "₹24,999",
        duration: "10–14 days",

        popular: true,

        features: [
          "Everything in Starter",
          "7–10 pages",
          "Premium UI/UX",
          "Gallery / Portfolio",
          "Testimonials",
          "WhatsApp enquiry",
          "Basic SEO",
          "Google Business",
          "Analytics",
          "3 revisions"
        ]
      },

      {
        name: "Professional",
        price: "₹39,999+",
        duration: "15–21 days",

        features: [
          "Everything in Business",
          "Advanced website",
          "Product / service catalogue",
          "Advanced enquiry forms",
          "Admin / CMS",
          "Lead management",
          "Third-party API integrations",
          "Advanced SEO"
        ]
      }
    ]
  },

  {
    id: "ecommerce",
    slug: "ecommerce-development",
    title: "E-commerce Development",
    shortTitle: "E-commerce",
    icon: ShoppingBag,
    accent: "cyan",

    description:
      "Complete online stores with product management, checkout, payments and order workflows.",

    plans: [
      {
        name: "Starter E-commerce",
        price: "₹49,999+",

        features: [
          "Product catalogue",
          "Categories",
          "Search",
          "Cart & checkout",
          "Order management",
          "WhatsApp integration",
          "Basic admin",
          "Payment gateway"
        ]
      },

      {
        name: "Business E-commerce",
        price: "₹79,999+",
        popular: true,

        features: [
          "Everything in Starter",
          "Advanced admin",
          "Inventory management",
          "Coupons / offers",
          "Customer accounts",
          "Order tracking",
          "Email / WhatsApp notifications",
          "Sales dashboard",
          "Advanced filters",
          "Custom workflows",
          "Custom integrations"
        ]
      },

      {
        name: "Custom E-commerce",
        price: "₹1.5L+",

        features: [
          "Advanced functionality",
          "Custom business workflows",
          "Custom integrations",
          "Advanced admin system",
          "Custom dashboard",
          "Scalable architecture",
          "Final pricing based on requirements"
        ]
      }
    ]
  },

  {
    id: "mobile-app",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    icon: Smartphone,
    accent: "orange",

    description:
      "Business-focused mobile applications with backend, payments, notifications and admin systems.",

    plans: [
      {
        name: "Business App",
        price: "₹1.5L+",

        features: [
          "Customer app",
          "Login / signup",
          "Product / service catalogue",
          "Cart / order",
          "Payment",
          "Notifications",
          "Backend",
          "Admin panel"
        ]
      },

      {
        name: "Advanced App",
        price: "Custom",

        popular: true,

        features: [
          "Advanced customer app",
          "Admin dashboard",
          "Advanced order management",
          "Inventory",
          "Multiple user roles",
          "Notifications",
          "Payment / refund",
          "API integrations",
          "Analytics"
        ]
      }
    ]
  },

  {
    id: "social-media",
    slug: "social-media-management",
    title: "Social Media Management",
    shortTitle: "Social Media",
    icon: Camera,
    accent: "pink",

    description:
      "Content creation and Instagram management designed to build a consistent online presence.",

    plans: [
      {
        name: "Starter",
        price: "₹15,000/mo",

        features: [
          "8 Reels",
          "8 static posts",
          "Captions + hashtags",
          "Instagram management",
          "Monthly content plan"
        ]
      },

      {
        name: "Growth",
        price: "₹25,000/mo",
        popular: true,

        features: [
          "12 Reels",
          "12 posts",
          "Content strategy",
          "Instagram management",
          "Basic competitor research",
          "Monthly performance report"
        ]
      },

      {
        name: "Premium",
        price: "₹40,000/mo",

        features: [
          "16 Reels",
          "12 posts",
          "Professional shooting",
          "Video editing",
          "Content strategy",
          "Instagram management",
          "Lead-gen campaign management",
          "Monthly reporting"
        ]
      }
    ]
  },

  {
    id: "personal-branding",
    slug: "personal-branding",
    title: "Personal Branding",
    shortTitle: "Personal Branding",
    icon: UserRound,
    accent: "green",

    description:
      "Build a strong personal presence through strategic content, video and social media management.",

    plans: [
      {
        name: "Starter",
        price: "₹25,000/mo",

        features: [
          "12 reels",
          "8 static / carousel posts",
          "Personal content strategy",
          "Content calendar",
          "Script / idea development",
          "Professional video shooting",
          "Editing",
          "Instagram profile optimization",
          "Captions / hashtags",
          "Posting / scheduling",
          "Monthly performance"
        ]
      },

      {
        name: "Growth",
        price: "₹40,000/mo",
        popular: true,

        features: [
          "16 reels",
          "12 posts / carousels",
          "Professional shooting",
          "Personal branding strategy",
          "Content research",
          "Scriptwriting",
          "Editing",
          "Instagram management",
          "LinkedIn content",
          "YouTube Shorts",
          "Lead-generation strategy",
          "Monthly analytics"
        ]
      }
    ]
  },

  {
    id: "real-estate",
    slug: "real-estate-growth",
    title: "Real Estate Growth",
    shortTitle: "Real Estate",
    icon: Building2,
    accent: "blue",

    description:
      "Digital marketing systems for property businesses, brokers and real estate professionals.",

    plans: [
      {
        name: "Growth",
        price: "₹35,000/mo",
        popular: true,

        features: [
          "12 property reels",
          "Property walkthroughs",
          "8 graphic posts",
          "Instagram management",
          "Meta lead campaign management",
          "Lead form setup",
          "WhatsApp enquiry integration",
          "Property landing pages",
          "Listing presentation",
          "Lead tracking",
          "Monthly enquiry report",
          "Campaign performance report"
        ]
      }
    ]
  }
];

export const testimonials = [
  {
    name: "Business Owner",
    role: "Local Business",
    text:
      "Codeight helped us create a professional online presence that made our business look much more credible."
  },

  {
    name: "Founder",
    role: "Growing Brand",
    text:
      "The team understood what we wanted and converted our ideas into a clean digital experience."
  },

  {
    name: "Real Estate Professional",
    role: "Property Business",
    text:
      "The combination of content, landing pages and lead generation gives our property business a proper digital system."
  }
];
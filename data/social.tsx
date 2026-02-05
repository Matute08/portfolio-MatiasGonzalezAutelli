"use client";

import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";
import type { SocialNetwork } from "@/types";

export const socialNetworks: SocialNetwork[] = [
  {
    id: 1,
    logo: <Linkedin size={25} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/matiasgonzalezautelli",
  },
  {
    id: 2,
    logo: <Github size={25} strokeWidth={1} />,
    src: "https://github.com/Matute08",
  },
  {
    id: 3,
    logo: <Mail size={25} strokeWidth={1} />,
    src: "mailto:matutegon97@gmail.com",
  },
  {
    id: 4,
    logo: <MessageCircle size={25} strokeWidth={1} />,
    src: "https://wa.me/542954545062",
  },
];


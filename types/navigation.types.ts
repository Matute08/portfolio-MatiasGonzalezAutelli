import { ReactNode } from "react";

export interface NavItem {
  id: number;
  title: string;
  icon: ReactNode;
  link: string;
}

export interface SocialNetwork {
  id: number;
  logo: ReactNode;
  src: string;
}


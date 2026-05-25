export interface HeroData {
  title: string;
  description: string;
  portraitUrl: string;
}

export interface MarqueeData {
  row1: string[];
  row2: string[];
}

export interface AboutAssets {
  moon: string;
  bottomLeftObj: string;
  lego: string;
  bottomRightGroup: string;
}

export interface AboutData {
  heading: string;
  text: string;
  assets: AboutAssets;
}

export interface ServiceItem {
  id: string;
  num: string;
  name: string;
  description: string;
}

export interface ServicesData {
  heading: string;
  items: ServiceItem[];
}

export interface ProjectImages {
  col1Row1: string;
  col1Row2: string;
  col2: string;
}

export interface ProjectItem {
  id: string;
  num: string;
  name: string;
  category: string;
  year: string;
  images: ProjectImages;
  subtitle?: string;
  role?: string;
  overview?: string;
  responsibilities?: string[];
  outcomes?: string[];
  tools?: string[];
}

export interface ProjectsData {
  heading: string;
  items: ProjectItem[];
}

export interface ContentData {
  hero: HeroData;
  marquee: MarqueeData;
  about: AboutData;
  services: ServicesData;
  projects: ProjectsData;
}

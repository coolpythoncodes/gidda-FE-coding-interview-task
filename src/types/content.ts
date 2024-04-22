import { type IconType } from './navigation';

type Why = {
  title: string;
  text: string;
  defaultIcon?: IconType;
  hoverIcon?: IconType;
}[];

type TrustedByPeople = {
  id: string;
  name: string;
  role: string;
}[];

type TrustedByCompanies = {
  id: IconType;
}[];

type Stats = {
  figures: string;
  text: string;
}[];

type PeopleStories = {
  text: string;
  person: string;
}[];

type HowItWorks = {
  title: string;
  text: string;
  icon: IconType;
}[];

type Sectors = {
  sectorName: "private" | "public" | "busines";
  heading: string;
  description: string;
  extras: string[];
  icon: IconType;
  image: string;
}[];

export type SiteContent = {
  why: Why;
  trustedByPeople: TrustedByPeople;
  trustedByCompanies: TrustedByCompanies;
  stats: Stats;
  peopleStories: PeopleStories;
  howItWorks: HowItWorks;
  sectors: Sectors
};

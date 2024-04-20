// type NavigationKeys =
//     | 'home'
//     | 'properties'
//     | 'developers'
//     | 'mortgageBanks'
//     | 'consultAnExpert';

import { type Icons } from "@/components/common/icons";

export type IconType = keyof typeof Icons;


interface NavigationEntry {
    label: string;
    link: string;
}

interface FooterLink {
    link: string;
    label: string;
}

interface SocialLink {
    link: string;
    icon: IconType;
}

type FooterHeading = "developers" | "banks" | "legal" | "contact us" | "site navigation";

interface FooterCategory {
    heading: FooterHeading;
    links: FooterLink[];
}

export interface SiteNavigation {
    navbarNavigation: NavigationEntry[];
    footerLinks: Record<"categories", FooterCategory[]>;
    socialLinks: SocialLink[];
}

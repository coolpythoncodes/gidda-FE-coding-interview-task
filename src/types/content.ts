type Why = {
    title: string;
    text: string;
    defaultIcon?: string;
    hoverIcon?: string;
}[]

type TrustedByPeople = {
    id: string;
    name: string;
    role: string;
}

type Stats = {
    figures: string;
    text: string
}[]

export type SiteContent = {
    why: Why,
    trustedByPeople: TrustedByPeople,
    stats: Stats
}
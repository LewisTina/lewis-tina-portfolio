export interface imageProps {
    link: string
    alt: string
}

export interface ProjectProps {
    logo?: imageProps
    title: string
    activities: string,
    owner: string,
    cover: imageProps
    introduction: {en: string, fr: string}
    contribution: {en: string, fr: string}
    technos: string[]
    contributionBlocImg: imageProps[]
    technosBlocImg: imageProps[]
    githubLink?: string
    behanceLink?: string
    projectLink?: string
    projectCategories: string
    resume: {en: string, fr: string}
}

export interface LayoutProps {
    title?: string,
    children: React.ReactNode;
}

export interface VisualisationLayoutProps {
    cover: string,
    resume: string,
    projectTitle: string
    children: React.ReactNode;
}
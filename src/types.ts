export type Skill = {
    name: string;
    level: number;
    category: 'Frontend' | 'Backend' | 'Database' | 'DevOps';
}

export type Experience = {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    current: boolean;
}

export type Project = {
    title: string;
    description: string;
    techStack: string[];
    link: string;
    imageUrl: string;
}

export type Education = {
    id: number;
    degree: string;
    institution: string;
    field: string;
    description: string;
    startDate: string;
    endDate: string;
}

export const categories = ['Frontend', 'Backend', 'DevOps'] as const;

type Category = (typeof categories)[number];

type Skill = {
  name: string;
  level: number;
  category: Category;
};

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'JavaScript', level: 95, category: 'Frontend' },

  { name: 'Node.js', level: 90, category: 'Backend' },
  { name: 'Python', level: 92, category: 'Backend' },
  { name: 'MySQL', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: 'C#', level: 60, category: 'Backend' },
  { name: 'Database Design', level: 88, category: 'Backend' },
  { name: 'REST APIs', level: 90, category: 'Backend' },

  { name: 'Docker', level: 82, category: 'DevOps' },
  { name: 'Linux', level: 88, category: 'DevOps' },
  { name: 'Git', level: 90, category: 'DevOps' },
];

const Skills = {
  no: {
    title: 'Teknisk Arsenal',
    subtitle: 'En omfattende oversikt over teknologiene jeg bruker for å bringe idéer til liv.',
    categories: {
      Frontend: 'Frontend',
      Backend: 'Backend',
      DevOps: 'DevOps',
      Emerging: 'Fremvoksende',
    },
    skills,
  },
  en: {
    title: 'Technical Arsenal',
    subtitle: 'A comprehensive overview of the technologies I use to bring ideas to life.',
    categories: {
      Frontend: 'Frontend',
      Backend: 'Backend',
      DevOps: 'DevOps',
      Emerging: 'Emerging',
    },
    skills,
  },
};

export default Skills;

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  overview: string;
  location: string;
  date: string;
  image1: string;
  image2: string;
  tags: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "one-barrow-community-outreach",
    title: "One Barrow X Refab Africa Medical Outreach",
    description:
      "Refab Africa is not built in isolation. Our work thrives through collaboration with creatives, artisans, brands, communities.",
    overview:
      "Refab Africa partnered with One Barrow Medical Outreach to support a community-focused healthcare initiative through sustainable, purpose-driven solutions. By repurposing textile waste into functional materials, the collaboration demonstrated how sustainability and social impact can intersect in real-world contexts.",
    location: "Wumba Community & Wuse Parade Ground",
    date: "21st January 2019 – 24th January 2019",
    image1: "/images/project-onebarrow-1.png",
    image2: "/images/project-onebarrow-2.png",
    tags: ["Medical checkup", "Cloth Bank"],
    gallery: [
      "/images/project-onebarrow-1.png",
      "/images/project-onebarrow-2.png",
      "/images/project-onebarrow-1.png",
      "/images/project-onebarrow-2.png",
      "/images/project-onebarrow-1.png",
    ],
  },
  {
    id: 2,
    slug: "odyssey-community-outreach",
    title: "Odyssey Foundation X Refab Africa Community Outreach",
    description:
      "Refab Africa is not built in isolation. Our work thrives through collaboration with creatives, artisans, brands, communities.",
    overview:
      "Refab Africa joined forces with the Odyssey Foundation to deliver a wide-ranging community outreach programme centred on healthcare access and sustainable textile distribution. The partnership highlighted the power of purpose-driven collaboration in driving meaningful change across underserved communities in Nigeria.",
    location: "Abuja, Nigeria",
    date: "2020",
    image1: "/images/project-odyssey-1.png",
    image2: "/images/project-odyssey-2.png",
    tags: ["Medical checkup", "Cloth Bank"],
    gallery: [
      "/images/project-odyssey-1.png",
      "/images/project-odyssey-2.png",
      "/images/project-odyssey-1.png",
      "/images/project-odyssey-2.png",
      "/images/project-odyssey-1.png",
    ],
  },
  {
    id: 3,
    slug: "one-barrow-community-outreach-2",
    title: "One Barrow X Refab Africa Community Outreach",
    description:
      "Refab Africa is not built in isolation. Our work thrives through collaboration with creatives, artisans, brands, communities.",
    overview:
      "Refab Africa partnered with One Barrow Medical Outreach to support a community-focused healthcare initiative through sustainable, purpose-driven solutions. By repurposing textile waste into functional materials, the collaboration demonstrated how sustainability and social impact can intersect in real-world contexts.",
    location: "Wumba Community & Wuse Parade Ground",
    date: "21st January 2019 – 24th January 2019",
    image1: "/images/project-onebarrow-1.png",
    image2: "/images/project-onebarrow-2.png",
    tags: ["Medical checkup", "Cloth Bank"],
    gallery: [
      "/images/project-onebarrow-1.png",
      "/images/project-onebarrow-2.png",
      "/images/project-onebarrow-1.png",
      "/images/project-onebarrow-2.png",
      "/images/project-onebarrow-1.png",
    ],
  },
  {
    id: 4,
    slug: "odyssey-community-outreach-2",
    title: "Odyssey Foundation X Refab Africa Community Outreach",
    description:
      "Refab Africa is not built in isolation. Our work thrives through collaboration with creatives, artisans, brands, communities.",
    overview:
      "Refab Africa joined forces with the Odyssey Foundation to deliver a wide-ranging community outreach programme centred on healthcare access and sustainable textile distribution. The partnership highlighted the power of purpose-driven collaboration in driving meaningful change across underserved communities in Nigeria.",
    location: "Abuja, Nigeria",
    date: "2020",
    image1: "/images/project-odyssey-1.png",
    image2: "/images/project-odyssey-2.png",
    tags: ["Medical checkup", "Cloth Bank"],
    gallery: [
      "/images/project-odyssey-1.png",
      "/images/project-odyssey-2.png",
      "/images/project-odyssey-1.png",
      "/images/project-odyssey-2.png",
      "/images/project-odyssey-1.png",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

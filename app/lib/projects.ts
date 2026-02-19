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
  challenge: string;
  approach: string;
  impact: string;
  keyTakeaway: string;
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
    challenge:
      "Community medical outreach programs often operate with limited resources while addressing critical healthcare needs. At the same time, large volumes of usable textile materials are discarded without a second life. The challenge was to bridge these two realities, transforming waste into support while maintaining dignity, quality, and usefulness.",
    approach:
      "Refab Africa worked closely with One Barrow Medical Outreach to identify practical needs and opportunities for support. Recovered textiles were thoughtfully repurposed into functional items that could be used during outreach activities, ensuring both environmental responsibility and real utility. Collaboration and context guided every decision, from material selection to final delivery.",
    impact:
      "The project contributed to reduced textile waste while supporting community healthcare efforts in a meaningful, respectful way. Beyond the physical outputs, the collaboration highlighted the potential of cross-sector partnerships to create layered impact — environmental, social, and human.",
    keyTakeaway:
      "This project reflects Refab Africa's belief that sustainability is most powerful when it serves people directly. By aligning environmental responsibility with social needs, impact becomes both practical and human-centered.",
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
    challenge:
      "Access to healthcare in underserved communities remains a persistent challenge, compounded by a lack of essential supplies and wearable support materials. Meanwhile, significant textile waste continues to accumulate across Nigeria. The challenge was to address both issues simultaneously — delivering healthcare access while giving discarded materials a meaningful second life.",
    approach:
      "Refab Africa partnered with the Odyssey Foundation to design and deliver repurposed textile items suited for community outreach activities. Every material choice was guided by the community's needs and the foundation's outreach goals, ensuring that sustainability and practicality worked hand in hand throughout the programme.",
    impact:
      "The collaboration extended healthcare reach to underserved populations while diverting textile waste from landfills. It reinforced that purpose-led partnerships between sustainability organisations and community foundations can create compounding social and environmental value.",
    keyTakeaway:
      "When sustainability is aligned with direct human need, its impact multiplies. This project proved that repurposed textiles can be both environmentally responsible and deeply meaningful to the people who receive them.",
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
    challenge:
      "Community medical outreach programs often operate with limited resources while addressing critical healthcare needs. At the same time, large volumes of usable textile materials are discarded without a second life. The challenge was to bridge these two realities, transforming waste into support while maintaining dignity, quality, and usefulness.",
    approach:
      "Refab Africa worked closely with One Barrow Medical Outreach to identify practical needs and opportunities for support. Recovered textiles were thoughtfully repurposed into functional items that could be used during outreach activities, ensuring both environmental responsibility and real utility. Collaboration and context guided every decision, from material selection to final delivery.",
    impact:
      "The project contributed to reduced textile waste while supporting community healthcare efforts in a meaningful, respectful way. Beyond the physical outputs, the collaboration highlighted the potential of cross-sector partnerships to create layered impact — environmental, social, and human.",
    keyTakeaway:
      "This project reflects Refab Africa's belief that sustainability is most powerful when it serves people directly. By aligning environmental responsibility with social needs, impact becomes both practical and human-centered.",
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
    challenge:
      "Access to healthcare in underserved communities remains a persistent challenge, compounded by a lack of essential supplies and wearable support materials. Meanwhile, significant textile waste continues to accumulate across Nigeria. The challenge was to address both issues simultaneously — delivering healthcare access while giving discarded materials a meaningful second life.",
    approach:
      "Refab Africa partnered with the Odyssey Foundation to design and deliver repurposed textile items suited for community outreach activities. Every material choice was guided by the community's needs and the foundation's outreach goals, ensuring that sustainability and practicality worked hand in hand throughout the programme.",
    impact:
      "The collaboration extended healthcare reach to underserved populations while diverting textile waste from landfills. It reinforced that purpose-led partnerships between sustainability organisations and community foundations can create compounding social and environmental value.",
    keyTakeaway:
      "When sustainability is aligned with direct human need, its impact multiplies. This project proved that repurposed textiles can be both environmentally responsible and deeply meaningful to the people who receive them.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

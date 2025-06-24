export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  previewScript?: string;
}

// This would ideally be generated automatically, but for simplicity,
// you'll need to manually update this when adding new projects
export const projects: Project[] = [
  {
    id: "rose",
    title: "Roses are Red, Violets are Blue, Sugar is sweet, and So are You",
    description: "A little animated rose",
    date: "2025-06-23",
    tags: ["animation"]
  },
  {
    id: "galaxy",
    title: "Galaxy",
    description: "A mesmerizing galaxy animation made with webgl",
    date: "2025-06-23",
    tags: ["webgl", "animation"],
    previewScript: `
      for (const el of document.getElementsByTagName('h1')) { el.style.display = 'none'; }
      for (const el of document.getElementsByTagName('p')) { el.style.display = 'none'; }
    `
  }
];

import ProjectThumbnail from './components/ProjectThumbnail';
import { projects } from './lib/projects';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Digital Art Collection
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          A curated collection of interactive and generative art pieces
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectThumbnail key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

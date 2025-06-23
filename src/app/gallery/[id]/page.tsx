import { notFound } from 'next/navigation';
import { projects } from '@/app/lib/projects';
import ProjectViewer from './ProjectViewer';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Art Gallery`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-foreground/70 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 items-center text-sm">
            <time className="text-foreground/50">
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            
            {project.tags && project.tags.length > 0 && (
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <ProjectViewer projectId={project.id} />
      </div>
    </div>
  );
}

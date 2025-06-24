'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Project } from '@/app/lib/projects';

export default function ProjectThumbnail({ project }: { project: Project }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);


  const injectScript = () => {
    const iframe = iframeRef.current;
    if (!iframe || !project.previewScript) return;
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc) return;
      const script = doc.createElement('script');
      script.type = 'text/javascript';
      script.text = project.previewScript;
      doc.head.appendChild(script);
      console.log('Preview script injected successfully');
    } catch (e) {
      console.error('Failed to inject preview script:', e);
    }
  };


  return (
    <Link
      href={`/gallery/${project.id}`}
      className="group block"
    >
      <article className="h-full bg-card border border-white/10 rounded-lg overflow-hidden hover:bg-card-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        {/* Live iframe preview */}
        <div className="aspect-video relative overflow-hidden bg-black">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <div className="animate-pulse text-white/40">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}
          
          <iframe
            ref={iframeRef}
            src={`/projects/${project.id}/index.html`}
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            frameBorder="0"
            title={`${project.title} preview`}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            onLoad={() => {setIsLoading(false); injectScript()}}
            scrolling='no'
          />
          
          {/* Overlay to prevent interaction and show it's clickable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-white text-sm font-medium">View Project</span>
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h2>
          <p className="text-foreground/70 mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between">
            <time className="text-sm text-foreground/50">
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
            
            {project.tags && project.tags.length > 0 && (
              <div className="flex gap-2">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

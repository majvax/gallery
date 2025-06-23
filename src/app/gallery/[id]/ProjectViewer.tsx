'use client';

import { useState } from 'react';

export default function ProjectViewer({ projectId }: { projectId: string }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const projectUrl = `/projects/${projectId}/index.html`;


  return (
    <div className="relative">
      <div className="relative pb-[56.25%] sm:pb-[75%] lg:pb-[56.25%]'} bg-card rounded-lg overflow-hidden border border-white/10">
        <iframe
          src={projectUrl}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          title="Art project viewer"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      
      <div className="mt-4 flex gap-2">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        >
          Open in New Tab
        </a>
      </div>
    </div>
  );
}

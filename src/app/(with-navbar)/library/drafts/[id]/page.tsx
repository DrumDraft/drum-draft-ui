"use client";

import { DraftStructurePanel } from '@/features/library/ui/DraftStructurePanel';
import { PatternBrowser } from '@/features/library/ui/PatternBrowser';
import { PatternEditor } from '@/features/pattern-editor/ui';
import { PageContent, PageHeader } from '@/shared/ui/page';

export default function DraftPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col h-screen">
      <PageHeader title={`Некое название ${params.id}`} />
      <PageContent className="flex-grow overflow-hidden">
        <div className="flex gap-4 h-[50%] pb-4">
          <DraftStructurePanel />
          <div className="flex-1 h-full">
            <PatternBrowser />
          </div>
        </div>
        <div className="h-[50%]">
          <PatternEditor />
        </div>
      </PageContent>
    </div>
  );
}

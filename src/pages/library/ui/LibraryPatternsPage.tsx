"use client";

import { CreatePatternButton, PatternLibrary } from '@/features/library/ui';
import { PageHeader } from '@/shared/ui';

export const LibraryPatternsPage: React.FC = () => {
  return (
    <div className="page-container">
      <PageHeader
        title="Библиотека ритмов"
        endContent={<CreatePatternButton />}
      />

      <PatternLibrary />
    </div>
  );
};

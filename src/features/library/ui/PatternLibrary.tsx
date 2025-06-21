"use client";

import { FC, useEffect } from 'react';
import { usePatternLibraryStore } from '../model';
import { LibraryPatternPreview } from './LibraryPatternPreview';

export const PatternLibrary: FC = ({}) => {
  const { patterns, fetchPatterns } = usePatternLibraryStore();

  useEffect(() => {
    fetchPatterns();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {patterns.map((pattern) => (
        <LibraryPatternPreview key={pattern.id} pattern={pattern} />
      ))}
    </div>
  );
};

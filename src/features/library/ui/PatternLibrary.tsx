"use client";

import { PatternCard } from "@/entities/pattern/ui/pattern-card/PatternCard";
import { FC, useEffect } from "react";
import { useLibraryStore } from "../model";

export const PatternLibrary: FC = ({}) => {
  const { patterns, fetchPatterns } = useLibraryStore();

  useEffect(() => {
    fetchPatterns();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {patterns.map((pattern) => (
        <PatternCard
          key={pattern.id}
          pattern={pattern.pattern}
          title={pattern.title}
          isPublic={pattern.isPublic}
        />
      ))}
    </div>
  );
};

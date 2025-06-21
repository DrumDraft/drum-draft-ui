"use client";

import { Card, CardBody, Tab, Tabs } from '@heroui/react';
import { FC, useEffect, useState } from 'react';
import { usePatternLibraryStore } from '../model';
import { LibraryPatternPreview } from './LibraryPatternPreview';

export const PatternBrowser: FC = () => {
  const { patterns, fetchPatterns } = usePatternLibraryStore();
  const [activeTab, setActiveTab] = useState("my-library");

  useEffect(() => {
    fetchPatterns();
  }, [fetchPatterns]);

  return (
    <Card className="h-full">
      <CardBody>
        <Tabs
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key as string)}
        >
          <Tab key="project-patterns" title="Ритмы в проекте" />
          <Tab key="my-library" title="Моя библиотека" />
          <Tab key="global-search" title="Глобальный поиск" />
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-4 overflow-y-auto">
          {patterns.map((pattern) => (
            <LibraryPatternPreview key={pattern.id} pattern={pattern} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

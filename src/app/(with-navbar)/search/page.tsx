"use client";

import { PatternEditor } from '@/features/pattern-editor/ui';
import { PageContent, PageHeader } from '@/shared/ui/page';
import { Button } from '@heroui/react';
import { SearchIcon } from 'lucide-react';

export default function SearchPage() {
  return (
    <>
      <PageHeader
        title="Поиск по ритму"
        description="Набейте ритм в редакторе, чтобы найти похожие паттерны"
      />
      <PageContent>
        <div className="flex flex-col gap-4">
          <PatternEditor />
          <div className="flex justify-end">
            <Button color="primary" startContent={<SearchIcon size={16} />}>
              Найти похожие
            </Button>
          </div>
          <div>
            {/* Здесь будут отображаться результаты поиска */}
            <h2 className="text-lg font-semibold mb-4">Результаты поиска</h2>
            <div className="p-4 border-dashed border-2 border-gray-300 rounded-lg text-center">
              <p className="text-gray-500">Результаты поиска появятся здесь</p>
            </div>
          </div>
        </div>
      </PageContent>
    </>
  );
}

"use client";

import { DraftCard } from '@/features/library/ui/DraftCard';
import { PageContent, PageHeader } from '@/shared/ui/page';
import { Button } from '@heroui/react';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

const mockDrafts = [
  { id: "1", title: "My Awesome Song", updatedAt: "2 hours ago" },
  { id: "2", title: "New Beat Idea", updatedAt: "1 day ago" },
  { id: "3", title: "Untitled Funk Groove", updatedAt: "3 days ago" },
];

export default function DraftsPage() {
  return (
    <>
      <PageHeader
        title="My Drafts"
        endContent={
          <Link href="/library/drafts/new">
            <Button color="primary" startContent={<PlusIcon size={16} />}>
              Create Draft
            </Button>
          </Link>
        }
      />
      <PageContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockDrafts.map((draft) => (
            <DraftCard key={draft.id} draft={draft} />
          ))}
        </div>
      </PageContent>
    </>
  );
}

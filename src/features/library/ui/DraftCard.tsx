"use client";

import { Card, CardBody, CardHeader } from '@heroui/react';
import Link from 'next/link';
import { FC } from 'react';

interface DraftCardProps {
  draft: {
    id: string;
    title: string;
    updatedAt: string;
  };
}

export const DraftCard: FC<DraftCardProps> = ({ draft }) => {
  return (
    <Link href={`/library/drafts/${draft.id}`}>
      <Card isPressable isHoverable>
        <CardHeader>
          <h3 className="font-semibold">{draft.title}</h3>
        </CardHeader>
        <CardBody>
          <p className="text-sm text-gray-500">
            Last updated: {draft.updatedAt}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

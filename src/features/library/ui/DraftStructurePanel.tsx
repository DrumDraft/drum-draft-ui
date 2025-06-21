"use client";

import { Button, Card, CardBody } from '@heroui/react';
import { PlusIcon } from 'lucide-react';
import { FC } from 'react';

const parts = [
  { id: "a1", name: "A1" },
  { id: "b1", name: "B1" },
  { id: "c1", name: "C1" },
  { id: "d1", name: "D1" },
];

export const DraftStructurePanel: FC = () => {
  return (
    <Card className="w-64 h-full">
      <CardBody>
        <h2 className="text-lg font-semibold">Структура</h2>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Part name</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {parts.map((part) => (
              <Card
                isPressable
                key={part.id}
                className="flex items-center justify-center p-4 h-20"
              >
                <p className="font-semibold">{part.name}</p>
              </Card>
            ))}
            <Button
              isIconOnly
              variant="flat"
              className="flex items-center justify-center h-20"
            >
              <PlusIcon size={24} />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

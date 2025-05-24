"use client";

import { PatternLibrary } from '@/features/library/ui/PatternLibrary';
import { PatternEditor } from '@/features/pattern-editor/ui/PatternEditor';
import { PageHeader } from '@/shared/ui';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@heroui/react';
import { PlusIcon } from 'lucide-react';
import { useRef, useState } from 'react';

export const LibraryPatternsPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const drawerPortalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="page-container">
      <PageHeader
        title="Библиотека ритмов"
        endContent={
          <Button
            color="primary"
            onPress={() => setModalOpen(!modalOpen)}
            startContent={<PlusIcon size={20} />}
          >
            Добавить ритм
          </Button>
        }
      />

      <PatternLibrary />

      <Modal
        closeButton={false}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Создать новый ритм
              </ModalHeader>
              <ModalBody>
                <PatternEditor />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

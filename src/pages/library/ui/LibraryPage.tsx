"use client";

import { routes } from "@/shared/config/routes";
import { PageHeader } from "@/shared/ui/page/PageHeader";
import { PageMain } from "@/shared/ui/page/PageMain";
import { Card, CardBody, CardHeader } from "@heroui/react";
import Link from "next/link";

export const LibraryPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Библиотека" />
      <PageMain>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <Card shadow="sm" as={Link} href={routes.library.patterns}>
            <CardHeader>
              <h3 className="text-lg font-bold">Ритмы</h3>
            </CardHeader>
            <CardBody>Перейти в библиотеку ритмов</CardBody>
          </Card>

          <Card shadow="sm" as={Link} href={routes.library.drafts}>
            <CardHeader>
              <h3 className="text-lg font-bold">Проекты</h3>
            </CardHeader>
            <CardBody>Перейти в библиотеку проектов</CardBody>
          </Card>
        </div>
      </PageMain>
    </>
  );
};

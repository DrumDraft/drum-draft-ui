"use client";
import { usePageContext } from '@/shared/model/page.context';
import { EndContentProp } from '@/shared/types';
import { Button } from '@heroui/react';
import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';
import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface HeaderProps extends React.PropsWithChildren, EndContentProp {
  title: string;
  breadcrumbs?: Array<{
    key: string;
    label: string;
    href?: string;
  }>;
  withBackButton?: boolean;
}

export const PageHeader: React.FC<HeaderProps> = ({
  children,
  title,
  endContent,
  breadcrumbs,
  withBackButton = false,
}) => {
  const { setHasHeader, setHeaderSize } = usePageContext();
  const router = useRouter();

  useEffect(() => {
    setHasHeader(true);
    setHeaderSize("md");
  }, []);

  const handleBackNavigation = () => {
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/").filter(Boolean);
    if (segments.length > 1) {
      const parentPath = "/" + segments.slice(0, -1).join("/");
      router.push(parentPath);
    } else {
      router.back();
    }
  };

  return (
    <header className="relative px-4 w-full h-[80px] flex flex-row justify-between">
      {breadcrumbs && (
        <div className="mb-1 absolute top-4 left-2">
          <Breadcrumbs>
            {breadcrumbs.map((item) => (
              <BreadcrumbItem key={item.key} href={item.href}>
                {item.label}
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        </div>
      )}
      <div className="flex items-center gap-4">
        {withBackButton && (
          <Button
            isIconOnly
            variant="light"
            onPress={handleBackNavigation}
            aria-label="Вернуться назад"
          >
            <ArrowLeftIcon />
          </Button>
        )}
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center">
        {children && <div className="flex items-center">{children}</div>}
        {endContent && (
          <div className="flex items-center ml-auto">{endContent}</div>
        )}
      </div>
    </header>
  );
};

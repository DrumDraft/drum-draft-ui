import { ClassNameProp } from '@/shared/types';
import { Card, CardBody } from '@heroui/react';
import clsx from 'clsx';
import { FC } from 'react';
import { Pattern } from '../../types';
import { PatternPreview } from '../pattern-preview/PatternPreview';

interface PatternCardProps extends ClassNameProp {
  pattern: Pattern;
}

export const PatternCard: FC<PatternCardProps> = ({ pattern, className }) => {
  return (
    <Card className={clsx(className, "relative group")}>
      <CardBody className="flex items-center justify-center">
        <PatternPreview pattern={pattern} />
      </CardBody>
    </Card>
  );
};

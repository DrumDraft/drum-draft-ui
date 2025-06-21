import { patternToAbcString } from '@/entities/pattern/lib/pattern.utils';
import { ClassNameProp } from '@/shared/types';
import { Abc } from '@/shared/ui/abc/Abc';
import clsx from 'clsx';
import { FC } from 'react';
import { Pattern } from '../../types';

interface PatternPreviewProps extends ClassNameProp {
  pattern: Pattern;
}

export const PatternPreview: FC<PatternPreviewProps> = ({
  className,
  pattern,
}) => {
  const abc = patternToAbcString(pattern);

  return (
    <Abc
      className={clsx(className, "pointer-events-none")}
      abcString={abc}
      visualParams={{
        staffwidth: 320,
        paddingtop: -4,
        paddingbottom: 4,
        paddingright: 4,
        paddingleft: -20,
        add_classes: true,
        responsive: "resize",
      }}
    />
  );
};

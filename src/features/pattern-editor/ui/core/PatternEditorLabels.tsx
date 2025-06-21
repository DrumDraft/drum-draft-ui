import { PatternEditorConfig } from '@/shared/config/pattern-editor';
import { Image } from '@heroui/react';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { usePatternEditorStore } from '../../model';

interface PatternEditorLabelsProps {
  onlyIcons?: boolean;
}

const PatternEditorLabelsComponent: React.FC<PatternEditorLabelsProps> = ({
  onlyIcons = false,
}) => {
  const currentDrumType = usePatternEditorStore(
    (state) => state.currentDrumType
  );

  const listItems = useMemo(() => {
    return PatternEditorConfig.rows.map(({ drumType, label, icon }) => (
      <li
        className={clsx(
          "flex items-center justify-start gap-2 px-1 select-none overflow-hidden whitespace-nowrap hover:bg-content2 rounded-lg",
          drumType === currentDrumType && "bg-content2"
        )}
        style={{ height: `${PatternEditorConfig.rowHeight}px` }}
        key={drumType}
      >
        <div className="flex items-center justify-center flex-shrink-0">
          <Image
            src={`/drum-icons/${icon}.svg`}
            alt={drumType}
            width={40}
            height={40}
            className="dark:invert"
          />
        </div>
        {!onlyIcons && <span className="text-m font-medium">{label}</span>}
      </li>
    ));
  }, [currentDrumType, onlyIcons]);

  return <ul className="w-full h-full justify-between pr-3">{listItems}</ul>;
};

export const PatternEditorLabels = React.memo(
  PatternEditorLabelsComponent,
  (prevProps, nextProps) => {
    return prevProps.onlyIcons === nextProps.onlyIcons;
  }
);

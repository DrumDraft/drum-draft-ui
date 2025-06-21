import { TimeSignature } from '@/entities/pattern/types';
import { Sidebar } from '@/shared/ui';
import { useEffect } from 'react';
import { usePatternEditorStore } from '../../model';
import { GridResolution } from '../../types';
import { PatternEditorCanvas } from '../canvas/PatternEditorCanvas';
import { PatternEditorLabels } from './PatternEditorLabels';

export interface PatternEditorProps {
  grid: GridResolution;
  signature: TimeSignature;
}

export const PatternEditor: React.FC = () => {
  const { clear } = usePatternEditorStore();

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
      <Sidebar maxWidth={180} minWidth={60}>
        {({ isOpen }) => <PatternEditorLabels onlyIcons={!isOpen} />}
      </Sidebar>

      <PatternEditorCanvas />
    </div>
  );
};

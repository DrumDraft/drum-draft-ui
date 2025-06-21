import { Select, SelectItem, SelectSection } from '@heroui/react';
import { usePatternEditorStore } from '../../model/pattern-editor.store';

const straightGridResolutions = [
  { value: "1/4", label: "1/4" },
  { value: "1/8", label: "1/8" },
  { value: "1/16", label: "1/16" },
  { value: "1/32", label: "1/32" },
] as const;

const tripletGridResolutions = [
  { value: "1/8t", label: "1/8t" },
  { value: "1/16t", label: "1/16t" },
  { value: "1/32t", label: "1/32t" },
] as const;

export const PatternEditorGridResolutionSelect = () => {
  const { gridResolution, setGridResolution } = usePatternEditorStore();

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "") return;

    setGridResolution(value as typeof gridResolution);
  };

  return (
    <Select
      selectedKeys={[gridResolution]}
      onChange={handleSelectionChange}
      className="w-24"
      aria-label="Выберите разрешение сетки"
      label="Сетка"
    >
      <SelectSection title="Прямые">
        {straightGridResolutions.map((resolution) => (
          <SelectItem key={resolution.value}>{resolution.label}</SelectItem>
        ))}
      </SelectSection>
      <SelectSection title="Триольные">
        {tripletGridResolutions.map((resolution) => (
          <SelectItem key={resolution.value}>{resolution.label}</SelectItem>
        ))}
      </SelectSection>
    </Select>
  );
};

import { SignatureMeasure } from '@/entities/pattern/types';
import { Select, SelectItem, SelectSection } from '@heroui/react';
import { usePatternEditorStore } from '../../model/pattern-editor.store';

const commonSignatures = [
  { value: "4/4", label: "4/4" },
  { value: "3/4", label: "3/4" },
  { value: "2/4", label: "2/4" },
  { value: "6/8", label: "6/8" },
] as const;

const compoundSignatures = [
  { value: "5/4", label: "5/4" },
  { value: "7/4", label: "7/4" },
  { value: "7/8", label: "7/8" },
  { value: "9/8", label: "9/8" },
  { value: "12/8", label: "12/8" },
] as const;

export const PatternEditorSignatureSelect = () => {
  const { signature, setSignature } = usePatternEditorStore();

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "") return;

    const [numerator, denominator] = value.split("/").map(Number);
    if (
      denominator === 4 ||
      denominator === 8 ||
      denominator === 16 ||
      denominator === 32
    ) {
      setSignature({ numerator, denominator: denominator as SignatureMeasure });
    }
  };

  const signatureString = `${signature.numerator}/${signature.denominator}`;

  return (
    <Select
      selectedKeys={[signatureString]}
      onChange={handleSelectionChange}
      className="w-24"
      aria-label="Выберите музыкальный размер"
      label="Размер"
    >
      <SelectSection title="Простые">
        {commonSignatures.map((sig) => (
          <SelectItem key={sig.value}>{sig.label}</SelectItem>
        ))}
      </SelectSection>
      <SelectSection title="Сложные">
        {compoundSignatures.map((sig) => (
          <SelectItem key={sig.value}>{sig.label}</SelectItem>
        ))}
      </SelectSection>
    </Select>
  );
};

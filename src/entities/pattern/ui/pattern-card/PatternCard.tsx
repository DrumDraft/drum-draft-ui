import { ClassNameProp } from "@/shared/types";
import { Card } from "@heroui/react";
import clsx from "clsx";
import { FC } from "react";
import { Pattern } from "../../types";
import { PatternPreview } from "../pattern-preview/PatternPreview";

interface PatternCardProps extends ClassNameProp {
  pattern: Pattern;
  title: string;
  isPublic: boolean;
}

export const PatternCard: FC<PatternCardProps> = ({ pattern, className }) => {
  return (
    <Card className={clsx(className, "p-3")}>
      <PatternPreview pattern={pattern} />
    </Card>
  );
};

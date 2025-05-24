import { patternToAbcString } from "@/entities/library/lib/pattern.utils";
import { ClassNameProp } from "@/shared/types";
import { Abc } from "@/shared/ui/abc/Abc";
import { FC } from "react";
import { Pattern } from "../../types";

interface PatternPreviewProps extends ClassNameProp {
  pattern: Pattern;
}

export const PatternPreview: FC<PatternPreviewProps> = ({
  className,
  pattern,
}) => {
  const abc = patternToAbcString(pattern);

  return <Abc abcString={abc} visualParams={{}} />;
};

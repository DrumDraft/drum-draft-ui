"use client";

import { ClassNameProp } from "@/shared/types/props";
import { AbcVisualParams, renderAbc } from "abcjs";
import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";

interface AbcProps extends ClassNameProp {
  abcString: string;
  visualParams: AbcVisualParams;
}

export const Abc: FC<AbcProps> = ({
  abcString,
  className,
  visualParams = {
    add_classes: true,
    responsive: "resize",
  },
}) => {
  const [abcTune, setAbcTune] = useState(abcString);
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current && renderAbc(inputEl.current, abcTune, visualParams);
  }, [abcTune]);

  useEffect(() => {
    setAbcTune(abcString);
  }, [abcString]);

  return <div ref={inputEl} className={clsx(className)}></div>;
};

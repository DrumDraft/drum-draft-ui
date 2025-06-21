import { Pattern, TimeSignature } from '@/entities/pattern/types';
import {
  DRUM_ALIAS_STRING,
  DRUM_MAPPING_STRING,
  ROOT_BEAT_LENGTH,
} from '../consts';
import { timeSignatureToString } from './signature.utile';

export const makeDrumAbcHeader = (
  signature: TimeSignature,
  baseLength = ROOT_BEAT_LENGTH,
  tempo?: number
) => {
  return (
    DRUM_MAPPING_STRING +
    DRUM_ALIAS_STRING +
    (tempo ? `Q: ${tempo}\n` : "") +
    `L: ${baseLength}\nK: perc\nM:${timeSignatureToString(signature) || ""}\nV:1 up\n`
  );
};

export const patternToAbcString = (pattern: Pattern) => {
  let abcString = "";
  if (true) abcString += DRUM_MAPPING_STRING;
  if (true) abcString += DRUM_ALIAS_STRING;
  abcString += `[L: ${ROOT_BEAT_LENGTH}]`;
  if (true)
    abcString += `[M: ${timeSignatureToString({ numerator: 4, denominator: 4 })}]`;
  abcString += "[K: perc]";
  abcString += "[V: 1 up]";
  abcString += `[FXg][Xg] [cXg][Xg]/[c]/ [Xg]/[c]/[FXg] [cXg][Xg]`;

  return abcString;
};

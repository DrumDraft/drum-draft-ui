import { TimeSignature } from '../types';

export const timeSignatureToString = (signature: TimeSignature) => {
  return `${signature.numerator}/${signature.denominator}`;
};

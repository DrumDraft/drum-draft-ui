import { Pattern } from "@/entities/pattern/types";

const abc = `X:1
Q:1/4=90
L:1/16
M:4/4
K:perc middle=f,,,
V:1
[B,,,!style=x!^D,]B,,,!style=x!^D,B,,,   [D,,!style=x!^D,]2!style=x!^D,D,, [B,,,!style=x!^D,]B,,,!style=x!^D,B,,, [D,,!style=x!^D,]2!style=x!^D,D,,|
[B,,,!style=x!^D,]B,,,^D,B,,,[D,,^D,]z^D,z[B,,,^C,^D,]z[B,,,^C,^D,]z[D,,^C,^D,]B,,,[^C,^D,]z|[B,,,^D,]B,,,^D,B,,,[D,,^D,]z^D,D,,[B,,,^D,]B,,,^D,B,,,[D,,^D,]z^D,D,,|[B,,,^D,]B,,,^D,B,,,[D,,^D,]z^D,z[B,,,^C,^D,]z[B,,,^C,^D,]z[D,,^C,^D,]B,,,[^C,^D,]z|
`;

export const patternToAbcString = (pattern: Pattern) => {
  return abc;
};

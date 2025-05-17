import { User } from './user';
import { Viewer } from './viewer';

export interface UserProp {
  user: User | Viewer | null;
}

/**
 *
 */
export interface MembersInterface {
  guid?: string;
  age: number;
  name: MembersNameInterface;
  email?: string;
}

/**
 *
 */
export interface MembersNameInterface {
  first: string;
  last: string;
}


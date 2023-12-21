import { Eventing } from "./Eventing";
import { Sync } from "./Sync";




export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  // NOTE:
  get<T extends keyof UserProps>(propName: T): UserProps[T] {
    return this.data[propName];
  }
  // NOTE:
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  // NOTE: Events Extracted
  // NOTE: Events Extracted
  // NOTE: Sync Extracted
  // NOTE: Sync Extracted
}



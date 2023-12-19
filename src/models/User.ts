import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}


export class User {

  constructor(private data: UserProps) {}

  // NOTE: This is
  get<T extends keyof UserProps>(propName: T): UserProps[T] {
    return this.data[propName];
  }
  // NOTE:
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  // NOTE:
  // NOTE:
  // NOTE:
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse) => {
        this.set(response.data);
      });
  }

  // NOTE:
  save(): void {
    const id = this.get("id");

    if (id) {
      // put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // post
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}

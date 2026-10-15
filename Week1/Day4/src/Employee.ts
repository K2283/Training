
export class Employee {
  id: number;
  name: string;
  department: string;

  constructor(
    id: number,
    name: string,
    department: string
  ){
    this.id = id;
    this.name = name;
    this.department = department;
  }

  getDetails(): string {
    return `${this.id} - ${this.name} - ${this.department}`;
  }
}

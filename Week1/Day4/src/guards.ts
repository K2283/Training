

// custom type guard is a function that checks whether a value matches a particular type
export interface Employee {
  id: number;
  name: string;
  department: string;
}

export function isEmployee(
  value: unknown
): value is Employee {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  if(!("id" in value) || !("name" in value) || !("department" in value)){
    return false;
  }

  return (typeof value.id === "number" && typeof value.name === "string" &&typeof value.department === "string" );
}

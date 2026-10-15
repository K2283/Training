
export type Department = "IT" | "HR" | "Finance" | "Marketing";

export interface Employee {
    id: number;
    name: string;
    department: Department;
    salary: number;
}

// Employee data without ID
export type CreateEmployeeInput = Omit<Employee, "id">;

// Employee updates only some fields
export type UpdateEmployeeInput = Partial<
    Omit<Employee, "id">
>;
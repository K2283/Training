import type { Employee, Department } from "./type.js";
import { employees } from "./emp.js";

//Get all employee names
export const getEmployeeNames = (): string[] =>
    employees.map(employee => employee.name);

//Get employees by department
export const getEmployeesByDepartment = (
    department: Department
): Employee[] =>
    employees.filter(employee => employee.department === department);

//Calculate average salary
export const getAverageSalary = (): number =>
    employees.length === 0
        ? 0
        : employees.reduce(
            (total, employee) => total + employee.salary,
            0
        ) / employees.length;

//Get top 3 highest salary employees
export const getTopThreeEarners = (): Employee[] =>
    [...employees]
        .sort((a, b) => b.salary - a.salary)
        .slice(0, 3);

//Search employees by name
export const searchEmployeesByName = (
    searchTerm: string
): Employee[] =>
    employees.filter(employee =>
        employee.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

//Find employee by ID
export const findEmployeeById = (
    id: number
): Employee | undefined =>
    employees.find(employee => employee.id === id);

//Group employees by department
export const groupByDepartment = (): Map<Department, Employee[]> =>
    employees.reduce((groups, employee) => {
        const department = employee.department;
        const departmentEmployees = groups.get(department) ?? [];

        groups.set(department, [
            ...departmentEmployees,
            employee
        ]);

        return groups;
    }, new Map<Department, Employee[]>());

//Get the total number of employees
export const getTotalEmployees = (): number =>
    employees.length;

//Get employees earning more than a given salary
export const getEmployeesAboveSalary = (
    salary: number
): Employee[] =>
    employees.filter(employee => employee.salary > salary);

//Check whether all employee salaries are positive
export const allSalariesArePositive = (): boolean =>
    employees.every(employee => employee.salary > 0);
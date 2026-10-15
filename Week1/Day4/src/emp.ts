import type { Employee } from "./type.js";

const employeeData = [
    { name: "Avinash", department: "IT", salary: 50000 },
    { name: "Ravi", department: "HR", salary: 45000 },
    { name: "Kiran", department: "Finance", salary: 60000 },
    { name: "Sita", department: "IT", salary: 55000 },
    { name: "Rahul", department: "Marketing", salary: 48000 },
    { name: "Priya", department: "HR", salary: 52000 },
    { name: "Arjun", department: "IT", salary: 75000 },
    { name: "Sneha", department: "Finance", salary: 58000 },
    { name: "Vikram", department: "Marketing", salary: 65000 },
    { name: "Anjali", department: "IT", salary: 62000 },

    { name: "Rohit", department: "HR", salary: 47000 },
    { name: "Pooja", department: "Finance", salary: 70000 },
    { name: "Suresh", department: "IT", salary: 68000 },
    { name: "Meena", department: "Marketing", salary: 50000 },
    { name: "Naveen", department: "HR", salary: 56000 },
    { name: "Divya", department: "Finance", salary: 62000 },
    { name: "Manoj", department: "IT", salary: 72000 },
    { name: "Swathi", department: "Marketing", salary: 54000 },
    { name: "Tarun", department: "HR", salary: 49000 },
    { name: "Lakshmi", department: "Finance", salary: 66000 },

    { name: "Sai", department: "IT", salary: 80000 },
    { name: "Neha", department: "HR", salary: 53000 },
    { name: "Varun", department: "Finance", salary: 75000 },
    { name: "Kavya", department: "Marketing", salary: 59000 },
    { name: "Ajay", department: "IT", salary: 61000 },
    { name: "Deepika", department: "HR", salary: 51000 },
    { name: "Harish", department: "Finance", salary: 68000 },
    { name: "Bhavya", department: "Marketing", salary: 63000 },
    { name: "Mohan", department: "IT", salary: 57000 },
    { name: "Keerthi", department: "HR", salary: 55000 },

    { name: "Prakash", department: "Finance", salary: 82000 },
    { name: "Asha", department: "Marketing", salary: 52000 },
    { name: "Chandra", department: "IT", salary: 74000 },
    { name: "Nandini", department: "HR", salary: 58000 },
    { name: "Gopal", department: "Finance", salary: 64000 },
    { name: "Teja", department: "Marketing", salary: 61000 },
    { name: "Ramesh", department: "IT", salary: 90000 },
    { name: "Ishita", department: "HR", salary: 60000 },
    { name: "Mahesh", department: "Finance", salary: 71000 },
    { name: "Riya", department: "Marketing", salary: 57000 },

    { name: "Sanjay", department: "IT", salary: 85000 },
    { name: "Varsha", department: "HR", salary: 62000 },
    { name: "Rakesh", department: "Finance", salary: 78000 },
    { name: "Nisha", department: "Marketing", salary: 66000 },
    { name: "Venkat", department: "IT", salary: 67000 },
    { name: "Harini", department: "HR", salary: 57000 },
    { name: "Dinesh", department: "Finance", salary: 69000 },
    { name: "Madhuri", department: "Marketing", salary: 60000 },
    { name: "Krishna", department: "IT", salary: 78000 },
    { name: "Sowmya", department: "HR", salary: 54000 }
] satisfies Omit<Employee, "id">[];

export const employees: Employee[] = employeeData.map(
    (employee, index): Employee => ({
        ...employee,
        id: index + 1001
    })
);
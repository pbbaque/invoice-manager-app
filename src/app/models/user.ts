import { Employee } from "./employee";

export interface User {
    id: number;
    username: string;
    password?: string;
    email: string;
    employee?: Employee | null;
}
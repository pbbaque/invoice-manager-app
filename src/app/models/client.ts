import { Address } from "./address";

export interface Client {
    id: number;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    address: Address;
}
import { Snack } from "./snack.model";

export type Request = {
    id: string;
    name: string;
    price: number;
    note?: string;
    status: "waiting" | "complete" | "canceled",
    user_id: number;
    created_at: string;
    updated_at: string;
    requestItems: Snack[]
}
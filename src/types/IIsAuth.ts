import { User } from "firebase/auth";

export interface IIsAuth {
    user: User | null | undefined;
    loading: boolean;
    error: Error | undefined
}
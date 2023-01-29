import { createContext, Dispatch, SetStateAction } from 'react'
import { User } from '../../models/user.model'

export type AuthContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    singin: (email: string, password: string) => Promise<boolean>;
    singout: () => void;
    refreshContex: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!)

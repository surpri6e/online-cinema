import { createContext } from 'react';
import { IIsAuth } from '../types/IIsAuth';

export const IsAuthContext = createContext<IIsAuth>({} as IIsAuth);

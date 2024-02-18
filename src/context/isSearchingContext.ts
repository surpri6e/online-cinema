import { createContext } from "react";
import { IIsSearchingContext } from "../types/IIsSearchingContext";

export const IsSearchingContext = createContext<IIsSearchingContext>({} as IIsSearchingContext);
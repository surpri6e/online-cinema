import { SerializedError } from '@reduxjs/toolkit/react';
import { IFilmSmall } from './IFilmSmall';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

export interface IMainBlock {
    items: IFilmSmall[] | undefined;
    isLoading: boolean;
    error: FetchBaseQueryError | SerializedError | undefined;
}

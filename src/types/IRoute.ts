export interface IRoute {
    page: () => JSX.Element;
    path: string;
}
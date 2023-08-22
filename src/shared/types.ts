export type RouteType = {
  name: string;
  path: string;
  meta: string;
  title: string;
};

export interface Route {
  [key: string]: RouteType;
}

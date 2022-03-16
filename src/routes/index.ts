import React from "react";
import { GamePage, LoginPage, StatisticPage } from "../pages";

interface IRouter {
  path: string;
  component: React.FC;
}

export const publicRoutes: IRouter[] = [{ path: "*", component: LoginPage }];

export const privateRoutes: IRouter[] = [
  { path: "/statistic", component: StatisticPage },
  { path: "*", component: GamePage },
];

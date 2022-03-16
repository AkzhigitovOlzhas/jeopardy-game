import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export const Header: FC = () => {
  const getLinkClass = ({ isActive }: any): string =>
    isActive ? [classes.link, classes.activeLink].join(" ") : classes.link;

  return (
    <div className={classes.header}>
      <NavLink to="/" className={getLinkClass}>
        Игра
      </NavLink>
      <NavLink to="/statistic" className={getLinkClass}>
        Статистика
      </NavLink>
    </div>
  );
};

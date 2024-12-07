import React from 'react';
import css from "./Loader.module.css"
import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.loader}>
       <Rings color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;

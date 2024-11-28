import React from 'react';
// import { Circles } from 'react-loader-spinner';
import css from "./Loader.module.css"
import { TailSpin } from 'react-loader-spinner';


const Loader = () => (
  <div className="loader">
    <TailSpin color="#1a237e" height={50} width={50} />
  </div>
);

export default Loader;

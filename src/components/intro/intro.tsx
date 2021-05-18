import React from "react";
import './intro.css';

interface IProps {
  topTitle?: string;
  bottomTitle?: string;
  children: React.ReactNode;
}

export default function Intro(props: IProps) {
  return (
    <div className="root-intro">
      <div className="intro">
        { props.topTitle === undefined ? '' : <h5> { props.topTitle } </h5> }
        { props.bottomTitle === undefined ? '' : <h2> { props.bottomTitle } </h2> }
        <hr />
        { props.children }
      </div>
    </div>
  );
}
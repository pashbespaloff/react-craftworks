import React from 'react';
import H1 from "../../ui/Heading";
import LoadingBio from "./LoadingBio";
import bioStyle from "./LoadingBio/LoadingBio.module.css";

export default function Effect() {
  return (
    <>
      <div className={bioStyle.biobox}>
        <H1>loading bio</H1>
        <LoadingBio />
      </div>
    </>
  );
};
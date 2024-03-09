"use client";
import React from "react";
import { Idb } from "../public/idb";

const Home = () => {
  Idb();
  return (
    <div>
      <h1>Hello Next.js!</h1>
    </div>
  );
};

export default Home;

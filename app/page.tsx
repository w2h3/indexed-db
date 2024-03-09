"use client";
import React from "react";
import { Idb } from "../public/idb";

const Home = () => {
  const prjid = process.env.VERCEL_PROJECT_ID;
  Idb(prjid);
  return (
    <head>title</head>
    <body><div>
      <h1>Hello Next.js!</h1>
    </div>
    </body>
  );
};

export default Home;

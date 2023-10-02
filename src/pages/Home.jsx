import React from "react";
import { Link } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";

const Home = () => {
  return (
    <div>
      <PageNavigation />
      <h1 className="test">world trip wiser</h1>
      <Link to={"/app"}>Go the App </Link>
    </div>
  );
};

export default Home;

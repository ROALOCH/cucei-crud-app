import React from "react";
import { MovieList } from "./MovieList";
import { Navbar } from "./ui/Navbar";

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <MovieList />
      </div>
    </>
  );
};

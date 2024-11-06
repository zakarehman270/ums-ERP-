"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import AllAps from "../Components/AllAps";

const HomePage = () => {
  return (
    <Provider store={store}>
      <AllAps />
    </Provider>
  );
};

export default HomePage;

"use client";
import axios from "axios";
import { useEffect } from "react";

export const TestApi = () => {
  useEffect(() => {
    axios
      .get("https://spotify23.p.rapidapi.com/albums/", {
        params: {
          ids: "3IBcauSj5M2A6lTeffJzdv",
        },
        headers: {
          "X-RapidAPI-key":
            "a7da05f2b1mshd749f16c75ab70ep1560d4jsn46a07a2b9907",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      })
      .then((res) => res.data)
      .then((res) => console.log(res));
  }, []);
  return <div></div>;
};

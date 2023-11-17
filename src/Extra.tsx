import axios from "axios";
import React, { useEffect } from "react";

const Extra = () => {
  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
    params: {
      "nutrition-type": "cooking",
      "category[0]": "generic-foods",
      "health[0]": "alcohol-free",
    },
    headers: {
      "X-RapidAPI-Key": "1bdf64a6dcmsh3e72aaebdf3d926p1db53cjsn6397c4019db1",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

  const getData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  getData();

  return <div>extra</div>;
};

export default Extra;

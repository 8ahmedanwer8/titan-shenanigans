import React, { useEffect } from "react";
import axios from "axios";
const Bruh = () => {
  const fetchTitans = async () => {
    const data = await axios.get("/titans");
    console.log(data);
  };

  useEffect(() => {
    fetchTitans();
  }, []);
  return <div>Bruh</div>;
};

export default Bruh;

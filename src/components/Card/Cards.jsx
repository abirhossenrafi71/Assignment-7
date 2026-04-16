import React from "react";
import Card from "./Card";

const Cards = ({ friendsData }) => {
  return (
    <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {friendsData.map((data) => (
        <Card key={data.id} data={data}></Card>
      ))}
    </div>
  );
};

export default Cards;

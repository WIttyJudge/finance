import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Работа", "Еда"],
  datasets: [
    {
      data: [90, 10],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
};

const PieGraph = (props) => {
  return <Pie data={data} width={150} height={50} />;
};

export default PieGraph;

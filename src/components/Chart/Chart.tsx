import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props: any) => {
  const dataPointsValue = props.dataPoints.map((el:any) => el.value)
  const MaxValue = Math.max(...dataPointsValue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => {
        return <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={MaxValue}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;

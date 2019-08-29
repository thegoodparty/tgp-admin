import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function WeeklyTrendChart({ title, chartData }) {
  const mapData = () => {
    const mappedData = [];
    if (chartData) {
      chartData.map(district => {
        mappedData.push({
          name: `${district.state.shortName}-${district.code}`,
          userCount: district.userCount,
        });
      });
    }
    return mappedData;
  };
  const data = mapData();
  return (
    <>
      <h3>{title}</h3>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="userCount" fill="#8884d8" name="New Users" />
      </BarChart>
    </>
  );
}

WeeklyTrendChart.propTypes = {
  title: PropTypes.string,
  chartData: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default WeeklyTrendChart;

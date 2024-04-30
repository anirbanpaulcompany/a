import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  ChartData: any[];
}

const Chart: React.FC<ChartProps> = ({ ChartData }) => {


const animeByYear: { [year: string]: string[] } = {};
  ChartData.forEach(anime => {
    const year = new Date(anime.aired.from).getFullYear().toString();
    if (!animeByYear[year]) {
      animeByYear[year] = [anime.title];
    } else {
      animeByYear[year].push(anime.title);
    }
  });

  const chartData = Object.keys(animeByYear).map(year => ({
    year,
    animeCount: animeByYear[year].length,
    animeList: animeByYear[year].join(', ')
  }));

  chartData.sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="animeChartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip
          labelFormatter={(value) => `Year ${value}`}
          formatter={(value, name, props) => [`${value} anime released`, props.payload.animeList]}
        />
        <Area type="monotone" dataKey="animeCount" stroke="#82ca9d" fill="url(#animeChartGradient)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;

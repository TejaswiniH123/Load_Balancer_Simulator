"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface TrendPoint {

  time: string;

  requests: number;
}

interface Props {

  data: TrendPoint[];
}

export default function RequestTrendChart({
  data,
}: Props) {

  return (

    <div
      className="
      bg-slate-900
      rounded-xl
      p-4
      mt-8"
    >

      <h2
        className="
        text-white
        text-xl
        mb-4"
      >
        Requests Over Time
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="requests"
            stroke="#22c55e"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}
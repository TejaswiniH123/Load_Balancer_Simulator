"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { ServerNode }
from "../types/ServerNode";

interface Props {
  servers: ServerNode[];
}

export default function ConnectionsChart({
  servers,
}: Props) {

  const data = servers.map(
    (server) => ({
      name: server.name,
      connections:
        server.currentConnections,
    })
  );

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
        Server Connections
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="connections"
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}
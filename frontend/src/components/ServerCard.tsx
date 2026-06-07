import { ServerNode }
from "../types/ServerNode";

interface Props {
  server: ServerNode;
}

export default function ServerCard({
  server,
}: Props) {

  return (

    <div
      className="
      rounded-xl
      shadow-lg
      p-6
      border
      bg-slate-900
      text-white"
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-4"
      >
        {server.name}
      </h2>

      <p>
        Connections:
        {" "}
        {server.currentConnections}
      </p>

      <p>
        Weight:
        {" "}
        {server.weight}
      </p>

      <p>
        CPU:
        {" "}
        {server.cpuUsage}%
      </p>

      <p>
        Response Time:
        {" "}
        {server.responseTime} ms
      </p>

      <p>
        Status:
        {" "}
        {server.active
          ? "🟢 Active"
          : "🔴 Down"}
      </p>

    </div>
  );
}
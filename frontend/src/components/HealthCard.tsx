interface Props {

  activeServers: number;
}

export default function HealthCard({
  activeServers,
}: Props) {

  return (

    <div
      className="
      bg-green-700
      text-white
      p-6
      rounded-xl"
    >

      <h3>
        Cluster Health
      </h3>

      <div
        className="
        text-2xl
        font-bold"
      >

        {activeServers > 0
          ? "HEALTHY"
          : "DOWN"}

      </div>

    </div>
  );
}
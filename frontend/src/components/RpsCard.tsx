interface Props {
  totalRequests: number;
}

export default function RpsCard({
  totalRequests,
}: Props) {

  return (

    <div
      className="
      bg-emerald-700
      text-white
      p-6
      rounded-xl"
    >

      <h3>
        Requests/sec
      </h3>

      <div
        className="
        text-3xl
        font-bold"
      >
        {Math.floor(
          totalRequests / 5
        )}
      </div>

    </div>

  );
}
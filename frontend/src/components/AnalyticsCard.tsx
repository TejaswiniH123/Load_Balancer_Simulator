interface Props {

  title: string;

  value: string | number;
}

export default function AnalyticsCard({
  title,
  value,
}: Props) {

  return (

    <div
      className="
      bg-slate-900
      text-white
      rounded-xl
      p-6
      shadow-lg"
    >

      <h3
        className="
        text-sm
        text-gray-400"
      >
        {title}
      </h3>

      <div
        className="
        text-3xl
        font-bold"
      >
        {value}
      </div>

    </div>
  );
}
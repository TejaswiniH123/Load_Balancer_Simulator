interface Props {

  serverCount: number;
}

export default function
AutoScaleCard({

  serverCount

}: Props) {

  return (

    <div
      className="
      bg-purple-900
      text-white
      p-6
      rounded-xl"
    >

      <h3>
        Auto Scaling
      </h3>

      <div
        className="
        text-3xl
        font-bold"
      >
        {serverCount}
      </div>

      <p>
        Active Servers
      </p>

    </div>

  );
}
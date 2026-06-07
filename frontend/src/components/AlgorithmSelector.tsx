"use client";

interface Props {

  currentAlgorithm: string;

  onChange:
  (algorithm: string) => void;
}

export default function
AlgorithmSelector({

  currentAlgorithm,

  onChange,

}: Props) {

  return (

    <div
      className="
      bg-slate-900
      p-4
      rounded-xl
      mb-6"
    >

      <label
        className="
        text-white
        mr-4"
      >
        Algorithm:
      </label>

      <select

        value={currentAlgorithm}

        onChange={(e) =>
          onChange(
            e.target.value
          )
        }

        className="
        bg-slate-800
        text-white
        p-2
        rounded"
      >

        <option
          value="ROUND_ROBIN"
        >
          Round Robin
        </option>

        <option
          value="LEAST_CONNECTIONS"
        >
          Least Connections
        </option>

        <option
          value="WEIGHTED_ROUND_ROBIN"
        >
          Weighted Round Robin
        </option>

      </select>

    </div>
  );
}
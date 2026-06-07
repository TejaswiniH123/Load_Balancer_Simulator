"use client";

interface Props {

  onAdd: () => void;

  onRemove: () => void;
}

export default function
ScalingControls({

  onAdd,

  onRemove,

}: Props) {

  return (

    <div
      className="
      flex
      gap-4
      mb-8"
    >

      <button

        onClick={onAdd}

        className="
        bg-green-600
        px-4
        py-2
        rounded
        text-white"
      >
        + Add Server
      </button>

      <button

        onClick={onRemove}

        className="
        bg-red-600
        px-4
        py-2
        rounded
        text-white"
      >
        - Remove Server
      </button>

    </div>
  );
}
"use client";

export default function SystemDiagram() {

  return (
    <div className="mb-10">

      <div className="flex justify-center mb-10">

        <div
          className="
          bg-blue-600
          text-white
          px-8
          py-4
          rounded-xl
          font-bold
          text-xl"
        >
          Load Balancer
        </div>

      </div>

      <div
        className="
        grid
        grid-cols-3
        gap-4"
      >

        <div className="text-center">
          Server-1
        </div>

        <div className="text-center">
          Server-2
        </div>

        <div className="text-center">
          Server-3
        </div>

      </div>

    </div>
  );
}
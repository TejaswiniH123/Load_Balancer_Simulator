"use client";

interface Props {
  darkMode: boolean;
  toggle: () => void;
}

export default function ThemeToggle({
  darkMode,
  toggle,
}: Props) {

  return (

    <button
      onClick={toggle}
      className="
      bg-blue-600
      text-white
      px-4
      py-2
      rounded"
    >

      {darkMode
        ? "☀️ Light Mode"
        : "🌙 Dark Mode"}

    </button>

  );
}
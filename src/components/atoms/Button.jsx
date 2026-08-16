export default function Button({ title, variant }) {
  /**
   * title = text
   * variant = bgColor
   */

  let bgColor = "bg-purple-100 text-emerald-700";

  switch (variant) {
    case "White":
      bgColor = "bg-white text-emerald-700";
      break;

    case "Green":
      bgColor = "bg-green-600 text-white";
      break;
  }

  return (
    <button
      className={`border-none bg-white shadow-2xl rounded-2xl text-emerald-700 px-3 py-2 hover:bg-purple-100 cursor-pointer hover:scale-105 transition-all ${bgColor}`}
    >
      {title}
    </button>
  );
}

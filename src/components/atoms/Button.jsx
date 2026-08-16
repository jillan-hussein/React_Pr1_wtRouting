export default function Button(props) {
  /**
   * title = text
   */
  return (
    <button className="border-none bg-white shadow-2xl rounded-2xl text-emerald-700 px-3 py-2 ">
      {props.title}
    </button>
  );
}

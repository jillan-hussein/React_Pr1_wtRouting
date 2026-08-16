export default function Input({ type, id, placeholder, className }) {
  /**
   * type = text
   * id = string
   * placeholder = string
   * className = design
   */

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`border-none bg-white shadow-2xl rounded-2xl text-emerald-700 pl-3`}
    />
  );
}

export default function Input({ type, id, placeholder, value, onChange }) {
  /**
   * type = text
   * id = string
   * placeholder = string
   * value = type
   * onChange = func
   */

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border-none bg-white shadow-2xl rounded-2xl text-emerald-700 pl-3`}
    />
  );
}

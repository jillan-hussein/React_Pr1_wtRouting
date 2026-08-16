export default function Alert({ msg, result }) {
  let alertColor = "bg-purple-100 text-purple-700";

  switch (result) {
    case "Success":
      alertColor = "bg-green-100 text-green-700";
      break;
    case "Error":
      alertColor = "bg-red-100 text-red-700";
      break;
  }

  return (
    <alert
      className={`${alertColor} p-4 rounded-2xl text-center font-bold m-6 shadow-purple-700`}
    >
      {msg}
    </alert>
  );
}

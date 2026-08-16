import Button from "./components/atoms/Button";

export default function Footer() {
  return (
    <>
      <div className="bg-green-600 border-none rounded-2xl shadow-2xl p-4 flex flex-col gap-2 m-6 text-emerald-100">
        <section className="text-center text-xl font-bold mb-4">
          Type Your Info To Contact You If You Need More Details
        </section>
        <section className="flex gap-2 mb-2 ml-3">
          <label htmlFor="fullName">Your Full Name:</label>
          <input
            type="text"
            id="fullName"
            className="border-none bg-white shadow-2xl rounded-2xl text-emerald-700 pl-2"
          />
        </section>
        <section className="flex gap-2 ml-3">
          <label htmlFor="cellphone">Your Cellphone:</label>
          <input
            type="tel"
            id="cellphone"
            className="border-none bg-white shadow-2xl rounded-2xl text-emerald-700 pl-2"
          />
        </section>
        <section className="text-end mr-4 mb-4">
          <Button title="Contact ME" />
        </section>
      </div>

      <footer className="p-4 text-center text-gray-500">
        All rights reserved 2026
      </footer>
    </>
  );
}

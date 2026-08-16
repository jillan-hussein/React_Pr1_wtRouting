import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1" />
      <Footer />
    </div>
  );
}

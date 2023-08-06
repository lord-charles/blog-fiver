import { Footer, Header } from "@/components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

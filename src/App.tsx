import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { CreateGlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <CreateGlobalStyle />
      <Footer />
    </>
  );
}

import { HOMEPAGE_TEXT } from "../../constants/texts/Homepage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Homepage() {
  return (
    <div>
      <Header />
      <div className="h1">{HOMEPAGE_TEXT.HOMEPAGE_TEXT}</div>;
      <Footer />
    </div>
  );
}

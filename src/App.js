import { Toaster } from "react-hot-toast";
import BackDrop from "./components/BackDrop";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <BackDrop />
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;

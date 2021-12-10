import { Toaster } from "react-hot-toast";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;

import { click } from "@testing-library/user-event/dist/click";
import Berkant from "./components/Berkant";
import Deneme from "./components/Deneme";
import { useEffect, useState } from "react";
function App() {
  const [status, setStatus] = useState("deneme");

  useEffect(() => {
    setStatus("deneme2");
  }, []);

  return <div>{status} </div>;
}

//* component mantığı */
export default App;

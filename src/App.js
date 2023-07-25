import { click } from "@testing-library/user-event/dist/click";
import Berkant from "./components/Berkant";
import Deneme from "./components/Deneme";
import { useEffect, useRef, useState } from "react";
function App() {
  const [status, setStatus] = useState("deneme");
  const firstRef = useRef(0);

  useEffect(() => {
    setStatus("deneme2");
  }, []);

  console.log("firstRef", (firstRef.current.value = 5));

  const refFunc = () => {
    // firstRef.current
  };
  return (
    <>
      <div>{status}</div>
      <input onClick={refFunc} ref={firstRef} placeholder="ara" />
    </>
  );
}

//* component mantığı */
export default App;

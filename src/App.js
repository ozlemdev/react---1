import { click } from "@testing-library/user-event/dist/click";
import Berkant from "./components/Berkant";
import Deneme from "./components/Deneme";
import { useState } from "react";
function App() {
  const [status, setStatus] = useState(false);

  if (status) {
    return <div>statu durumu true</div>;
  } else {
    return (
      <div>
        satatu durumu false
        <button onClick={() => setStatus(!status)}>tıkla</button>
      </div>
    );
  }
}

//* component mantığı */
export default App;

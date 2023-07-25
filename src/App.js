import { click } from "@testing-library/user-event/dist/click";
import Berkant from "./components/Berkant";
import Deneme from "./components/Deneme";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("blue");

  const deneme = "props mantıgı";
  const arr = [
    { name: "array1", id: 0 },
    { name: "array2", id: 1 },
    { name: "array3", id: 2 },
  ];
  console.log(arr, "arr");
  const clickFunc = () => {
    setColor("red");
  };

  return (
    <div className="App">
      {/*component mantıgı */}
      <Berkant berkant={deneme} />
      <Deneme />

      {arr.map((ar, i) => (
        <div key={ar.id}> {ar.name} </div>
      ))}
      <div style={{ color: color }}>berkant</div>
      <button onClick={clickFunc}>tıkla</button>
    </div>
  );
}
//* component mantığı */
export default App;

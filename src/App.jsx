import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        imgSrc={"https://picsum.photos/300/200"}
        imgAlt="card image"
        title="Card Title"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nobis!"
        btnText='Learn more'
        link='/'
      />
    </div>
  );
}

export default App;

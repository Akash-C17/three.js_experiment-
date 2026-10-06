import { ThreeDPaper } from "./shaders/3d-paper/ThreeDPaper";
import "./shaders/threeui.css";
import "./App.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <ThreeDPaper
        variant="site-of-the-year"
      />
    </div>
  );
}

function App() {
  return <Scene />;
}

export default App;

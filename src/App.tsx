import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./componenst/Experience";

function App() {
  return (
    <div className="App">
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={["#07323E"]} />
        <fog attach="fog" args={["#07323E", 10, 20]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;

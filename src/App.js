import { Routes, Route } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import PainterRegistration from "./components/PainterRegistration";
import ExteriorPaintingServices from "./components/PaintingServices/ExteriorPaintingServices";
import InteriorPaintingService from "./components/PaintingServices/InteriorPaintingService";
import MetalPainting from "./components/PaintingServices/MetalPainting";
import WallTexture from "./components/PaintingServices/WallTexture";
import WaterProffing from "./components/PaintingServices/WaterProffing";
import WoodPainting from "./components/PaintingServices/WoodPainting";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/registration" element={<PainterRegistration />} />
        <Route
          exact
          path="/interiorpaintingservices"
          element={<InteriorPaintingService />}
        />
        <Route
          exact
          path="/exteriorpaintingservices"
          element={<ExteriorPaintingServices />}
        />
        <Route exact path="/waterproffing" element={<WaterProffing />} />
        <Route exact path="/walltexture" element={<WallTexture />} />
        <Route exact path="/woodpainting" element={<WoodPainting />} />
        <Route exact path="/metalpainting" element={<MetalPainting />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;

import { useNavigate, useHref, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import TopNavbar from "./components/TopNavbar";
import Home from "./pages/Home";
import ViewProductsPage from "./pages/products/ViewProductsPage";
import LoadProductPage from "./pages/products/LoadProductPage";
import ViewRawMaterialsPage from "./pages/rawMaterials/ViewRawMaterialsPage";
import LoadRawMaterialPage from "./pages/rawMaterials/LoadRawMaterialPage";
import LoadSupplierPage from "./pages/rawMaterials/LoadSupplierPage";
import ViewProductionsPage from "./pages/productions/ViewProductionsPage";
import LoadProductionPage from "./pages/productions/LoadProductionPage";
import SimulateProductionPage from "./pages/productions/SimulateProductionPage";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-products" element={<ViewProductsPage />} />
        <Route path="/load-product" element={<LoadProductPage />} />
        <Route path="/view-raw-materials" element={<ViewRawMaterialsPage />} />
        <Route path="/load-raw-material" element={<LoadRawMaterialPage />} />
        <Route path="/load-supplier" element={<LoadSupplierPage />} />
        <Route path="/view-productions" element={<ViewProductionsPage />} />
        <Route path="/load-production" element={<LoadProductionPage />} />
        <Route path="/simulate-production" element={<SimulateProductionPage />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;

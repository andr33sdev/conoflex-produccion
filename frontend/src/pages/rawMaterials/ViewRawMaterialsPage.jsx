import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import axios from "axios";
import RawMaterialsTable from "../../components/rawMaterials/rawMaterialsTable";

const ViewRawMaterials = () => {
  const [rawMaterials, setRawMaterials] = useState([]);
  const [searchRawMaterials, setSearchRawMaterials] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://localhost:3000/api/raw-material";

  const fetchRawMaterials = async () => {
    try {
      const response = await axios.get(API_URL);
      setRawMaterials(response.data); // Guardamos los datos obtenidos
    } catch (error) {
      console.error("Error fetching raw materials", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearchRawMaterials(e.target.value); // Actualiza el estado del filtro
  };

  // Filtrado de materia prima según la búsqueda
  const filteredRawMaterials = rawMaterials.filter(
    (rawMaterial) =>
      rawMaterial.description
        .toLowerCase()
        .includes(searchRawMaterials.toLowerCase()) || // O por código
      rawMaterial.code
        .toLowerCase()
        .includes(searchRawMaterials.toLocaleLowerCase())
  );

  const loadingState =
    isLoading || rawMaterials?.length === 0 ? "loading" : "idle";

  useEffect(() => {
    fetchRawMaterials();
  }, []);

  return (
    <div className="w-screen p-5">
      <div className="flex flex-wrap w-1/4 md:flex-nowrap mb-5">
        <Input
          type="text"
          label="Materia prima"
          onChange={handleChange}
          value={searchRawMaterials} // Asegúrate de que el input esté controlado
        />
      </div>
      <RawMaterialsTable
        searchRawMaterials={searchRawMaterials}
        filteredRawMaterials={filteredRawMaterials}
        loadingState={loadingState}
      />
    </div>
  );
};

export default ViewRawMaterials;

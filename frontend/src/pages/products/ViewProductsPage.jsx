import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import axios from "axios";
import ProductsTable from "../../components/products/ProductsTable";

const ViewProductsPage = () => {
  const [semifinisheds, setSemifinisheds] = useState([]);
  const [searchSemifinisheds, setSearchSemifinisheds] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://localhost:3000/api/semifinished";

  const fetchSemifinisheds = async () => {
    try {
      const response = await axios.get(API_URL);
      setSemifinisheds(response.data); // Guardamos los datos obtenidos
    } catch (error) {
      console.error("Error fetching semifinisheds", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearchSemifinisheds(e.target.value); // Actualiza el estado del filtro
  };

  // Filtrado de productos según la búsqueda
  const filteredSemifinisheds = semifinisheds.filter(
    (semifinished) =>
      semifinished.name
        .toLowerCase()
        .includes(searchSemifinisheds.toLowerCase()) || // O por código
      semifinished.code
        .toLowerCase()
        .includes(searchSemifinisheds.toLocaleLowerCase())
  );

  const loadingState =
    isLoading || semifinisheds?.length === 0 ? "loading" : "idle";

  useEffect(() => {
    fetchSemifinisheds(); // Carga los productos al montar el componente
  }, []);

  return (
    <div className="w-screen p-5">
      <div className="flex flex-wrap w-1/4 md:flex-nowrap mb-5">
        <Input
          type="text"
          label="Semielaborado"
          onChange={handleChange}
          value={searchSemifinisheds} // Asegúrate de que el input esté controlado
        />
      </div>
      <ProductsTable
        searchSemifinisheds={searchSemifinisheds}
        filteredSemifinisheds={filteredSemifinisheds}
        loadingState={loadingState}
      />
    </div>
  );
};

export default ViewProductsPage;

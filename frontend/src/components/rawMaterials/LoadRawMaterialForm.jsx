import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Input,
  Button,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";

const LoadRawMaterialForm = () => {
  const [rawMaterialData, setRawMaterialData] = useState({});
  const [suppliers, setSuppliers] = useState([]);
  const [principalSupplier, setPrincipalSupplier] = useState("");

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/suppliers");
      setSuppliers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    const finalRawMaterialData = {
      ...rawMaterialData,
      supplier: principalSupplier,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/raw-material",
        finalRawMaterialData
      );
      console.log("Raw material created", response.data);
    } catch (error) {
      console.error(error);
      alert(
        "No se pudo crear la materia prima. \nRevisa si te falta algún campo"
      );
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <div className="mt-10 ml-32 flex flex-col space-y-5">
      <h1 className="ml-2">Cargar materia prima</h1>
      <form className="w-1/4 space-y-3" onSubmit={handleSubmit}>
        <Input
          label="Código"
          type="text"
          onChange={(e) => {
            const rawMaterialCode = e.target.value;
            const newRawMaterialData = {
              ...rawMaterialData,
              code: rawMaterialCode,
            };
            setRawMaterialData(newRawMaterialData);
          }}
        />
        <Input
          label="Descripción"
          type="text"
          onChange={(e) => {
            const rawMaterialDescription = e.target.value;
            const newRawMaterialData = {
              ...rawMaterialData,
              description: rawMaterialDescription,
            };
            setRawMaterialData(newRawMaterialData);
          }}
        />
        <Autocomplete
          label="Selecciona un proveedor"
          className="max-w-xs"
          defaultItems={suppliers}
          selectedKey={principalSupplier}
          onSelectionChange={setPrincipalSupplier}
        >
          {(supplier) => (
            <AutocompleteItem key={supplier.name}>
              {supplier.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Input
          label="Color"
          type="text"
          onChange={(e) => {
            const rawMaterialColor = e.target.value;
            const newRawMaterialData = {
              ...rawMaterialData,
              color: rawMaterialColor,
            };
            setRawMaterialData(newRawMaterialData);
          }}
        />
        <Input
          label="Ubicación"
          type="text"
          onChange={(e) => {
            const rawMaterialLocation = e.target.value;
            const newRawMaterialData = {
              ...rawMaterialData,
              location: rawMaterialLocation,
            };
            setRawMaterialData(newRawMaterialData);
          }}
        />
        <Button type="submit">Cargar</Button>
      </form>
    </div>
  );
};

export default LoadRawMaterialForm;

import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "@nextui-org/react";

const LoadSupplierForm = () => {
  const [supplierData, setSupplierData] = useState({});

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/suppliers",
        supplierData
      );
      console.log("Supplier created", response.data);
    } catch (error) {
      console.error(error);
      alert(
        "No se pudo crear el proveedor. \nRevisa si te falta algún campo\nRevisa si el CUIT que intentas cargar ya existe"
      );
    }
  };

  return (
    <div className="mt-10 ml-32 flex flex-col space-y-5">
      <h1 className="ml-2">Cargar proveedor</h1>
      <form className="w-1/4 space-y-3" onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          type="text"
          onChange={(e) => {
            const supplierName = e.target.value;
            const newSupplierData = {
              ...supplierData,
              name: supplierName,
            };
            setSupplierData(newSupplierData);
          }}
        />
        <Input
          label="Ubicación"
          type="text"
          onChange={(e) => {
            const supplierLocation = e.target.value;
            const newSupplierData = {
              ...supplierData,
              location: supplierLocation,
            };
            setSupplierData(newSupplierData);
          }}
        />
        <Input
          label="CUIT"
          type="number"
          onChange={(e) => {
            const supplierCUIT = e.target.value;
            const newSupplierData = {
              ...supplierData,
              CUIT: supplierCUIT,
            };
            setSupplierData(newSupplierData);
          }}
        />
        <Input
          label="Teléfono de contacto"
          type="tel"
          onChange={(e) => {
            const supplierContactNumber = e.target.value;
            const newSupplierData = {
              ...supplierData,
              contactNumber: supplierContactNumber,
            };
            setSupplierData(newSupplierData);
          }}
        />
        <Button type="submit">Cargar</Button>
      </form>
    </div>
  );
};

export default LoadSupplierForm;

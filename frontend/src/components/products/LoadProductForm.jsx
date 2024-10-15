import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "@nextui-org/react";

const LoadProductForm = () => {
    const [productData, setProductData] = useState({});

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/semifinished",
                productData
            );
            console.log("Semifinished created", response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="mt-10 ml-32 flex flex-col space-y-5">
            <h1 className="ml-2">Cargar semielaborado</h1>
            <form className="w-1/4 space-y-3" onSubmit={handleSubmit}>
                <Input
                    label="Código"
                    type="text"
                    onChange={(e) => {
                        const productCode = e.target.value;
                        const newProductData = {
                            ...productData,
                            code: productCode,
                        };
                        setProductData(newProductData);
                    }}
                />
                <Input
                    label="Nombre"
                    type="text"
                    onChange={(e) => {
                        const productName = e.target.value;
                        const newProductData = {
                            ...productData,
                            name: productName,
                        };
                        setProductData(newProductData);
                    }}
                />
                <Input
                    label="Descripción"
                    type="text"
                    onChange={(e) => {
                        const productDescription = e.target.value;
                        const newProductData = {
                            ...productData,
                            description: productDescription,
                        };
                        setProductData(newProductData);
                    }}
                />
                <Input
                    label="Color"
                    type="text"
                    onChange={(e) => {
                        const productColor = e.target.value;
                        const newProductData = {
                            ...productData,
                            color: productColor,
                        };
                        setProductData(newProductData);
                    }}
                />
                <Input
                    label="Proceso"
                    type="text"
                    onChange={(e) => {
                        const productProcess = e.target.value;
                        const newProductData = {
                            ...productData,
                            process: productProcess,
                        };
                        setProductData(newProductData);
                    }}
                />
                <Input
                    label="Ubicación"
                    type="text"
                    onChange={(e) => {
                        const productLocation = e.target.value;
                        const newProductData = {
                            ...productData,
                            location: productLocation,
                        };
                        setProductData(newProductData);
                    }}
                />
                <Button type="submit">Cargar</Button>
            </form>
        </div>
    );
};

export default LoadProductForm;

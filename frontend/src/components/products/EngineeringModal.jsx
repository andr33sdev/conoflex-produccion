import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import { Formik, Form, Field, FieldArray } from "formik";

const EngineeringModal = (props) => {
  const { isOpen, onOpenChange, semifinished } = props;
  const [rawMaterials, setRawMaterials] = useState([]);

  const API_URL = "http://localhost:3000/api/raw-material/";

  const fetchRawMaterials = async () => {
    try {
      const response = await axios.get(API_URL);
      setRawMaterials(response.data);
    } catch (error) {
      console.error("Error fetching raw materials", error);
    }
  };

  const handleApplyEngineering = (values) => {
    let nuevoDato = {
      ...semifinished,
      materials: values,
    };
    console.log(nuevoDato);
    console.log(semifinished._id);
    axios
      .put(
        `http://localhost:3000/api/semifinished/${semifinished._id}`,
        nuevoDato
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchRawMaterials();
  }, []);

  return (
    <div>
      <Modal
        size="4xl"
        backdrop={"opaque"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Ingeniería del {semifinished.name}
              </ModalHeader>
              <ModalBody>
                <Formik
                  initialValues={{
                    inputs: (semifinished?.materials || []).map((material) => ({
                      _id: material._id || "",
                      name: material.name || "",
                      qty: material.qty || 0,
                    })),
                  }}
                  onSubmit={(values) => {
                    handleApplyEngineering(values.inputs);
                  }}
                >
                  {({ values, setFieldValue }) => (
                    <Form className="flex flex-col p-5 w-full space-y-5">
                      <FieldArray name="inputs">
                        {({ push, remove }) => (
                          <>
                            {values.inputs.map((input, index) => (
                              <div
                                key={index}
                                className="flex flex-row items-end"
                              >
                                <div className="flex flex-col space-y-2 mr-5 w-3/4">
                                  <label htmlFor={`inputs.${index}.name`}>
                                    Nombre de Materia Prima #{index + 1}
                                  </label>
                                  <Field
                                    as="select"
                                    name={`inputs.${index}.name`}
                                    className="border-2 border-gray-300 rounded-md p-1"
                                    onChange={(e) => {
                                      const selectedMaterial =
                                        rawMaterials.find(
                                          (material) =>
                                            material.name === e.target.value
                                        );
                                      const selectedId = selectedMaterial
                                        ? selectedMaterial._id
                                        : "";
                                      const value = e.target.value;
                                      const newValue = {
                                        ...input,
                                        _id: selectedId,
                                        name: value,
                                      };
                                      const inputs = [...values.inputs];
                                      inputs[index] = newValue;
                                      setFieldValue("inputs", inputs);
                                    }}
                                  >
                                    <option value="">
                                      Selecciona una materia prima
                                    </option>
                                    {rawMaterials.map((rawMaterial) => (
                                      <option
                                        key={rawMaterial._id}
                                        value={rawMaterial.name}
                                      >
                                        {rawMaterial.name}
                                      </option>
                                    ))}
                                  </Field>
                                </div>
                                <div className="flex flex-col space-y-2 mr-5 w-1/4">
                                  <label htmlFor={`inputs.${index}.qty`}>
                                    Cantidad (KG)
                                  </label>
                                  <Field
                                    name={`inputs.${index}.qty`}
                                    type="number"
                                    className="border-2 border-gray-300 rounded-md p-1"
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="bg-red-400 h-fit p-2 rounded-md"
                                >
                                  Eliminar
                                </button>
                              </div>
                            ))}
                            <div className="flex flex-col space-y-2">
                              <button
                                type="button"
                                onClick={() =>
                                  push({ _id: "", name: "", qty: 0 })
                                }
                                className="mt-2 bg-blue-500 hover:bg-blue-400 text-white w-64 px-3 py-1 rounded"
                              >
                                Añadir materia prima
                              </button>
                              <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-400 text-white w-64 px-3 py-1 rounded"
                              >
                                Guardar ingeniería del producto
                              </button>
                            </div>
                          </>
                        )}
                      </FieldArray>
                    </Form>
                  )}
                </Formik>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EngineeringModal;

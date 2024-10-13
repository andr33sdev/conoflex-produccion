import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Spinner,
} from "@nextui-org/react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const RawMaterialsTable = (props) => {
  const { searchRawMaterials, filteredRawMaterials, loadingState } = props;

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="uppercase text-center">Código</TableColumn>
          <TableColumn className="uppercase text-center">Descripción</TableColumn>
          <TableColumn className="uppercase text-center">Proveedor</TableColumn>
          <TableColumn className="uppercase text-center">Depósito</TableColumn>
          <TableColumn className="uppercase text-center">Color</TableColumn>
          <TableColumn className="uppercase text-center">Stock</TableColumn>
          <TableColumn className="uppercase text-center">Stock mín</TableColumn>
          <TableColumn className="uppercase text-center">Aguardando</TableColumn>
          <TableColumn className="uppercase text-center">Acciones</TableColumn>
        </TableHeader>
        <TableBody
          loadingContent={<Spinner />}
          loadingState={loadingState}
          emptyContent={"No existen coincidencias"}
        >
          {searchRawMaterials.length > 0
            ? filteredRawMaterials.map((filtered, index) => (
                <TableRow key={index} className="w-full">
                  <TableCell className="w-1/6 text-center">{filtered.code}</TableCell>
                  <TableCell className="w-2/6 text-center">{filtered.description}</TableCell>
                  <TableCell className="w-1/7 text-center">{filtered.supplier}</TableCell>
                  <TableCell className="w-1/6 text-center">{filtered.location}</TableCell>
                  <TableCell className="w-1/7 text-center">{filtered.color}</TableCell>
                  <TableCell className="w-1/7 text-center">{filtered.stock}</TableCell>
                  <TableCell className="w-1/7 text-center">{filtered.min_stock}</TableCell>
                  <TableCell className="w-1/7 text-center">{filtered.awaiting}</TableCell>
                  <TableCell className="w-1/6 text-center">
                    {
                      <div className="relative flex justify-center items-center gap-7">
                        <Tooltip content="Editar">
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <BorderColorOutlinedIcon />
                          </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Eliminar">
                          <span className="text-lg text-danger cursor-pointer active:opacity-50">
                            <DeleteOutlineOutlinedIcon />
                          </span>
                        </Tooltip>
                      </div>
                    }
                  </TableCell>
                </TableRow>
              ))
            : []}
        </TableBody>
      </Table>
    </>
  );
};

export default RawMaterialsTable;

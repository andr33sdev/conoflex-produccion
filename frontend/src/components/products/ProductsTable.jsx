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
  useDisclosure,
} from "@nextui-org/react";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EngineeringModal from "./EngineeringModal";

const ProductsTable = (props) => {
  const { searchSemifinisheds, filteredSemifinisheds, loadingState } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="uppercase">Código</TableColumn>
          <TableColumn className="uppercase">Nombre</TableColumn>
          <TableColumn className="uppercase">Color</TableColumn>
          <TableColumn className="uppercase">Stock</TableColumn>
          <TableColumn className="uppercase">Stock mín</TableColumn>
          <TableColumn className="uppercase">Acciones</TableColumn>
        </TableHeader>
        <TableBody
          loadingContent={<Spinner />}
          loadingState={loadingState}
          emptyContent={"No existen coincidencias"}
        >
          {searchSemifinisheds.length > 0
            ? filteredSemifinisheds.map((filtered, index) => (
                <TableRow key={index} className="w-full">
                  <TableCell className="w-1/6">{filtered.code}</TableCell>
                  <TableCell className="w-2/6">{filtered.name}</TableCell>
                  <TableCell className="w-1/7">{filtered.color}</TableCell>
                  <TableCell className="w-1/8">{filtered.stock}</TableCell>
                  <TableCell className="w-1/8">{filtered.min_stock}</TableCell>
                  <TableCell className="w-1/6">
                    {
                      <div className="relative flex items-center gap-7">
                        <Tooltip content="Ingeniería">
                          <span
                            onClick={onOpen}
                            className="text-lg text-default-400 cursor-pointer active:opacity-50"
                          >
                            <BuildOutlinedIcon />
                          </span>
                        </Tooltip>
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
                  <EngineeringModal isOpen={isOpen} onOpenChange={onOpenChange} semifinished={filtered}/>
                  </TableCell>
                </TableRow>
              ))
            : []}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductsTable;

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  Link,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TopNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="mt-2 font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-9" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            className="border-b-slate-300 border-b font-semibold text-md mt-1 pb-1"
            href="/"
          >
            Inicio
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem isActive>
            <DropdownTrigger>
              <Link
                color="foreground"
                radius="sm"
                variant="light"
                className="mt-1 pb-1 font-semibold text-md bg-transparent data-[hover=true]:bg-transparent hover:cursor-pointer border-b border-b-bg-slate300"
              >
                Semielaborados
                <ArrowDropDownIcon />
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              href="/load-product"
              description="Cargar un nuevo semielaborado. Luego se le podrá cargar una ingeniería"
            >
              Cargar semielaborado
            </DropdownItem>
            <DropdownItem
              href="/view-products"
              description="Visualizar todos los semielaborados. Se pueden filtrar por nombre o código"
            >
              Ver semielaborados
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem isActive>
            <DropdownTrigger>
              <Link
                color="foreground"
                radius="sm"
                variant="light"
                className="mt-1 pb-1 font-semibold text-md bg-transparent data-[hover=true]:bg-transparent hover:cursor-pointer border-b border-b-bg-slate300"
              >
                Materias primas
                <ArrowDropDownIcon />
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              href="/load-supplier"
              description="Cargar un nuevo proveedor. Integrará la lista de proveedores a la hora de crear una materia prima"
            >
              Cargar proveedor
            </DropdownItem>
            <DropdownItem
              href="/load-raw-material"
              description="Cargar una nueva materia prima. Formará parte de la ingeniería de algún semielaborado"
            >
              Cargar materia prima
            </DropdownItem>
            <DropdownItem
              href="/view-raw-materials"
              description="Visualizar todas las materias primas. Se pueden filtrar por nombre o código"
            >
              Ver materias primas
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem isActive>
            <DropdownTrigger>
              <Link
                color="foreground"
                radius="sm"
                variant="light"
                className="mt-1 pb-1 font-semibold text-md bg-transparent data-[hover=true]:bg-transparent hover:cursor-pointer border-b border-b-bg-slate300"
              >
                Producciones
                <ArrowDropDownIcon />
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              href="/load-production"
              description="Cargar una nueva producción. Descontará materias primas y agregará stock al semielaborado en cuestión"
            >
              Cargar producción
            </DropdownItem>
            <DropdownItem
              href="/view-productions"
              description="Visualizar todas las producciones. Se pueden filtrar por nombre o código"
            >
              Ver producciones
            </DropdownItem>
            <DropdownItem
              href="/simulate-production"
              description="Simular un MRP de uno o varios artículos. Se tienen en cuenta las ingenierías cargadas hasta el momento"
            >
              Simular producción
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavbar;

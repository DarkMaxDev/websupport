import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const services = [
    {
        Service: "Mantenimieto a equipos de computo",
        Atencion: "Modo Presencial",
        Precio: "$350.00",
        FormaDePago: "Efectivo",
    },
    {
      Service: "Office + activacion",
      Atencion: "Forma Remota o Persona",
      Precio: "$150.00",
      FormaDePago: "Efectivo y transferencia",
    },
    {
        Service: "Asesoria Remota",
      Atencion: "Remota",
      Precio: "$300.00",
      FormaDePago: "transferencia",
    },
    {
        Service: "Programas Adobe c/u",
      Atencion: "Remota o Presencial",
      Precio: "$250.00",
      FormaDePago: "Efectivo y transferencia",
    },
    {
        Service: "Documentos Digitales",
      Atencion: "Remota ",
      Precio: "$250.00",
      FormaDePago: "transferencia",
    },
    {
        Service: "Videojuegos",
      Atencion: "Presencial",
      Precio: "Varia segun Lo Requerido",
      FormaDePago: "Efectivo",
    },
    {
        Service: "Servicio De Desarrollador Web",
      Atencion: "remota",
      Precio: "Varia segun Lo Requerido",
      FormaDePago: "transferencia",
    },
  ]
  
  export function TableDemo() {
    return (
        <footer className="p-20 max-w-5xl mx-auto">
      <Table>
        <TableCaption>Los Precios Cambian Segun Las Fechas.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Servicios</TableHead>
            <TableHead>Metodo De Pago</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.Service}>
              <TableCell className="font-medium">{service.Service}</TableCell>
              <TableCell>{service.Atencion}</TableCell>
              <TableCell>{service.FormaDePago}</TableCell>
              <TableCell className="text-right">{service.Precio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
   </footer> )
  }
  
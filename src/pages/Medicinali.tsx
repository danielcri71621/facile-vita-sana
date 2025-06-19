
import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import RegistroMedicinaliForm from "./RegistroMedicinaliForm";
import GraficoMedicinali from "./GraficoMedicinali";
import AnalisiForm from "./AnalisiForm";

const Medicinali = () => {
  return (
    <div className="max-w-lg mx-auto min-h-screen py-8">
      <h1 className="text-2xl font-bold mb-4">Tracciamento Salute</h1>
      <Tabs defaultValue="registro" className="w-full">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="registro" className="w-1/3">Registro</TabsTrigger>
          <TabsTrigger value="grafico" className="w-1/3">Andamento</TabsTrigger>
          <TabsTrigger value="analisi" className="w-1/3">Analisi</TabsTrigger>
        </TabsList>
        <TabsContent value="registro">
          <RegistroMedicinaliForm />
        </TabsContent>
        <TabsContent value="grafico">
          <GraficoMedicinali />
        </TabsContent>
        <TabsContent value="analisi">
          <AnalisiForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Medicinali;

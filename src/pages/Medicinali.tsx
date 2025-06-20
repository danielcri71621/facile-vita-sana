
import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import RegistroMedicinaliForm from "./RegistroMedicinaliForm";
import GraficoMedicinali from "./GraficoMedicinali";
import AnalisiForm from "./AnalisiForm";
import GestioneQuotidianaMedicinali from "./GestioneQuotidianaMedicinali";

const Medicinali = () => {
  return (
    <div className="max-w-lg mx-auto min-h-screen py-8">
      <h1 className="text-2xl font-bold mb-4">Tracciamento Salute</h1>
      <Tabs defaultValue="quotidiana" className="w-full">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="quotidiana" className="w-1/4 text-xs sm:text-sm">
            <span className="hidden sm:inline">Quotidiana</span>
            <span className="sm:hidden">Oggi</span>
          </TabsTrigger>
          <TabsTrigger value="registro" className="w-1/4 text-xs sm:text-sm">
            <span className="hidden sm:inline">Registro</span>
            <span className="sm:hidden">Reg.</span>
          </TabsTrigger>
          <TabsTrigger value="grafico" className="w-1/4 text-xs sm:text-sm">
            <span className="hidden sm:inline">Andamento</span>
            <span className="sm:hidden">Graf.</span>
          </TabsTrigger>
          <TabsTrigger value="analisi" className="w-1/4 text-xs sm:text-sm">
            <span className="hidden sm:inline">Analisi</span>
            <span className="sm:hidden">Anal.</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="quotidiana">
          <GestioneQuotidianaMedicinali />
        </TabsContent>
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

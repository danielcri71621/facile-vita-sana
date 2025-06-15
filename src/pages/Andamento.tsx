
import * as React from "react";
import GraficoMedicinali from "./GraficoMedicinali";

const Andamento = () => {
  return (
    <div className="max-w-lg mx-auto min-h-screen py-8">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Andamento settimanale</h1>
      <div className="bg-gradient-to-br from-blue-100 via-teal-100 to-green-100 p-5 rounded-xl shadow-2xl">
        <GraficoMedicinali />
      </div>
    </div>
  );
};

export default Andamento;

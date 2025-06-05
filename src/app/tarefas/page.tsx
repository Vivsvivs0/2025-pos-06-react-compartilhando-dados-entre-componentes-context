"use client";

import { useState } from "react";
import { useTarefa } from "@/data/ContextTarefa";
import ModalTarefa from "@/componentes/ModalTarefas";
import Cabecalho from "@/componentes/Cabecalho";

export default function PaginaTarefas() {
  const { tarefas, alternarConclusao, adicionar } = useTarefa();
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <Cabecalho />

      <button
        onClick={() => setMostrarModal(true)}
        className="bg-pink-700 text-white px-4 py-2 rounded mb-4 hover:bg-pink-800 cursor-pointer"
      >
        Nova Tarefa
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tarefas.map((tarefa) => (
          <div
            key={tarefa.id}
            className={`p-3 rounded-lg shadow-md cursor-pointer ${
              tarefa.completed ? "bg-pink-800 text-white" : "bg-pink-400 text-black"
            }`}
            onClick={() => alternarConclusao(tarefa.id)}
          >
            <h3 className="text-xl font-bold">{tarefa.title}</h3>
            <p className="text-sm">
              {tarefa.completed ? "Concluída" : "Pendente"}
            </p>
          </div>
        ))}
      </div>

      {mostrarModal && (
        <ModalTarefa
          aoFechar={() => setMostrarModal(false)}
          aoAdicionar={(titulo) => {
            const novaTarefa = {
              id: Date.now(),
              title: titulo,
              completed: false,
            };
            adicionar(novaTarefa);
            setMostrarModal(false);
          }}
        />
      )}
    </div>
  );
}

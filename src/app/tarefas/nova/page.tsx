"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTarefa } from "@/data/ContextTarefa";

export default function NovaTarefaPage() {
  const [titulo, setTitulo] = useState("");
  const { adicionar } = useTarefa();
  const router = useRouter();

  const enviar = () => {
    if (titulo.trim() === "") return;
    adicionar({
      id: Date.now(),
      title: titulo,
      completed: false,
    });
    router.push("/tarefas");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nova Tarefa</h1>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="border px-4 py-2 rounded w-full mb-4"
        placeholder="Digite a tarefa..."
      />
      <button
        onClick={enviar}
        className="bg-pink-700 text-white px-4 py-2 rounded hover:bg-pink-800"
      >
        Adicionar
      </button>
    </div>
  );
}

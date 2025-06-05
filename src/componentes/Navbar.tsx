"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-pink-700 text-white p-4 mb-6">
      <div className="container mx-auto flex gap-4">
        <Link href="/" className="hover:underline">Início</Link>
        <Link href="/tarefas" className="hover:underline">Tarefas</Link>
        <Link href="/tarefas/nova" className="hover:underline">Nova Tarefa</Link>
      </div>
    </nav>
  );
}

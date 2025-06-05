'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { TarefaInterface } from '@/types/tarefas'

interface ContextoTarefaProps {
  tarefas: TarefaInterface[]
  adicionar: (nova: TarefaInterface) => void
  alternarConclusao: (id: number) => void
}

const ContextoTarefa = createContext<ContextoTarefaProps | null>(null)

export const useTarefa = () => useContext(ContextoTarefa)!

export const ProvedorTarefa = ({ children }: { children: React.ReactNode }) => {
  const [tarefas, setTarefas] = useState<TarefaInterface[]>([])

  useEffect(() => {
    fetch('https://dummyjson.com/todos?limit=5')
      .then(res => res.json())
      .then(data => setTarefas(data.todos))
  }, [])

  const adicionar = (nova: TarefaInterface) => {
    setTarefas(prev => [...prev, nova])
  }

  const alternarConclusao = (id: number) => {
    setTarefas(prev =>
      prev.map(tarefa =>
        tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
      )
    )
  }

  return (
    <ContextoTarefa.Provider value={{ tarefas, adicionar, alternarConclusao }}>
      {children}
    </ContextoTarefa.Provider>
  )
}

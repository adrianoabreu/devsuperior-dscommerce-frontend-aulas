import { createContext } from "react"

/*
Passos para usar um estado global
• Criar o contexto
• Definir o tipo do contexto (dado + função set)
• Criar o contexto com a função createContext
*/

export type ContextCartCountType = {
    contextCartCount: number;
    setContextCartCount: (contextCartCount: number) => void;
}

export const ContextCartCount = createContext<ContextCartCountType>({
    contextCartCount: 0,
    setContextCartCount: () => {}
})
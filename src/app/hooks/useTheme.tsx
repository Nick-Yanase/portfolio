import { useEffect, useState } from "react";

export function useTheme(){
  /*
  1- typeof window !== "undefined" → Confere se window existe.
  Isso evita erros em SSR (Server-Side Rendering), como no Next.js, onde o código pode rodar no servidor, que não tem acesso ao localStorage.

  2- pega o item theme (pode ser white ou dark), se não houver nenhum coloca dark, se 
  Verifica se o código está rodando no navegador
  */
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined"){
      return localStorage.getItem("theme") || "dark";
    }
    return "dark"
  })

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark") // insere a class "dark" no <HTML>, assim os componentes que tiverem dark:xxxx irão ser aplicados e sobrepor os sem dark 
    }
    else{
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark") //se tiver dark, aperta e troca pra light e vice-versa
  }

  return {theme, toggleTheme}; //export theme e toggle theme para usar em qualquer componente
}
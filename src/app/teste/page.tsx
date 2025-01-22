'use client'
import { motion } from "framer-motion"
export default function TesteAnimacao(){
  return(
      <motion.h1 initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
        Teste de animação
      </motion.h1>
    );

}
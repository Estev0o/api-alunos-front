import { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';
import CreateModal from './components/modalCreate/create';

// Defina a interface que representa a estrutura do objeto mensagem


export default function App() {
  // Tipagem do estado com a interface Mensagem[]
  

  return (
    <>

      <CreateModal/>


    </>
  );
}

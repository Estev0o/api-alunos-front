import { useState, useEffect } from 'react';
import './App.css';
import CreateModal from './components/modalCreate/create';
import Table from './components/table/table';





export default function App() {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  function openModalCreate() {
    setIsModalCreateOpen(true);
  }
  
  function closeModalCreate() {
    setIsModalCreateOpen(false);
  }
  
  return (
    <>
      
      {isModalCreateOpen && (
        <CreateModal closeModalCreate={closeModalCreate} />
      )}
      <Table openModalCreate={openModalCreate} />


    </>
  );
}

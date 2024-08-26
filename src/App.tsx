import { useState } from 'react'
import Table from './components/table/table'
import CreateModal from './components/modalCreate/create'
import './App.css'

function App() {
  const [isModalCreateOpen, setModalCreateOpen] = useState(false)

  function openModalCreate() {
    setModalCreateOpen(true)
  }

  function closeModalCreate() {
    setModalCreateOpen(false)
  }

  return (
    <>
      {isModalCreateOpen && (
        <CreateModal
          closeModalCreate={closeModalCreate}
        />
      )}
    </>
  )
}

export default App
////</Table>
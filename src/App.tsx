import { useState, useEffect } from 'react'
//import Table from './components/table/table'
//import CreateModal from './components/modalCreate/create'
import api from './services/api'
import './App.css'

export default function App() {
  //const [isModalCreateOpen, setModalCreateOpen] = useState(false)

  //function openModalCreate() {
    //setModalCreateOpen(true)
  //}

  //function closeModalCreate() {
    //setModalCreateOpen(false)
  //}

  const [mensagens, setMessages] = useState([])
  useEffect(() => {
    api.post('List').then(({data}) => {
      setMessages(data)
    })
  })

  return (
    <>

    {mensagens.map(item => {
      <div key={item.id}></div>
    })}
      
    </>
  )
}


////</Table>
///{isModalCreateOpen && (
 // <CreateModal
 // //  closeModalCreate={closeModalCreate}
  ///>
//)}
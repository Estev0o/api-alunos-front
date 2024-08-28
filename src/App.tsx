import { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';

// Defina a interface que representa a estrutura do objeto mensagem
interface Mensagem {
  id: number;     // ou string, dependendo do tipo no banco de dados
  nome: string;   // outras propriedades que você queira incluir
}

export default function App() {
  // Tipagem do estado com a interface Mensagem[]
  const [mensagens, setMessages] = useState<Mensagem[]>([]);

  useEffect(() => {
    api.get<Mensagem[]>('api/Alunos/List')  // Certifique-se de que a rota está correta
      .then(({ data }) => {
        setMessages(data);
      })
      .catch(error => {
        console.error("Erro ao buscar mensagens:", error);
      });
  }, []);

  return (
    <>
      {mensagens.map((item) => (
        <div key={item.id}>
          {item.id}
          {item.nome} {/* ou qualquer outra propriedade que você queira exibir */}
        </div>
      ))}
    </>
  );
}

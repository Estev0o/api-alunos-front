import { } from "lucide-react"
import { useState, useEffect} from "react"
import api from "../../services/api";

interface DataTable {
    id: number;     // ou string, dependendo do tipo no banco de dados
    nome: string;   // outras propriedades que você queira incluir
    idade: number;
    email: string
}

export default function Table() {

    const [dataTable, setdataTable] = useState<DataTable[]>([]);

useEffect(() => {
    api.get<DataTable[]>('List')  // Certifique-se de que a rota está correta
        .then(({ data }) => {
            setdataTable(data);
        })
        .catch(error => {
            console.error("Erro ao buscar mensagens:", error);
        });
}, []);
    return (
        <div className="h-screen flex flex-col justify-start gap-x-10 p-6">
            <div className="w-full flex justify-center">
                <button className="text-zinc-50 text-2xl flex mb-3 px-10">Incuir aluno</button>
            </div>

            <table className="table-fixed w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-sky-800 text-white text-xl">
                        <th className="py-3 px-4">ID</th>
                        <th className="py-3 px-4">Nome</th>
                        <th className="py-3 px-4">Idade</th>
                        <th className="py-3 px-4">E-mail</th>
                    </tr>
                </thead>

                <tbody>
                    {dataTable.map((itens) => (
                        <tr>
                            <td className="py-3 px-4"> {itens.id}</td>
                            <td className="py-3 px-4"> {itens.nome}</td>
                            <td className="py-3 px-4"> {itens.idade}</td>
                            <td className="py-3 px-4"> {itens.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

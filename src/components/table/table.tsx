import { useState, useEffect } from "react";
import api from "../../services/api";
import CreateModal from "../modalCreate/create";
import Pagination from "../buttons/pagination/pagination";

interface DataTable {
    id: number;
    nome: string;
    idade: number;
    email: string;
}

interface ApiResponse {
    totalCount: number;
    skip: number;
    take: number;
    students: DataTable[];
}

export default function Table() {
    const [dataTable, setDataTable] = useState<DataTable[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [pageSize, setPageSize] = useState(8); // Adiciona estado para pageSize
    const skip = currentPage * pageSize;
    const take = pageSize;

    const fetchData = async () => {
        try {
            const { data } = await api.get<ApiResponse>(`/List?skip=${skip}&take=${take}`);
            setDataTable(data.students);
            setTotalItems(data.totalCount);
            setPageSize(data.take); // Atualiza pageSize com o valor retornado
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const handleCreateSuccess = () => {
        fetchData(); // Recarrega os dados após a criação
        setIsModalOpen(false); // Fecha o modal
    };

    const totalPages = Math.ceil(totalItems / pageSize);

    return (
        <div className="h-screen flex flex-col justify-start gap-x-10 p-6">
            <div className="w-full flex justify-center">
                <button
                    className="bg-cyan-900 text-zinc-50 rounded-xl hover:bg-cyan-600 text-2xl flex mb-3 px-10"
                    onClick={() => setIsModalOpen(true)}
                >
                    Incluir aluno
                </button>
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
                    {dataTable.map((item) => (
                        <tr key={item.id}>
                            <td className="py-3 px-4"> {item.id}</td>
                            <td className="py-3 px-4"> {item.nome}</td>
                            <td className="py-3 px-4"> {item.idade}</td>
                            <td className="py-3 px-4"> {item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />

            {isModalOpen && (
                <CreateModal closeModalCreate={handleCreateSuccess} />
            )}
        </div>
    );
}

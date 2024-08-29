import BtnCreate from "../buttons/create/btnCreate";
import BtnCancel from "../buttons/Cancel/btnCancel";
import { useState } from "react";
import api from "../../services/api";

interface CreateProps {
    closeModalCreate: () => void;
}

export default function CreateModal({ closeModalCreate }: CreateProps) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Valida se idade é um número
        const idadeNumber = parseInt(idade, 10);
        if (isNaN(idadeNumber)) {
            console.error("Idade inválida");
            return;
        }

        // Envia a solicitação POST para a API
        api.post('CreateStudent', { Nome: nome, Email: email, Idade: idadeNumber })
            .then(() => {
                closeModalCreate();
                setNome('');
                setEmail('');
                setIdade('');
            })
            .catch((error) => {
                console.error('Erro ao enviar dados:', error.response?.data || error.message);
            });
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-35 z-50 px-4">
            <div className="bg-zinc-400 rounded-xl bg-opacity-90 w-full max-w-lg p-6 max-h-screen overflow-auto transform">
                <div className="flex items-center mb-4">
                    <h3 className="text-zinc-50 text-2xl">Adicionar Aluno</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <div className="flex flex-col space-y-4">
                            <div className="h-14 bg-zinc-800 px-4 rounded-xl flex items-center shadow-shape">
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                            <div className="h-14 bg-zinc-800 px-4 rounded-xl flex items-center shadow-shape">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="h-14 bg-zinc-800 px-4 rounded-xl flex items-center shadow-shape">
                                <input
                                    type="number"
                                    placeholder="Idade"
                                    className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
                                    value={idade}
                                    onChange={(e) => setIdade(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                            <div className="flex-1">
                                <BtnCreate />
                            </div>
                            <div className="flex-1">
                                <BtnCancel onClick={closeModalCreate} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

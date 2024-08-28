import BtnCreate from "../buttons/create/btnCreate";
import BtnCancel from "../buttons/Cancel/btnCancel";

interface CreateProps {
    closeModalCreate: () => void;
}

export default function CreateModal({ closeModalCreate }: CreateProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-35 z-50 px-4">
            <div className="bg-zinc-400 rounded-xl bg-opacity-90 w-full max-w-lg p-6 max-h-screen overflow-auto transform">
                <div className="flex items-center mb-4">
                    <h3 className="text-zinc-50 text-2xl">Convide seus amigos e planeje sua próxima viagem!</h3>
                </div>
                <form>
                    <div className="space-y-6">
                        <div className="flex flex-col space-y-4">
                            <div className="h-14 bg-zinc-800 px-4 rounded-xl flex items-center shadow-shape">
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
                                />
                            </div>
                            <div className="h-14 bg-zinc-800 px-4 rounded-xl flex items-center shadow-shape">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
                                />
                            </div>
                            <div className="h-14 bg-zinc-800 px-4 rounded-xl flex items-center shadow-shape">
                                <input
                                    type="text"
                                    placeholder="Idade"
                                    className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                            <div className="flex-1">
                                <BtnCreate />
                            </div>

                            <div className="flex-1">
                                <BtnCancel />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

import { } from "lucide-react"
import BtnCreate from "../buttons/create/btnCreate"
import BtnCancel from "../buttons/Cancel/btnCancel"
//import { useState } from "react"

interface CreateProps {
    closeModalCreate: () => void
}

export default function CreateModal({
    closeModalCreate
}: CreateProps) {
    return (
        <form>
            <div className="flex flex-row flex-wrap justify-center space-y-6 mb-96 bg-zinc-400 rounded-xl bg-opacity-35 px-4">
                <h3 className="text-zinc-50 text-2xl pt-4">Convide seus amigos e planeje sua próxima viagem!</h3>
                <div className="max-w-4xl w-full text-center space-y-10">
                    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
                        <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                    </div>
                </div>

                <div className="w-full max-w-4xl text-center space-y-10">
                    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
                        <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                    </div>
                </div>

                <div className="w-full max-w-4xl text-center space-y-10">
                    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
                        <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                    </div>
                </div>

                <div className="w-full max-w-4xl flex justify-center space-x-4 pb-7">
                    <BtnCreate/>
                    <BtnCancel/>
                </div>
            </div>
        </form>
    )
}




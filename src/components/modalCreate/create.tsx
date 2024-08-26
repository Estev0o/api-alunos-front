import { } from "lucide-react"
//import { useState } from "react"

export default function Create() {
    return (
        <div className="flex flex-row flex-wrap justify-center space-y-6 mb-96 bg-zinc-400 rounded-xl bg-opacity-35 px-4">
            <div className="max-w-4xl w-full text-center space-y-10">
                <h3 className="text-zinc-50 text-2xl pt-2">Convide seus amigos e planeje sua próxima viagem!</h3>

                <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
                    <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                </div>
            </div>

            <div className="w-full max-w-4xl text-center space-y-10">
                <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
                    <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                </div>
            </div>

            <div className="w-full max-w-4xl text-center space-y-10 pb-7">
                <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
                    <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                </div>
            </div>
            
        </div>
    )
}




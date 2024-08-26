import { UserPlus } from "lucide-react";


export default function BtnCreate() {
    return (
        <>
            <button className="bg-cyan-900 text-zinc-50 text-xl py-2 px-6 rounded-xl shadow-md hover:bg-cyan-600 flex items-center">
                Incluir
                <UserPlus className='ml-3 size-5 text-zinc-50' />
            </button>
        </>
    )
}
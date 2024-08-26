import { Ban } from "lucide-react";

export default function BtnCancel() {
    return (
        <>
            <button className="bg-rose-900 text-zinc-50 text-xl py-2 px-6 rounded-xl shadow-md hover:bg-pink-600 flex items-center">
                Cancelar
                <Ban className='ml-3 size-5 text-zinc-50'/>
            </button>
        </>
    )
}
import { Ban } from "lucide-react";

interface BtnCancelProps {
    onClick?: () => void;
}

export default function BtnCancel({ onClick }: BtnCancelProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="bg-rose-900 text-zinc-50 text-xl py-2 px-6 rounded-xl shadow-md hover:bg-pink-600 flex items-center w-full justify-center"
        >
            Cancelar
            <Ban className="ml-3 size-5 text-zinc-50" />
        </button>
    );
}

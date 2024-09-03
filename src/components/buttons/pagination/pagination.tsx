interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center mt-4">
            <button
                className="bg-cyan-900 text-zinc-50 rounded-xl hover:bg-cyan-600 px-4 py-2"
                disabled={currentPage === 0}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Anterior
            </button>
            <span className="mx-4 text-xl">
                Página {currentPage + 1} de {totalPages}
            </span>
            <button
                className="bg-cyan-900 text-zinc-50 rounded-xl hover:bg-cyan-600 px-4 py-2"
                disabled={currentPage >= totalPages - 1}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Próxima
            </button>
        </div>
    );
};

export default Pagination;

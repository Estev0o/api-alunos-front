interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const handlePrevPage = () => {
        if (currentPage > 0) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <button onClick={handlePrevPage} disabled={currentPage === 0}>
                Anterior
            </button>
            <span className="mx-4">
                Página {currentPage + 1} de {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
                Próximo
            </button>
        </div>
    );
};

export default Pagination;

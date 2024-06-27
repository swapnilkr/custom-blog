import React from 'react';
import '../styles/Paginator.css';

const Paginator = ({ page, setPage, totalPages }) => {
    const getPageNumbers = () => {
        const pagesToShow = 5;
        const currentPage = page;
        const total = totalPages;

        if (total <= pagesToShow) {
            // If total pages are less than or equal to the pagesToShow, show all
            return Array.from({ length: total }, (_, i) => i + 1);
        }

        const pages = [];
        let start = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        let end = Math.min(total, start + pagesToShow - 1);

        if (end - start < pagesToShow - 1) {
            start = Math.max(1, end - pagesToShow + 1);
        }
        
        // pagination structure-> 1..9 10 11 12 13 ... 41 where current =11
        if (start > 1) {
            pages.push(1);
            if (start > 2) {
                pages.push('...');
            }
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < total) {
            if (end < total - 1) {
                pages.push('...');
            }
            pages.push(total);
        }

        return pages;
    };

    const handlePageClick = (pageNumber) => {
        if (pageNumber !== page) {
            setPage(pageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pages = getPageNumbers();

        return pages.map((pageNumber, index) => {
            const isCurrentPage = pageNumber === page;
            const isEllipsis = pageNumber === '...';

            let className = 'page-number';
            if (isCurrentPage) {
                className += ' current';
            }
            if (isEllipsis) {
                className += ' ellipsis';
            }

            return (
                <span
                    key={index}
                    className={className}
                    onClick={() => !isEllipsis && handlePageClick(pageNumber)}
                >
                    {pageNumber}
                </span>
            );
        });
    };

    const handlePrevClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextClick = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <div className="pagination-container">
            <span
                className={`arrow ${page === 1 ? 'disabled' : ''}`}
                onClick={handlePrevClick}
            >
                &lt;
            </span>
            {renderPageNumbers()}
            <span
                className={`arrow ${page === totalPages ? 'disabled' : ''}`}
                onClick={handleNextClick}
            >
                &gt;
            </span>
        </div>
    );
};

export default Paginator;

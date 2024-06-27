import React from 'react';
import '../styles/Paginator.css';

const Paginator = ({ page, setPage, totalPages }) => {
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className="paginator">
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                &lt; Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
                Next &gt;
            </button>
        </div>
    );
};

export default Paginator;

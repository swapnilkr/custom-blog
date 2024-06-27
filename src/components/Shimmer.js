const Shimmer = ({ view }) => {
    return (
        <>
            {view === 'list' ?
                <>
                    <div className="shimmer-container">
                        {
                            Array.from({ length: 20 }).map((_, index) => (
                                <div key={index} className="shimmer-wrapper">
                                    <div className="shimmer"></div>
                                </div>
                            ))
                        }
                    </div>
                </>
                :
                <>
                    <div className="shimmer-view-wrapper">
                        <div className="shimmer-banner"></div>
                        <div className="shimmer-post-detail">
                            <div className="shimmer-header"></div>
                            <div className="shimmer-user-profile">
                                <div className="shimmer-avatar"></div>
                                <div className="shimmer-user-info">
                                    <div className="shimmer-author"></div>
                                    <div className="shimmer-date"></div>
                                </div>
                            </div>
                            <div className="shimmer-content">
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <div key={index} className="shimmer-line"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>

    )
}

export default Shimmer;
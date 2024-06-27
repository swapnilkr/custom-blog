const Shimmer = () => {
    return (
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

    )
}

export default Shimmer;
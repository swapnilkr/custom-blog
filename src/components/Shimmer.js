const Shimmer = () => {
    return (
        Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="shimmer-wrapper">
                <div className="shimmer"></div>
            </div>
        ))
    )
}

export default Shimmer;
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-text"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

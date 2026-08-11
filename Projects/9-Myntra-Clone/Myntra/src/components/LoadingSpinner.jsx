const LoadingSpinner = () => {
  return (
    <center style={{ marginTop: "100px", marginBottom: "100px" }}>
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "10rem", height: "10rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};

export default LoadingSpinner;

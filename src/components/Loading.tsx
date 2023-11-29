const Loading = () => {
  return (
    <div style={{top: 0, position: "fixed", width: "100%", height: "100vh", backgroundColor:"#e8d0b5", zIndex: 9999, display: "flex", alignItems:"center", justifyContent:"center" }}>
      <img src="/loading.gif" style={{ width: "100px", height: "100px" }} />
    </div>
  );
};

export default Loading;

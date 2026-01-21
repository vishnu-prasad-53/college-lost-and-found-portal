function Home() {
  return (
    <div className="container">
      <h1>College Lost & Found</h1>
      <p>This is the home page. You can see lost and found items here.</p>
      <div style={{ background: "#fff", padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
        <h2>John Doe</h2>
        <h3>Lost: Wallet</h3>
        <p>Description: Black leather wallet near library.</p>
        <p>Contact: 1234567890</p>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Home;

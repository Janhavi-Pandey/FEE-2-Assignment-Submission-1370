function ProductCard(){

    return (
        <>
        <h1>product cards</h1>
       
        <div
  style={{
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
    color:"black"
  }}
>
        <div className="box" style={{background:"linear-gradient(to bottom, lightgreen,cyan)",borderRadius:"12px",border:"2px solid black",width:"300px",height:"300px",marginLeft:"40px",fontSize:"10px",display:"flex",flexDirection:"column",}}>
  <h3>Dyson</h3>
  <h4>Engineered to capture fine dust and allergens.</h4>
  <h5>Traps 99.99% of particles as small as 0.3 microns.</h5>
   
    <span>Powerful Suction</span>
    <span>Cordless Freedom</span>
    <span>Advanced Filtration</span>
    <span>Easy to Clean</span>     
    <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
  <button>Add to Cart</button>
  <button>Buy Now</button>
</div>
   

</div>
<div className="box" style={{background:"linear-gradient(to bottom, pink, orange)",borderRadius:"12px",border:"2px solid black",width:"300px",height:"300px",marginLeft:"40px",fontSize:"10px",display:"flex",flexDirection:"column"}}>
  <h3>iPhone</h3>
  <h4>Designed for performance and elegance.</h4>
  <h5>Powered by the latest A‑series chip.</h5>
  <div>Retina Display</div>
  <div>Face ID Security</div>
  <div>5G Connectivity</div>
  <div>Long Battery Life</div>
  <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
  <button>Add to Cart</button>
  <button>Buy Now</button>
 
</div>
</div>

<div className="box" style={{background:"linear-gradient(to bottom, lightblue, violet)",borderRadius:"12px",border:"2px solid black",width:"300px",height:"300px",marginLeft:"40px",fontSize:"10px",display:"flex",flexDirection:"column"}}>
  <h3>Samsung Galaxy</h3>
  <h4>Innovation meets sleek design.</h4>
  <h5>Capture stunning photos with AI cameras.</h5>
  <div>Infinity Display</div>
  <div>Quad Camera Setup</div>
  <div>Wireless Charging</div>
  <div>Expandable Storage</div>
  <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
  <button>Add to Cart</button>
  <button>Buy Now</button>
</div>
</div>

<div className="box" style={{background:"linear-gradient(to bottom, gold, tomato)",borderRadius:"12px",border:"2px solid black",width:"300px",height:"300px",marginLeft:"40px",fontSize:"10px",display:"flex",flexDirection:"column"}}>
  <h3>MacBook Pro</h3>
  <h4>Powerful performance for creators.</h4>
  <h5>Runs on Apple Silicon M‑series chip.</h5>
  <div>Retina Display</div>
  <div>Lightweight Aluminum Body</div>
  <div>All‑day Battery</div>
  <div>Touch ID</div>
  <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
  <button>Add to Cart</button>
  <button>Buy Now</button>
</div>
</div>

<div className="box" style={{background:"linear-gradient(to bottom, teal, lime)",borderRadius:"12px",border:"2px solid black",width:"300px",height:"300px",marginLeft:"40px",fontSize:"10px",display:"flex",flexDirection:"column"}}>
  <h3>PlayStation 5</h3>
  <h4>Next‑gen gaming experience.</h4>
  <h5>Ultra‑fast SSD for seamless play.</h5>
  <div>Ray Tracing Graphics</div>
  <div>DualSense Controller</div>
  <div>Exclusive Titles</div>
  <div>4K Gaming</div>
  <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
  <button>Add to Cart</button>
  <button>Buy Now</button>
</div>
</div>

<div className="box" style={{background:"linear-gradient(to bottom, navy, skyblue)",borderRadius:"12px",border:"2px solid black",width:"300px",height:"300px",marginLeft:"40px",fontSize:"10px",display:"flex",flexDirection:"column"}}>
  <h3>Xbox Series X</h3>
  <h4>Power your dreams.</h4>
  <h5>Fast load times with Velocity Architecture.</h5>
  <div>4K Gaming</div>
  <div>Game Pass Access</div>
  <div>Smart Delivery</div>
  <div>Backward Compatibility</div>
  <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
  <button>Add to Cart</button>
  <button>Buy Now</button>
</div>
</div>

<div className="box" style={{background:"linear-gradient(to bottom, crimson, peachpuff)",borderRadius:"12px",border:"2px solid black",width:"300px",height:"300px",marginLeft:"40px",fontSize:"10px",display:"flex",flexDirection:"column"}}>
  <h3>Fitbit</h3>
  <h4>Track your health and fitness.</h4>
  <h5>Monitor heart rate and sleep patterns.</h5>
  <div>Step Counter</div>
  <div>Water Resistant</div>
  <div>Smart Notifications</div>
  <div>Long Battery Life</div>
  <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
  <button>Add to Cart</button>
  <button>Buy Now</button>
</div>
</div>

<div className="box" style={{background:"linear-gradient(to bottom, purple, lavender)",borderRadius:"12px",border:"2px solid black",width:"300px",height:"300px",marginLeft:"40px",fontSize:"10px",display:"flex",flexDirection:"column"}}>
  <h3>Kindle</h3>
  <h4>Your library in your hands.</h4>
  <h5>Read without glare, even in sunlight.</h5>
  <div>Paperwhite Display</div>
  <div>Adjustable Warm Light</div>
  <div>Weeks of Battery</div>
  <div>Thousands of Titles</div>

  <div style={{ marginTop:"auto",display: "flex", gap: "10px" }}>
  <button>Add to Cart</button>
  <button>Buy Now</button>
</div>
</div>

<div className="box" style={{background:"linear-gradient(to bottom, darkgreen, lightyellow)",borderRadius:"12px",border:"2px solid black",width:"300px",height:"300px",marginLeft:"40px",fontSize:"10px",display:"flex",flexDirection:"column"}}>
  <h3>Nintendo Switch</h3>
  <h4>Play anytime, anywhere.</h4>
  <h5>Switch between handheld and docked mode.</h5>
  <div>Joy-Con Controllers</div>
  <div>Exclusive Nintendo Games</div>
  <div>Portable Design</div>
  <div>Multiplayer Fun</div>
  <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
  <button>Add to Cart</button>
  <button>Buy Now</button>
</div>
</div>

<div className="box" style={{background:"linear-gradient(to bottom, chocolate, beige)",borderRadius:"12px",border:"2px solid black",width:"300px",height:"300px",marginLeft:"40px",fontSize:"10px",display:"flex",flexDirection:"column"}}>
  <h3>Bose Headphones</h3>
  <h4>Immersive sound experience.</h4>
  <h5>Noise‑cancelling technology for clarity.</h5>
  <div>Wireless Connectivity</div>
  <div>Comfort Fit</div>
  <div>Long Battery Life</div>
  <div>Crystal Clear Audio</div>
  <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
  <button>Add to Cart</button>
  <button>Buy Now</button>
</div>
</div>
</div>
        </>
    )
}
export default ProductCard;
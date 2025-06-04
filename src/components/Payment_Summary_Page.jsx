import HeadProfile from "./HeadProfile";

export default function Payment_Summary_Page() {
  return (
    <div>
      <HeadProfile />
      <p>Home / Movie / Show time / Show booking</p>
      <div className="main-bill">
        <div className="show-detail" style={{ display: "flex" }}>
          <div className="left1">
            <img src="../src/assets/images/pvr_logo.png" />
          </div>
          <div className="right1">
            <h3>Azaad</h3>
            <p>Cinepolis: Pacific NSP2, Delhi</p>
          </div>
        </div>
        <div className="show timing">
          <h4>Monday, May 26, 2025, 07:05 PM</h4>
          <hr />
          <h4>2 Tickets</h4>
          <p>Prime B7, B8</p>
        </div>
        <h2>Payment Summary</h2>
        <div className="amount-summary">
          <p>Order amount</p>
          <p>Booking charge</p>
          <p>CGST</p>
          <p>SGST</p>
          <hr />
          <h4>Total Amount</h4>
        </div>
        <h2>Your details</h2>
        <div className="details">
          <p>+91-9876543210</p>
          <p>Delhi-NCR</p>
        </div>
        <div className="tnc">
          <p>Terms and Conditions</p>
        </div>
        <div className="total">
          <button>Procced to Pay</button>
        </div>
      </div>
    </div>
  );
}

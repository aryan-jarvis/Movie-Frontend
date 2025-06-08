import React, { Component } from "react";
import "./seats.css";
import post from "./post.json";

class Seatbooking extends Component {
  constructor() {
    super();
    const rows = "ABCDEFGHIJ";
    const seat = [];

    // Generate seat labels A1 - J10
    for (let row of rows) {
      for (let i = 1; i <= 10; i++) {
        seat.push(`${row}${i}`);
      }
    }

    this.state = {
      seat,
      seatAvailable: [...seat],
      seatReserved: [],
      seatSelected: post, // Already booked from post.json
    };
  }

  onClickData = (seat) => {
    if (this.state.seatReserved.includes(seat)) {
      this.setState((prevState) => ({
        seatAvailable: [...prevState.seatAvailable, seat],
        seatReserved: prevState.seatReserved.filter((s) => s !== seat),
      }));
    } else {
      this.setState((prevState) => ({
        seatReserved: [...prevState.seatReserved, seat],
        seatAvailable: prevState.seatAvailable.filter((s) => s !== seat),
      }));
    }
  };

  isSeatClickable = (seat) => !this.state.seatSelected.includes(seat);

  handleSubmited = () => {
    this.setState((prevState) => ({
      seatSelected: [...prevState.seatSelected, ...prevState.seatReserved],
      seatReserved: [],
    }));
  };

  groupSeatsByRow = () => {
    const grouped = {};
    this.state.seat.forEach((seat) => {
      const row = seat[0];
      if (!grouped[row]) grouped[row] = [];
      grouped[row].push(seat);
    });
    return grouped;
  };

  render() {
    const groupedSeats = this.groupSeatsByRow();

    return (
      <div className="seat-booking-container">
        <h1>Seat Reservation System</h1>
        <table className="grid">
          <tbody>
            {Object.keys(groupedSeats).map((rowKey) => (
              <tr key={rowKey}>
                {groupedSeats[rowKey].map((seat) => (
                  <td
                    key={seat}
                    className={
                      this.state.seatSelected.includes(seat)
                        ? "reserved"
                        : this.state.seatReserved.includes(seat)
                        ? "selected"
                        : "available"
                    }
                    onClick={
                      this.isSeatClickable(seat)
                        ? () => this.onClickData(seat)
                        : null
                    }
                  >
                    {seat}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-success btnmargin" onClick={this.handleSubmited}>
          Confirm Booking
        </button>
      </div>
    );
  }
}

export default Seatbooking;

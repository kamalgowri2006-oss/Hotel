import { useState } from "react";
import "./App.css";

function App() {
  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleBooking = (e) => {
    e.preventDefault();

    if (!booking.checkIn || !booking.checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    alert(
      `Booking request submitted!\nCheck-in: ${booking.checkIn}\nCheck-out: ${booking.checkOut}\nGuests: ${booking.guests}`
    );
  };

  const rooms = [
    {
      name: "Deluxe Room",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80",
      description: "Elegant room with a comfortable king-size bed.",
    },
    {
      name: "Executive Suite",
      price: "₹7,999",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
      description: "Spacious suite designed for business and leisure.",
    },
    {
      name: "Luxury Suite",
      price: "₹11,999",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
      description: "Premium suite with luxurious interiors and amenities.",
    },
  ];

  const facilities = [
    ["📶", "Free Wi-Fi"],
    ["🏊", "Swimming Pool"],
    ["🍽️", "Restaurant"],
    ["💪", "Fitness Center"],
    ["🚗", "Free Parking"],
    ["🛎️", "24/7 Room Service"],
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span>ROYAL</span> HAVEN
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#facilities">Facilities</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#booking" className="nav-btn">
          Book Now
        </a>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="small-title">WELCOME TO ROYAL HAVEN</p>

            <h1>
              Experience Luxury.
              <br />
              Stay Comfortably.
            </h1>

            <p>
              Discover exceptional hospitality, elegant rooms,
              <br />
              and unforgettable experiences.
            </p>

            <a href="#rooms" className="primary-btn">
              Explore Rooms
            </a>
          </div>
        </div>
      </section>

      {/* BOOKING SEARCH */}
      <section id="booking" className="booking-box">
        <form onSubmit={handleBooking}>
          <div>
            <label>Check In</label>
            <input
              type="date"
              value={booking.checkIn}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  checkIn: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>Check Out</label>
            <input
              type="date"
              value={booking.checkOut}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  checkOut: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>Guests</label>
            <select
              value={booking.guests}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  guests: e.target.value,
                })
              }
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>

          <button type="submit">Check Availability</button>
        </form>
      </section>

      {/* ABOUT */}
      <section id="about" className="about section">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
            alt="Hotel"
          />
        </div>

        <div className="about-content">
          <p className="section-label">ABOUT OUR HOTEL</p>

          <h2>
            A Perfect Place
            <br />
            to Relax & Unwind
          </h2>

          <p>
            Royal Haven is a premium hotel designed to provide
            guests with comfort, elegance, and exceptional service.
            From beautifully designed rooms to world-class
            facilities, every detail is created for your comfort.
          </p>

          <p>
            Whether you are travelling for business or enjoying a
            relaxing vacation, our professional team is always
            ready to make your stay memorable.
          </p>

          <button className="secondary-btn">Discover More</button>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="rooms section">
        <div className="section-heading">
          <p className="section-label">OUR ROOMS</p>
          <h2>Stay in Comfort & Style</h2>
          <p>
            Choose from our carefully designed rooms and suites.
          </p>
        </div>

        <div className="room-grid">
          {rooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.name} />

              <div className="room-info">
                <h3>{room.name}</h3>

                <p>{room.description}</p>

                <div className="room-bottom">
                  <div>
                    <strong>{room.price}</strong>
                    <span> / night</span>
                  </div>

                  <button
                    onClick={() =>
                      alert(`You selected ${room.name}`)
                    }
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="facilities section">
        <div className="section-heading">
          <p className="section-label">HOTEL FACILITIES</p>
          <h2>Everything You Need</h2>
        </div>

        <div className="facility-grid">
          {facilities.map((facility, index) => (
            <div className="facility-card" key={index}>
              <div className="facility-icon">{facility[0]}</div>
              <h3>{facility[1]}</h3>
              <p>
                Enjoy premium services designed for your comfort.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div>
          <p className="section-label">YOUR PERFECT STAY AWAITS</p>
          <h2>Ready for an unforgettable experience?</h2>
        </div>

        <a href="#booking" className="primary-btn">
          Reserve Your Room
        </a>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-grid">
          <div>
            <div className="logo">
              <span>ROYAL</span> HAVEN
            </div>

            <p>
              Luxury hospitality with exceptional comfort,
              service, and unforgettable experiences.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#rooms">Rooms</a>
            <a href="#facilities">Facilities</a>
            <a href="#about">About</a>
          </div>

          <div>
            <h3>Contact</h3>
            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@royalhaven.com</p>
          </div>
        </div>

        <div className="copyright">
          © 2026 Royal Haven Hotel. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;

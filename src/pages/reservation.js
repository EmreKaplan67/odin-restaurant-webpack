import { createEl } from "../domUtils.js";

export default function loadReservation() {
  const container = createEl("section", {
    id: "reservation",
    className: "reservation",
    html: `<h2>Book a Table</h2>
        <p class="reservation-intro">
          Reserve your spot and enjoy an unforgettable dining experience.
        </p>

        <form class="reservation-form">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
          />

          <label for="date">Date</label>
          <input type="date" id="date" required />

          <label for="time">Time</label>
          <input type="time" id="time" min="11:00" max="22:00" required />

          <label for="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value="2"
            required
          />

          <button type="submit">Reserve Table</button>
        </form>`,
  });

  return container;
}

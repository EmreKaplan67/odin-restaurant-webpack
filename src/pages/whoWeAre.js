import { createEl } from "../domUtils";

export default function loadWhoWeAre() {
    const container = createEl("section", {
        className: "who-we-are",
        id: "who-we-are",
        html: `<h2>Who We Are</h2>
        <p>
          Welcome to Odin Restaurant, where timeless flavors meet modern dining.
          Established in 1970, Odin has been a beloved cornerstone of the
          community for over five decades, offering guests a warm and inviting
          space to share unforgettable meals and moments.
        </p>
        <p>
          Inspired by the Nordic spirit of craftsmanship and hospitality, our
          philosophy is simple — use the finest locally sourced ingredients,
          treat every dish as an art form, and serve it with heart. From our
          signature slow-roasted meats to our fresh seafood and seasonal
          produce, every plate reflects our passion for flavor and authenticity.
        </p>
        <p>
          Over the years, Odin Restaurant has evolved while staying true to its
          roots.
        </p>
        <p>
          At Odin, food is more than a meal — it’s a story. And we’re proud to
          keep telling that story, one guest at a time.
        </p>
      </section>`
    });
    return container;
}
import { createEl } from "../domUtils";

export default function loadContact() {
  const container = createEl("section", {
    className: "contact",
    id: "contact",
    html: `<h2>Contact Us</h2>
        <p class="contact-intro">
          We’d love to hear from you! Reach out for inquiries, feedback, or
          reservations.
        </p>

        <div class="contact-content">
          <div class="contact-info">
            <p><strong>Address:</strong> 123 Valhalla Street, Asgard City</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Email:</strong> contact@odinrestaurant.com</p>
            <p><strong>Hours:</strong> Mon–Sat 11:00 AM – 10:00 PM</p>
          </div>

          <div class="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.7830420971673!2d33.99848817521879!3d34.98709876779304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc5138e882309%3A0x9858c41bc4cc7dcd!2sOdin%20Restaurant!5e0!3m2!1sen!2sie!4v1762358212802!5m2!1sen!2sie"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>`,
  });

  return container;
}

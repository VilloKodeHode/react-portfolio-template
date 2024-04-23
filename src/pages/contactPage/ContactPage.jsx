import { MainLayout } from "../../components/layout/main/mainLayout";
import "./contactPage.css";

export const ContactPage = () => {
  return (
    <MainLayout>
      <section className="hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>
            Have questions or feedback? Feel free to reach out to us using the form below or through our contact information.
          </p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
    </MainLayout>
  );
};

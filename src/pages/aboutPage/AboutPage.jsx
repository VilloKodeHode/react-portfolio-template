import { NormalButton } from "../../components/buttons/Buttons";
import "./aboutPage.css";


export const AboutPage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to my AboutPage</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            libero nec ante sollicitudin fringilla.
          </p>
          <NormalButton className="btn" href="#footer">learn more</NormalButton>
        </div>
      </section>
      <section className="longer_about_me_section">Here is more info about me:</section>
      <section className="skills">what I know:</section>
    </>
  );
};

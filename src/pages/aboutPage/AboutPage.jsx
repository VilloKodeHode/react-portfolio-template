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
          <NormalButton href="#footer">learn more</NormalButton>
          {/* <a href="#footer" className="btn">Learn more</a> */}
        </div>
      </section>
      <section className="longer_about_me_section">Here is more info about me:</section>
      <section className="skills">what I know:</section>
    </>
  );
};

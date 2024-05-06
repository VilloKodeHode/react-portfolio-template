import { NormalButton } from "../../../components/buttons/Buttons"

function IndexHeroSection () {
    return (
        <section className="hero">
        <div className="hero-content">
          <h1>Welcome to my Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet libero nec ante sollicitudin fringilla.</p>
          <NormalButton href="#footer">Learn more</NormalButton>
        </div>
      </section>
    )
}


export default IndexHeroSection
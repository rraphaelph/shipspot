import aboutImg from "./assets/img/about.jpg";
import Image from 'next/image'

function AboutSection() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Sobre</h3>
              <h2>Comece Hoje Mesmo com a Plataforma de Dropshipping Líder do Mercado - ShipSpot!</h2>
              <p>
              A ShipSpot é uma empresa líder em dropshipping, que oferece uma plataforma completa para varejistas on-line que desejam vender produtos sem precisar se preocupar com estoque,
              embalagem ou envio. Com uma vasta rede de fornecedores de qualidade, a empresa fornece uma grande variedade de produtos para varejistas de todos os tamanhos.

              </p>
              <div className="text-center text-lg-start">
                <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Saiba Mais</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <Image src={aboutImg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

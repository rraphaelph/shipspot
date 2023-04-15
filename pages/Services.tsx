import React from "react";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Nossos serviços</p>
        </header>

        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-box blue">
              <i className="ri-discuss-line icon"></i>
              <h3>Catálogo de produtos:</h3>
              <p>
              A ShipSpot pode oferecer um catálogo de produtos atualizado
              regularmente com imagens, descrições e preços competitivos,
               permitindo que as empresas tenham uma ampla seleção de produtos
               disponíveis sem precisar gerenciar estoque.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-box orange">
              <i className="ri-discuss-line icon"></i>
              <h3>Gerenciamento de estoque:</h3>
              <p>
               A ShipSpot pode cuidar do estoque e do envio dos produtos diretamente para os clientes, o que significa que as empresas não precisam armazenar nenhum produto em sua própria instalação física.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-box green">
              <i className="ri-discuss-line icon"></i>
              <h3>Envio e rastreamento: </h3>
              <p>
              A ShipSpot pode oferecer opções de envio rápidas e confiáveis, incluindo opções de envio internacional. Além disso, a empresa pode fornecer informações de rastreamento para que as empresas possam informar seus clientes sobre o status de seus pedidos.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="service-box red">
              <i className="ri-discuss-line icon"></i>
              <h3>Gerenciamento de pedidos: </h3>
              <p>
              A ShipSpot pode gerenciar todos os pedidos recebidos pelas empresas, processando pagamentos e enviando notificações de envio para o comprador.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-box purple">
              <i className="ri-discuss-line icon"></i>
              <h3>Suporte ao cliente:</h3>
              <p>
              A ShipSpot pode oferecer suporte ao cliente para questões relacionadas a envio, devoluções ou problemas com o produto. Isso pode aliviar o fardo das empresas, permitindo que elas se concentrem em outras áreas de seus negócios.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="service-box pink">
              <i className="ri-discuss-line icon"></i>
              <h3>Ferramentas de integração: </h3>
              <p>
              A ShipSpot pode oferecer integrações com plataformas de e-commerce populares, como Shopify ou WooCommerce. Isso permite que as empresas vendam produtos diretamente em sua própria loja virtual sem precisar se preocupar com a logística por trás disso. A empresa também pode fornecer ferramentas de automação e gerenciamento de estoque para facilitar ainda mais a vida das empresas que trabalham com dropshipping..
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

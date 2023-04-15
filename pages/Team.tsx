import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

import team1 from './assets/img/team/team-1.jpg';
import team2 from './assets/img/team/team-2.jpg';

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
  }, []);

  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Time</p>
        </header>

        <div className="row gy-4">
          <div className="col-lg-6 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <div className="member-img">
                <img src={team1} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Raphael Marinho</h4>
                <span>CTO</span>
                <p>Raphael é um CTO, sigla em inglês para Chief Technology Officer, que geralmente é responsável pela estratégia e desenvolvimento tecnológico de uma empresa.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <div className="member-img">
                <img src={team2} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Ralph Marinho</h4>
                <span>CEO</span>
                <p>Ralph é um CEO, sigla em inglês para Chief Executive Officer, que é o líder executivo de uma empresa, responsável por tomar decisões estratégicas e gerenciar a organização como um todo. </p>
              </div>
            </div>
          </div>
</div>
</div>
</section>
);

};

export default Team;

import './styles/main.scss';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Preloader from './components/UIElements/Preloader/Preloader';

// =====================================================
// IMAGENS
// =====================================================

import camilla from './icons/camilla.jpg';
import henrique from './icons/henrique.jpg';
import gabriel from './icons/gabriel.jpg';
import artemis from './icons/artemis.jpg';
import artesanato from './icons/artesanato.png';


const App = () => {
  return (
    <Suspense fallback={<Preloader />}>

      <Router>

        <main className="portfolio-page">

          {/* =====================================================
              HERO
          ===================================================== */}

          <section className="portfolio-hero" id="inicio">

            <img
              src={camilla}
              alt="Camilla Hossein"
              className="portfolio-hero-image"
            />

            <div className="portfolio-hero-overlay" />

            <div className="portfolio-hero-content">

              <span className="portfolio-eyebrow">
                QUEM SOU EU?
              </span>

              <h1>
                Oi, eu sou
                <span> Camilla.</span>
              </h1>

              <p>
                Profissional de tecnologia, apaixonada por pessoas,
                produtos, música, criatividade e por transformar ideias
                em coisas que realmente fazem sentido.
              </p>

              <div className="portfolio-buttons">

                <a
                  href="#sobre"
                  className="portfolio-btn primary"
                >
                  Conheça minha história
                </a>

                <a
                  href="https://www.linkedin.com/in/camilla-hossein/"
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-btn secondary"
                >
                  LinkedIn ↗
                </a>

              </div>

            </div>

            <div className="portfolio-scroll">
              ↓ role para conhecer minha história
            </div>

          </section>


          {/* =====================================================
              SOBRE MIM
          ===================================================== */}

          <section
            className="portfolio-section about-section"
            id="sobre"
          >

            <div className="portfolio-section-label">
              01 — SOBRE MIM
            </div>

            <div className="about-grid">

              <div>

                <h2>
                  Muito além do
                  <span> currículo.</span>
                </h2>

              </div>

              <div className="about-text">

                <p>
                  Sou uma profissional de tecnologia com uma trajetória
                  que passou por desenvolvimento, gestão de projetos,
                  Product Ownership, Product Management e análise de
                  negócios.
                </p>

                <p>
                  Gosto de estar no meio do caminho entre pessoas,
                  negócio e tecnologia — entendendo problemas,
                  organizando ideias e transformando necessidades
                  em soluções.
                </p>

                <p>
                  Minha formação em
                  <strong>
                    {' '}Análise e Desenvolvimento de Sistemas
                  </strong>
                  {' '}me deu uma base técnica, mas minha experiência
                  me ensinou que tecnologia também é sobre comunicação,
                  colaboração e entender pessoas.
                </p>

                <div className="portfolio-tags">

                  <span>Produto</span>
                  <span>Tecnologia</span>
                  <span>Agilidade</span>
                  <span>Dados</span>
                  <span>Projetos</span>
                  <span>Inovação</span>

                </div>

              </div>

            </div>

          </section>


          {/* =====================================================
              JORNADA PROFISSIONAL
          ===================================================== */}

          <section
            className="portfolio-section journey-section"
            id="jornada"
          >

            <div className="portfolio-section-label">
              02 — MINHA JORNADA
            </div>

            <h2>
              De código a
              <span> produto.</span>
            </h2>

            <div className="portfolio-timeline">


              {/* FORMAÇÃO */}

              <div className="timeline-item">

                <div className="timeline-year">
                  FORMAÇÃO
                </div>

                <div className="timeline-card">

                  <h3>
                    Análise e Desenvolvimento de Sistemas
                  </h3>

                  <span className="timeline-company">
                    UniRitter dos Reis
                  </span>

                  <p>
                    Minha formação em tecnologia, construindo uma base
                    em desenvolvimento de software, lógica, sistemas,
                    tecnologia e resolução de problemas.
                  </p>

                </div>

              </div>


              {/* DESENVOLVIMENTO */}

              <div className="timeline-item">

                <div className="timeline-year">
                  2022
                </div>

                <div className="timeline-card">

                  <h3>
                    Desenvolvimento de Software
                  </h3>

                  <p>
                    Minha trajetória profissional começou mais próxima
                    do desenvolvimento, trabalhando com tecnologias
                    como JavaScript, React, TypeScript e Node.js.
                  </p>

                  <div className="mini-tags">

                    <span>JavaScript</span>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>

                  </div>

                </div>

              </div>


              {/* PRODUTO */}

              <div className="timeline-item">

                <div className="timeline-year">
                  2022 — 2025
                </div>

                <div className="timeline-card">

                  <h3>
                    Product Owner → Product Manager
                  </h3>

                  <p>
                    Ao longo da minha carreira, fui migrando para uma
                    atuação cada vez mais conectada a produto, negócio,
                    estratégia e pessoas.
                  </p>

                  <p>
                    Trabalhei com roadmap, priorização, stakeholders,
                    metodologias ágeis e evolução de produtos.
                  </p>

                  <div className="mini-tags">

                    <span>Product Owner</span>
                    <span>Product Manager</span>
                    <span>Scrum</span>
                    <span>Kanban</span>
                    <span>Jira</span>

                  </div>

                </div>

              </div>


              {/* PETROBRAS */}

              <div className="timeline-item current">

                <div className="timeline-year">
                  MAIO / 2025
                </div>

                <div className="timeline-card">

                  <span className="current-badge">
                    MOMENTO ATUAL
                  </span>

                  <h3>
                    Jornada Petrobras
                  </h3>

                  <p>
                    Em maio de 2025 começou uma nova etapa da minha
                    jornada profissional.
                  </p>

                  <p>
                    Uma experiência que reúne tecnologia, processos,
                    dados, pessoas e projetos de grande impacto.
                  </p>

                  <p>
                    É uma fase de aprendizado, desafios e construção —
                    e uma oportunidade de colocar em prática tudo que
                    venho desenvolvendo ao longo da minha carreira.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* =====================================================
              FAMÍLIA
          ===================================================== */}

          <section
            className="portfolio-section family-section"
            id="familia"
          >

            <div className="portfolio-section-label">
              03 — MINHA FAMÍLIA
            </div>

            <div className="family-intro">

              <div>

                <h2>
                  Meu maior
                  <span> projeto.</span>
                </h2>

              </div>

              <p>
                Antes de qualquer cargo, projeto ou tecnologia,
                existem as pessoas que fazem tudo isso ter sentido.
              </p>

            </div>


            <div className="family-grid">


              {/* HENRIQUE */}

              <article className="family-card">

                <img
                  src={henrique}
                  alt="Camilla e Henrique"
                />

                <div className="family-card-overlay" />

                <div className="family-card-content">

                  <span>
                    MEU FILHO
                  </span>

                  <h3>
                    Henrique, 6 anos
                  </h3>

                  <p>
                    Meu pequeno parceiro de aventuras e uma das
                    maiores inspirações para tudo que construo
                    para o futuro.
                  </p>

                </div>

              </article>


              {/* GABRIEL */}

              <article className="family-card">

                <img
                  src={gabriel}
                  alt="Camilla e Gabriel"
                />

                <div className="family-card-overlay" />

                <div className="family-card-content">

                  <span>
                    MEU NOIVO
                  </span>

                  <h3>
                    Gabriel
                  </h3>

                  <p>
                    Meu parceiro de vida, aventuras, planos e
                    momentos compartilhados.
                  </p>

                </div>

              </article>

            </div>

          </section>


          {/* =====================================================
              HOBBIES
          ===================================================== */}

          <section
            className="portfolio-section hobbies-section"
            id="hobbies"
          >

            <div className="portfolio-section-label">
              04 — FORA DO TRABALHO
            </div>

            <h2>
              Porque eu também sou
              <span> várias versões de mim.</span>
            </h2>


            <div className="hobbies-grid">


              {/* ARTEMIS */}

              <article className="hobby-card">

                <div className="hobby-number">
                  01
                </div>

                <div className="hobby-icon">
                  🎤
                </div>

                <h3>
                  Vocalista da Artemis
                </h3>

                <p>
                  Música é uma das formas que encontrei para colocar
                  para fora criatividade, emoção e energia.
                </p>

                <a
                  href="https://www.youtube.com/watch?v=lm_NPjAPdJ4"
                  target="_blank"
                  rel="noreferrer"
                  className="hobby-link"
                >
                  ▶ Assistir ao clipe
                </a>

              </article>


              {/* ARTESANATO */}

              <article className="hobby-card craft-card">

                <img
                  src={artesanato}
                  alt="Artesanato feito por Camilla"
                />

                <div className="hobby-card-overlay" />

                <div className="hobby-content">

                  <div className="hobby-number">
                    02
                  </div>

                  <h3>
                    Artesanato
                  </h3>

                  <p>
                    Gosto de criar coisas com as próprias mãos.
                    MDF, pintura, desenhos e projetos criativos
                    fazem parte do meu lado mais artístico.
                  </p>

                </div>

              </article>


              {/* VIDEOGAMES */}

              <article className="hobby-card game-card">

                <div className="hobby-number">
                  03
                </div>

                <div className="hobby-icon">
                  🎮
                </div>

                <h3>
                  Videogames
                </h3>

                <p>
                  RPGs e mundos abertos são meu tipo de terapia.
                </p>

                <div className="games-playing">

                  <span>
                    NOW PLAYING
                  </span>

                  <strong>
                    Red Dead Redemption 2
                  </strong>

                  <strong>
                    Cyberpunk 2077
                  </strong>

                </div>

              </article>

            </div>

          </section>


          {/* =====================================================
              MÚSICA / ARTEMIS
          ===================================================== */}

          <section
            className="portfolio-section music-section"
            id="musica"
          >

            <div className="portfolio-section-label">
              05 — MÚSICA
            </div>

            <div className="music-grid">


              <div className="music-image">

                <img
                  src={artemis}
                  alt="Camilla com a banda Artemis"
                />

              </div>


              <div className="music-content">

                <span className="portfolio-eyebrow">
                  ARTEMIS
                </span>

                <h2>
                  Minha voz também
                  <span> conta histórias.</span>
                </h2>

                <p>
                  Sou vocalista da banda Artemis. A música sempre teve
                  um espaço importante na minha vida — e estar em um
                  palco é uma das formas que encontrei de transformar
                  emoção em experiência.
                </p>

                <a
                  href="https://www.youtube.com/watch?v=lm_NPjAPdJ4"
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-btn primary"
                >
                  ▶ Assistir ao clipe
                </a>

              </div>

            </div>


            {/* VÍDEO */}

            <div className="video-container">

              <div className="video-title">
                <span>CLIPE</span>
                <span>ARTEMIS</span>
              </div>

              <div className="video-wrapper">

                <iframe
                  src="https://www.youtube.com/embed/lm_NPjAPdJ4"
                  title="Clipe da banda Artemis"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

              </div>

            </div>

          </section>


          {/* =====================================================
              CURIOSIDADES
          ===================================================== */}

          <section
            className="portfolio-section curiosities-section"
            id="curiosidades"
          >

            <div className="portfolio-section-label">
              06 — CURIOSIDADES
            </div>

            <h2>
              Algumas coisas que
              <span> talvez você não saiba.</span>
            </h2>


            <div className="facts-grid">


              <article className="fact-card">

                <span>01</span>

                <div>

                  <h3>
                    🏆 Campeã de Karaoke
                  </h3>

                  <p>
                    Sim. Eu já ganhei um campeonato de Karaoke.
                  </p>

                </div>

              </article>


              <article className="fact-card">

                <span>02</span>

                <div>

                  <h3>
                    🎧 Música sem rótulo
                  </h3>

                  <p>
                    Minha playlist é praticamente uma viagem por
                    vários estilos: alternativo, emo, pop, samba,
                    MPB, rap e hip hop.
                  </p>

                </div>

              </article>


              <article className="fact-card">

                <span>03</span>

                <div>

                  <h3>
                    🎨 Tecnologia + criatividade
                  </h3>

                  <p>
                    Gosto tanto de resolver problemas com tecnologia
                    quanto de sentar e simplesmente criar alguma coisa.
                  </p>

                </div>

              </article>


              <article className="fact-card">

                <span>04</span>

                <div>

                  <h3>
                    🎮 RPG é comigo mesmo
                  </h3>

                  <p>
                    Se existe um mundo aberto cheio de histórias,
                    provavelmente vou querer explorar cada canto dele.
                  </p>

                </div>

              </article>

            </div>

          </section>


          {/* =====================================================
              FUTURO
          ===================================================== */}

          <section
            className="future-section"
            id="futuro"
          >

            <div className="future-content">

              <span className="portfolio-eyebrow">
                07 — DAQUI PRA FRENTE
              </span>

              <h2>
                Ainda tem muita coisa
                <span> para construir.</span>
              </h2>

              <p>
                Meus próximos objetivos são simples, mas importantes:
              </p>


              <div className="future-goals">


                <article>

                  <span>01</span>

                  <h3>
                    🏠 Terminar de pagar minha casa
                  </h3>

                  <p>
                    Construir estabilidade e segurança para minha
                    família.
                  </p>

                </article>


                <article>

                  <span>02</span>

                  <h3>
                    🚀 Entregar um projeto importante
                  </h3>

                  <p>
                    Apresentar um projeto na Petrobras que realmente
                    faça diferença e possa auxiliar outros colegas
                    no dia a dia.
                  </p>

                </article>


                <article>

                  <span>03</span>

                  <h3>
                    💡 Continuar aprendendo
                  </h3>

                  <p>
                    Evoluir profissionalmente sem deixar de lado
                    criatividade, curiosidade e vontade de experimentar
                    coisas novas.
                  </p>

                </article>


              </div>

            </div>

          </section>


          {/* =====================================================
              FOOTER
          ===================================================== */}

          <footer className="portfolio-footer">

            <div className="footer-content">

              <span className="portfolio-eyebrow">
                PRAZER,
              </span>

              <h2>
                Camilla<span>.</span>
              </h2>

              <p>
                Tecnologia, produto, música, criatividade
                e um pouco de caos.
              </p>


              <div className="footer-links">

                <a
                  href="https://www.linkedin.com/in/camilla-hossein/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://www.youtube.com/watch?v=lm_NPjAPdJ4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Artemis / YouTube ↗
                </a>

                <a href="#inicio">
                  Voltar ao topo ↑
                </a>

              </div>

            </div>


            <div className="footer-bottom">
              © {new Date().getFullYear()} Camilla Hossein
            </div>

          </footer>

        </main>

      </Router>

    </Suspense>
  );
};

export default App;

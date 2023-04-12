import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';

function Home(){

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    arrows: false,
    speed: 500,
    responsive:[

      {breakpoint: 1114,

      settings:{
      arrows: false,
      slidesToShow: 5,
      centerMode: true
      }
    },

      {breakpoint: 778,
      settings:{
        arrows: false,
        slidesToShow: 3,
        centerMode: true
      }}

      ]

  };


    return(

        <>



        <div className='section-header cor-black'>
            <div className='container'>

            <div className='perfil-box'>
                <div className='img-box'></div>
            </div>

            <div className='nome-box'>

                <div className='nome-wraper'>
                <h4>Olá, me chamo</h4>
                <h1>Lucas de Oliveira Barros</h1>
                <h3>Desenvolvedor <span className='cor-yellow'>Front-End</span> e <span className='cor-yellow'>Designer</span></h3>
                </div>

            </div>

            </div>
        </div>
        
          <div className='section-sobre'>
            <div className='container'>

              <div className='sobre-texto-box'>

                <h2>Sobre Mim</h2>

                <p>Olá, me chamo Lucas de Oliveira, tenho 19 anos e sou um estudante na área de programação, com foco no desenvolvimento front-end. 
                  Tenho conhecimentos do básico a um nível médio, o que é uma base sólida para continuar evoluindo.
                  Estou sempre buscando aprender e me atualizar, por isso estou nos cursos full stack da Danki Code e também fazendo faculdade de TI. 
                  É uma ótima maneira de expandir meus conhecimentos e estar por dentro das últimas tendências e tecnologias.
                  Comecei meus estudos em 29 de dezembro e já criei alguns projetos que me deixaram bastante orgulhoso, 
                  acredito que a prática é essencial para aprimorar as habilidades e desenvolver projetos cada vez melhores.
                  Estou animado com as possibilidades que a área de programação pode me oferecer e estou determinado a continuar evoluindo e buscando novos desafios. 
                  Acredito que com dedicação e perseverança, posso alcançar meus objetivos e ter uma carreira bem-sucedida na área de programação.</p>

                <div className='sobre-redes-box'>

                  <a target='_blank' href='https://www.instagram.com/lks.programacao/'>
                    <img src='/imagens/social/instagram.png' />
                  </a>

                  <a target='_blank' href='https://www.linkedin.com/in/lucas-oliveira-478236261/'>
                    <img src='/imagens/social/linkedin.png' />
                  </a>

                  <a target='_blank' href='https://wa.me/qr/SUMPQO4Y5U67P1'>
                    <img src='/imagens/social/whatsapp.png' />
                  </a>

                </div>

              </div>

              <div className='sobre-img-box'>

              <img src='/imagens/fotos/bg-celular.png' />

              </div>

            </div>
          </div>

          <div className='line'>
            <img src='/imagens/icon/line-white.png' />
          </div>

          <div className='section-trabalhos'>
            <div className='container'>
                <h2>Trabalhos</h2>
            </div>

              <div className='trabalhos-site'>

                <div className='img-site'></div>

                <div className='texto-site'>

                  <div className="texto-site-wraper">

                  <h2>Sites <span className='cor-yellow'>100%</span> Responsivos</h2>

                  <p>Trabalho com a criação de sites totalmente adaptaveis para vários tipos de telas,
                    sempre com um olhar crítico levando em consideração cada pixel, e sempre buscando dar a melhor experiencia para o
                    usuario. Com minha habilidade em desenvolvimento front-end, posso transformar suas ideias em um site 
                    incrível e funcional.
                  </p>

                  <a href="/projetos"><button>VER PROJETOS</button></a>
                  
                  </div>
                </div>

              </div>

              <div className='trabalhos-design'>

                <div className='texto-design'>

                    <div className='texto-design-wraper'>
                    <h2>Layouts <span className='cor-yellow'>Criativos</span> e <span className='cor-yellow'>Unicos</span></h2>

                    <p>Minha abordagem criativa em design é o que me permite transformar ideias em conceitos inovadores e únicos.
                      Meus trabalhos vão de uma simples ideia para um layout unico e sofisticado, sempre abusando da criatividade
                      e das possibilidades que me cercam.
                    </p>

                    <a href="/projetos"><button>VER PROJETOS</button></a>

                    </div>

                </div>
                
                <div className='img-design'></div>

              </div>

          </div>

          <div className='section-conhecimentos'>

              <div className='center'>
                <h2>Conhecimentos</h2>
              </div>

            <div className='container'>

              <Slider {...settings}>

                <div className='conhecimentos-single'>
                  <img src='/imagens/servicesicon/html5.png' />
                </div>

                <div className='conhecimentos-single'>
                  <img src='/imagens/servicesicon/css3.png' />
                </div>

                <div className='conhecimentos-single'>
                  <img src='/imagens/servicesicon/js.png' />
                </div>

                <div className='conhecimentos-single'>
                  <img src='/imagens/servicesicon/jquery.png' />
                </div>

                <div className='conhecimentos-single'>
                  <img src='/imagens/servicesicon/php.png' />
                </div>

                <div className='conhecimentos-single'>
                  <img src='/imagens/servicesicon/react.png' />
                </div>

                <div className='conhecimentos-single'>
                  <img src='/imagens/servicesicon/node-js.png' />
                </div>

                <div className='conhecimentos-single'>
                  <img src='/imagens/servicesicon/mysql.png' />
                </div>

                <div className='conhecimentos-single'>
                  <img src='/imagens/servicesicon/sass.png' />
                </div>

                <div className='conhecimentos-single'>
                  <img className='canvaimg' src='/imagens/servicesicon/canva.png' />
                </div>

                <div className='conhecimentos-single'>
                  <img src='/imagens/servicesicon/ps.png' />
                </div>

              </ Slider>

            </div>
            
          </div>

          <div className='line2'>
            <img src='/imagens/icon/line-black.png' />
          </div>

          <div className='section-contato'>
            <div className='container'>

              <h2>Entre em Contato</h2>

              <form method="POST" action="https://formsubmit.co/lucasoliveira8321@gmail.com">

                <input placeholder='Digite seu email...' type="email" name="email" required/>

                <input type="hidden" name="_next" value="https://lks-programação.com.br" />
					      <input type="hidden" name="_captcha" value="false" />

                <input type='submit' value='ENVIAR'/>

              </form>

            </div>
          </div>
        
        
        
        </>
    )
}

export default Home
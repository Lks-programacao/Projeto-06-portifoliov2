import React from "react";
import Slider from 'react-slick';
import { Link } from "react-router-dom";

/*import { useNavigate } from "react-router-dom"*/

function Contact(){

    /*
    const navigate = useNavigate()

    const handleContact = () => {
        console.log("contato enviado");
        return navigate("/")
    }
    
    /*<button onClick={handleContact}>Enviar</button>*/

    const settings = {
        className: "center",
        centerMode: false,
        infinite: false,
        centerPadding: "540px",
        slidesToShow: 3.9,
        autoplay: false,
        arrows: false,
        speed: 500,
        responsive:[
			{breakpoint: 1360,
			settings:{
				slidesToShow: 3.5,
			}},

			{breakpoint: 1126,
			settings:{
				slidesToShow: 3.1
			}},

			{breakpoint: 990,
			settings:{
				slidesToShow: 2.5,
			}},

            {breakpoint: 800,
            settings:{
            slidesToShow: 2.1
            }},
    
            {breakpoint: 756,
            settings:{
            slidesToShow: 1.99,
            }},

            {breakpoint: 650,
            settings:{
            slidesToShow: 1.5,
            }},
    
            {breakpoint: 500,
            settings:{
            slidesToShow: 1.4
            }},

            {breakpoint: 440,
            settings:{
            slidesToShow: 1.3
            }},

            {breakpoint: 407,
            settings:{
            slidesToShow: 1.25
            }},
                
            {breakpoint: 395,
            settings:{
            slidesToShow: 1.15
            }},

            {breakpoint: 360,
            settings:{
            slidesToShow: 1
            }},
    

		]
      };

    return(

        <>


        <div className="section-conhecimentos-skills">
            <div className="container">

                <h2 className='center-text'>Conhecimentos</h2>

                <div className="skills-box">

                    <div className="line-skills">
                        <div className="skills-single">
                            <h3>HTML</h3>
                            <div style={{width:'95%'}} className="cor">
                                <p>95%</p>
                            </div>
                        </div>

                        <div className="skills-single">
                            <h3>CSS</h3>
                            <div style={{width:'95%'}} className="cor">
                                <p>95%</p>
                            </div>
                        </div>
                    </div>

                    <div className="line-skills">
                        <div className="skills-single">
                            <h3>Java Script</h3>
                            <div style={{width:'50%'}} className="cor">
                                <p>50%</p>
                            </div>
                        </div>

                        <div className="skills-single">
                            <h3>React</h3>
                            <div style={{width:'75%'}} className="cor">
                                <p>75%</p>
                            </div>
                        </div>
                    </div>

                    <div className="line-skills">
                        <div className="skills-single">
                            <h3>Jquery</h3>
                            <div style={{width:'75%'}} className="cor">
                                <p>75%</p>
                            </div>
                        </div>

                        <div className="skills-single">
                            <h3>PHP</h3>
                            <div style={{width:'12%', maxWidth:"30px"}} className="cor">
                                <p>05%</p>
                            </div>
                        </div>
                    </div>

                    <div className="line-skills">
                        <div className="skills-single">
                            <h3>NODE JS</h3>
                            <div style={{width:'30%'}} className="cor">
                                <p>30%</p>
                            </div>
                        </div>

                        <div className="skills-single">
                            <h3>My SQL</h3>
                            <div style={{width:'12%', maxWidth:"30px"}} className="cor">
                                <p>05%</p>
                            </div>
                        </div>
                    </div>

                    <div className="line-skills">
                        <div className="skills-single">
                            <h3>Sass</h3>
                            <div style={{width:'90%'}} className="cor">
                                <p>90%</p>
                            </div>
                        </div>

                        <div className="skills-single">
                            <h3>PhotoShop</h3>
                            <div style={{width:'90%'}} className="cor">
                                <p>90%</p>
                            </div>
                        </div>
                    </div>

                    <div className="line-skills">
                        <div className="skills-single">
                            <h3>Canva</h3>
                            <div style={{width:'95%'}} className="cor">
                                <p>95%</p>
                            </div>
                        </div>

                        <div style={{backgroundColor:'transparent'}} className="skills-single">
                            
                        </div>

                    </div>

                </div>

            </div>

            <div className="section-certificados">
                <div className="container">
                    <h2 className='center-text'>Certificados</h2>
                </div>

                <div className="slide-certificados">

                <Slider {...settings}>

                    <Link target="_blank" to="https://cursos.dankicode.com/api/certificados/22f07de5-c515-42f6-89d4-5ef113b494b3">
                    <div className="slide-single certificado1">      
                    </div>
                    </Link>

                    <Link target="_blank" to="https://cursos.dankicode.com/api/certificados/8ad9bf1e-5cc4-4321-ae8e-54704a5640c2">
                    <div className="slide-single certificado2"></div>
                    </Link>

                    <Link target="_blank" to="https://cursos.dankicode.com/api/certificados/13f77032-2b21-4b88-b8c0-0c0615471a3a">
                    <div className="slide-single certificado3"></div>
                    </Link>

                    <Link target="_blank" to="https://cursos.dankicode.com/api/certificados/0adb9613-ccda-4d56-8a34-b2399a58ce16">
                    <div className="slide-single certificado4"></div>
                    </Link>

                </Slider>

                </div>

            </div>

        </div>

        <div className="section-soft">

            <div className='center'>
                <h2 className='center-text'>Soft Skills</h2>
            </div>

            <div className="container">
                
            
                <div className="soft-box">


                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/criatividade.png' />
            
                                <div className='cor-single'>
                                    <h3>Criatividade</h3>
                                </div>
                            </div>

                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/detalhismo.png' />
            
                                <div className='cor-single'>
                                    <h3>Detalhismo</h3>
                                </div>
                            </div>

                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/foco.png' />
            
                                <div className='cor-single'>
                                    <h3>Foco</h3>
                                </div>
                            </div>



                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/comprometimento.png' />
            
                                <div className='cor-single'>
                                    <h3>Comprometimento</h3>
                                </div>
                            </div>

                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/autonomia.png' />
            
                                <div className='cor-single'>
                                    <h3>Autonomia</h3>
                                </div>
                            </div>

                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/responsabilidade.png' />
            
                                <div className='cor-single'>
                                    <h3>Responsabilidade</h3>
                                </div>
                            </div>



                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/trabalho-em-equipe.png' />
            
                                <div className='cor-single'>
                                    <h3>Trabalho em Equipe</h3>
                                </div>
                            </div>

                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/aprendizado-ativo.png' />
            
                                <div className='cor-single'>
                                    <h3>Aprendizado Ativo</h3>
                                </div>
                            </div>

                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/resolucao-de-problemas.png' />
            
                                <div className='cor-single'>
                                    <h3>Resolução de Problemas</h3>
                                </div>
                            </div>



                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/organizacao.png' />
            
                                <div className='cor-single'>
                                    <h3>Organização</h3>
                                </div>
                            </div>

                            <div className="soft-single">
                                <img src='../../imagens/icon/usados/produtividade.png' />
            
                                <div className='cor-single'>
                                    <h3>Produtividade</h3>
                                </div>
                            </div>

                            <div style={{backgroundColor:'transparent', boxShadow:'none'}} className="soft-single soft-none"></div>

                </div>
            </div>
        </div>

        <div className="section-hard">

            <div className='center'>
                <h2 className='center-text'>Hard Skills</h2>
            </div>

            <div className="container">

                <div className="hard-box">

                    <div className="hard-single">
                        <img src='../../imagens/icon/usados/programacao.png' />

                        <div className='cor-single'>
                            <h3>Programação</h3>
                        </div>
                    </div>

                    <div className="hard-single">
                        <img src='../../imagens/icon/usados/design.png' />

                        <div className='cor-single'>
                            <h3>Design</h3>
                        </div>
                    </div>

                    <div className="hard-single">
                        <img src='../../imagens/icon/usados/edicao-de-video.png' />

                        <div className='cor-single'>
                            <h3>Edição de Video</h3>
                        </div>
                    </div>

                    <div style={{backgroundColor:'transparent', boxShadow:'none'}} className="hard-single soft-none"></div>

                </div>
            </div>
        </div>   
        
        
        
        </>
    )
}

export default Contact
import React from "react";
import Slider from 'react-slick';

function Projetos(){

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "200px",
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        speed: 500,
        responsive:[
			{breakpoint: 1360,
			settings:{
				centerPadding: "150px",
			}},

			{breakpoint: 1270,
			settings:{
				centerPadding: "100px",
			}},

			{breakpoint: 1160,
			settings:{
				centerPadding: "70px",
			}},
            {breakpoint: 1100,
            settings:{
            centerPadding: "40px",
            }},
            {breakpoint: 1030,
            settings:{
            centerPadding: "30px",
            }},
            {breakpoint: 1000,
            settings:{
            centerPadding: "0px",
            }},
            {breakpoint: 915,
            settings:{
             centerPadding: "90px",
            }},
            {breakpoint: 900,
            settings:{
            centerPadding: "80px",
            }},
            {breakpoint: 832,
            settings:{
            centerPadding: "55px",
            }},
            {breakpoint: 750,
            settings:{
            centerPadding: "35px",
            }},
            {breakpoint: 715,
            settings:{
            centerPadding: "25px",
            }},

            {breakpoint: 685,
            settings:{
            centerPadding: "8px",
            }},
    
            {breakpoint: 625,
            settings:{
            centerPadding: "80px",
            }},

            {breakpoint: 600,
            settings:{
            centerPadding: "60px"

            }},

            {breakpoint: 550,
            settings:{
            centerPadding: "35px",
            }},

            {breakpoint: 500,
            settings:{
            centerPadding: "28px",
            }},

            {breakpoint: 470,
            settings:{
            centerPadding: "20px",
            }},

            {breakpoint: 455,
            settings:{
            centerPadding: "15px",
            }},

            {breakpoint: 440,
             settings:{
            centerPadding: "8px",
            }},

            {breakpoint: 423,
            settings:{
            centerPadding: "0px 0px",
            centerMode: true
            }},


		]
      };

      const settings2 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "200px",
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        speed: 500,
        responsive:[
			{breakpoint: 1360,
			settings:{
				centerPadding: "150px",
			}},

			{breakpoint: 1270,
			settings:{
				centerPadding: "100px",
			}},

			{breakpoint: 1160,
			settings:{
				centerPadding: "70px",
			}},
            {breakpoint: 1100,
            settings:{
            centerPadding: "40px",
            }},
            {breakpoint: 1030,
            settings:{
            centerPadding: "30px",
            }},
            {breakpoint: 1000,
            settings:{
            centerPadding: "0px",
            }},
            {breakpoint: 915,
            settings:{
             centerPadding: "90px",
            }},
            {breakpoint: 900,
            settings:{
            centerPadding: "80px",
            }},
            {breakpoint: 832,
            settings:{
            centerPadding: "55px",
            }},
            {breakpoint: 750,
            settings:{
            centerPadding: "35px",
            }},
            {breakpoint: 715,
            settings:{
            centerPadding: "25px",
            }},

            {breakpoint: 685,
            settings:{
            centerPadding: "8px",
            }},
    
            {breakpoint: 625,
            settings:{
            centerPadding: "80px",
            }},

            {breakpoint: 600,
            settings:{
            centerPadding: "60px"

            }},

            {breakpoint: 550,
            settings:{
            centerPadding: "35px",
            }},

            {breakpoint: 500,
            settings:{
            centerPadding: "28px",
            }},

            {breakpoint: 470,
            settings:{
            centerPadding: "20px",
            }},

            {breakpoint: 455,
            settings:{
            centerPadding: "15px",
            }},

            {breakpoint: 440,
             settings:{
            centerPadding: "8px",
            }},

            {breakpoint: 423,
            settings:{
            centerPadding: "0px 0px",
            centerMode: true
            }},
        
        ]
      };



    return(
        
    <>

        <div className="section-header-projetos">
            <img src='../../imagens/fotos/mockup-projetos.png' />
        </div>
        
        <div className='section-projetos'>
                
                <div className='container'>
                    <h2 className='center-text'>Projetos Pessoais - Sites</h2>
                </div>
                    
                <div className='projetos-box'>

                    <Slider {...settings}>

                    <div className='projetos-single projeto1'></div>

                    <div className='projetos-single projeto2'></div>

                    <div className='projetos-single projeto3'></div>

                    <div className='projetos-single projeto4'></div>

                    <div className='projetos-single projeto5'></div>

                    </Slider>

                </div>
                
        </div>

        <div className='section-design'>
            
                <div className='container'>
                    <h2 className='center-text'>Projetos Pessoais - Layouts</h2>
                </div>
                    
                <div className='design-box'>

                    <Slider {...settings2}>

                    <div className='design-single design1'>
                        <a target="_blank" href='https://www.lks-programacao.com/layouts/projetoclinica.png'><button>VER LAYOUT</button></a>
                    </div>

                    <div className='design-single design2'>
                        <a target="_blank" href='https://www.lks-programacao.com/layouts/projetomarcenaria.png'><button>VER LAYOUT</button></a>
                    </div>

                    <div className='design-single design3'>
                        <a target="_blank" href='https://www.lks-programacao.com/layouts/projetomotorsleague.png'><button>VER LAYOUT</button></a>
                    </div>                    

                    </Slider>

                </div>
                
                <div className='clear'></div>
        </div>


    </>
    )
}

export default Projetos
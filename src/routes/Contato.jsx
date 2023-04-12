import React from "react";

function Contato(){
    return(

        <>
        
        <div className="section-contato-bg">
            

            <div className="container">

            <div className="texto-contato">

                <h2>Entre em contato!</h2>
                <p>Se você está procurando um desenvolvedor web experiente e apaixonado por design, não hesite
                    em entrar em contato comigo. Estou sempre pronto para trabalhar em novos projetos e criar soluções incriveis
                    que atendam ás suas necessidades e excedam suas expectativas.
                </p>

                <form method="POST" action="https://formsubmit.co/lucasoliveira8321@gmail.com">

                    <input placeholder='Digite seu email...' type="email" name="email" required/>

                    <input type="hidden" name="_next" value="https://lks-programação.com.br" />
                    <input type="hidden" name="_captcha" value="false" />

                    <input type='submit' value='ENVIAR'/>

                </form>

            </div>

            </div>

        </div>
        
        </>
    )
}

export default Contato
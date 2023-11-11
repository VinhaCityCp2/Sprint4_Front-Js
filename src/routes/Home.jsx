import { } from "react";
import '../styles/Home.scss';



export default function Home( ) {

    return(
        <>
            <main className="container">

                <div className="card">
                    <div className="card-body">
                        <h1> Projeto Detecção de Enchente </h1>

                        <div className='abertura'>
                            <p> Nos dias atuais há um evolução das tecnologias inteligentes, a aplicação dessas tecnologias na vida urbana tem se tornado cada vez mais relevante. Uma das áreas em que isso é possível é na detecção de enchentes por meio de software inteligente. Através da utilização de sensores e algoritmos, é possível prever e prevenir inundações, minimizando seus impactos na cidade e na vida das pessoas. </p>
                        </div>
                    </div>
                </div>               
            
                <div id="carouselExampleCaptions" className="carousel slide slideshow">
                    <div className="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="src\assets\enchente1.jpg" className="d-block w-100" alt="enchente 1"/>
                            <div className="carousel-caption d-none d-md-block text-light bg-dark">
                                <p>
                                    Tais inundações ocorrem por latência na detecção das condições temporais, climáticas e atmosféricas, o que causa uma impossibilidade de ação prévia como ocorrido no desastre nas regiões de Ilha Bela, Caraguatatuba e Ubatuba.
                                </p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="src\assets\enchente2jpg.jpg" className="d-block w-100" alt="enchente 2"/>
                            <div className="carousel-caption d-none d-md-block text-light bg-dark">
                                <p>
                                    Além da questão de fatores momentâneos, há também uma variedade de fatores geográficos fixos que geram locais suscetíveis a desastres, desde mapas históricos de locais propensos a enchentes, até disposição de sedimento e composição do solo.
                                </p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="src\assets\enchente3.jpg" className="d-block w-100" alt="enchente 3"/>
                            <div className="carousel-caption d-none d-md-block text-light bg-dark">
                                <p>  O que significa que um número considerável de pessoas estão constantemente presentes em áreas de risco sem meios confiáveis de serem alertados. </p>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"> Previous </span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <section className="diferencial_empreendedor">
                        <div className="card">
                            <div className="card-body">
                                <h3> Software </h3>
                                <p> Visando resolver os problemas apresentados formulamos o conceito do AquaAlert, um dispositivo compacto, eficiente, econômico e de fácil aplicação. É um projeto que se divide em duas partes, o hardware e o software. </p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3> Software </h3>
                                <p> Sendo a parte que terá contato direto com o usuário, visamos um aplicativo de celular simples e direto, mostrando 3 informações principais; O nível de risco de enchente em uma certa região, a rota mais curta para escapar de uma região de risco e um mapa mostrando os pontos foco de risco.
                                Para isso, utilizaremos algoritmos de reconhecimento de padrões para comparar dados atuais e históricos visando gerar uma previsão certeira.Sintetizando os dados fixos com os dados em tempo real é possível criar uma previsão de quando um novo evento crítico há de ocorrer e formular uma porcentagem de chance de acontecer, assim, podemos criar um gradiente de risco sobre um mapa e formular uma rota de saída eficiente, além disso, mesmo em dias em que não há risco de alagamento podemos avisar o usuário caso ele se encontre em uma zona de risco. </p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3> Hardware </h3>
                                <p>Ao invés de termos uma única estação de detecção grande, de difícil instalação, e custosa, apresentamos a ideia da utilização de várias estações pequenas que comunicam entre si.
                                As vantagens desse modelo se dão primeiramente pela fácil instalação de várias estações por conta do tamanho e custo reduzido, além da vantagem monetária, a presença de várias estações significa uma grande resistência da rede a danos físicos e muita precisão já que caso uma das estações estiver obtendo resultados errados por razões externas ou internas, basta comparar com as informações de outras estações para corrigir ou descartar os dados errôneos. </p>
                            </div>
                        </div>
                </section>
                

                <section className="box">

                    <div className="card col-md-5 mb-4" >
                        <img className="card-img-top mx-auto" src="src\assets\AquaAlert.png" alt="IMG1" />

                            <div className="card-body">
                                <h3> Vantagens: </h3>
                                <ol className="list-group list-group-numbered">
                                    <li class="list-group-item"> Compacto; </li>
                                    <li class="list-group-item"> Utilização de dados em tempo real; </li>
                                    <li class="list-group-item"> Econômico; </li>
                                    <li class="list-group-item"> Fácil aplicação; </li>
                                    <li class="list-group-item"> Acessível por conta de manuseio simples graças ao aplicativo; </li>
                                    <li class="list-group-item"> Eficiente por conta de redundância; </li>
                                    <li class="list-group-item"> Evita falso negativos e falso positivos. </li>
                                </ol>
                            </div>
                    </div>


                    <div className="card col-md-5 mb-4" >
                        <img id="imagem2" className="card-img-top" src="src\assets\config.png" alt="IMG2" />

                        <div className="card-body">
                            <h3> Componentes: </h3>
                            <p className="texto">
                                Visamos que cada estação seja composta por apenas duas peças principais, o corpo onde estará presente os dispositivos de coleta, baterias de alta capacidade e uma antena de transmissão de dados, e um pequeno painel solar para garantir autonomia constante da unidade.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="card">
                    <div className="card-body">
                        <h1> Problema das soluções atuais </h1>
                        <p> Embora existam sistemas de detecção e alerta de enchentes já disponíveis, muitos deles apresentam algumas desvantagens. Alguns são muito caros e requerem uma grande infraestrutura para serem instalados e mantidos, o que torna seu uso inviável para muitas cidades e regiões. Outros podem ser imprecisos e apresentar falhas, o que pode resultar em alarmes falsos ou até mesmo na falta de alerta em situações de risco real. Além disso, muitos sistemas de alerta de enchentes não são acessíveis a toda a população, deixando muitas pessoas vulneráveis aos riscos de enchentes. </p>
                    </div>
                </div>        
                
            </main>               

            


        </>
    )
}
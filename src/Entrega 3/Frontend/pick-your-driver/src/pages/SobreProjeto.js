import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Logo from '../assets/logo_fundo_cinza.png';
import ImagemMercado from '../assets/imagem_mercado.jpg';
import ImagemProblema from '../assets/Imagem_problema.jpg';

const SobreProjetoContainer = styled.div`

`

function SobreProjeto(){
    return(
        <SobreProjetoContainer>

            <div className="container my-5">
                <div className="row gy-4">
                    <div class="col-12 text-lg-center">
                        <div class="card bg-transparent border-0">
                            <div class="card-body border-0">
                                <h2 style={{fontStyle: "bold", textAlign: "left", marginBottom: "20px", fontWeight: "bold"}}>Sobre o Projeto</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-lg-center">
                    <div className="card bg-transparent border-0"></div>
                    </div>
                    <div className="col-12">
                        <div className="card" data-aos="fade" data-aos-delay="250">
                            <div className="row g-0">
                            <div className="col-lg-6 d-lg-flex align-items-lg-center">
                                <picture className="d-block mt-3 mx-3 mb-lg-3">
                                <img
                                    className="rounded border w-100"
                                    alt="Imagem tela de celular com aplicativos de transporte"
                                    src={ImagemMercado}
                                />
                                </picture>
                            </div>
                            <div className="col-lg-6 d-lg-flex align-items-lg-center">
                                <div className="card-body px-lg-4">
                                <h3>
                                    <span style={{ color: "rgb(13, 12, 19)", fontWeight: "bold" }}>Mercado</span>
                                </h3>
                                <ul></ul>
                                <p style={{ textAlign: "left" }}>
                                    <span style={{ color: "rgb(13, 12, 19)" }}>
                                    Nos últimos anos, o mercado brasileiro de aplicativos de corridas cresceu de forma acelerada, impulsionado pela facilidade de acesso aos smartphones, pelo aumento da conectividade e pela necessidade dos usuários de se deslocarem com rapidez e praticidade. Nesse cenário, diversas plataformas como Uber, 99 e outras disputam a preferência do público oferecendo diferentes modalidades de transporte, promoções e prazos de atendimento.
                                    </span>
                                    <br />
                                    <br />
                                    <br />
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card" data-aos="fade" data-aos-delay="250">
                            <div className="row g-0">
                            <div className="col-lg-6 d-lg-flex align-items-lg-center order-lg-last">
                                <picture className="d-block mt-3 mx-3 mb-lg-3">
                                <img
                                    className="rounded border w-100"
                                    alt="Imagem de taxis"
                                    src={ImagemProblema}
                                />
                                </picture>
                            </div>
                            <div className="col-lg-6 d-lg-flex align-items-lg-center">
                                <div className="card-body px-lg-4">
                                <h3>
                                    <span style={{ color: "rgb(13, 12, 19)", fontWeight: "bold" }}>Problema</span>
                                </h3>
                                <ul></ul>
                                <p style={{ textAlign: "left" }}>
                                    <span style={{ color: "rgb(13, 12, 19)" }}>
                                    Com a popularização dos aplicativos de corrida, muitos usuários enfrentam o desafio de identificar qual plataforma oferece o melhor custo-benefício em determinado momento. Para isso, acabam tendo que abrir cada aplicativo separadamente para comparar tarifas, descontos e tempo estimado de chegada, o que se torna um processo demorado e, muitas vezes, frustrante.
                                    </span>
                                    <br />
                                    <br />
                                    <br />
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card" data-aos="fade" data-aos-delay="255">
                            <div className="row g-0">
                            <div className="col-lg-6 d-lg-flex align-items-lg-center">
                                <picture className="d-block mt-3 mx-3 mb-lg-3">
                                <img
                                    className="rounded border w-100"
                                    alt="Logo Pick Your Driver"
                                    src={Logo}
                                />
                                </picture>
                            </div>
                            <div className="col-lg-6 d-lg-flex align-items-lg-center">
                                <div className="card-body px-lg-4">
                                <h3>
                                    <span style={{ color: "rgb(13, 12, 19)", fontWeight: "bold" }}>Solução</span>
                                </h3>
                                <ul></ul>
                                <p style={{ textAlign: "left" }}>
                                    <span style={{ color: "rgb(13, 12, 19)" }}>
                                    Diante da grande variedade de opções e das constantes variações de preço, surge uma nova solução que permite comparar os valores das corridas em tempo real, a Pick Your Driver, ajudando os passageiros a economizar dinheiro e a escolher a melhor opção de acordo com suas necessidades e preferências.
                                    <span>A Pick Your Driver é um comparador de preços que reúne os principais serviços de transporte disponíveis no Brasil, incluindo tanto aplicativos de corrida quanto táxis tradicionais. Dessa forma, fica muito mais fácil e rápido escolher a opção que oferece o melhor custo-benefício para suas viagens.</span>
                                    </span>
                                    <br />
                                    <br />
                                    <br />
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </SobreProjetoContainer>
    );
}

export default SobreProjeto;
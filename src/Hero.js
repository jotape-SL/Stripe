import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';
import { GradientAnimation } from './canvas';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='canvas'>
        <canvas></canvas>
      </div>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Infraestrutura de pagamentos para a internet</h1>
          {/* <h1>Infraestrutura de pagamentos para a internet</h1> */}
          <p>
            Milhões de empresas de todos os tamanhos, de pequenas startups a
            grandes corporações, usam soluções de software e API da Stripe para
            receber pagamentos, enviar repasses e gerenciar suas operações
            online.
          </p>
          <button className='btn'>comece agora</button>
        </article>
        <article className='hero-images'>
          <img
            src={phoneImg}
            alt='phone showing our mobile display'
            className='phone-img'
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;

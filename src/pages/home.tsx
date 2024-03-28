import { Fragment } from "react";
import { Head } from "../components/styled-components/Head";
import { ReactInfo } from "../components/styled-components/ReactInfo";
import { Card } from "../components/styled-components/Card";
import { ImageCard } from "../components/styled-components/ImageCard";
import image1 from "../assets/react-1.jpg";
import image2 from "../assets/react2.jpg";
import image3 from "../assets/react3.jpg";
import { Container } from "../components/styled-components/Container";
import { Wrapper } from "../components/styled-components/Wrapper";
import { Figure } from "../components/styled-components/Figure";
import figure1 from "../assets/celphone.jpg";
import figure2 from "../assets/codigo.jpg";
import figure3 from "../assets/crianca.jpg";
import { Banner } from "../components/styled-components/Banner";
import {
  FooterLinks,
  Footter,
  FooterText,
  FooterIcons,
  FooterContainer,
} from "../components/styled-components/Footer";

export function Home() {
  return (
    <Fragment>
      <Head>
        <h1>Minha primeira página com React.</h1>
      </Head>

      <ReactInfo>
        <Card>
          <ImageCard $image={image1} />
          <h3>Somente para desktop</h3>
          <p>Vamos aprender como utulizar um framework.</p>
        </Card>
        <Card>
          <ImageCard $image={image2} />
          <h3>Criado com componentes</h3>
          <p>Utiliando o Styled Components.</p>
        </Card>
        <Card>
          <ImageCard $image={image3} />
          <h3>Facíl aproveitamento</h3>
          <p>Estamos no caminho.</p>
        </Card>
      </ReactInfo>

      <Container
        $display="flex"
        $direction="row"
        $alignItems="center"
        $justifyContent="center"
        $fluid
      >
        <Wrapper>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
            autem asperiores voluptatibus optio accusamus at deserunt voluptatum
            quibusdam eum? Placeat mollitia veritatis voluptatem quos soluta a
            suscipit reprehenderit impedit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae vel autem asperiores
            voluptatibus optio accusamus at deserunt voluptatum quibusdam eum?
            Placeat mollitia veritatis voluptatem quos soluta a suscipit
            reprehenderit impedit.
          </p>
        </Wrapper>
        <Figure $imageUrl={figure1} />
      </Container>

      <Container
        $display="flex"
        $direction="row"
        $alignItems="center"
        $justifyContent="center"
        $fluid
        $reverse
      >
        <Wrapper>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
            autem asperiores voluptatibus optio accusamus at deserunt voluptatum
            quibusdam eum? Placeat mollitia veritatis voluptatem quos soluta a
            suscipit reprehenderit impedit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae vel autem asperiores
            voluptatibus optio accusamus at deserunt voluptatum quibusdam eum?
            Placeat mollitia veritatis voluptatem quos soluta a suscipit
            reprehenderit impedit.
          </p>
        </Wrapper>
        <Figure $imageUrl={figure2} />
      </Container>

      <Container
        $display="flex"
        $direction="row"
        $alignItems="center"
        $justifyContent="center"
        $fluid
      >
        <Wrapper>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
            autem asperiores voluptatibus optio accusamus at deserunt voluptatum
            quibusdam eum? Placeat mollitia veritatis voluptatem quos soluta a
            suscipit reprehenderit impedit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae vel autem asperiores
            voluptatibus optio accusamus at deserunt voluptatum quibusdam eum?
            Placeat mollitia veritatis voluptatem quos soluta a suscipit
            reprehenderit impedit.
          </p>
        </Wrapper>
        <Figure $imageUrl={figure3} />
      </Container>
      <Banner>
        <h1>Contato</h1>
      </Banner>
      <Footter>
        <FooterContainer>
          <FooterLinks>
            <a href="*">About</a>
            <a href="*">Contact</a>
            <a href="*">Terms of Use</a>
            <a href="*">Privacy Policy</a>
          </FooterLinks>
          <FooterText>
            <small>&copy; Your Website 2020. All Rights Reserved.</small>
          </FooterText>
        </FooterContainer>

        <FooterIcons>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="#007acc"
              d="M12 0C5.373 0 0 5.373 0 12c0 6.154 4.513 11.24 10.394 11.97V14.29h-2.57v-3.623h2.57v-2.688c0-2.546 1.51-3.954 3.846-3.954 1.104 0 2.055.083 2.333.12v2.68h-1.602c-1.26 0-1.504.6-1.504 1.48v1.937h3.004l-.39 3.623h-2.614V24C19.487 23.33 24 18.154 24 12 24 5.373 18.627 0 12 0z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.824 6.275c-.731.326-1.521.547-2.352.647 0 0 .463-.156.857-.392a4.172 4.172 0 0 1-1.18.588c-.675-.732-1.64-1.18-2.711-1.18-2.051 0-3.712 1.662-3.712 3.712 0 .291.033.575.097.847-3.086-.155-5.822-1.632-7.65-3.879-.319.55-.504 1.193-.504 1.874 0 1.292.656 2.431 1.656 3.094-.609-.019-1.182-.186-1.679-.464v.047c0 1.8 1.279 3.299 2.979 3.636-.312.084-.641.13-.981.13-.239 0-.469-.023-.697-.066.468 1.47 1.827 2.541 3.441 2.571-1.261.991-2.853 1.582-4.583 1.582-.298 0-.592-.017-.883-.051 1.635 1.06 3.586 1.68 5.677 1.68 6.81 0 10.537-5.722 10.537-10.688 0-.162-.005-.324-.013-.484.722-.524 1.347-1.176 1.844-1.919z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="#007acc"
              d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zM17.25 5.25c.793 0 1.433.64 1.433 1.433v10.334c0 .792-.64 1.433-1.433 1.433H6.75c-.793 0-1.433-.64-1.433-1.433V6.683c0-.793.64-1.433 1.433-1.433h10.5zm-5.25 3a2.619 2.619 0 1 0 0 5.238 2.619 2.619 0 0 0 0-5.238zm4.507-.01c0 .903-.732 1.635-1.635 1.635a1.628 1.628 0 0 1-1.635-1.635c0-.903.732-1.635 1.635-1.635.903 0 1.635.732 1.635 1.635zM17.25 20.25c.793 0 1.433.64 1.433 1.433s-.64 1.433-1.433 1.433H6.75c-.793 0-1.433-.64-1.433-1.433s.64-1.433 1.433-1.433H17.25z"
            />
          </svg>
        </FooterIcons>
      </Footter>
    </Fragment>
  );
}

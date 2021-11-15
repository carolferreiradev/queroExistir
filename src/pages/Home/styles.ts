import styled from "styled-components";

export const MainStyled = styled.main`
  max-width: 100%;
  overflow-x: hidden;
`;
export const SectionStyled = styled.section`
  background: url("/assets/background.webp");
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  padding: 0 5rem;
`;
export const TitleStyled = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  color: var(--text-color-white);

  svg {
    fill: var(--text-color-white);
    stroke: var(--text-color-white);
    width: 50px;
    height: 50px;
  }

  .rightIcon {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;
export const DescriptionStyled = styled.p`
  color: var(--text-color-white);
  width: 60%;
  letter-spacing: 1.2px;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
`;
export const ButtonStyled = styled.button`
  color: var(--text-color-white);
  background: var(--primary-color);
  border: 1px solid var(--secondary-color);
  margin-top: 2rem;
  width: 35%;
  padding: 1rem 1.4rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;
export const WhoWeAre = styled.h2`
  text-align: center;
  font-size: 3rem;
`;
export const AboutUs = styled.section`
  width: 100vw;
  display: grid;
  grid-template-columns: 40% 1fr;
  padding: 1rem 2rem;
  gap: 24px;
  margin: 1rem 0;
`;
export const SectionAboutImage = styled.div`
  height: 200px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const SectionAboutText = styled.article`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  p {
    margin-top: 12px;
  }
`;

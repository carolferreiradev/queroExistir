import styled from "styled-components";

export const Copy = styled.p`
  text-align: center;
  padding-bottom: 1rem;
  background: var(--text-color-dark);
  color: gray;
`;
export const FooterStyles = styled.footer`
  background: var(--text-color-dark);
  margin-top: 2rem;
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: var(--text-color-white);

  a {
    text-decoration: none;
    color: var(--text-color-white);
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    font-size: 1.2rem;
    font-weight: normal;
    margin-bottom: 2rem;
  }
  ul {
    list-style: none;
    li {
      display: flex;
      cursor: pointer;
      align-items: center;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
      svg {
        margin-right: 6px;
      }
    }
  }
`;

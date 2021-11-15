import styled from "styled-components";

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 1.5rem;
  background: var(--secondary-color);
  color: var(--text-color-white);

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: var(--text-color-white);
      stroke: var(--text-color-white);
      width: 30px;
      height: 30px;
    }
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;
export const MenuItem = styled.li`
  margin: 0 12px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

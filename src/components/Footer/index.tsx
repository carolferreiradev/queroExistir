import { Section, FooterStyles, Copy} from "./styles";
import { FiAward, FiGithub, FiLinkedin } from "react-icons/fi";
export function Footer() {
  return (
    <>
      <FooterStyles>
        <Section>
          <h5>Sites de inspiração</h5>

          <ul>
            <li>
              <FiAward />
              <a target="_blank" href="https://www.iucnredlist.org/">
                RedList
              </a>
            </li>
            <li>
              <FiAward />
              <a target="_blank" href="https://www.micoleao.org.br/">
                Associação Mico-Leão-Dourado - AMLD
              </a>
            </li>
          </ul>
        </Section>
        <Section>
          <h5>Redes Sociais</h5>

          <ul>
            <li>
              <FiLinkedin />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/carol-ferreira-b6676a155/"
              >
                Linkedin
              </a>
            </li>
            <li>
              <FiGithub />
              <a target="_blank" href="https://github.com/carolferreiradev">
                Github
              </a>
            </li>
          </ul>
        </Section>

        <Section>
          <h5>Endereço</h5>

          <ul>
            <li>
              <p>
                Rodovia BR 101 - km 219 (sentido sul)
                <br />
                Silva Jardim 28820-000 - Rio de Janeiro
              </p>
            </li>
          </ul>
        </Section>
      </FooterStyles>
      <Copy className="copy">&copy; Carol Ferreira</Copy>
    </>
  );
}

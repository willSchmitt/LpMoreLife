import { Container } from "./styles";

import logoMoreLife from "../../assets/IdentidadeBranca.png";
import { Links } from "../../components/Links";
import { VideoMoreLife } from "../../components/VideoMoreLife";

export function MoreLifePage() {
  return (
    <Container>
      <main>
        <header>
          <picture>
            <img src={logoMoreLife} alt="Escrita da logo do more life" />
          </picture>
        </header>

        <Links />

        <VideoMoreLife />

        <footer>
          <p>
            ¹² Mantenha-se aceso o fogo no altar; não deve ser apagado. Toda
            manhã o sacerdote acrescentará lenha, arrumará o holocausto sobre o
            fogo e queimará sobre ele a gordura das ofertas de comunhão. ¹³
            Mantenha-se o fogo continuamente aceso no altar; não deve ser
            apagado. Levítico 6:12,13
          </p>
        </footer>
      </main>
    </Container>
  );
}

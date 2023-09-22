import {
  LinkInstagram,
  LinkLocation,
  LinkSpotify,
  LinkWhatsApp,
  LinksContainer,
} from "./styles";

import whatsappIcon from "../../assets/whatsappIcon.png";
import spotifyIcon from "../../assets/spotifyIcon.png";
import markerIcon from "../../assets/markerIcon.png";
import instagramIcon from "../../assets/instagramIcon.png";

export function Links() {
  return (
    <LinksContainer>
      <LinkInstagram
        href="https://www.instagram.com/morelifersl"
        target="_blank"
      >
        <section>
          <img src={instagramIcon} width={40} alt="Icone do Instagram" />

          <small>Instagram</small>
        </section>
      </LinkInstagram>

      <LinkWhatsApp
        href="https://chat.whatsapp.com/IaDLqM5aVj16M8SamyB2kx"
        target="_blank"
      >
        <section>
          <img src={whatsappIcon} width={40} alt="Icone do WhatsApp" />
          <small>WHATSAPP</small>
        </section>
      </LinkWhatsApp>

      <LinkSpotify href="https://spotify.link/ztKp8MPyhDb" target="_blank">
        <section>
          <img src={spotifyIcon} width={40} alt="Icone do spotify" />
          <small>SPOTIFY</small>
        </section>
      </LinkSpotify>

      <LinkLocation
        href="https://maps.app.goo.gl/NcwyKj3x2kbDLgQ3A"
        target="_blank"
      >
        <section>
          <img src={markerIcon} width={40} alt="Icone de um marcador " />
          <small>COMO CHEGAR</small>
        </section>
      </LinkLocation>
    </LinksContainer>
  );
}

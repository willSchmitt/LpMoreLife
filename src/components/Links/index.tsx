import {
  InstagramLogo,
  MapPin,
  SpotifyLogo,
  WhatsappLogo,
} from "phosphor-react";
import {
  LinkInstagram,
  LinkLocation,
  LinkSpotify,
  LinkWhatsApp,
  LinksContainer,
} from "./styles";

export function Links() {
  return (
    <LinksContainer>
      <LinkInstagram
        href="https://www.instagram.com/morelifersl"
        target="_blank"
      >
        <section>
          <InstagramLogo size={40} color="#40e0d0" />
          <small>Instagram</small>
        </section>
      </LinkInstagram>

      <LinkWhatsApp
        href="https://chat.whatsapp.com/IaDLqM5aVj16M8SamyB2kx"
        target="_blank"
      >
        <section>
          <WhatsappLogo size={40} color="#40e0d0" />
          <small>WHATSAPP</small>
        </section>
      </LinkWhatsApp>

      <LinkSpotify href="https://spotify.link/ztKp8MPyhDb" target="_blank">
        <section>
          <SpotifyLogo size={40} color="#40e0d0" />
          <small>SPOTIFY</small>
        </section>
      </LinkSpotify>

      <LinkLocation
        href="https://maps.app.goo.gl/NcwyKj3x2kbDLgQ3A"
        target="_blank"
      >
        <section>
          <MapPin size={40} color="#40e0d0" />
          <small>COMO CHEGAR</small>
        </section>
      </LinkLocation>
    </LinksContainer>
  );
}

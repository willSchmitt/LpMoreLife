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
          <img
            src="/src/assets/instagramIcon.png"
            width={40}
            alt="Icone do Instagram"
          />

          <small>Instagram</small>
        </section>
      </LinkInstagram>

      <LinkWhatsApp
        href="https://chat.whatsapp.com/IaDLqM5aVj16M8SamyB2kx"
        target="_blank"
      >
        <section>
          <img
            src="/src/assets/whatsappIcon.png"
            width={40}
            alt="Icone do WhatsApp"
          />
          <small>WHATSAPP</small>
        </section>
      </LinkWhatsApp>

      <LinkSpotify href="https://spotify.link/ztKp8MPyhDb" target="_blank">
        <section>
          <img
            src="/src/assets/spotifyIcon.png"
            width={40}
            alt="Icone do spotify"
          />
          <small>SPOTIFY</small>
        </section>
      </LinkSpotify>

      <LinkLocation
        href="https://maps.app.goo.gl/NcwyKj3x2kbDLgQ3A"
        target="_blank"
      >
        <section>
          <img
            src="/src/assets/markerIcon.png"
            width={40}
            alt="Icone de um marcador "
          />
          <small>COMO CHEGAR</small>
        </section>
      </LinkLocation>
    </LinksContainer>
  );
}

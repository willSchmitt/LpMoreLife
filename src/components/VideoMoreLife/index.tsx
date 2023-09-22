import { LinkPicturesOnFire, VideoContainer } from "./styles";

import videMp4 from "../../assets/video/videoEditado.mp4";

export function VideoMoreLife() {
  return (
    <VideoContainer>
      <video controls>
        <source src={videMp4} type="video/mp4" />
      </video>

      <LinkPicturesOnFire
        href="https://drive.google.com/drive/folders/1-Ql33XGZ-f4ax24kmR5nGaMBUJl0kD0h"
        target="_blank"
      >
        <section>
          <small>CONFIRA AS FOTOS DO ONFIRE 2023!</small>
        </section>
      </LinkPicturesOnFire>
    </VideoContainer>
  );
}

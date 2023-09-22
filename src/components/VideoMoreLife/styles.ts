import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.75rem;

  video {
    width: 100%;

    border-radius: 0.5rem;
    box-shadow: 1px 5px 12px ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.blue500};
  }
`;

export const LinkPicturesOnFire = styled.a`
  width: 100%;

  section {
    background-color: ${({ theme }) => theme.colors.black};
    padding: 1.5rem 5rem;
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.blue500};

    display: flex;
    align-items: center;
    justify-content: center;

    small {
      font-size: 1.25rem;
      font-family: "Montserrat", sans-serif;
      text-transform: uppercase;
      color: white;
    }

    &:hover {
      filter: brightness(0.55);
      transition: 0.4s;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 1rem 3rem;
      small {
        font-size: 1rem;
        text-align: center;
      }
    }
  }
`;

import styled from "styled-components";

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  section {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-content: center;
  }

  a {
    background-color: ${({ theme }) => theme.colors.black};
    padding: 1.5rem 5rem;
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.blue500};
    box-shadow: 1px 5px 12px ${({ theme }) => theme.colors.black};

    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    small {
      font-size: 1.75rem;
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
    a {
      padding: 1rem 2.5rem;

      small {
        font-size: 1.25rem;
      }
    }
  }
`;

export const LinkInstagram = styled.a``;

export const LinkWhatsApp = styled.a``;

export const LinkSpotify = styled.a``;

export const LinkLocation = styled.a``;

import styled from "styled-components";

export const Container = styled.main`
  background-image: url(/assets/foto-fundo-LP.jpg);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  main {
    padding-top: 5rem;
    padding-bottom: 5rem;

    margin: 0 auto;
    max-width: 45rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem;

    header {
      img {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
    }

    footer {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        width: 100%;
        text-align: center;

        font-family: "Montserrat", sans-serif;
        line-height: 1.5rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media (max-width: 768px) {
    main {
      padding: 3rem 2rem;

      header {
        img {
          width: 70%;
        }
      }
    }
  }
`;

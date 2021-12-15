import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BackgroundImg } from '@assets';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  background-image: url(${BackgroundImg});
`;

export const SignUpContainer = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 4.5rem;
  width: 100%;
  max-width: 39rem;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: ${({ theme }) => theme.radii.default};

  form {
    width: 100%;

    button {
      margin-top: 3.2rem;
    }
  }

  h2 {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.6rem;
    color: ${({ theme }) => theme.colors.textTitle};
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 500;
    margin-bottom: 2.4rem;
  }

  @media (max-width: 390px) {
    flex: 1;

    padding: 2rem;
  }
`;

export const SignInContainer = styled(motion.section)`
  width: 100%;
  margin-top: 4.8rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;

    div {
      width: 7rem;
      height: 1px;
      background: rgba(251, 251, 251, 0.6);
    }

    span {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      width: 14rem;
      font-size: 1.2rem;
      line-height: 1.4rem;

      color: rgba(251, 251, 251, 0.85);

      a {
        text-decoration: none;
        color: #00ace4;
      }
    }
  }
`;

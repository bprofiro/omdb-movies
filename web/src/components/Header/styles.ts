import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.header`
  background: #1a232e;
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.3);
`;

export const Content = styled(motion.div)`
  max-width: 112rem;
  margin: 0 auto;

  padding: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  button {
    font-size: ${({ theme }) => theme.fontSizes.default};
    color: #fff;
    border: 0;
    padding: 0 3.2rem;
    border-radius: ${({ theme }) => theme.radii.default};
    height: 4.8rem;

    background: ${({ theme }) => theme.colors.blueLight};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:first-child,
    &:last-child {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0 1.6rem;

      svg {
        margin-bottom: -0.25rem;
      }
    }
  }
`;

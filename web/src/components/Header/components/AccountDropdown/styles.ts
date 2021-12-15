import styled, { css } from 'styled-components';
import { Button } from '@components/Button';
import { Popover } from 'reakit/Popover';
import { motion } from 'framer-motion';

export const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.4rem;
  position: relative;

  button {
    background: transparent;
    border: none;
  }

  img {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

export const AnimatedDropdown = styled(Popover)`
  ${({ theme }) => css`
    position: absolute;
    z-index: 10;
    top: 150%;
    right: 0;
    min-width: 13rem;
    border-radius: ${theme.radii.small};
    background: #27333f;
    box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.12);

    ::before {
      content: '';
      display: block;
      position: absolute;
      top: -40%;
      right: 11%;
      border-color: transparent transparent #27333f transparent;
      border-style: solid;
      border-width: 0.8rem;
    }
  `}
`;

export const NavButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.fontSizes.default};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    background: #27333f;

    border-radius: 0.4rem;

    :hover {
      background: ${theme.colors.background};
    }
  `}
`;

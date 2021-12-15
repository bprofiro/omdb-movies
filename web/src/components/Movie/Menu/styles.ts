import styled from 'styled-components';
import { Popover, PopoverDisclosure } from 'reakit/Popover';
import { Button } from '@components/Button';

export const MenuToggle = styled(PopoverDisclosure)`
  background: transparent;
  border: none;

  width: 3.2rem;
  height: 3.2rem;
  background: #27333f;
  border: none;
  border-radius: 0.5rem;

  margin: 1rem;

  transition: opacity 0.3;

  :hover,
  :focus-within {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const MenuContainer = styled(Popover)`
  background-color: #27333f;
  margin-right: 100px;

  inset: 0 -9rem !important;

  @keyframes fadeIn {
    from {
      opacity: 0;
      visibility: hidden;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
  }

  animation-fill-mode: forwards;

  width: max-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 0.5rem;

  transition: opacity 0.3s;

  @media (max-width: 470px) {
    inset: 0 -2.7rem !important;
  }
`;

export const MenuButton = styled(Button)`
  padding: 1.6rem;
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  color: text;
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  line-height: 1.4rem;

  transition: background-color 0.3s;

  &:hover {
    background-color: #00000020;
  }

  & + button {
    padding-top: 1.5rem;
    padding-bottom: 2rem;

    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

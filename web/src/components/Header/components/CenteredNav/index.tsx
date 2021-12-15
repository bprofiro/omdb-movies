import { useState, useCallback, useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';
import { useEventListener } from '@hooks';
import { usePopoverState } from 'reakit/Popover';
import { HTMLMotionProps } from 'framer-motion';

import { Wrapper, Container, Hamburguer, NavItem } from './styles';

export const CenteredNav = ({ variants }: HTMLMotionProps<'section'>) => {
  const popover = usePopoverState();

  const { pathname } = useLocation();
  const [isHamburguerMenuVisible, setIsHamburguerMenuVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOpenDropdown = () => {
    popover.setVisible(true);
    setIsHamburguerMenuVisible(true);
  };

  const handleCloseDropdown = useCallback(
    ({ target }: Event): void => {
      if (ref.current?.contains(target as Node)) {
        return;
      }

      setIsHamburguerMenuVisible(false);
    },
    [setIsHamburguerMenuVisible],
  );

  useEventListener('click', handleCloseDropdown, {
    enabled: isHamburguerMenuVisible,
  });

  useEffect(() => {
    setIsHamburguerMenuVisible(false);
  }, [pathname]);

  return (
    <Wrapper variants={variants}>
      <Hamburguer
        onClick={handleOpenDropdown}
        isVisible={isHamburguerMenuVisible}
        {...popover}
      >
        <div />
      </Hamburguer>

      <Container
        as="nav"
        isVisible={isHamburguerMenuVisible}
        aria-label="Menu do Perfil"
        ref={ref}
        {...popover}
      >
        <NavItem to="/dashboard">Home</NavItem>
        <NavItem to="/favorites">Favoritos</NavItem>
      </Container>
    </Wrapper>
  );
};

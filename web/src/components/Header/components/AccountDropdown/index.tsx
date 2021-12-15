import { useState, useRef, useCallback } from 'react';

import { AnimatePresence, motion, HTMLMotionProps } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuth, useEventListener } from '@hooks';
import { usePopoverState, PopoverDisclosure } from 'reakit/Popover';

import { Container, AnimatedDropdown, NavButton } from './styles';
import { DROP_DOWN_ANIMATION } from './animations';

export const AccountDropdown = ({ variants }: HTMLMotionProps<'section'>) => {
  const popover = usePopoverState();

  const history = useHistory();
  const { signOut, user } = useAuth();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleOpenDropdown = () => {
    popover.setVisible(true);
    setIsDropdownVisible(true);
  };

  const handleCloseDropdown = useCallback(
    ({ target }: Event): void => {
      if (ref.current?.contains(target as Node)) {
        return;
      }

      setIsDropdownVisible(false);
    },
    [setIsDropdownVisible],
  );

  useEventListener('click', handleCloseDropdown, {
    enabled: isDropdownVisible,
  });

  const handleSignOut = (): void => {
    signOut();
    history.push('/');
  };

  return (
    <Container variants={variants}>
      <PopoverDisclosure {...popover} onClick={handleOpenDropdown}>
        <img
          src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=27333F}&color=FBFBFB&name=${user.name}`}
          alt={`Conta de ${user.name}`}
        />
      </PopoverDisclosure>

      <AnimatePresence>
        {isDropdownVisible && (
          <AnimatedDropdown
            as={motion.nav}
            variants={DROP_DOWN_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-label="Menu do Perfil"
            {...popover}
          >
            <ul>
              <NavButton onClick={handleSignOut}>
                <FiLogOut />
                Sair
              </NavButton>
            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  );
};

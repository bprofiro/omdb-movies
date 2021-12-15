import { ButtonHTMLAttributes } from 'react';

import { motion, HTMLMotionProps } from 'framer-motion';

import { Container } from './styles';

type AnimatedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLMotionProps<'button'>;

type ButtonProps = AnimatedButtonProps & {
  loading?: boolean;
};

export const Button = ({ children, loading, ...rest }: ButtonProps) => (
  <Container type="button" as={motion.button} {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

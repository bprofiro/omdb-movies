import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import { Input as ReakitInput } from 'reakit/Input';
import { useField } from '@unform/core';
import { HTMLMotionProps } from 'framer-motion';

import { Container, Error, InputContainer } from './styles';

type AnimatedInputProps = InputHTMLAttributes<HTMLInputElement> &
  HTMLMotionProps<'input'>;

type InputProps = AnimatedInputProps & {
  name: string;
  label: string;
};

export const Input = ({ name, label, variants, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      variants={variants}
    >
      <span>{label}</span>
      <InputContainer
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <ReakitInput
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </InputContainer>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

import { useRef } from 'react';

import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useAuth } from '@hooks';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Input, Button } from '@components';
import {
  CHILDREN_VARIANTS,
  PARENTS_VARIANTS,
} from '@common/animations/FormAnimations';
import { getValidationErrors } from '@utils';

import { Container, SignInContainer, SignUpContainer } from './styles';

type SignInRequest = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: SignInRequest): Promise<void> => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido.'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  };

  const handleSignUp = (): void => {
    history.push('/sign-up');
  };

  return (
    <Container>
      <SignInContainer
        variants={PARENTS_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <Form ref={formRef} onSubmit={handleSubmit}>
          <motion.h2 variants={CHILDREN_VARIANTS}>Entrar</motion.h2>
          <Input
            label="E-mail"
            name="email"
            placeholder="Insira seu e-mail"
            variants={CHILDREN_VARIANTS}
          />
          <Input
            label="Senha"
            name="password"
            placeholder="Insira sua senha"
            type="password"
            variants={CHILDREN_VARIANTS}
          />

          <Button type="submit" variants={CHILDREN_VARIANTS}>
            Entrar
          </Button>
        </Form>

        <SignUpContainer>
          <motion.section variants={CHILDREN_VARIANTS}>
            <div />
            <span>Novo na Amazon?</span>
            <div />
          </motion.section>

          <Button
            type="button"
            onClick={handleSignUp}
            variants={CHILDREN_VARIANTS}
          >
            Criar sua conta
          </Button>
        </SignUpContainer>
      </SignInContainer>
    </Container>
  );
};

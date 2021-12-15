import { useRef } from 'react';

import { motion } from 'framer-motion';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Input, Button } from '@components';
import {
  CHILDREN_VARIANTS,
  PARENTS_VARIANTS,
} from '@common/animations/FormAnimations';
import { api } from '@services/api';
import { getValidationErrors, showError } from '@utils';

import { Container, SignInContainer, SignUpContainer } from './styles';

type SignUpRequest = {
  name: string;
  email: string;
  password: string;
};

export const SignUp = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: SignUpRequest): Promise<void> => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        email: Yup.string()
          .required('E-mail obrigatório.')
          .email('Digite um e-mail válido.'),
        password: Yup.string().min(6, 'No mínimo 6 digitos.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users/', {
        email: data.email,
        name: data.name,
        password: data.password,
      });

      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      } else {
        showError(err.response);
      }
    }
  };

  return (
    <Container>
      <SignUpContainer
        variants={PARENTS_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <Form ref={formRef} onSubmit={handleSubmit}>
          <motion.h2 variants={CHILDREN_VARIANTS}>Criar conta</motion.h2>
          <Input
            label="Nome"
            name="name"
            placeholder="Insira seu nome completo"
            variants={CHILDREN_VARIANTS}
          />
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
            Criar sua conta
          </Button>
        </Form>

        <SignInContainer>
          <motion.section variants={CHILDREN_VARIANTS}>
            <div />
            <span>
              Já tem uma conta?
              <Link to="/">Entrar</Link>
            </span>
            <div />
          </motion.section>
        </SignInContainer>
      </SignUpContainer>
    </Container>
  );
};

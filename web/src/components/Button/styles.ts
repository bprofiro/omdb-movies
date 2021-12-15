import styled from 'styled-components';
import { Button } from 'reakit/Button';
import { shade } from 'polished';

export const Container = styled(Button)`
  background: #00ace4;
  height: 4rem;
  border-radius: 0.4rem;
  border: 0;
  padding: 0.9rem;
  color: #fbfbfb;
  width: 100%;
  transition: background-color 0.2s;

  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: 0.2rem;

  &:hover {
    background: ${shade(0.2, '#00ACE4')};
  }
`;

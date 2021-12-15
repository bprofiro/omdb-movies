import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  figure {
    width: 100%;
    height: 25rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.8rem;
      object-fit: cover;
    }
  }

  h3 {
    margin-top: 1.6rem;
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.6rem;
    color: #e1e1e6;
  }

  span {
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #e1e1e6;
  }
`;

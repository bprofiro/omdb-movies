import { CONTAINER_ANIMATION } from '@constants';
import { useLocation } from 'react-router-dom';

import { CHILDREN_VARIANTS } from './animations';
import { Container, Content } from './styles';
import { Search } from './components/Search';
import { AccountDropdown } from './components/AccountDropdown';
import { CenteredNav } from './components/CenteredNav';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <Container role="banner">
      <Content
        variants={CONTAINER_ANIMATION}
        initial="hidden"
        animate="visible"
      >
        {pathname.startsWith('/dashboard') && (
          <Search variants={CHILDREN_VARIANTS} />
        )}

        <CenteredNav variants={CHILDREN_VARIANTS} />

        <AccountDropdown variants={CHILDREN_VARIANTS} />
      </Content>
    </Container>
  );
};

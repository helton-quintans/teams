import { FontAwesome6 } from '@expo/vector-icons';
import styled  from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
   
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(FontAwesome6).attrs(({ theme }) => ({
  name: 'users', 
  size: 56,
  color: theme.COLORS.GREEN_700
}))`
  align-self: center;
`
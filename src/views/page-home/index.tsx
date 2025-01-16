import React, { useState } from 'react';
import {
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { DashHeader } from '../../components/layout/dashHeader';
import { MenuLateral } from '../../components/layout/menulateral';
import { DrawerMain } from '../../components/layout/drawer/DrawerMain';
import { useIsOpen } from '../../context/isOpenContext/useIsOpen';

export const HomePrincipal: React.FC = () => {

  // Usando useBreakpointValue para detectar o tamanho da tela
  const breakpoint = useBreakpointValue({ base: 'small', md: 'medium', lg: 'large', xl: 'xlarge' });
  const { handleOnOpen, isOpen } = useIsOpen();

  return (
    <>
      <Flex
        bg="rgba(248, 249, 250, 1)"
        w={'100%'}
        maxH={'100vh'}
        overflow="hidden"
      >
        <Grid
          templateAreas={`"nav header"
                          "nav main"
                          "nav main"`}
          gap={2}
          mt={2}
          mb={2}
          ml={breakpoint === 'small' || breakpoint === 'medium' ? 0 : 2}
          mr={breakpoint === 'small' || breakpoint === 'medium' ? 0 : 2}
          gridTemplateRows={'80px 1fr'}
        >
          <GridItem area={'header'}>
            <DashHeader />
          </GridItem>
          <GridItem area={'nav'}>
            {breakpoint === 'small' || breakpoint === 'medium' || breakpoint === 'large' ? (
              <DrawerMain onClose={handleOnOpen} isOpen={isOpen} children={undefined} onOpen={handleOnOpen} />
            ) : (
              <MenuLateral />
            )}
          </GridItem>
          <GridItem area={'main'}>
            <></>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

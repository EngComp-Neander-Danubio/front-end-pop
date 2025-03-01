import React from 'react';

import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { DashHeader } from '../../components/layout/dashHeader';
import { MenuLateral } from '../../components/layout/menulateral';

import { useIsOpen } from '../../context/isOpenContext/useIsOpen';
import { ToListModulos } from '../../components/listagem-de-modulos/ToListModulos';

export const PageModulos: React.FC = () => {
  const { handleOnOpen, isOpen } = useIsOpen();

  return (
    <>
      <Flex
        bg="rgba(248, 249, 250, 1)"
        w={'100%'}
        //h={'100vh'}
        maxH={'100vh'}
        overflow="hidden"
        //border={'1px solid red'}
      >
        <Grid
          templateAreas={`"nav header"
                                    "nav main"
                                    "nav main"`}
          gap={{ lg: 2, md: 2, sm: 2 }}
          mt={{ lg: 2, md: 2, sm: 2 }}
          mb={{ lg: 2, md: 2, sm: 2 }}
          ml={{ lg: 2, md: 2, sm: 0 }}
          mr={{ lg: 2, md: 2, sm: 0 }}
          gridTemplateRows={'80px 1fr'}
          //maxH={'100vh'}
        >
          <GridItem area={'header'} h={'fit-content'}>
            <DashHeader  />
          </GridItem>
          <GridItem area={'nav'}>
            <MenuLateral />
          </GridItem>
          <GridItem area={'main'}>
            <ToListModulos
              isOpen={isOpen}
              handleToggle={handleOnOpen}
            />
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

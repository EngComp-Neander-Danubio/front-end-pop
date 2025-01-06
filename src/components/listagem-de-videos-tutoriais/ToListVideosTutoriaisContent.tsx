import { Flex } from '@chakra-ui/react';
import React from 'react';
import { CardTutorial } from '../componentesTutorial/CardTutorial';

export const ToListVideosTutoriaisContent: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} w={'100%'} gap={10} align={'center'}>

        <CardTutorial title={'Esqueci a senha do meu SAPM'} body={''} />
        <CardTutorial title={'Esqueci a senha do meu SAPM'} body={''} />
        <CardTutorial title={'Esqueci a senha do meu SAPM'} body={''} />

      </Flex>

    </>
  );
};

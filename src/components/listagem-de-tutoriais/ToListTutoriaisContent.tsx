import { Flex } from '@chakra-ui/react';
import React from 'react';
import { CardTutorial } from '../componentesTutorial/CardTutorial';

// lista as solicitacoes da OPM no que se refere ao posto de serviço
export const ToListTutoriaisContent: React.FC = () => {

  return (
    <>
      <Flex flexDirection={'column'} w={'100%'} gap={10} align={'center'}>

        {/* <Flex
          flexDirection={'column'}
          //p={8}
          transitionDuration="1.0s"
          w={isOpen ? '86vw' : '94vw'}
        ></Flex> */}
        <CardTutorial title={'Esqueci a senha do meu SAPM'} body={''} />
        <CardTutorial title={'Esqueci a senha do meu SAPM'} body={''} />
        <CardTutorial title={'Esqueci a senha do meu SAPM'} body={''} />

      </Flex>

    </>
  );
};

import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const ToListVideosTutoriaisContent: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} w={'100%'} gap={10} align={'center'} h={'100%'} minH={'70vh'}
        borderBottom="1px solid rgba(0, 0, 0, 0.5)"
        boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
        borderRadius={'8px'}>

          <Flex w={'100%'} justifyContent={'space-between'} mt={4} pl={6} pr={6} h={'fit-content'}>
            <Flex>
                <Text fontSize={'20px'} color={'#666'} fontWeight={'medium'}>ESQUECI A SENHA DO SAPM </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize={'20px'} color={'#666'} fontWeight={'medium'}>
              SISTEMA REF. : SEGEP  OPM: CETIC
              </Text>
            </Flex>

          </Flex>
          <Flex className='gradient-border' w={'100%'} justifyContent={'space-between'} mt={4} pl={6} pr={6} h={'fit-content'}>
            <Flex>
                <Text color={'#A0AEC0'} fontSize={'14px'} fontWeight={'medium'}>Todo o processo de avaliação dos neo-soldados.Prazos,quesitos de avaliação etc. </Text>
            </Flex>
            <Flex gap={2}>
              <Text fontSize={'14px'} color={'#666'} fontWeight={'medium'}>Criado em : 22/12/24</Text>
              <Text fontSize={'14px'} color={'#666'} fontWeight={'medium'}>
              Modificado em: 25/12/24
              </Text>
            </Flex>

          </Flex>

          <Flex  w={'100%'} justifyContent={'space-between'} mt={4} pl={6} pr={6} h={'fit-content'}>
            <Flex flexDirection={'column'}>
                <Text color={'#666'} fontSize={'18px'}>
                  Segue um texto "Lorem Ipsum" para você usar no seu protótipo ou projeto:
              **Lorem Ipsum:**

              Passo 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec venenatis mauris. Proin in semper lacus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod urna
              sed neque elementum, id convallis neque blandit. Suspendisse potenti. Fusce posuere fermentum lorem, non

              turpis egestas. </Text>
            </Flex>
          </Flex>
          <Flex  w={'100%'} justifyContent={'space-between'} mt={4} pl={6} pr={6} h={'fit-content'}>
            <Flex>
                <Text color={'#666'} fontSize={'20px'}>
                ARQUIVOS E LINKS</Text>
            </Flex>
          </Flex>
          <Flex  w={'100%'} justifyContent={'space-between'} mt={4} pl={6} pr={6} h={'fit-content'}>
            <Flex>

            </Flex>
            <Flex>
                <Text color={'#666'} fontSize={'16px'}ml={'auto'} fontWeight={'medium'}>Palavras-chave: Avaliação,Neo-soldados,Estágio-Operacional.</Text>
            </Flex>
          </Flex>
      </Flex>

    </>
  );
};

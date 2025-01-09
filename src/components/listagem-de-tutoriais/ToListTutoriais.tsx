import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ToListTutoriaisContent } from './ToListTutoriaisContent';

interface IInterface {
  isOpen: boolean;
  handleToggle: () => void;
}
export const ToListTutoriais: React.FC<IInterface> = ({
  isOpen,
}) => {
  return (
    <Flex
      //h={'80vh'}
      //h={'full'}
      h={'100%'}
      flexDirection={'column'}
      transitionDuration="1.0s"
      gap={2}
    >

      <Flex
        pl={2}
        pr={2}
        //border={'1px solid black'}
        borderRadius={'8px'}
        borderTopLeftRadius={0}
        //w={isOpen ? '86vw' : '94vw'}
        transitionDuration="1.0s"
        //h={'75vh'}
        h={'100%'}
        position="relative"
        borderBottom="1px solid rgba(0, 0, 0, 0.5)"
        boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
        bg={'white'}
        //overflowY={'auto'}
      >
        <Flex position="absolute" top={'32px'} fontWeight={'700'} gap={6} align={'center'} justify={'center'} w={'100%'}>
            <Text
              color={'rgba(0, 0, 0, 0.48)'}
              fontWeight={'700'}
              fontSize={{
                base: '1.2rem',
                lg: '1.3rem',
                md: '1rem',
                sm: '1rem',
              }}
            >
             Consulta de Treinamentos
            </Text>
        </Flex>
        <Flex
          position="absolute"
          flexDirection={'column'}
          alignItems={'center'}
          justify={'center'}
          top={'72px'}
          pt={4}
          gap={2}
          align={{ base: 'flex-start' }}
          w={'100%'}
        >
          <Flex p={8} w={'100%'}  >
            <ToListTutoriaisContent />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

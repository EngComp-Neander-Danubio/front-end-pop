import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ToListModulosContent } from './ToListModulosContent';


interface IInterface {
  isOpen: boolean;
  handleToggle: () => void;
}
export const ToListModulos: React.FC<IInterface> = () => {
  return (
    <Flex
      h={'100%'}
      flexDirection={'column'}
      transitionDuration="1.0s"
      gap={2}
      bgColor={"#F5F5F5"}
    >

      <Flex
        pl={2}
        pr={2}
        //border={'1px solid black'}
        borderRadius={'8px'}
        borderTopLeftRadius={0}
        h={'100%'}
        position="relative"
        borderBottom="1px solid rgba(0, 0, 0, 0.5)"
        boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
        bg={'white'}
        overflowY={'auto'}
      >
        <Flex position="absolute" top={'32px'} ml={10} fontWeight={'700'}
        >
          <Text
            color={'rgba(0, 0, 0, 0.48)'}
            fontWeight={'700'}
            //fontSize={'1.2vw'}
            fontSize={{
              base: '1.2rem',
              lg: '1.3rem',
              md: '1rem',
              sm: '1rem',
            }}
            //textDecoration={'underline'}
          >
            Home
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
          <Flex p={8}  w={'100%'}>
            <ToListModulosContent />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

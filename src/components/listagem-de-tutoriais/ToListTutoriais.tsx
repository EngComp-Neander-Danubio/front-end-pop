import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { ToListTutoriaisContent } from './ToListTutoriaisContent';
import { FaLeanpub } from 'react-icons/fa6';

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
        w={isOpen ? '86vw' : '94vw'}
        transitionDuration="1.0s"
        //h={'75vh'}
        h={'100%'}
        position="relative"
        borderBottom="1px solid rgba(0, 0, 0, 0.5)"
        boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
        bg={'white'}
        overflowY={'auto'}
      >
        <Flex position="absolute" top={'32px'} ml={10} fontWeight={'700'} gap={6}>

          <Flex  boxSize={'64px'} align={'center'} justify={'center'}
              borderRadius={'12px'} bgGradient={"linear(to-r, #64B967, #4BA64F)"}
              gap={6}
              >
              <Icon as={FaLeanpub} boxSize={7} color={'#fff'} />
            </Flex>
            <Flex align={'center'} justify={'center'} color={'rgba(0, 0, 0, 0.48)'}
            fontWeight={'700'} fontSize={{
              base: '1.2rem',
              lg: '1.3rem',
              md: '1rem',
              sm: '1rem',
            }}>
              Tutoriais
            </Flex>
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
        >
          <Flex p={8} w={isOpen ? '86vw' : '93vw'}>
            <ToListTutoriaisContent />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

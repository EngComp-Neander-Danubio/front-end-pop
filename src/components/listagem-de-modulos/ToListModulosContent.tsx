import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { CardModulo } from '../componentesModulos/CardModulo';
import { IoDocumentTextOutline, IoPersonCircle } from 'react-icons/io5';
import { BiSolidVideoRecording } from 'react-icons/bi';

// lista as solicitacoes da OPM no que se refere ao posto de serviço
export const ToListModulosContent: React.FC = () => {

  return (
    <>
      <Flex flexDirection={'column'} w={'100%'} gap={10} align={'center'}>

        {/* <Flex
          flexDirection={'column'}
          //p={8}
          transitionDuration="1.0s"
          w={isOpen ? '86vw' : '94vw'}
        ></Flex> */}
  <Flex  flexDirection={'row'} gap={4}>

        <CardModulo icon={<Icon as={IoPersonCircle} boxSize={7} color={'#fff'} />}
        title={'Todos'} body='' textsFooter={'Todos os Tutoriais Disponíveis'} numberTutorial={10} />
        <CardModulo icon={<Icon as={BiSolidVideoRecording} boxSize={7} color={'#fff'} />}
        title={'Vídeos'} body='' textsFooter={'Tutoriais com Vídeos Disponíveis'} numberTutorial={5} />
        </Flex>
        <CardModulo icon={<Icon as={IoDocumentTextOutline} boxSize={7} color={'#fff'} />}
        title={'Documentos'} body='' textsFooter={'Tutoriais com Documentos Disponíveis'} numberTutorial={8} />
      </Flex>

    </>
  );
};

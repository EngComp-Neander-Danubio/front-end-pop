import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { CardModulo } from '../componentesModulos/CardModulo';
import { IoBookSharp } from 'react-icons/io5';
import { FiVideo } from 'react-icons/fi';
import { FaFileAlt } from 'react-icons/fa';
import { RxText } from "react-icons/rx";
// lista as solicitacoes da OPM no que se refere ao posto de serviço
export const ToListModulosContent: React.FC = () => {

  return (
    <>
      <Flex flexDirection={'column'} w={'100%'} gap={10} align={'center'}>
      <Flex  flexDirection={'row'} gap={10}>

        <CardModulo icon={<Icon as={IoBookSharp} boxSize={7} color={'#fff'}/>}
        title={'Todos'} body='' textsFooter={'Todos os Treinamentos'} numberTutorial={10} />
        <CardModulo icon={<Icon as={FiVideo} boxSize={7} color={'#fff'} />}
        title={'Vídeos'} body='' textsFooter={'Treinamentos com Vídeos'} numberTutorial={5} />
        </Flex>
        <Flex  flexDirection={'row'} gap={10}>
        <CardModulo icon={<Icon as={FaFileAlt} boxSize={7} color={'#fff'} />}
        title={'Documentos'} body='' textsFooter={'Treinamentos com Documentos'} numberTutorial={8} />
        <CardModulo icon={<Icon as={RxText} boxSize={7} color={'#fff'}  />}
        title={'Textos'} body='' textsFooter={'Treinamentos com textos'} numberTutorial={8} />
        </Flex>

      </Flex>

    </>
  );
};

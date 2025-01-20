import { Flex, Icon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CardModulo } from '../componentesModulos/CardModulo';
import { IoBookSharp } from 'react-icons/io5';
import { FiVideo } from 'react-icons/fi';
import { FaFileAlt } from 'react-icons/fa';
import { RxText } from "react-icons/rx";
import api from '../../services/api';
type CadastroForm = {
  title: string;
    description: string;
    reference?: string;
    system?: string;
    assunto?: string;
    descriptionAdd?: string;
    pdfFilePath?: File,
    createdBy?: string,
    sectorContactName?: string,
    sectorContactEmail?: string,
    sectorContactPhone?: string,
    keywords?: string[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

}
// lista as solicitacoes da OPM no que se refere ao posto de serviço
export const ToListModulosContent: React.FC = () => {
  const [tutorial, setTutorial] = useState<CadastroForm[]>([]);
    const loadTutorialFromToBackend = async () => {
      try {
        const response = await api.get<CadastroForm[]>(`/pops`);
        setTutorial(response.data);

        } catch (err) {
          if (err instanceof Error) {
            console.error(`Erro ao carregar postos: ${err.message}`);
          } else {
            console.error('Erro desconhecido ao carregar postos:', err);
          }
        }
      };
    useEffect(()=>{
      loadTutorialFromToBackend()
    },[])

  return (
    <>
      <Flex flexDirection={'column'} w={'100%'} gap={10} align={'center'}>
      <Flex  flexDirection={'row'} gap={10}>

        <CardModulo icon={<Icon as={IoBookSharp} boxSize={7} color={'#fff'}/>}
        title={'Todos'} body='' textsFooter={'Todos os Treinamentos'} numberTutorial={tutorial.length} />
        <CardModulo icon={<Icon as={FiVideo} boxSize={7} color={'#fff'} />}
        title={'Vídeos'} body='' textsFooter={'Treinamentos com Vídeos'} numberTutorial={tutorial.length} />
        </Flex>
        <Flex  flexDirection={'row'} gap={10}>
        <CardModulo icon={<Icon as={FaFileAlt} boxSize={7} color={'#fff'} />}
        title={'Documentos'} body='' textsFooter={'Treinamentos com Documentos'} numberTutorial={tutorial.length} />
        <CardModulo icon={<Icon as={RxText} boxSize={7} color={'#fff'}  />}
        title={'Textos'} body='' textsFooter={'Treinamentos com textos'} numberTutorial={tutorial.length} />
        </Flex>

      </Flex>

    </>
  );
};

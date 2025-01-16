import { Flex, FocusLock, Icon , IconButton, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, TabIndicator, Text, useDisclosure, useToast} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { CardTutorial } from '../componentesTutorial/CardTutorial';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FaFileAlt } from 'react-icons/fa';
import { FiFilter, FiVideo } from 'react-icons/fi';
import { MdOutlineAutoAwesomeMotion } from 'react-icons/md';
import { Pagination } from '../componentsCadastro/pagination/Pagination';
import  InputPatternController  from '../componentsCadastro/inputPatternController/InputPatternController';
import { Controller, Form, useForm } from 'react-hook-form';
import { IconeBusca } from '../componentesGerais/iconesMenuLateral/iconeMenulateralBusca';
import { DatePickerEvent } from '../componentsCadastro/formGrandeEvento/DatePickerEvent';
import  SelectPattern from '../componentsCadastro/modal/SelectPattern';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import api from '../../services/api';
import { RxText } from 'react-icons/rx';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';

// lista as solicitacoes da OPM no que se refere ao posto de serviço
type CadastroForm = {
  title: string;
    description: string;
    reference?: string;
    system?: string;
    assunto?: string;
    descriptionAdd?: string;

}
type OptionType = { label: string; value: string  }[];

type ISystem = {
  sis_sigla: string;
  sis_codigo: string;
  sis_nome: string;
}

export const ToListTutoriaisContent: React.FC = () => {
  const {control} = useForm();
  const toast = useToast();
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const [tutorial, setTutorial] = useState<CadastroForm[]>([]);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [dataPerPage] = useState(8);
  const lastDataIndex = (currentDataIndex + 1) * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const totalData = tutorial.length;
  const currentData = tutorial.slice(firstDataIndex, lastDataIndex);
  const hasMore = lastDataIndex < tutorial.length;
  const [systems, setSystems] = useState<OptionType[]>([]);
  const [checkboxData, setCheckboxData] = useState<string[]>([]); // Estado para armazenar os dados dos checkboxes

  // Função para alterar o estado dos checkboxes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
    if (e.target.checked) {
      setCheckboxData((prev) => [...prev, label]); // Adiciona ao array se marcado
    } else {
      setCheckboxData((prev) => prev.filter(item => item !== label)); // Remove do array se desmarcado
    }
  };
  const loadSystemsFromBackend = useCallback(async () => {
    try {
      const response = await api.get<ISystem[]>('/listar-sistemas');
      const formattedSystems = response.data.map((system: ISystem) => ({
        label: system.sis_sigla,
        value: system.sis_codigo,
      }));
      setSystems(formattedSystems);
    } catch (error) {
      console.error('Falha ao carregar os sistemas:', error);
    }
  }, []);

  useEffect(() => {
    loadSystemsFromBackend();
  }, []);
  const loadTutorialFromToBackend = async () => {
    try {
      const response = await api.get<CadastroForm[]>(`/listar-postos`);
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

  const loadMore = () => {
    if (hasMore) {
      setCurrentDataIndex(prevIndex => prevIndex + 1);
    } else {
      toast({
        title: 'Fim dos dados',
        description: 'Não há mais Operações para carregar.',
        status: 'info',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  const loadLess = () => {
    if (firstDataIndex > 0) {
      setCurrentDataIndex(prevIndex => prevIndex - 1);
    } else {
      toast({
        title: 'Início dos dados',
        description: 'Você está na primeira página.',
        status: 'info',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    }
  };
  return (
    <>
    <Flex flexDirection={'column'} w={'100%'} gap={10}
      align={'center'}
      //border="1px solid rgba(0, 0, 0, 0.2)"
      //boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.2)"
      borderRadius={'12px'}
      maxH={'80vh'}
      h={'70vh'}
      //border={'1px solid green'}
      p={4}
      justifyContent={'space-between'}
        >
      <Flex flexDirection={'column'} w={'100%'} gap={5}
      align={'center'}
      // borderBottom="1px solid rgba(0, 0, 0, 0.2)"
      //   boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.2)"
      //   borderRadius={'12px'}
      //border={'1px solid red'}
      //maxH={'50vh'}
      h={'75vh'}

      >
        <Flex gap={2} w={'100%'} h={'fit-content'} flexDirection={'row'} align={'center'} justify={'center'} justifyContent={'space-between'}>

        <Controller
                      name="dataInicio"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <DatePickerEvent
                        h="31px"
                        w={'8vw'}
                          portalId="root-portal"
                          placeholder='Início'
                          selectsStart
                          onChange={date => {
                            field.onChange(date);
                            setStartDate(date as Date);
                          }}
                          selected={field.value ? new Date(field.value) : null}
                          startDate={startDate}
                          endDate={endDate}
                          error={error}
                          />
                        )}
                        />

                    <Controller
                                  name="dataFinal"
                                  control={control}
                                  render={({ field, fieldState: { error } }) => (
                                    <DatePickerEvent
                                    portalId="root-portal"
                                    placeholder='Final'
                                    selectsEnd
                                    h="31px"
                                    w={'8vw'}
                                    fontSize={'14px'}
                                    onChange={date => {
                                      field.onChange(date);
                                      setEndDate(date as Date);
                                    }}
                                    selected={field.value ? new Date(field.value) : null}
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    error={error}
                                    />
                                  )}
                                  />
                                  <Flex>

                                    {/* <Menu closeOnBlur={true} closeOnSelect={false}>
                                      <MenuButton
                                        as={IconButton}
                                        aria-label="Options"
                                        icon={<FiFilter />}
                                        variant="outline"
                                        color="#A0AEC0"
                                      />
                                      <MenuList>
                                        <MenuItem>
                                          <Checkbox
                                            colorScheme="green"
                                            isChecked={checkboxData.includes('Sistemas')}
                                            onChange={(e) => handleCheckboxChange(e, 'Sistemas')}
                                          >
                                            Sistemas
                                          </Checkbox>
                                        </MenuItem>
                                        <MenuItem>
                                          <Checkbox
                                            colorScheme="green"
                                            isChecked={checkboxData.includes('OPM')}
                                            onChange={(e) => handleCheckboxChange(e, 'OPM')}
                                          >
                                            OPM
                                          </Checkbox>
                                        </MenuItem>
                                        <MenuItem>
                                          <Checkbox
                                            colorScheme="green"
                                            isChecked={checkboxData.includes('Tipo')}
                                            onChange={(e) => handleCheckboxChange(e, 'Tipo')}
                                          >
                                            Tipo
                                          </Checkbox>
                                        </MenuItem>
                                        <MenuItem>
                                          <Checkbox
                                            colorScheme="green"
                                            isChecked={checkboxData.includes('Arquivo')}
                                            onChange={(e) => handleCheckboxChange(e, 'Arquivo')}
                                          >
                                            Arquivo
                                          </Checkbox>
                                        </MenuItem>
                                      </MenuList>
                                    </Menu> */}
                                  </Flex>
                                  {/* <Flex align={'center'} justify={'center'} gap={1}>
                                  <SelectPattern options={systems} w={'300px'} isDisabled={!checkboxData.includes('Sistemas')} />
                                  </Flex> */}
                                  <Flex ml={'auto'} gap={2}>
                                    <InputPatternController fontSize={'14px'} w={'20vw'} placeholder='Buscar'>
                                        <IconeBusca aria-label={''} color={'#A0AEC0'} />
                                  </InputPatternController>
                                  </Flex>
                               </Flex>

<Flex w={'100%'} flexDirection={'column'}gap={10}
      align={'center'}
      border="1px solid rgba(0, 0, 0, 0.2)"
      boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.2)"
      borderRadius={'12px'} maxH={'80vh'}
      h={'60vh'} >
  <Tabs w={'100%'} p={4} minH={'54vh'}>
    <TabList>
      <Tab gap={2}
        color={"#A0AEC0"}
        _selected={{ color: '#276749' }}
      >
        <Flex boxSize={'39px'} align={'center'} justify={'center'}
        borderRadius={'12px'} bgGradient={
          "linear(to-r, #64B967, #4BA64F)" } >
        <Icon as={MdOutlineAutoAwesomeMotion} boxSize={4} color={'#fff'} />
        </Flex>
        <Text
        //color={"#276749"}
        fontWeight={'medium'}>
            Todos (12)
        </Text>
      </Tab>

      <Tab gap={2}
      color={"#A0AEC0"}
        _selected={{ color: '#276749', lineClamp: '#276749' }}>
        <Flex boxSize={'39px'} align={'center'} justify={'center'}
        borderRadius={'12px'} bgGradient={
          "linear(to-r, #439DEE,  #1E78E9)" }  gap={2}>
        <Icon as={FiVideo} boxSize={4} color={'#fff'} />
        </Flex>
        <Text
        //color={"#276749"}
        //color={"#A0AEC0"}
        fontWeight={'medium'}>
        Vídeos  (12)
        </Text>
      </Tab>
      <Tab gap={2}   color={"#A0AEC0"}
        _selected={{ color: '#276749' }}>
        <Flex boxSize={'39px'} align={'center'} justify={'center'}
        borderRadius={'12px'} bgGradient={
          "linear(to-r, #DD6B20,  #DD6B20)" }>
        <Icon as={FaFileAlt} boxSize={4} color={'#fff'} />
        </Flex>
        <Text
        //color={"#276749"}
        fontWeight={'medium'}>

        Documentos (03)
        </Text>
      </Tab>
      <Tab gap={2}   color={"#A0AEC0"}
        _selected={{ color: '#276749' }}>
        <Flex boxSize={'39px'} align={'center'} justify={'center'}
        borderRadius={'12px'} bgGradient={
          "linear(to-r, #4FD1C5, #4FD1C5)" }>
          <Icon as={RxText} boxSize={4} color={'#fff'} />
        </Flex>
        <Text
        //color={"#276749"}
        fontWeight={'medium'}>

        Textos (01)
        </Text>
      </Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='2px' bg='#276749' borderRadius='1px' />
        <TabPanels >
          <TabPanel>
            <Flex gap={4} flexDirection={'column'} w={'100%'}>
            <CardTutorial title={'AVALIAÇÃO DE NEO-SOLDADOS'} body={''} />
              <CardTutorial title={'Esqueci a senha do meu SAPM'} body={''} />

            </Flex>
          </TabPanel>
          <TabPanel>
          <Flex gap={4} flexDirection={'column'}>
            <CardTutorial title={'Esqueci a senha do meu SAPM'} body={''} />
              <CardTutorial title={'AVALIAÇÃO DE NEO-SOLDADOS'} body={''} />
              </Flex>
          </TabPanel>
          <TabPanel>
          <Flex gap={4} flexDirection={'column'}>
            <CardTutorial title={'Esqueci a senha do meu SAPM'} body={''} />
              </Flex>
          </TabPanel>
          <TabPanel>
          <Flex gap={4} flexDirection={'column'}>
            <CardTutorial title={'Esqueci a senha do meu SAPM'} body={''} />
              <CardTutorial title={'AVALIAÇÃO DE NEO-SOLDADOS'} body={''} />
              </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
        <Pagination pl={4} pr={4} w={'100%'} firstDataIndex={0} lastDataIndex={0} totalPages={0} dataPerPage={0} loadLess={loadLess} loadMore={loadMore} />
        </Flex>
      </Flex>
      </Flex>
    </>
  );
};

import { Flex, Icon , TabIndicator, Text, useDisclosure, useToast} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { CardTutorial } from '../componentesTutorial/CardTutorial';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FaFileAlt } from 'react-icons/fa';
import { FiVideo } from 'react-icons/fi';
import { MdOutlineAutoAwesomeMotion } from 'react-icons/md';
import { Pagination } from '../componentsCadastro/pagination/Pagination';
import  InputPatternController  from '../componentsCadastro/inputPatternController/InputPatternController';
import { Controller, useForm } from 'react-hook-form';
import { IconeBusca } from '../componentesGerais/iconesMenuLateral/iconeMenulateralBusca';
import { DatePickerEvent } from '../componentsCadastro/formGrandeEvento/DatePickerEvent';
import api from '../../services/api';
import { RxText } from 'react-icons/rx';
import { SearchIcon } from '@chakra-ui/icons';

// lista as solicitacoes da OPM no que se refere ao posto de serviço
type PopProps = {
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
type OptionType = { label: string; value: string  }[];

type ISystem = {
  sis_sigla: string;
  sis_codigo: string;
  sis_nome: string;
}

export const ToListTutoriaisContent: React.FC = () => {
  const {control, watch, reset} = useForm();
  const toast = useToast();
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [tutorial, setTutorial] = useState<PopProps[]>([]);
  const [searchPops, setsearchPops] = useState<PopProps[]>([]);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [datePerpage, setDatePerpage] = useState<number>(1);

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDatePerpage(parseInt(e.target.value));
  };
  const lastDataIndex = (currentDataIndex + 1) * datePerpage;
  const firstDataIndex = lastDataIndex - datePerpage;
  const totalData = tutorial.length;
  const currentData = tutorial.slice(firstDataIndex, lastDataIndex);
  const hasMore = lastDataIndex < tutorial.length;
  const totalDataSearch = searchPops.length;
  const currentDataSearch = searchPops.slice(firstDataIndex, lastDataIndex);
  const hasMoreSearch = lastDataIndex < searchPops.length;
  const [systems, setSystems] = useState<OptionType[]>([]);

  const loadSystemsFromBackend = useCallback(async () => {
    try {
      const response = await api.get<ISystem[]>('/references');
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

  const inputUser = watch('searchPop');

  useEffect(() => {
    const handler = setTimeout(() => {
      searchPopsFromInput(inputUser);
    }, 100);

    return () => {
      clearTimeout(handler);
      //setsearchPops([])
    };
  }, [inputUser]);

  const searchPopsFromInput = useCallback(
    async (param?: string) => {
      if (!param) {
        setsearchPops([]);
        return;
      }
      const lowercasedParam = param.toLowerCase();
      const result: PopProps[] = tutorial.filter(tutorial => {
        // Converte a data de criação para string e para minúsculas, se existirem
        const diaAsString = tutorial.createdBy?.toString().toLowerCase();
        return (
          (diaAsString?.includes(lowercasedParam) ||
            tutorial.assunto?.toLowerCase().includes(lowercasedParam)
            || tutorial.description?.toLowerCase().includes(lowercasedParam)
            || tutorial.descriptionAdd?.toLowerCase().includes(lowercasedParam)
            || tutorial.reference?.toLowerCase().includes(lowercasedParam)
        ));
      });
      setsearchPops(result);
    },
    [currentDataSearch], // Dependências para o `useCallback`
  );

  const handleFilterByDates = useCallback(
    async () => {
      if (!startDate && !endDate) {
        setsearchPops([]); // Limpa os resultados se não houver datas selecionadas
        return;
      }

      const result: PopProps[] = tutorial.filter(tutorial => {
        // Verifica se a data de criação está no formato correto
        const createdAt = new Date(tutorial.createdAt);
        if (isNaN(createdAt.getTime())) {
          return false; // Ignora tutorial com data inválida
        }

        const matchesDates =
          (!startDate || createdAt >= startDate) &&
          (!endDate || createdAt <= endDate);

        return matchesDates; // Filtra por data
      });

      setsearchPops(result); // Atualiza os resultados filtrados por data
      //setTutorial(result);
    },
    [startDate, endDate, tutorial]
  );

  useEffect(() => {
    handleFilterByDates();
  }, [startDate, endDate]);


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
                                  <Controller
                                        name="searchPop"
                                        control={control}
                                        render={({
                                          field: { onChange, onBlur, value, ref },
                                          fieldState: { error },
                                        }) => (
                                          <InputPatternController
                                            fontSize={'14px'} w={'20vw'} placeholder='Buscar'
                                            onChange={e => {
                                              onChange(e.currentTarget.value);
                                            }}
                                            onBlur={onBlur}
                                            value={value}
                                            error={error}
                                          >
                                            <IconeBusca aria-label={''} color={'#A0AEC0'} />
                                          </InputPatternController>
                                        )}
                                      />
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
            <Flex gap={4} flexDirection={'column'} w={'100%'} h={'40vh'} overflowY={'auto'}>
              {(searchPops.length > 0 ? currentDataSearch :  currentData).map((item, index)=> (
                <>
                  <CardTutorial title={item.title} body={item.description} key={index} createdAt={new Date(item?.createdAt)} createdBy={''} />
                </>
              ))
              }
            </Flex>
          </TabPanel>
          <TabPanel>
          <Flex gap={4} flexDirection={'column'} h={'40vh'} overflowY={'auto'}>
          {(searchPops.length > 0 ? currentDataSearch :  currentData).map((item, index)=> (
                <>
                  <CardTutorial title={item.title} body={item.description} key={index} createdAt={new Date(item?.createdAt)} createdBy={''} />
                </>
              ))
              }
              </Flex>
          </TabPanel>
          <TabPanel>
          <Flex gap={4} flexDirection={'column'} h={'40vh'} overflowY={'auto'}>
          {(searchPops.length > 0 ? currentDataSearch :  currentData).map((item, index)=> (
                <>
                  <CardTutorial title={item.title} body={item.description} key={index} createdAt={new Date(item?.createdAt)} createdBy={''} />
                </>
              ))
              }
              </Flex>
          </TabPanel>
          <TabPanel>
          <Flex gap={4} flexDirection={'column'} h={'40vh'} overflowY={'auto'}>
          {(searchPops.length > 0 ? currentDataSearch :  currentData).map((item, index)=> (
                <>
                  <CardTutorial title={item.title} body={item.description} key={index} createdAt={new Date(item?.createdAt)} createdBy={''} />
                </>
              ))
              }
              </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
        <Pagination pl={4} pr={4} w={'100%'}
        firstDataIndex={firstDataIndex}
        lastDataIndex={lastDataIndex}
        totalPages={searchPops.length > 0 ? totalDataSearch : totalData}
        dataPerPage={datePerpage} loadLess={loadLess} loadMore={loadMore} handlePerPageChange={handlePerPageChange} />
        </Flex>
      </Flex>
      </Flex>
    </>
  );
};

import { Box, Flex, Icon , Text} from '@chakra-ui/react';
import React, { useState } from 'react';
import { CardTutorial } from '../componentesTutorial/CardTutorial';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FaFileAlt, FaPlusCircle } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';
import { FiVideo } from 'react-icons/fi';
import { MdOutlineAutoAwesomeMotion } from 'react-icons/md';
import { Pagination } from '../componentsCadastro/pagination/Pagination';
import { InputPatternController } from '../componentsCadastro/inputPatternController/InputPatternController';
import { Controller, useForm } from 'react-hook-form';
import { IconeBusca } from '../componentesGerais/iconesMenuLateral/iconeMenulateralBusca';
import { DatePickerEvent } from '../componentsCadastro/formGrandeEvento/DatePickerEvent';
import { IconeFiltro } from '../componentesGerais/iconeDashHeader/iconeFiltro';
import { SelectPattern } from '../componentsCadastro/modal/SelectPattern';

// lista as solicitacoes da OPM no que se refere ao posto de serviço

const ButtonTag = (props) => {
  return (
    <Box
            fontWeight={500}
            borderRadius={'16px'}
            color={'#fff'}
            bgColor={props.color}
            w={'83px'}
            h={'22px'}
            fontSize={'12px'}
            textAlign={'center'}
            alignContent={'center'}
            justifyContent={'center'}
            _hover={{ cursor: 'pointer' }}
          >
            {props.text}
          </Box>
  )
}
export const ToListTutoriaisContent: React.FC = () => {
  const {control} = useForm();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [count, setCount] = useState<number>(5);
  const array = ['BCG', 'Neo-Soldados', 'Promoção', 'Operação', 'Internet']; // Exemplo de array
  const colours = [
'rgba(197, 48, 48, 1)',
    'rgba(56, 161, 105, 1)',
 'rgba(49, 130, 206, 1)',
    'rgba(251, 211, 141, 1)',
    'rgba(237, 137, 54, 1)',
  ]
  const handleCount = () => {
    setCount(prev => prev + 1)
  }
  return (
    <>
    <Flex flexDirection={'column'} w={'100%'} gap={10}
      align={'center'}
      border="1px solid rgba(0, 0, 0, 0.2)"
      boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.2)"
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
      h={'fit-content'}
      >
        <Flex gap={2} w={'100%'} h={'fit-content'} flexDirection={'row'} align={'center'} justify={'center'} justifyContent={'space-between'}>

        <Controller
                      name="dataInicio"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <DatePickerEvent
                        h="31px"
                        w={'200px'}
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
                                    w={'200px'}
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
                                  <InputPatternController fontSize={'14px'} w={'12vw'} placeholder='Palavras-chave'>
                                  <IconeFiltro />
                                  </InputPatternController>
                                  </Flex>
                                  <Flex align={'center'} justify={'center'} gap={1}>
                                      <InputPatternController w={'12vw'} placeholder='Digite a palavras-chave'/>
                                      <Icon as={FaPlusCircle} boxSize={5} color={'green'} onClick={handleCount}/>
                                  </Flex>
                                  <Flex ml={'auto'} gap={2}>
                                  <SelectPattern w={'12vw'} options={[]} />
                                    <InputPatternController fontSize={'14px'} w={'20vw'} placeholder='Buscar'>
                                        <IconeBusca color={'#A0AEC0'} />
                                  </InputPatternController>
                                  </Flex>
                               </Flex>
                               <Flex w={'100%'} flexDirection={'row'} align={'center'} gap={1}>
                               {array.slice(0, count).map((element, index) => (
                              <ButtonTag key={index} name={`tag ${index + 1}`} text={element} color={colours[index]}/>
                                ))}
                               </Flex>
<Tabs w={'100%'}>
  <TabList>
    <Tab gap={2} color={"#276749"}>
      <Flex boxSize={'39px'} align={'center'} justify={'center'}
      borderRadius={'12px'} bgGradient={
        "linear(to-r, #64B967, #4BA64F)" } >
      <Icon as={MdOutlineAutoAwesomeMotion} boxSize={4} color={'#fff'} />
      </Flex>
      <Text color={"#276749"} fontWeight={'medium'}>

      Todos (12)
      </Text>
    </Tab>
    <Tab gap={2} color={"#276749"}>
      <Flex boxSize={'39px'} align={'center'} justify={'center'}
      borderRadius={'12px'} bgGradient={
        "linear(to-r, #439DEE,  #1E78E9)" }  gap={2}>
      <Icon as={FiVideo} boxSize={4} color={'#fff'} />
      </Flex>
      <Text color={"#276749"} fontWeight={'medium'}>
      Vídeos  (12)
      </Text>
    </Tab>
    <Tab gap={2} color={"#276749"}>
      <Flex boxSize={'39px'} align={'center'} justify={'center'}
      borderRadius={'12px'} bgGradient={
        "linear(to-r, #DD6B20,  #DD6B20)" }>
      <Icon as={FaFileAlt} boxSize={4} color={'#fff'} />
      </Flex>
      <Text color={"#276749"} fontWeight={'medium'}>

      Documentos (03)
      </Text>
    </Tab>
    <Tab gap={2} color={"#276749"}>
      <Flex boxSize={'39px'} align={'center'} justify={'center'}
      borderRadius={'12px'} bgGradient={
        "linear(to-r, #4FD1C5, #4FD1C5)" }>
        <Icon as={HiOutlineLink} boxSize={4} color={'#fff'} />
      </Flex>
      <Text color={"#276749"} fontWeight={'medium'}>

      Links (01)
      </Text>
    </Tab>
  </TabList>

  <TabPanels>
    <TabPanel >
      <Flex gap={4} flexDirection={'column'}>
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


      </Flex>
      <Pagination pl={4} pr={4} mb={'auto'} w={'100%'} firstDataIndex={0} lastDataIndex={0} totalPages={0} dataPerPage={0} loadLess={function (): void {
  throw new Error('Function not implemented.');
} } loadMore={function (): void {
        throw new Error('Function not implemented.');
      } } />
      </Flex>
    </>
  );
};

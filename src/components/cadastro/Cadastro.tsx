import { Flex, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import { FormCadastro } from './FormCadastro';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cadastroSchema } from '../../types/yupCadastro/yupCadastro';
import { BotaoCadastrar } from '../componentsCadastro/botaoCadastrar';
import api from '../../services/api';


interface IInterface {
  isOpen: boolean;
  handleToggle: () => void;
}
type CadastroForm = {
  title: string;
    description: string;
    reference?: string;
    system?: string;
    assunto?: string;
    descriptionAdd?: string;
    category?: number;
    keywords?: string[];

}
export const Cadastro: React.FC<IInterface> = ({
  isOpen,
}) => {

const methodsInput = useForm<CadastroForm>({
    resolver: yupResolver(cadastroSchema),
  });
  const toast = useToast();
  const { reset } = methodsInput;

  const onSubmit = async (data: CadastroForm) => {
    console.log(data);
    try {
      await api.post(`/pops`, data);
      toast({
        title: 'Sucesso',
        description: 'Treinamento cadastrado com sucesso',
        status: 'success',
        position: 'top-right',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Falha:', error);
      toast({
        title: 'Erro',
        description: 'Falha ao criar Treinamento',
        status: 'error',
        position: 'top-right',
        duration: 2000,
        isClosable: true,
      });
    }

    reset();
  };
  return (
    <Flex
      h={'100%'}
      w={'100%'}
      flexDirection={'column'}
      gap={2}
      //border={'1px solid black'}
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
        align={'center'} justify={'center'}
        //overflowY={'auto'}
      >
        <Flex position="absolute" top={'32px'} ml={10} fontWeight={'700'}  color={'rgba(0, 0, 0, 0.48)'}>
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
            Cadastro de Treinamento
          </Text>
        </Flex>
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          justify={'center'}
          pt={4}
        >
          <FormProvider {...methodsInput}>
            <form onSubmit={methodsInput.handleSubmit(onSubmit)}>
              <Flex p={8} w={isOpen ? '85vw' : '90vw'} transition={"1.0s"} justify={'center'} align={'center'} flexDirection={'column'} gap={4}>
                <FormCadastro />
                <BotaoCadastrar label="Cadastrar" type='submit' />
              </Flex>
            </form>
          </FormProvider>
        </Flex>
      </Flex>
    </Flex>
  );
};


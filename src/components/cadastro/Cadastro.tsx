import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FormCadastro } from './FormCadastro';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cadastroSchema } from '../../types/yupCadastro/yupCadastro';
import { BotaoCadastrar } from '../componentsCadastro/botaoCadastrar';


interface IInterface {
  isOpen: boolean;
  handleToggle: () => void;
}
type CadastroForm = {
  title: string;
    description: string;
    reference: string;
    system: string;
    assunto: string;
    descriptionAdd?: string;

}
export const Cadastro: React.FC<IInterface> = ({
  isOpen,
}) => {

const methodsInput = useForm<CadastroForm>({
    resolver: yupResolver(cadastroSchema),
  });
  const { reset } = methodsInput;

  const onSubmit = async (data: CadastroForm) => {
    console.log(data);

    reset();
  };
  return (
    <Flex
      //h={'80vh'}
      //h={'full'}
      h={'100%'}
      flexDirection={'column'}
      //transitionDuration="1.0s"
      gap={2}
    >

      <Flex
        pl={2}
        pr={2}
        //border={'1px solid black'}
        borderRadius={'8px'}
        borderTopLeftRadius={0}
        //w={isOpen ? '86vw' : '94vw'}
        //transitionDuration="1.0s"
        //h={'75vh'}
        h={'100%'}
        position="relative"
        borderBottom="1px solid rgba(0, 0, 0, 0.5)"
        boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
        bg={'white'}
        overflowY={'auto'}
      >
        <Flex position="absolute" top={'32px'} ml={10} fontWeight={'700'}>
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
            Cadastro
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
        >
          <FormProvider {...methodsInput}>
            <form onSubmit={methodsInput.handleSubmit(onSubmit)}>
              <Flex p={8} w={isOpen ? '86vw' : '93vw'}>
                <FormCadastro />
              </Flex>
            </form>
          </FormProvider>
          <BotaoCadastrar label="Cadastrar"/>
        </Flex>
      </Flex>
    </Flex>
  );
};


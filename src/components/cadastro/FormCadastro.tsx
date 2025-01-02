import { Flex, FlexboxProps, FormControl, FormLabel, Icon, Switch, Text } from "@chakra-ui/react"
import { InputPatternController } from "../componentsCadastro/inputPatternController/InputPatternController";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import { SelectPattern } from "../componentsCadastro/modal/SelectPattern";
import { FaFolderPlus } from "react-icons/fa6";
import { Textarea } from '@chakra-ui/react';
import { BotaoCadastrar } from "../componentsCadastro/botaoCadastrar";
import { IoSearchSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { optionsSystems } from "../../types/typesSystems";
interface IFormProps extends FlexboxProps {
  widthSelect?: string;
  isLoadingRequest?: boolean;
  isEditing?: boolean;
}

const optionsFiles: OptionType[] = [
  { label: 'PDF', value: '1' },
  { label: 'Docx', value: '2' },
  { label: 'Txt', value: '3' },
  { label: 'xls', value: '4' },
  { label: 'pwt', value: '5' },
];

export const FormCadastro: React.FC<IFormProps> = ({
  widthSelect, ...props
}) => {
  const { control } = useFormContext();
  const [swicth, setSwicth] = useState(false);
  const handleSwicth = (e: any) => {
    //if (!isAleatorio) trigger('antiguidade');
    setSwicth(!swicth);
  };
  return (
    <FormControl
      //border={'1px solid green'}
      {...props}
    >
      <Flex align="center" justify="center" gap={4} flexDirection={'column'} w={'100%'}>
            <Controller
              name="title"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputPatternController
                  type="text"
                  w={'100%'}
                  placeholder="Informe o Título do Tutorial"
                  {...field}
                  error={error}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputPatternController
                  type="text"
                  w={'100%'}
                  placeholder="Informe uma breve descrição"
                  {...field}
                  error={error}
                />
              )}
            />
          <Flex flexDirection="row" gap={10}  w={'100%'} align={'center'} justify={'center'} justifyContent={'space-between'}
          //border={'1px solid red'}
          >
          <Flex gap={2} align={'center'} justify={'center'}>
            <Text color={'#A0AEC0'} flexWrap={'nowrap'} w={'220px'}>Possui Sistema de referência</Text>
            <Controller
              name="reference"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Switch
                id="reference"
                colorScheme={'green'}
                onChange={async e => {
                  field.onChange(e.target.checked);
                  handleSwicth(!field.value);
                }}
                isChecked={field.value ?? false}
                />
              )}
              />
            </Flex>
            <Flex gap={2} align={'center'} justify={'center'}>

            <Text color={'#A0AEC0'} flexWrap={'nowrap'}>Sistema</Text>
              <Controller
                name="system"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <SelectPattern options={optionsSystems} w={'300px'} />
                )}
                />
              </Flex>

              <Flex align={'center'} justify={'center'}>
                <Text color={'#A0AEC0'} flexWrap={'nowrap'} w={'160px'}>Tipo do Assunto</Text>
                <Controller
                  name="assunto"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <SelectPattern options={optionsSystems} w={'400px'} />
                  )}
                  />
              </Flex>
              <Flex gap={2} align={'center'} justify={'center'}>
               <Icon as={FaFolderPlus} boxSize={5} color={'#A0AEC0'}/>

              </Flex>
          </Flex>
              <Textarea textFillColor={'#A0AEC0'} placeholder='Descrição adicional (Opcional)' h={'15vh'} color={'#A0AEC0'}/>

              <Flex flexDirection={'row'} w={'100%'}
              //border={'1px solid red'}
              justifyContent={'space-between'}
              >
                <Flex flexDirection={'column'}>
                <Text color={'#A0AEC0'} flexWrap={'nowrap'} w={'160px'}>Tipo de arquivo</Text>
                  <Controller
                    name="assunto"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <SelectPattern options={optionsFiles} w={'400px'} fontFamily={'Roboto'} />
                    )}
                    />
                </Flex>
                    <Flex gap={2} align={'center'} justify={'center'}
                    //border={'1px solid red'}
                    >
                              <Icon as={IoSearchSharp} boxSize={5} color={'#A0AEC0'}/>
                              <Icon as={MdDelete} boxSize={5} color={'#A0AEC0'}/>
                </Flex>
              </Flex>
          </Flex>
    </FormControl>
  );
}

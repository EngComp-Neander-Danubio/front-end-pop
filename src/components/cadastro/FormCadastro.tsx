import { Divider, Flex, FlexboxProps, FormControl, Icon, Switch, Text } from "@chakra-ui/react"
import { InputPatternController } from "../componentsCadastro/inputPatternController/InputPatternController";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import { SelectPattern } from "../componentsCadastro/modal/SelectPattern";
import { Textarea } from '@chakra-ui/react';
import { optionsSystems } from "../../types/typesSystems";
import { OptionType } from "../../types/typesModalidade";
import { InputCSVpapparse } from "../componentsCadastro/inputCSVpapaparse/InputCSVpapaparse";
import { FaPlusCircle } from "react-icons/fa";
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
  const { control, watch } = useFormContext();
  const [swicth, setSwicth] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const handleSwicth = (e: any) => {
    //if (!isAleatorio) trigger('antiguidade');
    setSwicth(!swicth);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    document.getElementById('fileInput')?.click();
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
            <Flex flexDirection={'row'} w={'100%'} justifyContent={'space-between'}
            //border={'1px solid red'}
            >
            <Flex w={'100%'} align={'center'} justify={'center'}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <InputPatternController
                    type="text"
                    w={'45vw'}
                    placeholder="Informe uma breve descrição"
                    {...field}
                    error={error}
                    />
                  )}
                  />
                  </Flex>
                <Flex gap={2} w={'100%'} align={'center'} justify={'center'} >
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


              <Flex  gap={2} w={'100%'} align={'center'} justify={'center'} ml={'auto'}>
                <Text color={'#A0AEC0'} flexWrap={'nowrap'} >Sistema</Text>
                <Controller
                  name="system"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <SelectPattern options={optionsSystems} w={'300px'} isDisabled={watch('reference') ? false : true} />
                  )}
                  />
              </Flex>
            </Flex>

            <Flex
            //border={'1px solid red'}
             mr={'auto'}>
                <Controller
                  name="assunto"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Flex gap={2} align={'center'} justify={'center'}>
                    <InputPatternController
                        type="text"
                        w={'100%'}
                        placeholder="Adicionar palavra-Chave"
                        {...field}
                        error={error}
                        />
                      <Icon as={FaPlusCircle} boxSize={5} color={'green'}/>
                      </Flex>
                  )}
                  />
              </Flex>

              <Divider mt={4} />
              <Textarea textFillColor={'#A0AEC0'} placeholder='Descrição adicional (Opcional)' h={'15vh'} color={'#A0AEC0'}/>

              <Flex flexDirection={'row'} w={'100%'}
              //border={'1px solid red'}
              justifyContent={'space-between'}
              >
                <Flex flexDirection={'column'}>
                <Text color={'#A0AEC0'} flexWrap={'nowrap'} w={'160px'}>Tipo de arquivo</Text>
                <Controller
                    name="file"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <Flex flexDirection={'row'} gap={1} align={'center'} justify={'center'}>
                        <SelectPattern options={optionsFiles} w={'400px'} fontFamily={'Roboto'} />

                        <InputCSVpapparse
                          nameInput="fileInput"
                          handleClick={handleClick}
                          handleOnChange={handleOnChange}
                          isDisabled={typeof watch('file') !== 'string'}
                        />
                        {/* <Icon as={MdDelete} boxSize={5} color={'#A0AEC0'} /> */}
                      </Flex>
                    )}
                  />
                </Flex>
                <Flex>

                </Flex>

              </Flex>
          </Flex>
    </FormControl>
  );
}

import { Box, Button, color, Divider, Flex, FlexboxProps, FormControl, Icon, Stack, Switch, Text, Tooltip } from "@chakra-ui/react"
import  InputPatternController  from "../componentsCadastro/inputPatternController/InputPatternController";
import { Controller, useFormContext } from "react-hook-form";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import  SelectPattern  from "../componentsCadastro/modal/SelectPattern";
import { Textarea } from '@chakra-ui/react';
import { optionsSystems } from "../../types/typesSystems";
import { InputCSVpapparse } from "../componentsCadastro/inputCSVpapaparse/InputCSVpapaparse";
import { FaCircle, FaFileAlt, FaPlusCircle, FaVideo } from "react-icons/fa";
import { OptionType } from "../../types/typesPostos";
import api from "../../services/api";
import { FiVideo } from 'react-icons/fi';
import { BiDockBottom } from "react-icons/bi";
import { RxText } from "react-icons/rx";
import { TbCircleLetterXFilled } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
type ISystem = {
  sis_sigla: string;
  sis_codigo: string;
  sis_nome: string;
}
const ButtonTag = (props) => {
  return (
    <Box
            fontWeight={500}
            borderRadius={'16px'}
            color={'#fff'}
            bgColor={props.color}
            w={'200px'}
            h={'22px'}
            fontSize={'12px'}
            textAlign={'center'}
            alignContent={'center'}
            justifyContent={'center'}
            _hover={{ cursor: 'pointer' }}
            onClick={props.onClick}
          >
            {props.text}
          </Box>
  )
}
interface IFormProps extends FlexboxProps {
  widthSelect?: string;
  isLoadingRequest?: boolean;
  isEditing?: boolean;
}

const optionsFiles: OptionType[] = [
  { label: 'Documento PDF', value: '.pdf' },
  { label: 'Vídeo', value: '*' },
];

export const FormCadastro: React.FC<IFormProps> = ({
  widthSelect, ...props
}) => {
  const { control, watch } = useFormContext();
  const [swicth, setSwicth] = useState(false);
  const [swicthFile, setSwicthFile] = useState(false);
  const [fileList, setFileList] = useState<FileList | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  };
  const files = fileList ? [...fileList] : [];
  const [keywords, setKeywords] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [systems, setSystems] = useState<OptionType[]>([]);
  const typeDataFile: string = watch('file');
   // Função para adicionar uma palavra ao estado
   const addKeyword = (keyword: string) => {
    // Verifica se a palavra-chave não está vazia
    if (keyword.trim().length === 0) {
      setErrorMessage('Campo vazio');
      return;
    }
    if (keywords.length >= 5) {
      setErrorMessage('Capacidade de palavras-chave excedida. Limite é 5.');
      return;
    }
    setKeywords((prevKeywords) => [...prevKeywords, keyword]);
    setErrorMessage(null); // Limpa a mensagem de erro
  };

  const removeKeyword = (index: number) => {
    const updateKeywords = keywords.filter((_,i) => i !== index )
    setKeywords(updateKeywords)
    if(updateKeywords.length < 5)
      setErrorMessage(null)
}
  const colours = [
    '#38A169',
        '#3182CE',
    '#4FD1C5',
        '#DD6B20',
        '#A0AEC0',
  ]
  const handleSwicth = (e: any) => {
    setSwicth(!swicth);
  };
  const handleSwicthFile = (e: any) => {
    setSwicthFile(!swicthFile);
  };

  const handleClick = () => {
    document.getElementById('fileInput')?.click();
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
  }, [loadSystemsFromBackend]);

  return (
    <FormControl
      //border={'1px solid green'}
      {...props}
    >
      <Flex align="center" justify="center" gap={4} flexDirection={'column'} w={'100%'} >
            <Controller
              name="title"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputPatternController
                  type="text"
                  w={'100%'}
                  placeholder="Informe o Título do Treinamento"
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
                        color={'#000'}
                        placeholder="Informe uma breve descrição"
                        {...field}
                        error={error}
                        />
                      )}
                      />
                    </Flex>
                    <Flex w={'100%'} align={'center'} justify={'center'} >
                        <Text color={'#A0AEC0'} flexWrap={'nowrap'} w={'220px'}>Possui Sistema de referência</Text>
                        <Controller
                          name="reference"
                          control={control}
                          render={({ field, fieldState: { error } }) => (
                            <Switch
                            id="reference"
                            colorScheme={'green'}
                            {...field}
                            onChange={async e => {
                              field.onChange(e.target.checked);
                              handleSwicth(!field.value);
                            }}
                            isChecked={field.value ?? false}

                            />
                          )}
                          />
                      </Flex>


                      <Flex  gap={2}  align={'center'} justify={'center'} ml={'auto'}>
                        <Text color={'#A0AEC0'} flexWrap={'nowrap'} >Sistema</Text>
                        <Controller
                          name="system"
                          control={control}
                          render={({ field, fieldState: { error } }) => (
                            <SelectPattern options={optionsSystems} w={'300px'} isDisabled={watch('reference') ? false : true} {...field} />
                          )}
                          />
                      </Flex>
            </Flex>

    <Flex w={'100%'}>
          <Controller
            name="keywords"
            control={control}
            render={({ field, fieldState: { error } }) => (
          <Flex gap={2} align={'center'} justify={'center'}>
            <Flex flexDirection={'column'}>
            <InputPatternController
              type="text"
              w={'15vw'}
              placeholder="Adicionar palavra-Chave"
              {...field}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={error}
              />
            {/* Exibir o Tooltip se houver erro */}
            {errorMessage && (
              <Tooltip label={errorMessage} aria-label="Erro de palavra-chave" >
                <span style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</span>
              </Tooltip>
            )}
            </Flex>
            <Icon
              as={FaPlusCircle}
              boxSize={5}
              color={'green'}
              onClick={() => {
                addKeyword(field.value); // Adiciona o valor do input ao estado
                field.onChange(''); // Limpa o campo de input após adicionar a palavra
              }}
              onBlur={field.onBlur}
            />
            <Flex ml={'auto'} gap={2}>
            {keywords.map((element, index) => (
              <ButtonTag
                mr={'auto'}
                key={index}
                name={`tag ${index + 1}`}
                text={element}
                color={colours[index]}
                onClick={() => removeKeyword(index)}
              />
            ))}
            </Flex>
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
                <Flex flexDirection={'column'} gap={2}>
                  <Flex flexDirection={'row'} gap={2} align={'center'}>
                    <Text color={'#A0AEC0'} flexWrap={'nowrap'} w={'fit-content'}>Upload de arquivo</Text>
                    <Controller
                              name="referenceFile"
                              control={control}
                              render={({ field, fieldState: { error } }) => (
                                <Switch
                                id="reference"
                                colorScheme={'green'}
                                {...field}
                                onChange={async e => {
                                  field.onChange(e.target.checked);
                                  handleSwicthFile(!field.value);
                                }}
                                isChecked={field.value ?? false}

                                />
                              )}
                              />
                  </Flex>
                    {swicthFile && (
                      <Flex flexDirection={'row'} gap={1} align={'center'} justify={'center'}>

                              <Controller
                                  name="file"
                                  control={control}
                                  render={({ field, fieldState: { error } }) => (
                                  <SelectPattern options={optionsFiles} w={'300px'} fontFamily={'Roboto'} {...field} />
                                )} />

                                <Controller
                                  name="fileList"
                                  control={control}
                                  render={({ field, fieldState: { error } }) => (
                                      <InputCSVpapparse
                                        nameInput="fileInput"
                                        handleClick={handleClick}
                                        handleOnChange={handleFileChange}
                                        isDisabled={typeof watch('file') !== 'string'}
                                        typeFile={typeDataFile?.includes('.pdf') ? '.pdf' : ',.mkv,.mp4'}
                                  />
                                )}
                                />

                      </Flex>
                    )}
                </Flex>
                <Flex>

                </Flex>
                {/* {swicthFile && (
                  <Controller
                  name="files"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                  <Textarea value={files?.map((item,index)=>(item.name))} w={'50%'} textFillColor={'#A0AEC0'} placeholder='' h={'15vh'} color={'#A0AEC0'}/>
                  )} />
                )} */}
                {swicthFile && files.length > 0 && (
                <Stack direction="row" wrap="wrap" spacing={4} border={'1px solid #E2E8F0'} borderRadius={'6px'} align={'center'} justify={'center'} w={'100%'}>
                  {files.map((item, index) => (
                    <>
                    <Button
                    leftIcon={
                      item.name.includes('.pdf') ? (
                        <Flex gap={2}>
                        <FaCircle color="#3182CE" textRendering={index}/>
                        <FaFileAlt color="#3182CE" />
                        </Flex>
                      ) : item.name.includes('*') ? (
                        <Flex gap={2}>
                        <FaCircle color="#3182CE" textRendering={index}/>
                        <FaVideo color="#3182CE" />
                        </Flex>
                      ) : (
                        <RxText color="#3182CE" />
                      )
                    }
                    rightIcon={<MdOutlineCancel  color="#3182CE"/>}
                    variant="outline"
                    key={index}
                    size="sm"
                    fontWeight="light"
                    >
                    {item.name.toLowerCase()}
                  </Button>
                    </>
                  ))}
                </Stack>
                )}
              </Flex>
          </Flex>
          <Flex className="gradient-border" w={'100%'} mt={20}/>
    </FormControl>
  );
}

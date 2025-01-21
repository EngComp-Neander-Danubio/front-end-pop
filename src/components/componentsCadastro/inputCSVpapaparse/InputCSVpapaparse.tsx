import React, { ChangeEvent, FormEvent, useRef } from 'react';
import { Button, Flex, Input, InputProps } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import { GoUpload } from 'react-icons/go';

interface IInput extends InputProps {
  nameInput: string;
  handleClick: () => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit?: (e: FormEvent) => void;
}
export const InputCSVpapparse: React.FC<IInput> = ({
  //handleClick,
  handleOnChange,
  //handleOnSubmit,
  nameInput,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Flex flexDirection={'row'} gap={2}>
      <input
        type="file"
        accept=".txt,.mp4,.pdf"
        multiple
        id={`${nameInput}`}
        onChange={async e => handleOnChange(e)}
        style={{ display: 'none' }}
        ref={inputRef}
      />
      <Input
        as={Button}
        rightIcon={<GoUpload size={24} />}
        placeholder={'Your file ...'}
        onClick={() => inputRef.current?.click()}
        value={inputRef.current?.value}
        //colorScheme="blue"
        //style={{ borderColor: '#2b6cb0' }}
        variant="outline"
        //color={'#2b6cb0'}
        color={'#A0AEC0'}
        border={'none'}
        _hover={{ backgroundColor: '#ebf8ff' }}
        fontWeight={'light'}

      >

      </Input>
    </Flex>
  );
};

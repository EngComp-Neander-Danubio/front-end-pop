import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface IInput extends InputProps {
  error?: FieldError | { message?: string };
  children?: React.ReactNode; // Define a prop children corretamente
}
export const InputPatternController: React.FC<IInput> = ({
  error,
  children, // Corrige para "children"
  ...props
}) => {
  return (
    <FormControl flexDirection={'column'} isInvalid={!!error} color={'#F5F5F5'}>
      <InputGroup>
      {children && (
        <InputLeftElement pointerEvents="none">
          {/* <BiSearch color="gray.300" /> */}
          {children}
        </InputLeftElement>
      )}
        <Input type={props.type} placeholder={props.placeholder} textFillColor={'#A0AEC0'} fontSize={props.fontSize}  {...props} />
        <FormErrorMessage>{error?.message}</FormErrorMessage>
      </InputGroup>
    </FormControl>
  );
};

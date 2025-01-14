import {
  FormLabel,
  Select,
  SelectProps,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

export type OptionType = { label: string; value: string | number }[];

interface ISelect extends SelectProps {
  options:
    | OptionType
    | Array<{ label: string; value: string; }>;
  label?: string;
  error?: FieldError | { message?: string };
  placeholderSelect?: string;
}

export const SelectPattern: React.FC<ISelect> = ({
  label,
  options,
  error,
  placeholderSelect,
  ...rest
}) => {
  return (
    <>
      {/* {label && <FormLabel>{label}</FormLabel>} */}
      <FormControl isInvalid={!!error}>
        <Select
          color="#A0AEC0"
          fontFamily={'Roboto'}
          {...rest}
        >
          <option value="">Selecione uma opção</option>
          {options.length > 0 &&
            options.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
        </Select>
        {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

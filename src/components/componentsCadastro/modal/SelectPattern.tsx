import {
  FormLabel,
  Select,
  SelectProps,
  FormErrorMessage,
  FormControl,
  forwardRef,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

export type OptionType = { label: string; value: string | number }[];

interface ISelect extends SelectProps {
  options: OptionType | Array<{ label: string; value: string }>;
  label?: string;
  error?: FieldError | { message?: string };
  placeholderSelect?: string;
}

const SelectPattern: React.FC<ISelect> = forwardRef(
  ({ label, options, error, placeholderSelect, ...rest }, ref) => {
    return (
      <>
        {/* {label && <FormLabel>{label}</FormLabel>} */}
        <FormControl isInvalid={!!error}>
          <Select
            ref={ref}
            color="#A0AEC0"
            fontFamily={'Roboto'}
            {...rest}
          >
            <option value="">{placeholderSelect || "Selecione uma opção"}</option>
            {options.length > 0 &&
              options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
          </Select>
          {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      </>
    );
  }
);

export default SelectPattern;

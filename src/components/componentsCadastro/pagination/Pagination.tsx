import { Flex, Button, Text, FlexProps } from '@chakra-ui/react';

interface IPagination extends FlexProps{
  firstDataIndex: number;
  lastDataIndex: number;
  totalPages: number;
  dataPerPage: number;
  loadLess: () => void;
  loadMore: () => void;
}
// all right, it's over here
export const Pagination: React.FC<IPagination> = ({
  totalPages,
  dataPerPage,
  loadLess,
  loadMore,
  firstDataIndex,
  lastDataIndex,
  ...props
}) => {
  return (
    <Flex justify="space-between" mt={-9} {...props}>
      <Text fontSize={'14px'} color={'#666666'} fontWeight={'medium'}>

      {totalPages ? Number(firstDataIndex) + 1 : 0} - {' '}
      {totalPages < lastDataIndex ? totalPages : lastDataIndex} de {' '}
      {totalPages} Itens
      </Text>
      <Flex p={0} color="rgba(52, 64, 84, 1)">
        <Button
          mr={2}
          fontSize="12px"
          fontWeight="none"
          bg="none"
          border="1px solid"
          borderColor="rgba(208, 213, 221, 1)"
          borderRadius="8px"
          color="#344054"
          onClick={loadLess}
          disabled={firstDataIndex <= 1} // Desabilita se estiver na primeira página
        >
          Anterior
        </Button>
        <Button
          ml={2}
          fontSize="12px"
          fontWeight="none"
          bg="none"
          border="1px solid"
          borderColor="rgba(208, 213, 221, 1)"
          color="rgba(52, 64, 84, 1)"
          borderRadius="8px"
          onClick={loadMore}
          disabled={lastDataIndex >= totalPages} // Desabilita se estiver na última página
        >
          Próximo
        </Button>
      </Flex>
    </Flex>
  );
};

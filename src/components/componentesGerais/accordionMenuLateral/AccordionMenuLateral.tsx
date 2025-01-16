import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Flex,
  AccordionIcon,
  AccordionPanel,
  Center,
  Text,
  Icon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { IconeLogOut } from '../iconesMenuLateral/iconeMenulateralLogout';
import { useAuth } from '../../../context/AuthProvider/useAuth';

interface IAccordionMenu {
  isOpen?: boolean;
  nameLabels: string[]; // Array que contém tanto os principais quanto secundários
  nameLabelSecundarys: (string[] | null)[]; // Array de arrays de labels secundárias ou null
  customIcons: React.ReactNode[]; // Array de ícones personalizados
  displayCustom?: any; // Display deve estar importado corretamente
  handleToggle?: () => void;
  handleClick?: Array<(() => void) | (() => void)[]>; // Funções de clique
}

export const AccordionMenuLateral: React.FC<IAccordionMenu> = props => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <Flex
      w={'100%'}
      pl={4}
      pr={4}
      align={'center'}
      justify={'center'}
      flexDirection={'column'}
    >
      <Accordion allowToggle color="white" w="100%">
        {props.nameLabels.map((label, index) => (
          <AccordionItem border="none" key={index} onClick={() => {
            // Verifica se não tem subitens
            if (!props.nameLabelSecundarys[index] || !Array.isArray(props.nameLabelSecundarys[index])) {
              // Verifica se a função handleClick é um array
              if (Array.isArray(props.handleClick?.[index])) {
                (props.handleClick?.[index] as (() => void)[])[0]?.(); // Chama a função do item principal
              } else {
                props.handleClick?.[index]?.(); // Chama a função do item principal
              }
            }
            props.handleToggle
          }}>
            <h2>
              <AccordionButton
                //pr={6}
                _hover={{
                  bgColor: 'rgba(0, 0, 0, 0.24)',
                  cursor: 'pointer',
                  transition: '.5s',
                  borderRadius: '10px',
                }}
              >
                <Flex align="center" as="span" flex="1" fontSize="1em" >
                  {/* Ícone do array customIcons correspondente */}
                  {props.customIcons[index]}{' '}
                  <Text
                    pl={6}
                    fontSize="0.9rem"
                    display={props.displayCustom}
                  >
                    {label}
                  </Text>
                  {
                  !props.nameLabelSecundarys[index] || !Array.isArray(props.nameLabelSecundarys[index]) ? (
                    <AccordionIcon display={'none'} />
                  ) : (
                    <AccordionIcon display={props.displayCustom} />
                  )
                }
                </Flex>
              </AccordionButton>
            </h2>
            {/* Verifica se existem subitens antes de renderizar o AccordionPanel */}
            {props.nameLabelSecundarys[index] &&
              Array.isArray(props.nameLabelSecundarys[index]) &&
              props.nameLabelSecundarys[index]?.length > 0 && (
                props.nameLabelSecundarys[index]?.map((secondaryLabel, subIndex) => (
                  <AccordionPanel
                    key={subIndex}
                    width="100%"
                    display={props.displayCustom}
                    onClick={() => {
                      // Verifica se handleClick é um array e chama a função do subitem
                      if (Array.isArray(props.handleClick?.[index])) {
                        const subItemFunction = (props.handleClick?.[index] as (() => void)[])[subIndex];
                        if (subItemFunction) {
                          subItemFunction(); // Chama a função associada ao subitem
                        }
                      }
                    }}
                    color="white"
                    _hover={{
                      bgColor: 'rgba(0, 0, 0, 0.24)',
                      cursor: 'pointer',
                      transition: '.9s',
                      borderRadius: '10px',
                    }}
                  >
                    <Center
                      pt={2}
                      fontSize="0.9rem"
                      justifyContent={'center'}
                    >
                      {secondaryLabel}
                    </Center>
                  </AccordionPanel>
                ))
              )}
          </AccordionItem>
        ))}
      </Accordion>

      <Flex
        height="4vh"
        w={'100%'}
        gap={6}
        pl={4}
        mt={2}
        onClick={() => {
          logout();
          navigate('/');
        }}
        _hover={{
          bgColor: 'rgba(0, 0, 0, 0.24)',
          cursor: 'pointer',
          transition: '.9s',
          borderRadius: '10px',
        }}
        align={'center'}
      >
        <IconeLogOut isOpen={undefined}/>
        <Text
          display={{
            lg: props.isOpen ? 'block' : 'none',
            md: props.isOpen ? 'block' : 'none',
            sm: props.isOpen ? 'block' : 'none',
          }}
          fontSize="0.9rem"
        >
          Sair
        </Text>
      </Flex>
    </Flex>
  );
};

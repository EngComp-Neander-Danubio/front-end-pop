
import { Card, CardHeader, Divider, CardBody, CardFooter, Text, Flex, Button } from '@chakra-ui/react'
interface ICards {
  title: string;
  body: string;
  reference?: string;
    system?: string;
    assunto?: string;
    descriptionAdd?: string;
    pdfFilePath?: File,
    createdBy?: string,
    sectorContactName?: string,
    sectorContactEmail?: string,
    sectorContactPhone?: string,
    keywords?: string[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export const CardTutorial: React.FC<ICards> = ({
  title, createdAt, createdBy, keywords,descriptionAdd ,body}) => {
  return (
    <>
    {/* 439DEE 1E78E9 */}
            {/* F6FF4E  D8DA44*/}
    <Card
    w={'100%'}
    border="1px solid rgba(0, 0, 0, 0.2)"
    boxShadow="4px 4px 4px -2px rgba(0, 0, 0, 0.25)"
        >
    <CardHeader h={'22px'}>
      <Flex flexDirection={'row'}
      w={'100%'}
      justifyContent={'space-between'} >
          <Text size='sm'
          fontSize={'18px'}
          fontWeight={'medium'}
          //color={"#7D7D7D"}
          color={'#666'}
          > {title}</Text>
          <Text size='sm'
          fontSize={'18px'}
          fontWeight={'medium'}
          //color={"#7D7D7D"}
          color={'#666'}
          > SEGEP</Text>
      </Flex>
    </CardHeader>
    <CardBody h={'72px'}>
    <Flex flexDirection={'row'}
        justifyContent={'space-between'}
        w={'100%'} fontSize={'12px'}
        gap={2}
        mb={-10}
   // border={'1px solid'}
    >
      {/* <Text >{body}</Text> */}
        <Flex color={'#A0AEC0'}>
          {body}
         </Flex>

        <Text color={'#666'} ml={'auto'}>
        Criado em : {createdAt?.toISOString()}: OPM: {createdBy ? createdBy : `Não definida`}
        </Text>
      </Flex>
    </CardBody>
    <Divider color={'#DCDCDC'}/>
    <CardFooter h={'72px'}>
      <Flex flexDirection={'row'}
      justifyContent={'space-between'}
      align={'center'}
      w={'100%'} fontSize={'12px'}
       gap={2}>
        <Flex>
          Tipo de Treinamento: Vídeo/Documento/Link
        </Flex>
        <Flex color={'#A0AEC0'}>
          Palavras-chave: {keywords ? keywords?.map((item,index) => (
            <Text key={index}>
              {item}
            </Text>
          )): (
            <Text> Sem palavras-chave</Text>
          )}
        </Flex>
        <Button color={'#fff'} ml={'auto'} backgroundColor={'green'} fontSize={'12px'}>
          Clique aqui
        </Button>
      </Flex>
    </CardFooter>
  </Card>
    </>
  )
}

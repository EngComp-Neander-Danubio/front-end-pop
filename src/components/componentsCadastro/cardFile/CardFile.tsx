import { Card, CardHeader, CardBody, CardFooter, Button, Heading, Stack,Text } from '@chakra-ui/react'
import { FaVideo } from 'react-icons/fa'

export const CardFile = () => {
  return (
    <>
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <FaVideo color="#3182CE" />
        <Stack>
          <CardBody boxSize={'fit-content'}>

            <Text py='2'>
              Caffè
            </Text>
          </CardBody>

          <CardFooter>

          </CardFooter>
        </Stack>
    </Card>
    </>
  )
}

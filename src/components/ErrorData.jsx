import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ErrorData = () => {
  const navigate = useNavigate()
  return (
    <Card align='center'>
      <CardHeader>
        <Heading size='md'>Sorry Resource Not Found..!</Heading>
      </CardHeader>
      <CardBody>
        <Text>Descriptive error message should be here.</Text>
      </CardBody>
      <CardFooter>
        <Button onClick={() => navigate('/')} colorScheme='blue'>Go Back</Button>
      </CardFooter>
    </Card>
  )
}

export default ErrorData
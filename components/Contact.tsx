import { Button, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const Contact = forwardRef<HTMLDivElement>((props, ref) => (
  <VStack alignContent="center" ref={ref}>
    <Heading>04. Contact</Heading>
    <Text>You want a word with me? Feel free to write!</Text>
    <Link href="mailto:boris.chernystrand@gmail.com" isExternal>
      <Button>Write</Button>
    </Link>
  </VStack>
))

Contact.displayName = 'Contact'

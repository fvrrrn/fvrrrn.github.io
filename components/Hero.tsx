import {
  Heading, Stack, Text
} from '@chakra-ui/react'
import { forwardRef } from 'react'

export const Hero = forwardRef<HTMLDivElement>((props, ref) => (
  <Stack  py={{ base: 20 }} ref={ref}>
    <Text fontSize="2xl">Hi🌻 my name is</Text>
    <Stack >
      <Heading
        fontWeight={700}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight='110%'>
        Boris Chernyshov.
      </Heading>
      <Heading
        fontWeight={700}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight='110%'>
        I build things for the web.
      </Heading>
    </Stack>
    <Text color='gray.600' w='50%' fontSize="lg" py="4">
      I’m a software engineer specializing in building (and occasionally designing) exceptional
      digital experiences. I consider myself not as a digital craftsman but as an artist.
    </Text>
  </Stack>
))

Hero.displayName = "Hero"


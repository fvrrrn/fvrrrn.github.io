import {
  Box,
  Divider,
  Heading,
  HStack,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Img
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import myImage from '../public/normvarik3.jpg'

export const About = forwardRef<HTMLDivElement>((props, ref) => (
  <Box ref={ref}>
    <HStack alignItems="center">
      <Heading>About</Heading>
      <Divider />
    </HStack>
    <HStack alignItems="flex-start" spacing="24">
      <VStack alignItems="flex-start">
        <Text>
          Hello! My name is Boris and I enjoy creating things that live on the internet. My interest
          in web development started back in 2016 when I decided to try editing custom Tumblr themes
          — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!
        </Text>
        <Text py="2">
          Fast-forward to today, and I’ve had the privilege of working at my{' '}
          <NextLink href="https://uni-dubna.ru" passHref>
            <Link textColor="blue.400">uni</Link>
          </NextLink>
          , a small{' '}
          <NextLink href="https://td-media.ru" passHref>
            <Link textColor="blue.400">start-up company</Link>
          </NextLink>
          ,{' '}
          <NextLink href="https://epam.com" passHref>
            <Link textColor="blue.400">huge corporation</Link>
          </NextLink>
          , and a{' '}
          <NextLink href="https://sbertech.ru/" passHref>
            <Link textColor="blue.400">bank</Link>
          </NextLink>
          . My main focus these days is building accessible, inclusive products and digital
          experiences for a variety of clients.
        </Text>
        <Text>Here are a few technologies I’ve been working with recently:</Text>
        <HStack spacing="16" alignItems="flex-start">
          <UnorderedList>
            <ListItem>JavaScript</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>ReactJS</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>NextJS</ListItem>
            <ListItem>NodeJS</ListItem>
            <ListItem>NestJS</ListItem>
          </UnorderedList>
        </HStack>
      </VStack>
      <Img src="normvarik3.jpg" alt="me" boxSize="96" borderRadius="sm"  />
    </HStack>
  </Box>
))

About.displayName = 'About'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, IconButton, Tag, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { forwardRef } from 'react'
import paintImage from '../public/paint.png'
import musaImage from '../public/Rectangle-1.png'

export const Projects = forwardRef<HTMLDivElement>((props, ref) => (
  <Box minW="full" ref={ref}>
    <Heading>03. Some things I&apos;ve made</Heading>
    <HStack>
      <Image src={musaImage} alt="Musa" />
      <VStack alignItems="flex-end">
        <Text>Musa</Text>
        <Box bg="gray.500" rounded="2xl" p="4">
          <Text textAlign="right">
            Progressive Web Application that me and Artyom had made when we were getting our
            bachelors. Musa aims to aid and ease musicians to compose, learn, write and expand their
            work. Currently under development.
          </Text>
        </Box>
        <HStack>
          <Tag>JavaScript</Tag>
          <Tag>TypeScript</Tag>
          <Tag>ReactJS</Tag>
          <Tag>PWA</Tag>
          <Tag>Docker</Tag>
          <Tag>Github CI/CD</Tag>
        </HStack>
        <HStack>
          <IconButton aria-label="Search database" icon={<ExternalLinkIcon />} />
        </HStack>
      </VStack>
    </HStack>
    <HStack>
      <Image src={paintImage} alt="Paint" />
      <VStack alignItems="flex-end">
        <Text>Paint</Text>
        <Box bg="gray.500" rounded="2xl" p="4">
          <Text textAlign="right">
            Web version of a simple drawing tool that was made throughout the patterns &amp;
            programming principles course at uni. Check it out here.
          </Text>
        </Box>
        <HStack>
          <Tag>JavaScript</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Webpack</Tag>
        </HStack>
        <HStack>
          <IconButton aria-label="Search database" icon={<ExternalLinkIcon />} />
        </HStack>
      </VStack>
    </HStack>
  </Box>
))

Projects.displayName = 'Projects'

import { CheckIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Text,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  VStack,
  Fade,
  UnorderedList,
  Box
} from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'

export type WorkDescriptionProps = {
  position: string
  company?: string
  deeds?: string[]
}

export const WorkDescription: FC<WorkDescriptionProps> = ({ position, company, deeds }) => (
  <VStack alignItems="flex-start">
    <HStack>
      <Text>{position}</Text>
      <NextLink href="https://td-media.ru" passHref>
        <Link textColor="blue.400">@ {company}</Link>
      </NextLink>
    </HStack>
    <Box>
      <UnorderedList spacing={3}>
        {deeds?.map((deed, index) => (
          <ListItem key={index}>{deed}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  </VStack>
)

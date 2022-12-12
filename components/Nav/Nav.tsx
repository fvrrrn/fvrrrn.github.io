import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box, Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent, DrawerOverlay, Flex, HStack, IconButton, Link, Slide, Text, useBreakpointValue, useColorMode, useColorModeValue, useDisclosure, VStack
} from '@chakra-ui/react'
import { ReactNode, useRef } from 'react'
import { useScrollDirection, useScrolledToPosition } from '../../hooks'

const Links = ['01. About', '02. Work', '03. Projects', '04. Contact']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    href={'#'}>
    {children}
  </Link>
)

export const Nav = () => {
  const btnRef = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const scrollDirection = useScrollDirection({ initialDirection: 'down' })
  const scrolledToTop = useScrolledToPosition(50)
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Slide direction="top" in={scrolledToTop || scrollDirection === 'up'} >
      <Box
        as="nav"
        height="60px"
        filter="none"
        width="100%"
        backdropFilter="blur(10px)"
        // boxShadow={!scrolledToTop ?  '0 10px 30px -10px rgba(2,12,27,0.7)' : 'unset'}
      >
        <Flex
          color={useColorModeValue('gray.600', 'white')}
          height="60px"
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          justifyContent={'space-between'}>
          <Flex flexGrow={1} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              onClick={toggleColorMode}
              variant="ghost"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              aria-label={'Toggle color theme'}
            />

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </Flex>
          </Flex>

          <Flex ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onOpen}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              ref={btnRef}
            />
          </Flex>
        </Flex>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <VStack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </VStack>
            </DrawerBody>

            {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </Box>
    </Slide>
  )
}

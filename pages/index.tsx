import { Box, Container, Fade, Flex, SlideFade, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import { About, Contact, Hero, Nav, Projects, Work } from '../components'
import { useIsInViewport } from '../hooks'

const Index: NextPage = () => {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const isWorkInViewport = useIsInViewport(workRef)
  const isHeroInViewport = useIsInViewport(heroRef)
  const isAboutInViewport = useIsInViewport(aboutRef)
  const isProjectsInViewport = useIsInViewport(projectsRef)
  const isContactInViewport = useIsInViewport(contactRef)

  return (
    <Flex direction="column">
      <Head>
        <title>Boris Chernyshov | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <Container maxW={'5xl'} py="28">
          <Box minH="100vh">
            <Fade in={isHeroInViewport}>
              <Hero ref={heroRef} />
            </Fade>
          </Box>
          <VStack spacing="20vh">
            <SlideFade in={isAboutInViewport} offsetY="20px">
              <About ref={aboutRef} />
            </SlideFade>
            <Container maxWidth="80%" >
              <Fade in={isWorkInViewport}>
                <Work ref={workRef}/>
              </Fade>
            </Container>
            <Fade in={isProjectsInViewport}>
              <Projects ref={projectsRef} />
            </Fade>
          </VStack>
          <Fade in={isContactInViewport}>
            <Contact ref={contactRef} />
          </Fade>
        </Container>
      </main>

      <footer>
        <Container>
          <Box>© 2022 Boris Chernyshov. All rights reserved.</Box>
        </Container>
      </footer>
    </Flex>
  )
}

export default Index
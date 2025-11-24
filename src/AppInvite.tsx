import * as ui from '@chakra-ui/react'
import './App.css'
import { Palette } from './styles'
import ThanksGallery from './components/ThanksGallery'
import { ThanksIntro } from './components/ThanksIntro'
import { ThanksTitle } from './components/ThanksTitle'

function AppThanks() {
  const topHeight = 78;

  return (
    <ui.Grid
      w='full'
      h='100vh'
      justifyContent={'center'}
      templateAreas={`'header'
      'body'`}
      templateRows={`${topHeight}px 1fr`}
      color={Palette.CONTENT_COLOR}
    >
      <ui.Box
        position={'fixed'}
        top={0}
        left={0}
        w='100vw'
        h='100vh'
        zIndex={-2}
        bg={Palette.CONTENT_BG}
      />
      {/* <ui.Image
        position={'fixed'}
        top={0}
        left={0}
        src={'/ok/thanks/0.JPEG'}
        w='100vw'
        h='100vh'
        objectFit={'cover'}
        opacity={0.4}
        zIndex={-1}
      /> */}
      <ui.Box
        position={'fixed'}
        top={0}
        left={0}
        w='100vw'
        h='100vh'
        background={Palette.THEME.EdgeDark}
        opacity={0.4}
        zIndex={-1}
      />
      <ui.GridItem
        area='header'
        w='100vw'
      >
        <ThanksTitle />
      </ui.GridItem>
      <ui.GridItem
        w='100vw'
        h='full'
        minH={`calc(100vh - ${topHeight}px)`}
        area='body'
        overflowY={'auto'}
      >
        <ui.Flex
          h='full'
          justifyContent={'center'}
          mt={5}
        >
          <ui.Box w='95%' h='full'>
            <ui.VStack gap={'80px'} pb={5}>

              <ThanksIntro />
              {/* <ThanksGallery /> */}

              {/* <ui.Box w='full' h='10px' position={'relative'} /> */}
            </ui.VStack>
          </ui.Box>
        </ui.Flex>
      </ui.GridItem>

    </ui.Grid>
  )
}

export default AppThanks

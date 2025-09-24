import * as ui from '@chakra-ui/react'
import './App.css'
import { Map } from './components/Map'
import { Contact } from './components/Contact'
import Gallery from './components/Gallery'
import React from 'react'
import { Intro } from './components/Intro'
import { SubTitleText } from './components/SubTitleText'
import { Palette } from './styles'

function App() {
  const titleRef = React.useRef<HTMLDivElement>(null);

  return (
    <ui.Grid
      w='100vw'
      h='100vh'
      justifyContent={'center'}
      templateAreas={`'header'
      'gap'
      'body'`}
      templateRows={'150px 20px 1fr'}
      bg={Palette.BASE.White}
      color={Palette.BASE.Black}
    >
      <ui.Image
        position={'fixed'}
        top={0}
        left={0}
        src={'/ok/album/0.png'}
        w='100vw'
        h='100vh'
        objectFit={'cover'}
        opacity={0.3}
        zIndex={0}
      />
      <ui.GridItem
        area='header'
        w='full'
        zIndex={1}
      >
        <ui.Flex justifyItems={'center'} w='full' h='full'
          alignItems={'center'}
          justifyContent={'center'}
          // bg={Palette.BASE.Gray01}
          borderBottom={`1px solid ${Palette.BASE.Gray08}`}
        >
          {/* Title */}
          <ui.Text
            fontSize={'4vw'}
            fontWeight={'semibold'}
            textAlign={'center'}
          >사랑하는 어머니,<br /> 심순옥 여사님의 70번째 생신을 축하해 주세요.</ui.Text>
        </ui.Flex>
      </ui.GridItem>
      <ui.GridItem area='body' w='full'
      >
        <ui.Flex
          h='full'
          justifyContent={'center'}
        >
          <ui.Box w='95%' h='full'>
            <ui.VStack gap={50}>
              <ui.Box h='auto' w='full' ref={titleRef}>
                <ui.Flex
                  w='full' h='auto'
                  justifyItems={'center'}
                  alignItems={'center'}
                  justifyContent={'flex-end'}
                >
                  {/* Title */}
                  <ui.Text
                    fontSize={'2.5vw'}
                    textAlign={'right'}
                  >2025년 10월 11일<br />12시 20분</ui.Text>
                </ui.Flex>
              </ui.Box>

              <Intro />

              <ui.Flex justifyItems={'center'} w='full' h='10dvh'
                alignItems={'center'}
                justifyContent={'center'}
                direction={'column'}
                zIndex={1}
              >
                {/* 오시는 길 */}
                <SubTitleText text='오시는 길' />
                <ui.Flex>
                  <ui.Text>경기 의왕시 백운안길 61</ui.Text>
                </ui.Flex>
                <ui.Flex>
                  <ui.Text>경기 의왕시 학의동 874-1</ui.Text>
                </ui.Flex>
              </ui.Flex>
              <Map />

              <ui.Flex w='full' h='20dvh'
                justifyItems={'center'}
                alignItems={'center'}
                justifyContent={'center'}
                borderWidth={1}
                borderColor={'white'}
                borderRadius={'30px'}
                zIndex={1}
              >
                {/* 연락처 */}
                <Contact />
              </ui.Flex>

              <ui.Flex justifyItems={'center'} w='full' h='auto'
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Gallery />
                {/* 갤러리 */}
                {/* <ui.Text>//TODO::갤러리 (엄마, 아빠 사진?)</ui.Text> */}
              </ui.Flex>
              <ui.Box h='30px' />
            </ui.VStack>
          </ui.Box>
        </ui.Flex>
      </ui.GridItem>

    </ui.Grid>
  )
}

export default App

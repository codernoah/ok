import * as ui from '@chakra-ui/react'
import './App.css'
import { Map } from './components/Map'
import { Contact } from './components/Contact'
import Gallery from './components/Gallery'
import React from 'react'

function App() {
  const titleRef = React.useRef<HTMLDivElement>(null);

  return (
    <ui.Grid
      w='100vw'
      h='100vh'
      justifyContent={'center'}
      templateAreas={`'header'
      'body'`}
      templateRows={'15vh 1fr'}
    >
      <ui.Image
        position={'fixed'}
        top={0}
        left={0}
        src={'/ok/album/0.png'}
        w='100vw'
        h='100vh'
        opacity={0.6}
        zIndex={-1}
      />
      <ui.GridItem
        area='header'
        w='full'
      >
        <ui.Flex justifyItems={'center'} w='full' h='full'
          alignItems={'center'}
          justifyContent={'center'}
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
            <ui.VStack gap={15}>
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
                  >일시: 2025년 10월 11일<br />시간: 12시 20분<br />장소: 백운원<br />경기 의왕시 백운안길 61</ui.Text>
                </ui.Flex>
              </ui.Box>
              <ui.Flex justifyItems={'center'} w='full'
                h={`calc(100vh - ${titleRef.current?.clientHeight}px)`}
                alignItems={'flex-end'}
                justifyContent={'flex-end'}
                borderWidth={1}
                borderColor={'white'}
              >
                {/* Intro */}
                {/* <ui.Text>//TODO::인트로 (맨트 + 가족 사진?)</ui.Text> */}
                <ui.Text>
                  늘 우리보다 앞서 걷던 어머니,<br />
                  우리의 길을 먼저 밟고 서 계셨죠.<br /><br />

                  넘어질까 두려울 땐 한 발 앞서<br />
                  아플 땐 넓은 품으로 안아주셨고<br />
                  차가운 바람에도 모든 짐을 지고<br />
                  우리의 등대가 되어 그 자리에 계셨죠.<br /><br />

                  이제는 우리가 어머니의 뒤를 따라<br />
                  당신의 앞에서 길을 이끌려 합니다.<br /><br />

                  환하게 웃는 어머니의 얼굴이<br />
                  우리의 새로운 길이 될 수 있도록.
                </ui.Text>
              </ui.Flex>

              <ui.Flex justifyItems={'center'} w='full' h='10dvh'
                alignItems={'center'}
                justifyContent={'center'}
                borderWidth={1}
                borderColor={'white'}
                direction={'column'}
              >
                {/* 오시는 길 */}
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

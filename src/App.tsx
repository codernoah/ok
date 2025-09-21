import * as ui from '@chakra-ui/react'
import './App.css'
import { Map } from './components/Map'
import { Contact } from './components/Contact'

function App() {

  return (
    <ui.Flex w='100dvw' h='100dvh'
      justifyContent={'center'}
    >
      <ui.Box w='80dvw'>
        <ui.VStack overflowY={'auto'} gap={15}>
          <ui.Flex justifyItems={'center'} w='full' h='15dvh'
            alignItems={'center'}
            justifyContent={'center'}
          >
            {/* Title */}
            <ui.Text>//TODO::타이틀(사랑하는 어머니, 심순옥 여사님의 70번째 생신을 축하해 주세요.)</ui.Text>
          </ui.Flex>
          <ui.Flex
            w='full' h='auto'
            justifyItems={'center'}
            alignItems={'center'}
            justifyContent={'flex-end'}
          >
            {/* Title */}
            <ui.Text>장소: 백운원<br/>경기 의왕시 백운안길 61</ui.Text>
          </ui.Flex>
          <ui.Flex justifyItems={'center'} w='full' h='80dvh'
            alignItems={'center'}
            justifyContent={'center'}
            borderWidth={1}
            borderColor={'white'}
          >
            {/* Intro */}
            <ui.Text>//TODO::인트로 (맨트 + 가족 사진?)</ui.Text>
          </ui.Flex>
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
          <ui.Flex justifyItems={'center'} w='full' h='80dvh'
            alignItems={'center'}
            justifyContent={'center'}
            borderWidth={1}
            borderColor={'white'}
          >
            {/* 갤러리 */}
            <ui.Text>//TODO::갤러리 (엄마, 아빠 사진?)</ui.Text>
          </ui.Flex>

          <ui.Flex justifyItems={'center'} w='full' h='10dvh'
            alignItems={'center'}
            justifyContent={'center'}
            borderWidth={1}
            borderColor={'white'}
          >
            {/* 오시는 길 */}
            <ui.Text>//TODO::오시는 길<br />
              경기 의왕시 백운안길 61<br />
              경기 의왕시 학의동 874-1</ui.Text>
          </ui.Flex>
          <Map />
          <ui.Box h='30px' />
        </ui.VStack>
      </ui.Box>
    </ui.Flex>
  )
}

export default App

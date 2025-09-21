import * as ui from '@chakra-ui/react'
import './App.css'
import { Map } from './Map'

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
            <ui.Grid
              w='full' h='full'
              templateAreas={`
            'title title'
            'father mother'
            'misa mingu'
            `}
              templateRows={'50px 1fr 1fr'}
              templateColumns={'1fr 1fr'}
              gap={1}
              justifyItems={'center'}
              alignItems={'center'}
            >
              <ui.GridItem area='title'>
                <ui.Text>//TODO::연락처</ui.Text>
              </ui.GridItem>
              <ui.GridItem area='father'>
                <ui.Flex>
                  <ui.Text>남편:김준일</ui.Text>
                </ui.Flex>
              </ui.GridItem>
              <ui.GridItem area='mother'>
                <ui.Flex>
                  <ui.Text>심순옥</ui.Text>
                </ui.Flex>
              </ui.GridItem>
              <ui.GridItem area='misa'>
                <ui.Flex>
                  <ui.Text>장녀:김미사</ui.Text>
                </ui.Flex>
              </ui.GridItem>
              <ui.GridItem area='mingu'>
                <ui.Flex>
                  <ui.Text>장남:김민구</ui.Text>
                </ui.Flex>
              </ui.GridItem>
            </ui.Grid>
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
            <ui.Text>//TODO::오시는 길</ui.Text>
          </ui.Flex>
          <Map />
        </ui.VStack>
      </ui.Box>
    </ui.Flex>
  )
}

export default App

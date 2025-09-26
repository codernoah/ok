import * as ui from '@chakra-ui/react'
import './App.css'
import { Map } from './components/Map'
import { Contact } from './components/Contact'
import Gallery from './components/Gallery'
import { Intro } from './components/Intro'
import { SubTitleText } from './components/SubTitleText'
import { Title } from './components/Title'
import { Palette } from './styles'

function App() {
  // const titleRef = React.useRef<HTMLDivElement>(null);

  const topHeight = 78;

  return (
    <ui.Grid
      w='full'
      h='100vh'
      justifyContent={'center'}
      templateAreas={`'header'
      'body'`}
      templateRows={`${topHeight}px 1fr`}
      // bg={Palette.BASE.White}
      // color={Palette.BASE.Black}
      color={Palette.BASE.Gray08}
    // textShadow={`0px 0px 0.5px ${Palette.BASE.Gray11}`}
    >
      <ui.Box
        position={'fixed'}
        top={0}
        left={0}
        w='100vw'
        h='100vh'
        zIndex={-2}
        bg={Palette.BASE.Gray01}
      />
      <ui.Image
        position={'fixed'}
        top={0}
        left={0}
        src={'/ok/album/0.JPEG'}
        w='100vw'
        h='100vh'
        objectFit={'cover'}
        opacity={0.35}
        zIndex={-1}
      />
      <ui.GridItem
        area='header'
        w='full'
      >
        <Title />
      </ui.GridItem>
      <ui.GridItem
        w='full'
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
            <ui.VStack gap={'80px'}>
              <SubTitleText text='일시' />
              <ui.Box mt={'-80px'}>
                <ui.Text
                  px={'20px'}
                  fontWeight={'semibold'}
                  fontSize={'17px'}
                  textAlign={'center'}
                  textShadow={`0px 0px 0.5px ${Palette.BASE.Gray11}`}
                >2025년 10월 11일 낮 12시 20분</ui.Text>
              </ui.Box>

              <Intro />

              <ui.Flex w='full' h='20vh'
                justifyItems={'center'}
                alignItems={'center'}
                justifyContent={'center'}
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

              <ui.Flex justifyItems={'center'} w='full' h='10dvh'
                alignItems={'center'}
                justifyContent={'center'}
                direction={'column'}
              >
                {/* 오시는 길 */}
                <SubTitleText text='오시는 길' />
                <ui.Flex
                  textShadow={`0px 0px 0.5px ${Palette.BASE.Gray11}`}
                >
                  <ui.Text>도로명 주소: 경기 의왕시 백운안길 61</ui.Text>
                </ui.Flex>
                <ui.Flex
                  textShadow={`0px 0px 0.5px ${Palette.BASE.Gray11}`}
                >
                  <ui.Text>지번 주소: 경기 의왕시 학의동 874-1</ui.Text>
                </ui.Flex>
              </ui.Flex>

              <Map />

              <ui.Box w='full' h='10px' position={'relative'}>
                {/* <ui.Image src='/ok/deco.svg'
                  position={'absolute'}
                  bottom={'0px'}
                  left={'-2.5%'}
                  boxSize={'45px'}
                />
                <ui.Image src='/ok/deco.svg'
                  position={'absolute'}
                  bottom={'0px'}
                  right={'-2.5%'}
                  boxSize={'45px'}
                  transform={'rotate(-90deg)'}
                /> */}
              </ui.Box>
            </ui.VStack>
          </ui.Box>
        </ui.Flex>
      </ui.GridItem>

    </ui.Grid>
  )
}

export default App

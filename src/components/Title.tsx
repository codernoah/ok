import { Palette } from '@/styles';
import * as ui from '@chakra-ui/react';

export const Title = () => {
  return (
    <ui.Flex justifyItems={'center'} w='full' h='full'
      alignItems={'center'}
      justifyContent={'center'}
      // border={`1px solid ${Palette.THEME.TabFontDark}`}
      borderBottom={`1px solid ${Palette.THEME.EdgeDark}`}
      bg={Palette.BASE.Gray10}
      // bg={Palette.THEME.TabBgDark}
      // color={Palette.THEME.TabFontDark}
      roundedBottom={'2px'}
      position='relative'
    >
      {/* <ui.Image src='/ok/deco.svg'
        position={'absolute'}
        top={'0px'}
        left={'0px'}
        boxSize={'45px'}
        transform={'rotate(90deg)'}
      />
      <ui.Image src='/ok/deco.svg'
        position={'absolute'}
        top={'0px'}
        right={'0px'}
        boxSize={'45px'}
        transform={'rotate(-180deg)'}
      /> */}
      {/* Title */}
      <ui.Box>
        <ui.Text
          fontSize={'18px'}
          fontWeight={'medium'}
          textAlign={'center'}
          mb={3}
        >사랑하는 어머니,<br /> 심순옥 여사님의 70번째 생신을 축하해 주세요.</ui.Text>
        {/* <ui.Text
          fontSize={'13px'}
          fontWeight={'medium'}
          textAlign={'end'}
        >2025년 10월 11일 낮 12시 20분, 백운원
        </ui.Text> */}
      </ui.Box>
    </ui.Flex>
  )
}

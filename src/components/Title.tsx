import { Palette } from '@/styles';
import * as ui from '@chakra-ui/react';

export const Title = () => {
  return (
    <ui.Flex justifyItems={'center'} w='full' h='full'
      alignItems={'center'}
      justifyContent={'center'}
      // bg={Palette.BASE.Gray01}
      border={`1px solid ${Palette.THEME.TabFontDark}`}
      bg={Palette.THEME.TabBgDark}
      color={Palette.THEME.TabFontDark}
      roundedBottom={'2px'}
      position='relative'
    >
      <ui.Image src='/ok/deco.svg'
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
      />
      {/* Title */}
      <ui.Text
        fontSize={'20px'}
        fontWeight={'semibold'}
        textAlign={'center'}
        style={{
          color: 'white',
          mixBlendMode: 'hard-light',
        }}
        filter={`drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.85))`}
      >사랑하는 어머니,<br /> 심순옥 여사님의 70번째 생신을 축하해 주세요.</ui.Text>
    </ui.Flex>
  )
}

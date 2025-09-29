import { Palette } from '@/styles';
import * as ui from '@chakra-ui/react';

export interface SubTitleTextProps {
  text: string
}

export function SubTitleText({ text }: SubTitleTextProps) {
  return (
    <ui.Box minW={'20vw'}
      rounded={'20px'}
      // border={`1px solid ${Palette.THEME.EdgeLight}`}
      // mb={6}
      // boxShadow='inset 0px 4px 6px rgba(0, 0, 0, 0.15)'

      border='1px solid #FE9855'
      boxShadow={`0px 0px 2px ${Palette.THEME['Red']}`}
      // textShadow={'unset'}
      // mb={6}
      bg={`${Palette.CONTENT_BG}FF`}
      color={Palette.SUBTITLE_COLOR}
      fontWeight={700}
      borderBottom={'3px solid #C8AA6'}
      display='inline-block'
      padding='2px 20px 3px 20px'
      // mt='40px'
      mb='20px'
    >
      <ui.Center>
        <ui.Text
          // px={'20px'}
          fontWeight={'semibold'}
          fontSize={'20px'}
          // py={'3px'}
        >{text}</ui.Text>
      </ui.Center>
    </ui.Box>
  );
}

import { Palette } from '@/styles';
import * as ui from '@chakra-ui/react';

export interface SubTitleTextProps {
  text: string
}

export function SubTitleText({ text }: SubTitleTextProps) {
  return (
    <ui.Box minW={'20vw'}
    rounded={'20px'}
    border={`1px solid ${Palette.THEME.PointOrange}`}
    mb={6}
    >
      <ui.Center>
        <ui.Text
        px={'20px'}
          fontWeight={'semibold'}
          fontSize={'20px'}
          py={'3px'}
        >{text}</ui.Text>
      </ui.Center>
    </ui.Box>
  );
}

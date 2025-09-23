import * as ui from '@chakra-ui/react';

export interface SubTitleTextProps {
  text: string
}

export function SubTitleText({ text }: SubTitleTextProps) {
  return (
    <ui.Text
      fontWeight={'semibold'}
      fontSize={'20px'}
      py={'10px'}
    >
      {text}</ui.Text>
  );
}

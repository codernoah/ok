import { Palette } from '@/styles';
import * as ui from '@chakra-ui/react';

export const ThanksTitle = () => {
  return (
    <ui.Flex justifyItems={'center'} w='full' h='full'
      alignItems={'center'}
      justifyContent={'center'}
      textShadow={`0px 0px 0.5px ${Palette.BASE.Gray11}`}
      position='relative'
      bg={Palette.TITLE_BG}
      color={Palette.TITLE_COLOR}

      boxShadow={'0 3px 6px rgba(0, 0, 0, 0.2)'}
      borderBottom={'2px solid #C8AA6A'}
    >
      <ui.Box>
        <ui.Text
          fontSize={'24px'}
          fontWeight={'medium'}
          textAlign={'center'}
        >❤️ 진심으로 감사드립니다 ❤️️</ui.Text>
      </ui.Box>
    </ui.Flex>
  )
}

import * as ui from '@chakra-ui/react';
import { Palette } from '@/styles';

export const ThanksIntro = () => {

  return (
    <ui.VStack
      justifyItems={'center'}
      w='full'
      h='auto'
      position='relative'
    >
      <ui.VStack textAlign={'center'} gap={10} lineHeight={2.5}
        textShadow={`0px 0px 0.5px ${Palette.BASE.Gray05}`}
        w='full'
      >
        <ui.Text
          fontWeight={'semibold'}
          fontSize={'20px'}
          bg='#EFEBE686'
          border='4px double #00000080'
          rounded={'16px'}
          py='20px'
          w='full'>
          어머니 칠순을 맞아 바쁘신 와중에<br />귀한 걸음 해 주셔서 감사합니다.<br /><br />
          늘 형제분들을 향한<br />어머니의 깊은 사랑을 알기에<br />모두 함께 뵙고 싶은 마음으로<br />조촐한 식사 자리를 마련하게 되었습니다.<br /><br />
          가족이 화목하게 함께 식사하며<br /> 편안하게 즐겨 주시길 바랬는데<br /><br /> 오늘 웃음 가득한 행복한 시간으로<br /> 이 자리를 빛내 주셔서 정말 감사드립니다.<br /><br />
          부족한 점이 있었더라면 <br />조카들을 아끼시는 마음으로 <br />너그러이 이해해 주세요.<br /><br />
          다시 한번 귀한 걸음 감사합니다.<br /> 자식 일동 올림
        </ui.Text>
      </ui.VStack>
    </ui.VStack>
  );
}

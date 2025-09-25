import * as ui from '@chakra-ui/react';
import { SubTitleText } from './SubTitleText';

export const Intro = () => {

  return (
    <ui.VStack
      justifyItems={'center'}
      w='full'
      h='auto'
      position='relative'
    >
      <SubTitleText text='소중한 당신을 초대합니다.' />
      <ui.Image
        src={'/ok/album/intro.JPEG'}
        w='full'
        // h='60vh'
        objectFit={'cover'}
        rounded={30}
      />
      <ui.VStack textAlign={'center'} gap={10} lineHeight={2.5} mt='80px'>
        <ui.Text fontSize={'18px'}>언제나 저희의 길을 밝혀주시던 등대이자,<br />든든한 버팀목이셨던 어머니의 칠순을 맞이하여<br />생일상 자리를 마련했습니다.</ui.Text>
        <ui.Text fontSize={'18px'}>늘 저희보다 앞서 걸으며 <br />따뜻하게 품어주셨던<br />어머니의 크고 깊은 사랑에<br />이제는 저희가 보답하고자 합니다.</ui.Text>
        <ui.Text fontSize={'18px'}>어머니께서 걸어오신<br />아름다운 인생길에 감사와 존경을 표하며, <br />가족과 함께 기쁨을 나누는<br />소중한 시간을 보내고자 합니다.</ui.Text>
        <ui.Text fontSize={'18px'}>바쁘신 와중에도 귀한 걸음 하시어 <br />축복해 주시면 감사하겠습니다.</ui.Text>
      </ui.VStack>
      {/* <ui.Text
        fontWeight={'medium'}
        fontSize={'18px'}
        lineHeight={'40px'}
        position={'absolute'}
        top={0}
        right={10}
        color={Palette.THEME.EdgeLight}
        textAlign={'right'}
      >
        늘 우리보다 앞서 걷던 어머니,<br />
        우리의 길을 먼저 밟고 서 계셨죠.<br /><br />

        넘어질까 두려울 땐 한 발 앞서<br />
        아플 땐 넓은 품으로 안아주셨고<br />
        차가운 바람에도 모든 짐을 지고<br />
        우리의 등대가 되어 그 자리에 계셨죠.<br /><br />

        이제는 우리가 어머니의 뒤를 따라<br />
        당신의 앞에서 길을 이끌려 합니다.<br /><br />

        환하게 웃는 어머니의 얼굴이<br />
        우리의 새로운 길이 될 수 있도록.
      </ui.Text> */}
    </ui.VStack>
  );
}

import * as ui from '@chakra-ui/react';

export const Intro = () => {

  return (
    <ui.Flex justifyItems={'center'} w='full'
      h='auto'
      alignItems={'flex-end'}
      justifyContent={'flex-start'}
      // borderWidth={1}
      // borderColor={'white'}
    >
      {/* Intro */}
      {/* <ui.Text>//TODO::인트로 (맨트 + 가족 사진?)</ui.Text> */}
      <ui.Text
        fontWeight={'medium'}
        fontSize={'2vh'}
        lineHeight={'3.5vh'}
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
      </ui.Text>
    </ui.Flex>
  );
}

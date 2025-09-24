import * as ui from '@chakra-ui/react'
import { SubTitleText } from './SubTitleText';
import { FaPhone } from 'react-icons/fa6';

interface ContactItemProps {
  name: string,
  phone: string,
};

const ContactItem = ({
  name,
  phone
}: ContactItemProps) => {

  return (
    <ui.Flex gap={3}>
      <ui.Text fontSize={'20px'} fontWeight={'semibold'}>{name}</ui.Text>
      <ui.Link href={`tel:${phone}`}>
        <ui.Icon size='md'>
          <FaPhone />
        </ui.Icon>
      </ui.Link>
    </ui.Flex>
  )
};

export const Contact = () => {
  return (
    <ui.Grid
      w='full' h='full'
      templateAreas={`
            'title title'
            'father mother'
            'misa mingu'
            `}
      templateRows={'50px 1fr 1fr'}
      templateColumns={'1fr 1fr'}
      gap={1}
      justifyItems={'center'}
      alignItems={'center'}
      // borderWidth={1}
      // borderColor={'white'}
      // borderRadius={'30px'}
    >
      <ui.GridItem area='title'>
        <SubTitleText text='연락처' />
      </ui.GridItem>
      <ui.GridItem area='father'>
        <ContactItem name='김준일' phone='010-7332-9548' />
      </ui.GridItem>
      <ui.GridItem area='mother'>
        <ContactItem name='심순옥' phone='010-5382-9549' />
      </ui.GridItem>
      <ui.GridItem area='misa'>
        <ContactItem name='김미사' phone='010-8971-2822' />
      </ui.GridItem>
      <ui.GridItem area='mingu'>
        <ContactItem name='김민구' phone='010-9256-0479' />
      </ui.GridItem>
    </ui.Grid>
  )
}

import * as ui from '@chakra-ui/react'

interface ContactItemProps {
  name: string,
  phone: string,
};

const ContactItem = ({
  name,
  phone
}: ContactItemProps) => {

  return (
    <ui.Flex>
      <ui.Link href={`tel:${phone}`}>
        <ui.Text>{name}</ui.Text>
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
    >
      <ui.GridItem area='title'>
        <ui.Text>//TODO::연락처</ui.Text>
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

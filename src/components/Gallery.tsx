import { Box, Text, Center } from "@chakra-ui/react";
import React from "react";
import { RowsPhotoAlbum, type Photo } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from 'yet-another-react-lightbox';
import {
  Download,
  Fullscreen,
  Share,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import { SubTitleText } from "./SubTitleText";

const order = [
  0,
  1,
  2,

  4,
  6,
  5,

  7,
  8,
  3,
];

const thumbnails = Array.from(order, _ => ({
  src: `/ok/album/${_}_thumbnail.JPEG`
}));

const sources = Array.from(order, _ => ({
  src: `/ok/album/${_}.JPEG`
}));

const getPhoto = (key: string, url: string): Promise<Photo> => {
  return new Promise<Photo>(resolve => {
    const img = new window.Image();
    img.onload = () => {
      const photo: Photo = {
        src: url,
        width: img.naturalWidth,
        height: img.naturalHeight,
        key: key,
      };
      resolve(photo);
    };
    img.onerror = () => {
      resolve({
        src: url,
        width: 400,
        height: 400,
        key: key,
      });
    };
    img.src = url;
  });
};

export default function Gallery() {
  const [photos, setPhotos] = React.useState<Photo[]>([]);
  const [targetIndex, setTargetIndex] = React.useState<number>(-1);
  const [open, setOpen] = React.useState<boolean>(false);
  const fullscreenRef = React.useRef(null);
  const zoomRef = React.useRef(null);

  React.useEffect(() => {
    setPhotos([]);
    Promise.all(
      thumbnails.map((i, index) => getPhoto(index.toString(), i.src))
    ).then((photo) => {
      setPhotos(photo);
    });
  }, []);

  return (
    <Box w='full' h='full'>
      <Center>
        <SubTitleText text='갤러리' />
      </Center>
      <Box h='30px' />
      <RowsPhotoAlbum photos={photos}
        onClick={({ index }) => {
          setTargetIndex(index);
          setOpen(true);
        }}
      />
      <Box h='30px' />
      <Center>
        <Text fontSize={'sm'}>이미지를 클릭하시면 확대보기가 가능합니다.</Text>
      </Center>
      <Lightbox
        plugins={[Fullscreen, Share, Zoom, Download]}
        fullscreen={{ ref: fullscreenRef }}
        zoom={{ ref: zoomRef }}
        open={open}
        index={targetIndex}
        close={() => setOpen(false)}
        slides={sources}
      />
    </Box>
  );
}

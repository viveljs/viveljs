import { atom } from 'jotai';

const backgroundsAtom = atom<{ [key: string]: any }>(
  import.meta.globEager(
    '../assets/images/backgrounds/*.{jpg,jpeg,png,JPG,JPEG,PNG}'
  )
);

const imagesAtom = atom<{ [key: string]: any }>(
  import.meta.globEager(
    '../assets/images/misc/.{jpg,jpeg,png,svg,JPG,JPEG,PNG,SVG}'
  )
);

const charactersAtom = atom<{ [key: string]: any }>(
  import.meta.globEager(
    '../assets/images/characters/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}'
  )
);

const scenesAtom = atom<{ [key: string]: any }>(
  import.meta.globEager('../scenes/*.tsx')
);

const soundsAtom = atom<{ [key: string]: any }>(
  import.meta.globEager('../api/sounds/*.{mp4,webm,mp3,ogg,MP4,WEBM,MP3,OGG}')
);

const componentsAtom = atom<{ [key: string]: any }>(
  Object.assign(import.meta.globEager('../components/*.tsx'))
);

export {
  backgroundsAtom,
  imagesAtom,
  scenesAtom,
  componentsAtom,
  soundsAtom,
  charactersAtom,
};

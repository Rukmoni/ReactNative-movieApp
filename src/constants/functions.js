import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import preloadFonts from './preloadFonts';
import preloadImages from './preloadImages';

// cache fonts
// /////////////////////////////////////////////////////////////////////////////
const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

// cache images
// /////////////////////////////////////////////////////////////////////////////
const cacheImages = images => {
  console.log(images)
  return Object.values(images).map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
};

// preload async
// /////////////////////////////////////////////////////////////////////////////
const loadAssetsAsync = async () => {
  // preload assets
  const fontAssets = await cacheFonts(preloadFonts);
  const imageAssets = await cacheImages(preloadImages);

  // promise load all
   await Promise.all([...fontAssets, ...imageAssets]);
  //return Promise.all()
};

export default {
  cacheFonts,
  cacheImages,
  loadAssetsAsync
};

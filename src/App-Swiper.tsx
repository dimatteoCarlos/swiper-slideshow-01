//App-Swiper.tsx

import { useEffect, useState } from 'react';

import useFetch from './useHook/useFetch';

import SwiperSlider from './components/swiper-slider/SwiperSlider';

function AppSwiper() {
  //data fetching - rick and morty api
  const BASE_URL = 'https://rickandmortyapi.com/api/';

  const routes = {
    characters: 'character',
  };

  const dataToGetFromApi = 'results';

  //-------------------------
  const initialUrl = BASE_URL + routes.characters;

  const [url, setUrl] = useState<string>(initialUrl);

  const options = { method: 'GET' };

  const { isLoading, isError, data } = useFetch(url, options, [url]);

  const charactersInfo = data ? data[dataToGetFromApi] : {};

  const fallbackImage = 'rickAndMortyApiImg.jpg';

  //---------------------------
  //select api url
  useEffect(() => {
    setUrl(url);
  }, [url]);

  return (
    <>
      {isError && 'Something went wrong!'}

      {!isLoading && !isError && charactersInfo && (
        <SwiperSlider fallbackImage={fallbackImage} data={charactersInfo} />
      )}
    </>
  );
}

export default AppSwiper;

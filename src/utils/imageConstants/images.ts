import Back from '../../assets/images/back.png';
import NavBar from '../../assets/images/nav_bar.png';
import MissingPoster from '../../assets/images/placeholder_for_missing_posters.png';
import Search from '../../assets/images/search.png';
import Heart from '../../assets/images/heartIcon.png';
import RedHeart from '../../assets/images/heartIconFill.png';

export const ImageConstants = {
  back: Back,
  missingPoster: MissingPoster,
  navBar: NavBar,
  search: Search,
  heart: Heart,
  redHeart: RedHeart,
};

const IMG_DIRECTORY = '../../assets/images/';

type PosterImages = {
  [key: string]: any,
};

export const posterImage: PosterImages = {
  poster1: require(IMG_DIRECTORY + 'poster1.jpg'),
  poster2: require(IMG_DIRECTORY + 'poster2.jpg'),
  poster3: require(IMG_DIRECTORY + 'poster3.jpg'),
  poster4: require(IMG_DIRECTORY + 'poster4.jpg'),
  poster5: require(IMG_DIRECTORY + 'poster5.jpg'),
  poster6: require(IMG_DIRECTORY + 'poster6.jpg'),
  poster7: require(IMG_DIRECTORY + 'poster7.jpg'),
  poster8: require(IMG_DIRECTORY + 'poster8.jpg'),
  poster9: require(IMG_DIRECTORY + 'poster9.jpg'),
  posterthatismissing: require(IMG_DIRECTORY +
    'placeholder_for_missing_posters.png'),
};

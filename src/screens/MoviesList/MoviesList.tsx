//import liraries
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {getDimensions} from '../../utils';
import Header from '../../components/header/header';
import MovieItem from '../../components/movieCard/movieCard';

import {updatedContentItem} from '../../utils/type';
import {loadJSON} from '../../utils/loadJSON/loadJSON';

let idCount: number = 1;
let isSearched: boolean = false;

// create a component
const MoviesList: React.FC = () => {
  const [movies, setMovies] = useState<updatedContentItem[]>([]);
  const [searchedMovies, setSearchedMovies] = useState<updatedContentItem[]>(
    [],
  );
  const [page, setPage] = useState<number>(1);

  const numColumns = 3;
  const {width: screenWidth} = getDimensions();
  const itemMargin = 10;
  const itemWidth = (screenWidth - (numColumns + 1) * itemMargin) / numColumns;

  useEffect(() => {
    loadMovies();
  }, [page]);

  const loadMovies = async () => {
    const newMovies = await loadJSON(page);
    const updatedData = newMovies?.page['content-items'].content.map(item => {
      return {
        id: idCount++,
        name: item.name,
        poster_image: item['poster-image'],
        isFavourite: false,
      };
    });
    console.log('🚀 ~ updatedData ~ updatedData:', updatedData);
    setMovies(prevMovies => [...prevMovies, ...updatedData]);
    setSearchedMovies(prevMovies => [...prevMovies, ...updatedData]);
  };

  const handleSearch = (t: string, isSearching: boolean) => {
    if (t === '') {
      setSearchedMovies(movies);
      isSearched = isSearching;
    } else {
      const filtered = movies.filter(movie =>
        movie.name.toLowerCase().includes(t.toLowerCase()),
      );
      setSearchedMovies(filtered);
      isSearched = isSearching;
    }
  };

  const handleLoadMore = () => {
    if (!isSearched && page < 3) {
      // Assuming we only have 3 pages of data
      setPage(page + 1);
    }
  };

  const addFavourite = (itemId: number) => {
    let updatedMovieList = movies.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          isFavourite: !item.isFavourite,
        };
      }
      return item;
    });
    setMovies(updatedMovieList);
    setSearchedMovies(updatedMovieList);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Header
          onSearch={(t: string, isSearching: boolean) =>
            handleSearch(t, isSearching)
          }
          suggestion={movies}
        />
        <FlatList
          data={searchedMovies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <MovieItem
              item={item}
              itemWidth={itemWidth}
              addFavourite={addFavourite}
            />
          )}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.coloumGap}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={5}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default MoviesList;

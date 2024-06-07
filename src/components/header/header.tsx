// src/components/Header/Header.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import {styles} from './styles';
import {ImageConstants} from '../../utils';
import {updatedContentItem} from '../../utils/type';
import SearchInput from './searchInput/searchInput';

interface HeaderProps {
  onSearch: (t: string, isSearching: boolean) => void;
  suggestion: updatedContentItem[];
}

const Header: React.FC<HeaderProps> = ({onSearch, suggestion}) => {
  const [search, setSearch] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const hanldeBack = () => {
    if (isSearching) {
      setSearch('');
      onSearch('', false);
      setIsSearching(false);
    } else {
      Alert.alert('', 'Are you sure want to exit?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => BackHandler.exitApp()},
      ]);
    }
  };

  return (
    <ImageBackground source={ImageConstants.navBar} style={styles.navBar}>
      <View style={styles.navBarBox}>
        <View style={styles.navBarTitleBox}>
          <TouchableOpacity
            style={styles.space}
            activeOpacity={1}
            onPress={hanldeBack}>
            <Image source={ImageConstants.back} style={styles.backIcon} />
          </TouchableOpacity>
          {!isSearching ? (
            <Text style={styles.titleText}>Romantic Comedy</Text>
          ) : (
            <SearchInput
              search={search}
              setSearch={setSearch}
              onSearch={onSearch}
              suggestion={suggestion}
            />
          )}
        </View>
        {!isSearching && (
          <TouchableOpacity
            style={styles.space}
            activeOpacity={1}
            onPress={() => setIsSearching(true)}>
            <Image source={ImageConstants.search} style={styles.searchIcon} />
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

export default Header;

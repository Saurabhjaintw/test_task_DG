// src/components/Header/HintBox.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ListRenderItem,
  Keyboard,
} from 'react-native';
import {styles} from './styles';
import {updatedContentItem} from '../../../utils/type';
import {FlatList} from 'react-native-gesture-handler';

interface HintBoxProps {
  searchedHints: updatedContentItem[];
  setSearch: (text: string) => void;
  onSearch: (t: string, isSearching: boolean) => void;
  setHintBox: (visible: boolean) => void;
}

const HintBox: React.FC<HintBoxProps> = ({
  searchedHints,
  setSearch,
  onSearch,
  setHintBox,
}) => {
  const selectSearchedItem = (item: updatedContentItem) => {
    setSearch(item.name);
    onSearch(item.name, true);
    setHintBox(false);
    Keyboard.dismiss();
  };

  const renderList: ListRenderItem<updatedContentItem> = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.itemBox}
        onPress={() => selectSearchedItem(item)}>
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.hintBox}>
      <FlatList
        data={searchedHints}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderList}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default HintBox;

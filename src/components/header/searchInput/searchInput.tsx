// src/components/Header/SearchInput.tsx
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import HintBox from '../hintBox/hintBox';
import {styles} from './styles';
import {updatedContentItem} from '../../../utils/type';

interface SearchInputProps {
  search: string;
  setSearch: (text: string) => void;
  onSearch: (t: string, isSearching: boolean) => void;
  suggestion: updatedContentItem[];
}

const SearchInput: React.FC<SearchInputProps> = ({
  search,
  setSearch,
  onSearch,
  suggestion,
}) => {
  const [searchedHints, setSearchedHints] = useState<updatedContentItem[]>([]);
  const [hintBox, setHintBox] = useState<boolean>(false);

  const handleSearch = (text: string) => {
    if (text.length === 0) {
      onSearch('', false);
    }
    const filtered = suggestion.filter(movie =>
      movie.name.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchedHints(filtered);
    setSearch(text);
    setHintBox(true);
  };

  return (
    <>
      <TextInput
        placeholder="Search movies ..."
        style={styles.input}
        onChangeText={handleSearch}
        value={search}
      />
      {search.trim().length !== 0 && hintBox && (
        <HintBox
          searchedHints={searchedHints}
          setSearch={setSearch}
          onSearch={onSearch}
          setHintBox={setHintBox}
        />
      )}
    </>
  );
};

export default SearchInput;

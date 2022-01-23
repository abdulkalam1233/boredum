import colors from 'config/color';
import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar, Text} from 'react-native-elements';
import {fetchBooksList} from 'services/BookService';
import {BookItemMapping} from 'services/serviceMappers/BookMapper';
import Toaster from 'utils/Toaster';
import BookItem from './bookItem/BookItem';
import styles from './Styles';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {RouteNames} from 'config/routes';

const NumberColumns = 2;
const BookList = ({navigation}: any) => {
  const [bookList, setBookList] = useState<Array<BookItemMapping>>([]);
  const [loader, setLoader] = useState<boolean>(true);
  // const searchRef = React.useRef('');
  const [search, setSearch] = useState('');

  const updateSearch = (text: any) => {
    setSearch(text);
  };

  const getBooksListFromAPI = () => {
    setLoader(true);
    fetchBooksList({
      search_text: search,
    })
      .then((res: any) => {
        setBookList(res ?? []);
      })
      .catch(err => {
        // console.log('ERROR', err);
        Toaster.error({title: err?.message ?? 'Failed to fetch books'});
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getBooksListFromAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (search.length > 2 || !search) {
      getBooksListFromAPI();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const renderBookItem = ({
    item,
    index,
  }: {
    item: BookItemMapping;
    index: number;
  }) => {
    if (index === bookList.length - 1) {
      return [
        <BookItem item={item} key={item.id} />,
        <View
          style={{
            flex: 1,
            // borderWidth: 1,
            padding: 10,
          }}
        />,
      ];
    }
    return <BookItem item={item} key={item.id} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('@assets/logo.png')} style={styles.logo} />
      <View style={styles.searchAndAdd}>
        <SearchBar
          round
          lightTheme
          value={search}
          // ref={searchRef}
          onChangeText={updateSearch}
          containerStyle={styles.searchContainerStyle}
          placeholder="Search Here..."
        />
        <Button
          icon={styles.addButtonIcon}
          buttonStyle={styles.addButton}
          containerStyle={styles.addButtonContainer}
          onPress={() => {
            navigation.navigate(RouteNames.BOOKS.CREATE_BOOK);
          }}
        />
      </View>
      {loader ? (
        <ActivityIndicator
          style={styles.loader}
          size={'large'}
          color={colors.secondary}
        />
      ) : (
        <View>
          {bookList.length ? (
            <FlatList
              data={bookList}
              keyExtractor={(item: BookItemMapping) => item.id}
              renderItem={renderBookItem}
              horizontal={false}
              numColumns={NumberColumns}
            />
          ) : (
            <Text style={styles.noRecords}>No records found.</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default BookList;

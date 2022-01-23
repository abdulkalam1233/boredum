import React from 'react';
import {View, Image} from 'react-native';
import {EMOJI_BUTTONS} from '@config/mapping';
import PostItem from '../postItem/PostItem';
import Styles from './Styles';
import {FlatList} from 'react-native-gesture-handler';
import {SearchBar, Button} from 'react-native-elements';
import {useState} from 'react';
import { RouteNames } from 'config/routes';

const dummyData = [
  {
    profileImage:
      'https://farm8.staticflickr.com/7578/15847904316_f50e7b650b_c.jpg',
    text: `
    tempus imperdiet nulla malesuada pellentesque elit eget gravida cum ris suscipit adipiscing bibendum est ultricies integer
    `,
    date: '2022-01-01',
    id: '1',
    userName:
      'iam sk akashdjasndklamsldkmaskldmklasdnjasndjnaskldnakjsndjoasndoasidojasdajsiodjoisjdiaijsdjaiosjdioasjdio',
    likes: 10,
    dislikes: 0,
  },
  {
    profileImage:
      'https://farm8.staticflickr.com/7578/15847904316_f50e7b650b_c.jpg',
    text: `
    nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer
    `,
    date: '2022-01-01',
    id: '2',
    userName: 'iam sk ak',
    likes: 10,
    dislikes: 0,
  },
  {
    profileImage:
      'https://farm8.staticflickr.com/7578/15847904316_f50e7b650b_c.jpg',
    text: `
    tempus imperdiet auris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer
    `,
    date: '2022-01-01',
    id: '3',
    userName: 'iam sk ak',
    likes: 10,
    dislikes: 0,
  },
];

const postList = ({navigation}: any) => {
  const [posts, setPosts] = React.useState<any[]>(dummyData);
  const [search, setSearch] = useState<string>('');

  const handleOnPostButtonPressEvent = (voteType: string, item: any) => {
    if (voteType === EMOJI_BUTTONS.LIKE) {
      item.likes = Number(item.likes) + 1;
    } else {
      item.dislikes = Number(item.dislikes) + 1;
    }
    setPosts([
      ...posts.map(post => {
        if (post.id == item.id) {
          return item;
        }
        return post;
      }),
    ]);
  };

  const loadNewData = () => {
    setPosts([
      ...posts,
      {
        profileImage:
          'https://farm8.staticflickr.com/7578/15847904316_f50e7b650b_c.jpg',
        text: `
  hello world!!
  `,
        date: '2022-01-01',
        id: Math.floor(Math.random() * 100000000000001),
        userName: 'Abul',
        likes: 0,
        dislikes: 10,
      },
    ]);
  };

  const updateSearch = (text: string) => {
    setSearch(text);
  }

  return (
    <View style={Styles.container}>
      <Image source={require('@assets/logo.png')} style={Styles.logo} />
      <View style={Styles.searchAndAdd}>
        <SearchBar
          round
          lightTheme
          value={search}
          // ref={searchRef}
          onChangeText={updateSearch}
          containerStyle={Styles.searchContainerStyle}
          placeholder="Search Here..."
        />
        <Button
          icon={Styles.addButtonIcon}
          titleStyle={{fontWeight: '700'}}
          buttonStyle={Styles.addButton}
          containerStyle={Styles.addButtonContainer}
          onPress={() => {
            navigation.navigate(RouteNames.POSTS.CREATE_POST);
          }}
        />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item: any) => item.id}
        // numColumns={2}
        onScrollEndDrag={loadNewData}
        renderItem={({item}: any) => {
          return (
            <PostItem
              key={item.id}
              {...item}
              handleOnPress={(voteType: string) =>
                handleOnPostButtonPressEvent(voteType, {...item})
              }
            />
          );
        }}
      />
    </View>
  );
};

export default postList;

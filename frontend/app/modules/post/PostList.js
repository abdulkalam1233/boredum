import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import colors from '../../config/color';
import {EMOJI_BUTTONS} from '../../config/mapping';
import PostItem from './PostItem';

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

const postList = () => {
  const [posts, setPosts] = React.useState(dummyData);

  const handleOnPostButtonPressEvent = (voteType, item) => {
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

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <ScrollView
        onScrollEndDrag={() => {
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
        }}>
        {posts.map(item => (
          <PostItem
            key={item.id}
            {...item}
            handleOnPress={voteType =>
              handleOnPostButtonPressEvent(voteType, {...item})
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  logo: {
    width: 150,
    height: 80,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    // position: 'abso'
  },
});

export default postList;

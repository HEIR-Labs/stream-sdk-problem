import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import type { inferProcedureOutput } from '@trpc/server';
import type { AppRouter } from '@heir/api';
import { trpc } from '../../utils/trpc';

export const PostCard: React.FC<{
  post: inferProcedureOutput<AppRouter['post']['all']>[number];
}> = ({ post }) => {
  return (
    <View className="rounded-lg border-2 border-gray-500 p-4">
      <Text className="">{post.title}</Text>
      <Text className="">{post.content}</Text>
    </View>
  );
};

const CreatePost: React.FC = () => {
  const utils = trpc.useContext();
  const { mutate } = trpc.post.create.useMutation({
    async onSuccess() {
      await utils.post.all.invalidate();
    },
  });

  const [title, onChangeTitle] = React.useState('');
  const [content, onChangeContent] = React.useState('');

  return (
    <View className="flex flex-col border-t-2 border-gray-500 p-4">
      <TextInput
        className="mb-2 rounded border-2 border-gray-500 p-2"
        onChangeText={onChangeTitle}
        placeholder="Title"
      />
      <TextInput
        className="mb-2 rounded border-2 border-gray-500 p-2"
        onChangeText={onChangeContent}
        placeholder="Content"
      />
      <TouchableOpacity
        className="rounded bg-indigo-500 p-2"
        onPress={() => {
          mutate({
            title,
            content,
          });
        }}
      >
        <Text className="font-semibold text-white">Publish post</Text>
      </TouchableOpacity>
    </View>
  );
};

export const HomeScreen = () => {
  const postQuery = trpc.post.all.useQuery();
  const number = trpc.random.number.useQuery({ min: 1, max: 10 });
  const [showPost, setShowPost] = React.useState<string | null>(null);

  return (
    <SafeAreaView>
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold">
          Create <Text className="text-indigo-500">T3</Text> Turbo
          <Text>pizza is good </Text>
        </Text>

        <Text>{JSON.stringify(number.data, null, 2)}</Text>

        <View className="py-2">
          {showPost ? (
            <Text>
              <Text className="font-semibold">Selected post:</Text>
              {showPost}
            </Text>
          ) : (
            <Text className="font-semibold italic">Press on a post</Text>
          )}
        </View>

        <FlashList
          data={postQuery.data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <TouchableOpacity onPress={() => setShowPost(p.item.id)}>
              <PostCard post={p.item} />
            </TouchableOpacity>
          )}
        />

        <CreatePost />
      </View>
    </SafeAreaView>
  );
};

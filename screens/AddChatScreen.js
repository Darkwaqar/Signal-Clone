import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Input, Icon, Button } from "react-native-elements";
import { db } from "../firebase";

const AddChatScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat Name"
        value={input}
        onSubmitEditing={createChat}
        onChangeText={(text) => setInput(text)}
        leftIcon={<Icon type="antdesign" size={24} name="wechat"></Icon>}
      ></Input>
      <Button title="Create a new Chat" onPress={createChat}></Button>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({ container: {} });

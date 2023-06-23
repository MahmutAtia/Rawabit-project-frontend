import { FlatList, SectionList, StatusBar, Text, View } from "react-native";
import { useAuth } from "../../../context/auth";
import AppHeader from "../../../components/headers/HomeHeader/header";
import Post from "../../../components/Post/Post";
import Status from "../../../components/Status/Status";
import { Link } from "expo-router/src/exports";
import BlogCategory from "../../../components/blogcomponents/BlogCategory";

export default function Index() {
  const { signOut, user } = useAuth();
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
   
  ];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="light" backgroundColor="white" />

      <SectionList 
        centerContent
      
         
        sections={DATA}
        renderItem={({ item }) => <Post />}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section: { title } }) => (      <FlatList 
          data= { 
            [1,2,3,4,5,6,7,8,9,10]
          }
          renderItem={() => <Status />}
          keyExtractor={(item) => item}
          horizontal
        />)}
      />
    </View>
  );
}
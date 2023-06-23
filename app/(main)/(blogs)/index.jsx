import { FlatList, SafeAreaView, SectionList, StatusBar, Text, View } from "react-native";
import { useAuth } from "../../../context/auth";
import AppHeader from "../../../components/headers/HomeHeader/header";
import Post from "../../../components/Post/Post";
import Status from "../../../components/Status/Status";
import { Link } from "expo-router/src/exports";
import BlogPost from "../../../components/blogcomponents/BlogPost";
import BlogCategory from "../../../components/blogcomponents/BlogCategory";
import { cats } from "../../../data/BlogCategories";
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
        renderItem={({ item }) => <BlogPost />}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section: { title } }) => (      <FlatList 
          data= { 
            cats
          }
       
          renderItem={({item})=> <BlogCategory item = {item}/>}
          keyExtractor={(item) => item.id}
          horizontal
        />)}
      />
    </View>
  );
}
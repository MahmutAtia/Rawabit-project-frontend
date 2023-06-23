import { View , Text, SectionList,FlatList, Touchable, TouchableOpacity} from "react-native";
import { Link, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Status from "../../../components/Status/Status";
import Searchhistory from "../../../components/headers/SearchHeader.jsx/searchhistory";

export default function Search() {
  const navigation = useNavigation();
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = navigation.canGoBack();
  console.log(isPresented);


  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    }]

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
       <View className="w-[100%] flex flex-row justify-between p-[1vh]">

<Text>Recent </Text>

<Text className="text-gray-500">Clear</Text>




</View>

<SectionList 
        centerContent
      
         
        sections={DATA}
        renderItem={({ item }) => <Searchhistory/>}
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


      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}

      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
    </View>
  );
}
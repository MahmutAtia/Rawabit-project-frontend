import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Avatar, Icon } from "@rneui/base";
import { View, Text } from "react-native";
import DrawerHeader from "./DrawerHeader";

export default function CustomDrawerContent(props) {
  return (
    <View className="flex-1">
     

      <DrawerContentScrollView {...props}>

        {/* Drawer Header */}
        <DrawerHeader />
    
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>Custom Drawer</Text>
      </View>
    </View>
  );
}

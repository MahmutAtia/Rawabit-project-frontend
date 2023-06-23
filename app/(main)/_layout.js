import { Icon } from "@rneui/base";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../../components/customdrawer/CustomDrawer";

export default function Layout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="(home)" // This is the name of the page and must match the url from root
        options={{
          title: "News Feed",
          drawerPosition: "right",

          drawerIcon: ({ focused, size }) => (
            <Icon
              type="matrial"
              name="home"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),

          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="(blogs)" // This is the name of the page and must match the url from root
        options={{
          title: "Blogs",
          drawerPosition: "right",

          drawerIcon: ({ focused, size }) => (
            <Icon
              type="matrial"
              name="text-snippet"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),

          headerShown: false,
        }}
      />
      {/* <Drawer.Screen
    name="profile" // This is the name of the page and must match the url from root
    options={{
        header: () => <AppHeader  /> 


    }}
  /> */}
    </Drawer>
  );
}

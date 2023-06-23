import { Stack } from "expo-router";
import AppHeader from "../../../components/headers/HomeHeader/header";
import SearchHeader from "../../../components/headers/SearchHeader.jsx/header";

export default function Layout() {
    return   <Stack>
        
    <Stack.Screen
        name="index" // This is the name of the page and must match the url from root
        options={
            {
              
                    header: () => <AppHeader/> 
           
            }
        }
    />
    <Stack.Screen
        name="modal" // This is the name of the page and must match the url from root
        options={
            {
                header : () => <SearchHeader/>,
                presentation: "modal",
            }
        }
    />
    
</Stack>}
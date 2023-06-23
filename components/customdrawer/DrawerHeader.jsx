import { Avatar, Icon } from '@rneui/base'
import { View, Text } from 'react-native'


export default function DrawerHeader() {
  return (
         <View className="flex flex-col bg-gray-200">
         <View className="flex flex-row items-center justify-between p-[2vh]">
         <View className="flex flex-col justify-center items-center rounded-full h-[10.5vh] w-[10.5vh]  border-8 border-white shadow-md">

           <Avatar
             size="large"
             rounded
             source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
           />
           </View>
           <Icon type="material" name="wb-sunny" size={30} />
         </View>
 
 
         <View className="flex flex-row items-center justify-between p-[2vh] ">
 
             <View className="flex flex-col">
                <View className="flex flex-row items-center space-x-[2vh]">
                 <Text className="text-2xl text-black ">Rawabit</Text><Icon type='material-icons-outlined' name="verified" size={25} color="gray"/>
                </View>
                 <Text className="text-gray-500"> online</Text>
 
             </View>
 
 
 
             <Icon type="matrial" name="expand-more" size={40} />
 
             </View>
       </View>
  )
}
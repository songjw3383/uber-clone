import { useNavigation } from '@react-navigation/core'
import { black } from 'color-name'
import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useSelector } from 'react-redux'
import tw from "tailwind-react-native-classnames"
import { selectTravelTimeInformation } from '../slices/navSlice'
import { selectOrigin, selectDestination } from '../slices/navSlice'
const data= [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-X-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-X-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },
]

const SURGE_CHARGE_RATE = 1.5;
const USD_DEFAULT_CURRENCY = 1.2;
const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
                    >
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
                <View style={tw`flex-row text-center items-center justify-around pl-2 pr-2`}>
                    <Text>{origin.description}</Text>
                    <Icon name="chevron-right" type="fontawesome"/>
                    <Text>{destination.description}</Text>
                </View>
            </View>

            <FlatList 
                data={data} 
                keyExtractor={(item) => item.id} 
                renderItem={({item : { id, title, multiplier, image}, item}) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && 'bg-gray-200'}`}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                marginLeft: -20,
                                marginRight: 20,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image}}
                            />
                            <View style={tw`-ml-6`}>
                                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                                <Text>예상소요시간 - {travelTimeInformation?.duration?.text}</Text>
                            </View>
                            
                            <Text style={tw`text-xl`}> 
                                {new Intl.NumberFormat('ko-kr', {
                                    style: 'currency',
                                    currency: 'KRW'
                                }
                                ).format(
                                    (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier * USD_DEFAULT_CURRENCY) * 10 
                                )}
                            </Text>
                    </TouchableOpacity>
                )}
            />
            <View stlye={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity 
                    disabled={!selected}
                    style={tw`bg-black py-3 m-2 rounded-full ${!selected && "bg-gray-300"}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choosed {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})

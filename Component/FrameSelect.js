import React, {useState} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FrameSelect() {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, justifyContent:'center', alignItem: 'center', paddingVertical: 70}}>
        <View style={{flex: 1, justifyContent:'center', alignItem: 'center', flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Cam', {
                    frame : require('../img/frame1.png')
                });
                
            }}>
                <Image style={{width: 100, height: 148, marginHorizontal: 10}} source={require('../img/frame1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Cam', {
                    frame : require('../img/frame2.png')
                });
            }}>
                <Image style={{width: 100, height: 150, marginHorizontal: 10}} source={require('../img/frame2.png')}/>
            </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent:'center', alignItem: 'center', flexDirection:'row' }}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Cam', {
                    frame : require('../img/frame3.png')
                });
            }}>
                <Image style={{width: 100, height: 150, marginHorizontal: 10}} source={require('../img/frame3.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Cam', {
                    frame : require('../img/frame4.png')
                });
            }}>
                <Image style={{width: 100, height: 150, marginHorizontal: 10}} source={require('../img/frame4.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}
import React, {Component} from 'react';
import {
    Image,
    View, 
    Text, 
    Animated, 
    ActivityIndicator, 
    StyleSheet,
    TouchableOpacity,
    FlatList,
    StatusBar,
    Platform
} from 'react-native';
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
import {data} from './mock';
import database from './database';
import HashTable from './HashTable';
const statusBarHeight = StatusBar.currentHeight;


let hTable = new HashTable(30);

const InstagramList = ({renderAvatarItem, renderSeparator, data, renderHeader}) =>(
            <List containerStyle={styles.page}>
                <FlatList
                data={data}
                renderItem={renderAvatarItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={renderHeader}
                ItemSeparatorComponent={renderSeparator}
                />
            </List>
        )

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: '#F5FCFF',
        borderTopWidth: 0,
        borderBottomWidth: 0
    }
})
export default InstagramList
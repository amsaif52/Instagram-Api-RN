
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
import InstagramList from './InstagramList';
const statusBarHeight = StatusBar.currentHeight;

let hTable = new HashTable(30);

export default class Instagramlist extends Component{

    constructor(props){
        super(props)
        this.state={
            data:[],
            loading: true,
            fData:[],
            filter:'',
            first:{},
            second:{},
            third:{}
        }

    }

    componentDidMount(){

        data.map((value, index)=>{
            hTable.insert(value.id,value)
        })
        let xy = database.data.map((value,index)=>{
            return hTable.get(value.id);
        })
        this.setState({
            data: data,
            loading:false,
            fData:[...xy],
            first: {name:xy[0].name, picture:xy[0].picture.data.url},
            second: {name:xy[1].name, picture:xy[1].picture.data.url},
            third: {name:xy[2].name, picture:xy[2].picture.data.url}
        })
    }
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "86%",
              backgroundColor: "#CED0CE",
              marginLeft: "14%"
            }}
          />
        );
      };

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." 
                          lightTheme
                          round
                          />;
    };

    renderAvatarItem = ({item})=>(
        <ListItem
            roundAvatar
            title={`${item.name}`}
            avatar={{ uri: item.picture.data.url }}
            containerStyle={{ borderBottomWidth: 0 }}
        />
    )

    _onPressButton = (e) => {
        e.preventDefault();
        this.setState({loading: true})
    }

    render(){
        return(
          <View style={styles.container}>
          {this.state.loading ?
            (
                <InstagramList 
                    data={this.state.fData}
                    renderAvatarItem={this.renderAvatarItem}
                    renderSeparator={this.renderSeparator}
                />
            ) : (
              <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
                <Avatar
                small
                rounded
                source={{uri: this.state.first.picture}}
                overlayContainerStyle={styles.first}
                />
                <Avatar
                small
                rounded
                source={{uri: this.state.second.picture}}
                overlayContainerStyle={styles.second}
                />
                <Avatar
                small
                rounded
                source={{uri: this.state.third.picture}}
                overlayContainerStyle={styles.third}
                />
              </TouchableOpacity>
            )}
          </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
    },
    button:{
        flexDirection: 'row',
        paddingLeft:20,
        paddingRight:20
    },
    first:{
        zIndex:0
    },second:{
       marginLeft:-20,
       zIndex:10,
       backgroundColor: 'transparent'
    },third:{
        marginLeft:-40,
        zIndex:0,
        backgroundColor: 'transparent'
    }
})

/*List Item shoudl go here */
// <ListItem
// roundAvatar
// title={`${item.name}`}
// avatar={{ uri: item.picture.data.url }}
// containerStyle={{ borderBottomWidth: 0 }}
// />

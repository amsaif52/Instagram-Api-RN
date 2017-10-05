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
import { List, ListItem, SearchBar } from "react-native-elements";
import {data} from './mock';
import database from './database';
import HashTable from './HashTable';
const statusBarHeight = StatusBar.currentHeight;

export default class Instagram extends Component{

    constructor(props){
        super(props)  
        this.state={
            data:[],
            loading: true,
            fData:[]
        }
    }

    componentDidMount(){
        let hData = new HashTable(data)
        let xy = database.data.map((value,index)=>{
            console.log(hData.getItem(value.id))
            return hData.getItem(value.id);
        })
        console.log(`xy:${xy}`)
        this.setState({
            data: data,
            loading:false,
            fData:xy
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

    render(){
        return( 
            <List containerStyle={styles.page}>
                <FlatList
                data={this.state.fData}
                renderItem={({ item }) =>  
                    <ListItem
                        roundAvatar
                        title={`${item.name}`}
                        avatar={{ uri: item.picture.data.url }}
                        containerStyle={{ borderBottomWidth: 0 }}
                    /> 
                }
                keyExtractor={item => item.id}
                ItemSeparatorComponent={this.renderSeparator}
                />
            </List>
        )
    }

}

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: '#F5FCFF',
        borderTopWidth: 0, 
        borderBottomWidth: 0
    }
})

 
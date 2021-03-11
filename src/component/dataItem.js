import React, { Component } from 'react';
import {ListItem, Thumbnail, Text, Left, Body, Right, Button, View} from 'native-base';
import Time from './time';


export class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
        const {url, title} = this.data;
        this.props.onPress({url, title});
    }

    render() {
        return (
        <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }} />
            </Left>
            <Body>
                <Text numberOfLines={1}>{this.data.title}</Text>
                <Text note numberOfLines={2}>{this.data.description}</Text>
                <View style={{flex:1, flexDirection: 'row', marginTop: 8, marginLeft: 6}}>
                    <Text note>{this.data.source.name}</Text>
                    <Time time={this.data.publishedAt}/>
                </View>
            </Body>
            <Right>
                <Button transparent onPress={this.handlePress}>
                    <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
        );
    }

}
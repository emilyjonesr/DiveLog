import React from 'react';
import { Component, StyleSheet, ScrollView, View, Text, Dimensions, Image, TouchableHighlight } from 'react-native';
import { observer, inject } from 'mobx-react';
 
@inject('store')
@observer

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.props.store.getMapData();
    }

    render() {
        return(
            <>
            <ScrollView style={{backgroundColor: '#10161D'}}>
                {this.props.store.features.map((feature, index) => <CreateResult
                    key={index}
                    name={feature.properties.SiteName}
                />)}
            </ScrollView>
            </>
        );
    }
}

const CreateResult = (props) => {
    return(
        <View style={styles.searchPage}>
            <View style={styles.resultContainer}>
                <View style={styles.result}>
                    <Text style={{color: 'white', fontSize: 35, marginBottom: 5}}>{props.name}</Text>
                    <Text style={{color: 'white', fontSize: 20, marginBottom: 5}}>San Diego, California</Text>
                    <Image style={styles.image} source={require('../Images/diveSiteDefault.jpg')} />
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
                        <Text style={{color: 'white', fontSize: 20, marginBottom: 10, marginTop: 10}}>No Reviews</Text>
                        <TouchableHighlight onPress={() => alert('TODO')}>
                            <Text style={styles.btn}> Save Site </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchPage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultContainer: {
        backgroundColor: '#151F2A',
        height: 285,
        width: Dimensions.get('window').width - 20,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    result: {
        height: 285,
        width: Dimensions.get('window').width - 40,
        borderRadius: 10,
    },
    image: {
        backgroundColor: '#10161D',
        height: 160,
        width: Dimensions.get('window').width - 40,
    },
    btn: {
        color: '#39A3F4', 
        fontSize: 20,
        margin: 15,
    },
});
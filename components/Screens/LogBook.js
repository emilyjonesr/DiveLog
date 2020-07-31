import React from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions, TextInput, Button, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class LogBook extends React.Component {
    constructor() {
        super();
        this.state = {
            addDivePressed: false,
            newSite: '',
            newDate: '',
            newDepth1: '',
            newDepth2: '',
            newDepth3: '',
            newTime1: '',
            newTime2: '',
            newTime3: '',
            newVisibility: '',
            newTemp: '',
            newWeight: '',
            newComments: '',
            diveLog: [],
        }
    }

    DisplayLog = (props) => {
        return (
            <View style={styles.entry}>
                <Text style={styles.entryTitle}>Dive {props.number}</Text>
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                    <Text style={styles.text}>Dite Site:  {props.site}</Text>
                    <View style={{marginLeft: 120}}>
                        <Text style={styles.text}>Date:  {props.date}</Text>
                    </View>
                </View>
    
                <View style={styles.middleInput}>
                    <View style={styles.chart}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.chartText}>Depth: {props.depth1}</Text>
                            <Text style={styles.chartText}>Time: {props.time1}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.chartText}>Depth: {props.depth2}</Text>
                            <Text style={styles.chartText}>Time: {props.time1}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.chartText}>Depth: {props.depth3}</Text>
                            <Text style={styles.chartText}>Time: {props.time1}</Text>
                        </View>
                    </View>

                    <View style={{marginLeft: 30}}>
                        <Text style={styles.text}>Weight: {props.weight} </Text>
                        <Text style={styles.text}>Visibility: {props.visibility}</Text>
                        <Text style={styles.text}>Temperature: {props.temp}</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>Comments:  {props.comments}</Text>
                </View>
                <TouchableHighlight onPress={() => this.deleteDive(props.number-1)}>
                    <Text style={{color: '#39A3F4', fontSize: 25, alignSelf: 'center', margin: 70}}>Delete Dive</Text>
                </TouchableHighlight>
            </View>
        )
    }

    deleteDive = (index) => {
        var array = [...this.state.diveLog]; // make a separate copy of the array
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({diveLog: array});
        }
    }

    NewLog = () => {
        if(this.state.addDivePressed)
        {
            return (
                <View style={styles.entry}>
                    <Text style={styles.entryTitle}>New Dive</Text>

                    <View style={{flexDirection: 'row', marginBottom: 20}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.text}>Dite Site: </Text>
                            <TextInput 
                                style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                onChangeText={(input) => this.setState({newSite: input})}
                            />
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 50}}>
                            <Text style={styles.text}>Date: </Text>
                            <TextInput 
                                style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                onChangeText={(input) => this.setState({newDate: input})}
                            />
                        </View>
                    </View>


                    <View style={styles.middleInput}>
                        <View style={styles.chart}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.chartInput}>Depth:</Text>
                                    <TextInput 
                                        style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                        onChangeText={(input) => this.setState({newDepth1: input})}
                                    />
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.chartInput}>Time:</Text>
                                    <TextInput 
                                        style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                        onChangeText={(input) => this.setState({newTime1: input})}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.chartInput}>Depth:</Text>
                                    <TextInput 
                                        style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                        onChangeText={(input) => this.setState({newDepth2: input})}
                                    />
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.chartInput}>Time:</Text>
                                    <TextInput 
                                        style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                        onChangeText={(input) => this.setState({newTime2: input})}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.chartInput}>Depth:</Text>
                                    <TextInput 
                                        style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                        onChangeText={(input) => this.setState({newDepth3: input})}
                                    />
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.chartInput}>Time:</Text>
                                    <TextInput 
                                        style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                        onChangeText={(input) => this.setState({newTime3: input})}
                                    />
                                </View>
                            </View>

                        </View>

                        <View style={{marginLeft: 30}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.chartInput}>Weight:</Text>
                                    <TextInput 
                                        style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                        onChangeText={(input) => this.setState({newWeight: input})}
                                    />
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.chartInput}>Visibility:</Text>
                                    <TextInput 
                                        style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                        onChangeText={(input) => this.setState({newVisibility: input})}
                                    />
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.chartInput}>Temperature:</Text>
                                    <TextInput 
                                        style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                                        onChangeText={(input) => this.setState({newTemp: input})}
                                    />
                                </View>
                            </View>
                    </View>


                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>Comments: </Text>
                        <TextInput 
                            style={{borderColor: 'white', borderWidth: 1, paddingLeft: 3, margin: 3, color: 'white'}}
                            onChangeText={(input) => this.setState({newComments: input})}
                        />
                    </View>

                    <TouchableHighlight onPress={() => {this.handleSubmit()}}>
                        <Text style={{color: '#39A3F4', fontSize: 25, alignSelf: 'center'}}> Submit </Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }

    handleSubmit = () => {
        const newSite = this.state.newSite;
        const newDate = this.state.newDate;
        const newDepth1 = this.state.newDepth1;
        const newDepth2 = this.state.newDepth2;
        const newDepth3 = this.state.newDepth3;
        const newTime1 = this.state.newTime1;
        const newTime2 = this.state.newTime2;
        const newTime3 = this.state.newTime3;
        const newVisibility = this.state.newVisibility;
        const newTemp = this.state.newTemp;
        const newWeight = this.state.newWeight;
        const newComments = this.state.newComments;
        const obj = {'site':newSite, 'date':newDate, 'depth1':newDepth1, 'depth2':newDepth2, 'depth3':newDepth3, 
                    'time1': newTime1, 'time2': newTime2, 'time3': newTime3, 'visibility':newVisibility, 'temp':newTemp,
                    'weight':newWeight, 'comments':newComments};
        this.setState({
            diveLog: [...this.state.diveLog, obj]
        });
        this.setState({addDivePressed: false});
    }

    render() {
        return (
            <ScrollView style={styles.logBookPage}>
                <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
                    <Text style={styles.title}>My Log Book</Text>
                    <TouchableHighlight onPress={() => (this.setState({addDivePressed: true}))}>
                        <Text style={styles.btn}> Add Dive </Text>
                    </TouchableHighlight>
                </View>
                {this.NewLog()}
                {this.state.diveLog.map((diveLog, index) => <this.DisplayLog
                    key = {index}
                    number = {index + 1}
                    site = {diveLog.site}
                    date = {diveLog.date}
                    depth1 = {diveLog.depth1}
                    depth2 = {diveLog.depth2}
                    depth3 = {diveLog.depth3}
                    time1 = {diveLog.time1}
                    time2 = {diveLog.time2}
                    time3 = {diveLog.time3}
                    visibility = {diveLog.visibility}
                    temp = {diveLog.temp}
                    weight = {diveLog.weight}
                    comments = {diveLog.comments}
                />)}
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create( {
    logBookPage: {
        backgroundColor: '#10161D',
      },
    title: {
        fontSize: 40,
        color: 'white',
        marginLeft: 10,
        margin: 20,
    },
    entry: {
        backgroundColor: '#151F2A',
        height: 375,
        width: Dimensions.get('window').width - 20,
        margin: 10,
        borderRadius: 10,
    },
    entryTitle: {
        fontSize: 35, 
        color: 'white', 
        margin: 8,
        marginBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 17,
        marginBottom: 5,
        marginLeft: 10,
    },
    chartText: {
        color: 'white', 
        fontSize: 17, 
        marginBottom: 5, 
        marginLeft: 5, 
        marginRight: 40,
    },
    chartInput: {
        color: 'white', 
        fontSize: 17, 
        marginBottom: 5, 
        marginLeft: 5, 
    },
    middleInput: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    chart: {
        borderColor: '#39A3F4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 3,
    },
    bottomInput: {
        borderColor: '#39A3F4',
        borderWidth: 2,
        height: 50,
        width: 370,
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
    },
    btn: {
        color: '#39A3F4', 
        fontSize: 20,
        margin: 15,
    },
});
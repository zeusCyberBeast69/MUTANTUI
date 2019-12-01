import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { DrawerNavigator, NavigationNativeContainer, createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Home from './Components/Home'
import About from './Components/About'
import Leagues from './Components/Leagues'
import * as Font from 'expo-font';

class App extends Component {


    constructor() {
        super();
        this.state = {
            fontloaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Green-Energy': require('./Green_Energy.ttf'),
            'Solway': require('./Solway-Regular.ttf'),
            'Mr-Monster': require('./MR.MONSTAR.otf'),
            'Cabin-Sketch': require('./CabinSketch-Regular.ttf')
        });

        this.setState({ fontloaded: true })
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'rgba(41, 6, 51, 0.6)',
            },
            image: {
                height: 120,
                width: 120,
                resizeMode: 'contain'
            }, logo: {
                top: 50,
                flexDirection: 'row',
                alignSelf: 'stretch',
                justifyContent: 'space-around',

            }, text: {
                color: '#FFF',
                fontSize: 40,
                top: 95,
                right: 20,
                textShadowColor: 'white',
                textShadowRadius: 15,
                fontFamily: 'Green-Energy'
                
            }
        });
        const customDrawerComponent = (props) => (
            <SafeAreaView style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('./Components/3.png')} style={styles.image} />
                    <Text style={styles.text}>Mutants</Text>
                </View>
                <ScrollView style={{ top: 100, }}>
                    <DrawerItems {...props}>
                    </DrawerItems>
                </ScrollView>
            </SafeAreaView>
        )
        const AppDrawerNavigator = createDrawerNavigator({
            Home: { screen: Home },

            Leagues: { screen: Leagues },

            About: { screen: About },
           
           
        }, {
            contentComponent: customDrawerComponent,
            drawerBackgroundColor: 'transparent',
            contentOptions: {
                activeTintColor: '#6a5acd',
                inactiveTintColor: 'white',
                labelStyle: {
                    fontSize: 22,
                    fontFamily: 'Solway',
                    fontWeight: 'normal'
                }
            }
        }
        );
        const MyApp = createAppContainer(AppDrawerNavigator);
        
        return (
            this.state.fontloaded ? (<MyApp />) : (<ActivityIndicator size="large" />) 
            
            );
    }
}

export default App;

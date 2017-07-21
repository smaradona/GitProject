'use strict';

var React = require('react');
var ReactNative = require('react-native')

var {
  Text,
  View,
  Image,
  Component,
  StyleSheet,
  TabBarIOS
} = ReactNative;

var {
  Component,
} = React

class AppContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedTab: 'feed'
        }
    }

    render(){
      return (
        <TabBarIOS style={styles.tabContainer}>
            <TabBarIOS.Item
                title="Feed"
                selected={this.state.selectedTab == 'feed'}
                icon={require('./assets/Inbox.png')}
                onPress={()=> this.setState({selectedTab: 'feed'})}
            >
                <Text style={styles.welcome}>Tab 1</Text>
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Search"
                selected={this.state.selectedTab == 'search'}
                icon={require('./assets/Search.png')}
                onPress={()=> this.setState({selectedTab: 'search'})}
            >
                <Text style={styles.welcome}>Tab 2</Text>
            </TabBarIOS.Item>
        </TabBarIOS>
      );
    }
}

var styles = StyleSheet.create({
    tabContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
    welcome: {
        fontSize: 30,
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = AppContainer;

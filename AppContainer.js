'use strict';

var React = require('react');
var ReactNative = require('react-native')
var authService = require('./AuthService');

var {
  Text,
  View,
  Image,
  Component,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS
} = ReactNative;

var {
  Component,
} = React

var Feed = require('./Feed')

class AppContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedTab: 'feed'
        }
    }

    onLogoutPress() {
        this.props.onLogout()
        authService.logout(() => console.log('Log out!'))
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
                <NavigatorIOS
                    style={{
                        flex: 1,
                    }}
                    initialRoute={{
                        component: Feed,
                        title: 'Feed'
                    }} />
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Search"
                selected={this.state.selectedTab == 'search'}
                icon={require('./assets/Search.png')}
                onPress={()=> this.setState({selectedTab: 'search'})}
            >
                <Text style={styles.welcome}>Tab 2</Text>
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Logout"
                icon={require('./assets/Search.png')}
                onPress={() => this.onLogoutPress()}
            >
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
  }
});

module.exports = AppContainer;

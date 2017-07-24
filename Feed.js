'use strict';

var React = require('react');
var ReactNative = require('react-native')

var {
  Text,
  View,
  Image,
  Component,
  ListView
} = ReactNative;

var {
  Component,
} = React

class Feed extends Component {
    constructor(props){
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(['A', 'B', 'C'])
        };
    }

    componentDidMount(){
        this.fetchFeed();
    }

    fetchFeed(){
      require('./AuthService').getAuthInfo((err, authInfo)=> {
          var url = 'https://api.github.com/users/' + authInfo.user.login + '/received_events';

          fetch(url, {
              headers: authInfo.header
          })
          .then((response)=> response.json())
          .then((responseData)=> {
            console.log('responseData', responseData)
              var feedItems =
              responseData.filter((ev)=>
                  ev.type == 'PushEvent');
              this.setState({
                  dataSource: this.state.dataSource
                      .cloneWithRows(feedItems)
              });
          })
          .catch(err => {
            console.log('err', err)
          })
      });
    }

    renderRow(rowData){
      console.log('rowData', rowData)
        return <Text style={{
            color: '#333',
            backgroundColor: '#FFF',
            padding: 20,
            alignSelf: 'center'
        }}>
        {rowData.actor ? rowData.actor.display_login : rowData}
        {rowData.actor ? rowData.payload.commits[0].message : rowData}

        </Text>
    }

    render(){
      return (
        <View style={{
            flex: 1,
            justifyContent: 'flex-start'
        }}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)} />
        </View>
      );
    }
}



module.exports = Feed;

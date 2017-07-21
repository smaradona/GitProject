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

    renderRow(rowData){
        return <Text style={{
            color: '#333',
            backgroundColor: '#FFF',
            padding: 20,
            alignSelf: 'center'
        }}>
            {rowData}
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

'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
  Text,
  View,
  Image,
  Component,
  ListView,
} = ReactNative;

var {
  Component,
} = React

var moment = require('moment');

class PushPayload extends Component {
    constructor(props){
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.state = {
            dataSource: ds
        };
    }

    render(){
        return (
            <View style={{
                flex: 1,
                paddingTop: 80,
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Image
                    source={{uri: this.props.pushEvent.actor.avatar_url}}
                    style={{
                        height: 120,
                        width: 120,
                        borderRadius: 60
                    }}
                />

                <Text style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    fontSize: 20
                }}>
                    {moment(this.props.pushEvent.created_at).fromNow()}
                </Text>
            </View>
        );
    }
}

module.exports = PushPayload;

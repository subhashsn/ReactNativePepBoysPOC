import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import ListView from './Common/listView/listView.js'

export class SegmentScreen extends Component {

    constructor(){
      super()
      this.state = {
        selectedIndex: 0,
      };
    }

    handleIndexChange = (index) => {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
    }

    render() {
        
        return (
            <View>
                <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
                    tabStyle={styles.tabStyle}
                    tabTitleStyle={styles.tabTitleStyle}
                    values={['First', 'Second']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    tabStyle
                    />
                    { this.state.selectedIndex === 0 ?
                        <View>
                            <ListView/>
                        </View>
                        :
                        <View>
                            <Text>Tab2</Text>
                        </View>
                    }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabsContainerStyle: {
      //custom styles
      
    },
    tabStyle: {
      //custom styles
      borderColor:'black'
      },
    tabTitleStyle: {
      //custom styles
      
    }
})

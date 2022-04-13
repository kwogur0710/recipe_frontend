import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

class MultiSelect extends React.Component{
    constructor() {
        super();
        this.state = {
            rooms: [{id: 1, name: 'Bedroom'}, {id: 2, name: 'LivingRoom'}],
            selectedItems: [],
            bedroomSelect: [],
            newSelectItems: []
        };
    }

    onSelectedItemsChange = (selectedItems) => {
        console.log("selected", selectedItems)
        const name = selectedItems.toString()

        const x = []

        const a = []
        console.log(typeof (name))
        if(name == "Bedroom"){
            console.log("true", name)
            a.push( {
                name: 'Apple',
                id: 1,
            },
            {
                name: 'Strawberry',
                id: 2,
            },
            {
                name: 'Pineapple',
                id: 3,
            },
            {
                name: 'Banana',
                id: 4,
            },
            {
                name: 'Watermelon',
                id: 5,
            },
            {
                name: 'Kiwi fruit',
                id: 6,
            },)
        }else{
            console.log("false", name)
            a.push( {
                name: 'Merc',
                id: 1,
            },
            {
                name: 'BMW',
                id: 2,
            },
            {
                name: 'Audi',
                id: 3,
            },)
        }

        console.log("sam", a)

        x.push( {
                name: 'Apple',
                id: 10,
            },
            {
                name: 'Strawberry',
                id: 17,
            },
            {
                name: 'Pineapple',
                id: 13,
            },
            {
                name: 'Banana',
                id: 14,
            },
            {
                name: 'Watermelon',
                id: 15,
            },
            {
                name: 'Kiwi fruit',
                id: 16,
            },)

      this.setState(() => ({
          selectedItems: selectedItems,
          bedroomSelect: a
      }));
    };

    onSelectedNewChange = (newSelectItems) => {
        this.setState(() => ({
            newSelectItems: newSelectItems,
        }))
    }

    render(){
        console.log("@@@@@", this.state.selectedItems)
        console.log("$####$", this.state.bedroomSelect)
        return(
            <View style={styles.container}>
                <SectionedMultiSelect
                    items={this.state.rooms}
                    single={true}
                    uniqueKey="name"
                    selectText="Choose some things..."
                    showDropDowns={true}
                    readOnlyHeadings={false}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={this.state.selectedItems}
                    showChips={false}
                  />
                <SectionedMultiSelect
                    items={this.state.bedroomSelect}
                    uniqueKey="name"
                    selectText="Choose some things..."
                    showDropDowns={true}
                    readOnlyHeadings={false}
                    onSelectedItemsChange={this.onSelectedNewChange}
                    selectedItems={this.state.newSelectItems}
                    showChips={false}
                  />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
    }
})

export default MultiSelect
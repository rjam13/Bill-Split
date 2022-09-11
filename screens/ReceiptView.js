import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, Text, Button } from "react-native";

// import { COLORS, FoodData } from "../constants";
import { COLORS, assets } from "../constants/";
import { FocusedStatusBar, FoodItem, ReceiptHeader } from "../components";

const FoodData = [
    {
      id: "Food-01",
      name: "Stuffed Mushrooms",
      price: 6.95,
      image: assets.food1,
      description:
        "Fontina and Parmesan Cheese, Garlic and Herbs in a Wine Sauce",
    },
    {
      id: "Food-02",
      name: "Greek Salad",
      price: 6.95,
      image: assets.food2,
      description:
        "Feta Cheese, Tomato, Cucumber, Kalamata, Olives, Red Onion, Arugula, and Vinaigrette",
    },
    {
      id: "Food-03",
      name: "White Bean Hummus",
      price: 5.95,
      image: assets.food3,
      description:
        "Served with Warm Flatbread",
    },
    {
      id: "Food-04",
      name: "Little House Salad",
      price: 4.50,
      image: assets.food4,
      description:
        "Tossed in Our Vinagrette",
    },
    {
      id: "Food-05",
      name: "Beets with Goat Cheese",
      price: 5.95,
      image: assets.food5,
      description:
        "Fresh Beets, Apples, Baby Arugula, Pecans, and Vinagrette",
    },
    {
      id: "Food-06",
      name: "Endive Salad",
      price: 5.95,
      image: assets.food6,
      description:
        "Belgian Endive, Radicchio, Glazed Pecans, Blue Cheese, and Vinaigrette",
    },    
  ];

const ReceiptView = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                <FlatList
                    data={FoodData}
                    renderItem={({ item }) => <FoodItem data={item}/>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<ReceiptHeader/>}
                />
                </View>

                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        zIndex: -1,
                    }}
                >
                    <View
                        style={{ height: 300, backgroundColor: COLORS.primary }}
                    />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ReceiptView;

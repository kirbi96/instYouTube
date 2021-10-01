import React from "react";
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {DataHelper} from "../helpers/DataHelper";

export const SearchScreen = () => {


    return (
        <ScrollView>
            <View style={styles.flexRow}>
                <View style={styles.topLeftContainer}>
                    {[...Array(4)].map((_, index) => (
                        <TouchableOpacity key={index}>
                            <Image style={styles.smallImage}
                                   source={{uri: 'https://img01.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/2/f2/2f23c421db983f28be0a4d9e84fe1d3d.png'}}/>
                        </TouchableOpacity>
                    ))}
                </View>

                <View>
                    <Image style={styles.highImage}
                           source={{uri: 'https://img01.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/2/f2/2f23c421db983f28be0a4d9e84fe1d3d.png'}}/>
                </View>
            </View>

            <View style={styles.centerContainer}>
                {[...Array(6)].map((_, index) => (
                    <TouchableOpacity key={index}>
                        <Image style={styles.smallImage}
                               source={{uri: 'https://yt3.ggpht.com/ytc/AKedOLSpJnXNw11fqOOzQA_866Z5yRKBON_nCjWe5o2L2A=s48-c-k-c0x00ffffff-no-rj'}}/>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.flexRow}>
                <View style={styles.bottomLeft}>
                    <Image style={styles.bigImage}
                           source={{uri: 'https://yt3.ggpht.com/ytc/AKedOLSpJnXNw11fqOOzQA_866Z5yRKBON_nCjWe5o2L2A=s48-c-k-c0x00ffffff-no-rj'}}/>
                </View>
                <View style={styles.bottomRight}>
                    {[...Array(2)].map((_, index) => (
                        <TouchableOpacity key={index}>
                            <Image style={styles.smallImage}
                                   source={{uri: 'https://yt3.ggpht.com/ytc/AKedOLSpJnXNw11fqOOzQA_866Z5yRKBON_nCjWe5o2L2A=s48-c-k-c0x00ffffff-no-rj'}}/>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    flexRow:{
        flexDirection: "row",
        justifyContent: "center",
    },
    smallImage: {
        width: DataHelper.getWidth() * 0.33,
        height: DataHelper.getWidth() * 0.33,
        marginTop: DataHelper.getWidth() * 0.003,
        marginLeft: DataHelper.getWidth() * 0.003,
    },
    topLeftContainer: {
        width: DataHelper.getWidth() * 0.667,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    highImage: {
        width: DataHelper.getWidth() * 0.33,
        height: DataHelper.getWidth() * 0.66,
        marginTop: DataHelper.getWidth() * 0.003,
        marginLeft: DataHelper.getWidth() * 0.003,
    },
    bigImage:{
        width: DataHelper.getWidth() * 0.667,
        height: DataHelper.getWidth() * 0.667,
        marginTop: DataHelper.getWidth() * 0.003,
        marginRight: DataHelper.getWidth() * 0.003,
    },
    centerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    bottomLeft:{
        width: DataHelper.getWidth() * 0.66,
        height: DataHelper.getWidth() * 0.66,
    },
    bottomRight:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
});

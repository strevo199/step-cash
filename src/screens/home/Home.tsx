import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import { bill, internet, reload, send, wallet, phone, games, more, bell } from '../../contants/icons';
import { COLORS, FONTS, SIZES } from '../../contants/theme';
import { promobanner } from '../../contants/images';


export const Home = () => {

  const featuresData = [
    {
      id: 1,
      icon: reload,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: "Top Up"
    },
    {
      id: 2,
      icon: send,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: "Transfer"
    },
    {
      id: 3,
      icon: internet,
      color: COLORS.primary,
      backgroundColor: COLORS.lightGreen,
      description: "Internet"
    },
    {
      id: 4,
      icon: wallet,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: "Wallet"
    },
    {
      id: 5,
      icon: bill,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: "Bill"
    },
    {
      id: 6,
      icon: games,
      color: COLORS.primary,
      backgroundColor: COLORS.lightGreen,
      description: "Games"
    },
    {
      id: 7,
      icon: phone,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: "Mobile Prepaid"
    },
    {
      id: 8,
      icon: more,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: "More"
    }
  ];

  const specialPromoData = [
    {
      id: 1,
      img: promobanner,
      title: "Bonus Cashback1",
      description: "Don't miss it. Grab it now!"
    },
    {
      id: 2,
      img: promobanner,
      title: "Bonus Cashback2",
      description: "Don't miss it. Grab it now!"
    },
    {
      id: 3,
      img: promobanner,
      title: "Bonus Cashback3",
      description: "Don't miss it. Grab it now!"
    },
    {
      id: 4,
      img: promobanner,
      title: "Bonus Cashback4",
      description: "Don't miss it. Grab it now!"
    },
  ]

  const [features, setfeatures] = useState(featuresData);
  const [specialPromos, setspecialPromos] = useState(specialPromoData);

  const renderHeader = () => {
        return (
            <View style ={{flexDirection: 'row', marginVertical: SIZES.padding * 2}}>
                <View style ={{flex: 1}}>
                    <Text style ={{...FONTS.h1}}>Hello</Text>
                    <Text style ={{...FONTS.body2, color: COLORS.gray}}>Stephen M.</Text>
                </View>
                
                <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity
                        style ={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.lightGray
                        }}
                    >
                        <Image
                            source={bell}
                            style = {{
                                width: 40,
                                height: 40,
                                tintColor: COLORS.secondary
                            }}
                        />
                        <View
                            style ={{
                                position: 'absolute',
                                top: -2,
                                right: -2,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5
                            }}
                        >

                        </View> 
                    </TouchableOpacity>
                </View>
            </View>
        )
  }

  const renderBanner = () => {
    return (
        <View
            style ={{
                height: 120,
                borderRadius: 20
            }}
        >
            <Image
                source={promobanner}
                resizeMode ='cover'
                style ={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20
                }}
            />
        </View>
    )
  }

  const renderFeatures = () => {

    const renderItem = ({item}) => (
        <TouchableOpacity
            style ={{
                marginBottom: SIZES.padding * 2,
                width: 60,
                alignItems: 'center'
            }}
            onPress ={() => console.log(item.description)}
        >
            <View
                style ={{
                    height: 50,
                    width: 50,
                    marginBottom: 5,
                    borderRadius: 20,
                    backgroundColor:item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.icon}
                    resizeMode ='contain'
                    style ={{
                        width: 20,
                        height: 20,
                        tintColor: item.color
                    }}
                />
            </View>
            <Text style ={{textAlign: 'center', flexWrap: 'wrap',...FONTS.body4}}>{item.description}</Text>
        </TouchableOpacity>
    )

    const Header = () => (
        <View style ={{marginBottom: SIZES.padding * 2}}>
            <Text style ={{...FONTS.h3}}>Features</Text>
        </View>
    )

    return (
        <FlatList
            data={features}
            ListHeaderComponent = {Header}
            keyExtractor ={item => `item -${item.id}`}
            numColumns ={4}

            columnWrapperStyle ={{justifyContent:'space-between'}}
            renderItem ={renderItem}
            style ={{marginTop: SIZES.padding * 2}}
        />
    )
  }

  const renderPromos =() => {

    const renderPromoHeader =() => (
        <View
            style ={{
                flexDirection: 'row',
                marginBottom: SIZES.padding
            }}
        >
            <View  style ={{flex:1}}>
                <Text style ={{...FONTS.h3}}>Special Promos</Text>
            </View>
            <TouchableOpacity
                onPress={() => console.log('View All.....')}
            >
                <Text style ={{color: COLORS.gray,...FONTS.body4}}>View All</Text>
            </TouchableOpacity>
        </View>
    )

    const HeaderComponent = () => (
            <View>
                {renderHeader()}
                {renderBanner()}
                {renderFeatures()}
                {renderPromoHeader()}
                
            </View>
        )
    


    const renderItem =({item}) => {
      return(
        <TouchableOpacity
          style ={{
            marginVertical: SIZES.base,
            width: SIZES.width / 2.5
          }}
          onPress ={() => console.log(item.title)}
        >
         <View 
            style= {{
                height: 80,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: COLORS.primary
            }}
         >
            <Image
                source={item.img}
                resizeMode ={'cover'}
                style ={{
                    width: "100%",
                    height: "100%",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}
            />
         </View>

         <View
            style= {{
                padding: SIZES.padding,
                backgroundColor: COLORS.lightGray,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
            }}
         >
            <Text style ={{...FONTS.h4}}>{item.title}</Text>
            <Text style ={{...FONTS.body4}}>{item.description}</Text>
         </View>
        </TouchableOpacity>
      )
    }
    
    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle ={{
          paddingHorizontal: SIZES.padding * 3
        }}
        numColumns ={2}
        columnWrapperStyle ={{justifyContent: 'space-between'}}
        data = {specialPromos}
        keyExtractor ={item => `item-${item.id}`}
        renderItem = {renderItem}
        showsVerticalScrollIndicator ={false}
        ListFooterComponent = {
            <View style ={{marginBottom: 80}}>
                
            </View>
        }
      />
    )
  }



  return (
    <SafeAreaView style ={{flex: 1, backgroundColor: COLORS.white}}>
      {renderPromos()}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({});
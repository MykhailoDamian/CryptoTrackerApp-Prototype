import React from 'react';
import { ScrollView, View, Image, TextInput, FlatList } from 'react-native';
import { styles, CustomText } from '../components/DetailsStyles';

const DetailsScreen = () => {
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/back.png')} style={styles.otherIcons} resizeMode="contain" />
        <CustomText style={styles.headerText}>Bitcoin (BTC)</CustomText>
        <Image />
      </View>

      <View style={styles.crypto_price_container}>
        <View>
          <CustomText style={styles.crypto_price_text}>$28,797.09</CustomText>
          <CustomText style={styles.crypto_change_text}>+ $848.23 (+0.35)</CustomText>
        </View>
        <Image style={styles.crypto_logo} source={{uri:'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026'}} resizeMode="contain"/>
      </View>
        <View style={styles.box_containers}>
          <View style={styles.hourBox}>
              <CustomText style={styles.hourBox_text}>BTC/USDT Binance</CustomText>
          </View>
          <View style={styles.iconBox}>
            <View style={styles.hourBox}>
                <Image source={require('../assets/maximize-1.png')} style={styles.smallIcons} resizeMode="contain" />
            </View>
            <View style={styles.hourBox}>
                <Image source={require('../assets/maximize-2.png')} style={styles.smallIcons} resizeMode="contain" />
            </View>
          </View>
        </View>

      <View>
        <Image source={require('../assets/candlesticks-sample.png')} style={styles.graph} resizeMode="contain" />
      </View>

      <View style ={styles.timeline}>
          <View style={styles.timeBox}>
              <CustomText style={styles.hourBox_text}>1H</CustomText>
          </View>
          <View style={styles.timeBox_Light}>
              <CustomText style={styles.hourBox_text}>1D</CustomText>
          </View>
          <View style={styles.timeBox}>
              <CustomText style={styles.hourBox_text}>1W</CustomText>
          </View>
          <View style={styles.timeBox}>
              <CustomText style={styles.hourBox_text}>1M</CustomText>
          </View>
          <View style={styles.timeBox}>
              <CustomText style={styles.hourBox_text}>6M</CustomText>
          </View>
          <View style={styles.timeBox}>
              <CustomText style={styles.hourBox_text}>1Y</CustomText>
          </View>
          <View style={styles.timeBox}>
              <CustomText style={styles.hourBox_text}>ALL</CustomText>
          </View>
          <View style={styles.timeBox}>
              <CustomText style={styles.hourBox_text}>ALL</CustomText>
          </View>

      </View>
        <View style={styles.row}>

          <View style={styles.infoBox}>
            <CustomText style={styles.titleText}>Market Cap</CustomText>
            <CustomText style={styles.numText}>685 Billion</CustomText>
          </View>

          <View style={styles.infoBox}>
            <CustomText style={styles.titleText}>Volume (24 hours)</CustomText>
            <CustomText style={styles.numText}>$98,669.59</CustomText>
          </View>

        </View>


        <View style={styles.row}>

          <View style={styles.infoBox}>
            <CustomText style={styles.titleText}>Available Supply</CustomText>
            <CustomText style={styles.numText}>17.332.275</CustomText>
          </View>

          <View style={styles.infoBox}>
            <CustomText style={styles.titleText}>Total Supply</CustomText>
            <CustomText style={styles.numText}>17.332.275</CustomText>
          </View>

        </View>


        <View style={styles.row}>

          <View style={styles.infoBox}>
            <CustomText style={styles.titleText}>Low (24 hours)</CustomText>
            <CustomText style={styles.numText}>$34,939.59</CustomText>
          </View>

          <View style={styles.infoBox}>
            <CustomText style={styles.titleText}>High (24 hours)</CustomText>
            <CustomText style={styles.numText}>$35,669.59</CustomText>
          </View>

        </View>

      <View>

      
      </View>

  </ScrollView>
    )
};

export default DetailsScreen;

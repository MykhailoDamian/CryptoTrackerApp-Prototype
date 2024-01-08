import React from 'react';
import { ScrollView, View, Image, TextInput, FlatList } from 'react-native';
import { styles, CustomText } from '../components/PortfolioStyles';

const PortfolioScreen = () => {
    const PortfolioCryptoData = [
  { key: '1', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026', name: 'Bitcoin', price: '10000', change: '+0.79%', pieces: '0.2849' },
  { key: '2', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026', name: 'Ethereum', price: '7000', change: '+1.25%', pieces: '2.7224' },
  { key: '3', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=026', name: 'Binance Coin', price: '4000', change: '+0.63%', pieces: '10.4671' },
  { key: '6', logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=026', name: 'Cardano', price: '5000', change: '+2.10%', pieces: '5494.5' },
  { key: '8', logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=026', name: 'Polkadot', price: '2797.09', change: '+0.83%', pieces: '153.4989' },
];


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Refresh.png')} style={styles.otherIcons} resizeMode="contain" />
        <CustomText style={styles.headerText}>Portfolio</CustomText>
        <Image source={require('../assets/Edit.png')} style={styles.otherIcons} resizeMode="contain" />
      </View>

      <View style={styles.balance_container}>
        <CustomText style={styles.balance_text}>$28,797.09</CustomText>
        <CustomText style={styles.balance_change_text}>+ $848.23 (+0.35)</CustomText>
        <View style={styles.box_containers}>
          <View style={styles.hourBox}>
              <CustomText style={styles.hourBox_text}>Highest Holdings</CustomText>
          </View>
          <View style={styles.hourBox}>
              <CustomText style={styles.hourBox_text}>24 Hours</CustomText>
          </View>
        </View>
        
      <FlatList
        data={PortfolioCryptoData}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <View style={styles.logoWithNameCap}>
              <Image source={{ uri: item.logo }} style={styles.logo} resizeMode="contain" />
              <View style={styles.logoAndName}>
                <CustomText style={styles.cryptoTitle}>{item.name}</CustomText>
                <CustomText style={styles.cryptoCap}>{item.pieces}</CustomText>
              </View>
            </View>
            <View style={styles.priceAndChange}>
              <CustomText style={styles.cryptoPrice}>${item.price}</CustomText>
              <CustomText style={styles.cryptoChange}>{item.change}</CustomText>
            </View>
          </View>
        )}
      />
    </View>


  </ScrollView>
    )
};

export default PortfolioScreen;

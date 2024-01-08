import React from 'react';
import { View, Image, TextInput, FlatList } from 'react-native';
import { styles, CustomText } from '../components/DashboardStyles';

const DashboardScreen = () => {
  const cryptoData = [
  { key: '1', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026', name: 'Bitcoin', price: '35,086.65', change: '+0.79%', marketCap: '685B' },
  { key: '2', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026', name: 'Ethereum', price: '2,570.56', change: '+1.25%', marketCap: '307B' },
  { key: '3', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=026', name: 'Binance Coin', price: '382.14', change: '+0.63%', marketCap: '63B' },
  { key: '4', logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=026', name: 'Tether', price: '1.00', change: '0.00%', marketCap: '82B' },
  { key: '5', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=026', name: 'Solana', price: '41.46', change: '-1.63%', marketCap: '17B' },
  { key: '6', logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=026', name: 'Cardano', price: '0.91', change: '+2.10%', marketCap: '30B' },
  { key: '7', logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=026', name: 'XRP', price: '0.62', change: '+1.21%', marketCap: '29B' },
  { key: '8', logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=026', name: 'Polkadot', price: '18.22', change: '+0.83%', marketCap: '20B' },
  { key: '9', logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=026', name: 'Dogecoin', price: '0.14', change: '+1.33%', marketCap: '18B' },
  { key: '10', logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=026', name: 'USD Coin', price: '1.00', change: '+0.02%', marketCap: '45B' },
  { key: '11', logo: 'https://cryptologos.cc/logos/terra-luna-luna-logo.png?v=026', name: 'Terra', price: '62.34', change: '+0.75%', marketCap: '25B' },
  { key: '12', logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=026', name: 'Avalanche', price: '66.48', change: '+1.80%', marketCap: '16B' },
  { key: '13', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png?v=026', name: 'Chainlink', price: '15.22', change: '+0.90%', marketCap: '6B' },
  { key: '14', logo: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=026', name: 'Litecoin', price: '108.25', change: '+1.15%', marketCap: '7B' },
  { key: '15', logo: 'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=026', name: 'Bitcoin Cash', price: '392.14', change: '+0.63%', marketCap: '7B' },
];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/dash_icon1.png')} style={styles.otherIcons} resizeMode="contain" />
        <CustomText style={styles.headerText}>Dashboard</CustomText>
        <Image source={require('../assets/dash_icon2.png')} style={styles.otherIcons} resizeMode="contain" />
      </View>

      <View style={styles.newsBlock}>
        <View style={styles.newsTextBlock}>
          <CustomText style={styles.publishData}>19:30 | 3 Nov | CoinTelegraph</CustomText>
          <CustomText style={styles.newsTitle}>Could regulation have prevented Sam Bankman-Fried’s criminal verdict?</CustomText>
        </View>
        <Image source={require('../assets/news-image-sample1.png')} />
      </View>

      <View style={styles.sampleScrollContainer}>
        <Image source={require('../scroll-right-sample.png')} style={styles.scrollRightSample} resizeMode="contain" />
      </View>

      <View style={styles.searchAndBox}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#484747"
        />
        <View style={styles.hourBox}>
          <CustomText style={styles.hourBox_text}>24 Hours</CustomText>
        </View>
      </View>

      <FlatList
        data={cryptoData}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <View style={styles.logoWithNameCap}>
              <Image source={{ uri: item.logo }} style={styles.logo} resizeMode="contain" />
              <View style={styles.logoAndName}>
                <CustomText style={styles.cryptoTitle}>{item.name}</CustomText>
                <CustomText style={styles.cryptoCap}>{item.marketCap}</CustomText>
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
  );
};

export default DashboardScreen;

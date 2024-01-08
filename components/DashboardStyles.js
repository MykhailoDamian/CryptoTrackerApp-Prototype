import { Text, StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  defaultText: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    backgroundColor: '#0E0F18',
  },
  otherIcons:{
    width: 20,
    height: 20,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 40,
  },
  headerText:{
    color: 'white',
    fontWeight: 'bold',
  },
  searchBar: {
    color:'#FFFFFF', 
    height: 40,
    width: 150,
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 20,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontWeight: 'bold',
    fontSize: 32, 
  },
    listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13,
  },
  logoWithNameCap: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, 
  },
  logoAndName: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    marginLeft: 10, 
  },
  priceAndChange: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'flex-end', 
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    marginBottom: 20,
  },
  icon: {
    marginTop: 21,
    width: 21,
    height: 21,
  },
  selectedIcon: {
    marginTop: 10,
    width: 50,
    height: 55,
  },
  logo: {
    width: 21,
    height: 21,
    marginTop: 9,
    marginRight: 20,
  },
    cryptoPrice:{
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  cryptoChange:{
    fontSize: 13,
    color: '#0DC471',
    fontWeight: 'bold',
  },
  cryptoCap:{
    fontSize:10,
    color: '#8E8D8D',
    marginTop: 6,
  },
  cryptoTitle:{
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  searchAndBox:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hourBox:{
    backgroundColor: '#1A1B24',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 15,
    marginTop: 15,
  },
  hourBox_text:{
    fontWeight: 'bold',
    color: 'white',
  },
  publishData:{
    color:'#8E8D8D',
    fontSize: 11,
  },
  newsTitle:{
    color: 'white',
    fontWeight: 'bold',
  },
  newsBlock:{
    margin: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  newsTextBlock:{
    flexShrink: 1,
    width: '80%',
  },
  scrollRightSample:{
    width: '60%',
  },
  sampleScrollContainer:{
    alignItems: 'center',
    marginVertical: 20,
  }
});

export const CustomText = (props) => {
  return <Text style={[styles.defaultText, props.style]} {...props} />;
};





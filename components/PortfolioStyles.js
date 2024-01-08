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
    balance_text:{
    fontWeight: 'bold',
    color: 'white',
    fontSize:32,
  },
  balance_change_text:{
    color: '#32CC86',
    fontSize:14,
  },
  balance_container:{
    marginHorizontal: 20,
    marginVertical: 20,
  },
  box_containers:{
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  hourBox:{
    backgroundColor: '#1A1B24',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 15,
  },
  hourBox_text:{
    fontWeight: 'bold',
    color: 'white',
  },
});

export const CustomText = (props) => {
  return <Text style={[styles.defaultText, props.style]} {...props} />;
};





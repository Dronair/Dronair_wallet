import SecureStorage, { ACCESSIBLE } from 'react-native-secure-storage';
import {AsyncStorage} from 'react-native';
const config = {
    accessible: ACCESSIBLE.WHEN_UNLOCKED
  };
const pinCode = ''
setLocalData = async( key, value ) => {
    try{
        await SecureStorage.setItem(key, value, config);
        return true;
    } catch(e){
        console.log(e);
        return false;
    }
}
getLocalData = async( key ) => {
    try{
        var v = await SecureStorage.getItem(key, config);
        return v;
    } catch(e){
        console.log(e);
        return null;
    }
}
removeLocalData = async( key ) => {
    try{
        await SecureStorage.removeItem(key, config);
        return true;
    } catch(e){
        console.log(e);
        return false;
    }   
}
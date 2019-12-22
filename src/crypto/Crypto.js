import {substitutionKey} from "./config";

export default class Crypto {

  codeWithSubstitution = (input) =>{
      return input.split('').map((v) => {
          if(substitutionKey.hasOwnProperty(v))
            return substitutionKey[v];
          else
              return v;
      }).join('');
  };

  decodeSubstitution = (coded) => {
      let newKey = {};
      Object.keys(substitutionKey).map(key => {
          newKey[substitutionKey[key]] = key;
      });
      return coded.split('').map((v) => {
          if(newKey.hasOwnProperty(v))
              return newKey[v];
          else
              return v;
      }).join('');
  }
}

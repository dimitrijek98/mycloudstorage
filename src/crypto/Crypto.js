import {substitutionKey} from "./config";

export default class Crypto {

  codeWithSubstitution = (input) =>{
      let cryptedInput = '';
     for(let inputLength = 0; inputLength<input.length; inputLength++){
          cryptedInput = cryptedInput.concat(substitutionKey[input.charAt(inputLength)] || input.charAt(inputLength));
      }
      return cryptedInput;
  };

  decodeSubstitution = (coded) => {
      let newKey = {};
      Object.keys(substitutionKey).map(key => {
          newKey[substitutionKey[key]] = key;
      });
      let decoded = '';
      for(let inputLength = 0; inputLength<coded.length; inputLength++){
          decoded = decoded.concat(newKey[coded.charAt(inputLength)] || coded.charAt(inputLength) );
      }
      return decoded
  }
}

export function code( message, key) {
    let output = "";
    for(let i =0; i<=(message.length-key.length>0?message.length-key.length:1); i++){
        let remain = message.length-i*key.length;
        for(let j = 0; j < (key.length>remain?remain:key.length); j++){
            output = output.concat(String.fromCharCode(message.charCodeAt(i*key.length +j) ^ key.charCodeAt(j)));
        }
    }
    return output

};

export function decode(codedMessage, key){
     let decoded = '';
        for(let i =0; i<=(codedMessage.length-key.length>0?codedMessage.length-key.length:1); i++){
            let remain = codedMessage.length-i*key.length;
            for(let j = 0; j < (key.length>remain?remain:key.length); j++){
                decoded = decoded.concat(String.fromCharCode(codedMessage.charCodeAt(i*key.length +j) ^ key.charCodeAt(j)));

            }
        }
     return decoded;
}

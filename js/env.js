//  ENV file dummy to store the credentials 
export const _env = {
    PUBLICKEY : '03b7239f9b652cd55ce344d3b59afc88',
    PRIVATEKEY :'70d1bdef9eba9a4c490e49e8d0838dee74de0b29',
    BASEURL:'http://gateway.marvel.com/v1/public/characters',
    getHash : function(ts){
        // console.log("Inside getHash function");
        return CryptoJS.MD5(ts + this.PRIVATEKEY + this.PUBLICKEY);
    }, 
};

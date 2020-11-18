import "@babel/polyfill/noConflict";
import "dotenv/config";
import Awin from "./index";

(async () => {
    const awin = new Awin(process.env.AWIN_PUBLISHER_ID, process.env.AWIN_ACESS_TOKEN);
    
     
    // Doc https://wiki.awin.com/index.php/API_get_programmes
    awin
        .programs()
        .then(console.log).catch(console.log)

    /*
    awin
        .deeplink("link", "awinmid")
        .then(console.log)
        .catch(console.log)
    */

    // Doc https://wiki.awin.com/index.php/API_get_programmes

    // Success
    awin
        .deeplink("https://loja.electrolux.com.br/", 17858)
        .then(console.log)
        .catch(console.log)

    // Return deeplink invalid
    awin
        .deeplink("https://www.americanas.com.br/", 11111)
        .then(console.log)
        .catch(console.log)

    // Return deeplink invalid
    awin
        .deeplink()
        .then(console.log)
        .catch(console.log)

})();
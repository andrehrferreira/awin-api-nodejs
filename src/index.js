import "@babel/polyfill/noConflict";
import axios from "axios";
import querystring from "querystring"

export default (awinaffid, acessToken) => {
    return {
        programs (params = { countryCode: "BR" }) {
            return axios
                .get(`https://api.awin.com/publishers/${awinaffid}/programmes?accessToken=${acessToken}&${querystring.encode(params)}`)
                .then(response => {
                    return response.data;
                })
                .catch(err => err.message);
        },
        deeplink (link, awinmid) {
            return new Promise((resolve, reject) => {
                if (link && awinaffid) {
                    resolve(`https://www.awin1.com/cread.php?awinmid=${awinmid}&awinaffid=${awinaffid}&ued=${encodeURIComponent(link)}`);
                } else {
                    reject('Missing link or awinmid');
                }
            })
        }
    }
};

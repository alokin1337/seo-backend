import {Router} from 'express'
import fetch from 'node-fetch'
import querystring from 'querystring'

export default ({ config, db }) => {
    let api = Router();
    
api.get('/pagespeed', (req, res) => {

        // pagespeedapi https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed
        let options = {
            url: "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=http://skalilo.com",
            params: {
                strategy: "desktop",
                category: "seo"
            }
        }

        const url = `${options.url}?${querystring.stringify(options.params)}`
        console.log(url)
        fetch(url)
            .then(function(res) {
                return res.json();
            }).then(function(json) {
                res.status(200).json({json})                
            })
})

api.get('/webmaster', (req, res) => {
    // webmaster https://developers.google.com/webmaster-tools/search-console-api-original/v3/

    // search google for sitemap "site:seo-michael.co.uk inurl:sitemap"
    // check the robot file for sitemap "site:seo-michael.co.uk inurl:robots.txt"

    
})

    return api;
}
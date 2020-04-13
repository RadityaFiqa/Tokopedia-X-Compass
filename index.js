const fetch = require('node-fetch');

(async () => {
    try {
        while (true) {
            const tp = await fetch("https://ace.tokopedia.com/discopage/discovery/api/component/sepatu-compass/25733?rpc_GroupID=0&rpc_Page=1&rpc_ResultPerPage=20", {
                method: 'GET',
                headers: {
                    'User-agent': 'Mozilla/5.0 (Linux; Android 7.1.2; SM-G935FD Build/N2G48H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-encoding': 'gzip, deflate',
                    'Accept-language': 'en-US',
                    'X-requested-with': 'com.android.browser'
                },
                timeout: 5000
            }).then(res => {
                const data = res.json()
                return (data)
            })
            if (tp.data.data == undefined) {
                console.log("Can't Retrive Data From API");
            } else {
                console.log(tp.data.data)
                /**
                 * Contoh Bentuk JSON
                
                {
                "applink":"",
                "product_id":776952086,
                "status":1,
                "stock_sold_percentage":80,
                "title":"Size 40 - Gazelle 98 Vintage Hi Maroon - 6947LhP2zM",
                "custom_stock":1,
                "department_id":"",
                "discounted_price":"Rp 438.000",
                "free_ongkir":{
                    "is_active":true,
                    "img_url":"https://ecs7.tokopedia.net/img/ic_bebas_ongkir.png"
                },
                "image_url_mobile":"https://ecs7.tokopedia.net/img/cache/200-square/product-1/2020/4/9/batch-upload/batch-upload_a4d0a3e4-4348-4052-9172-1acc06c68ae8.jpg",
                "stock":1,
                "url_mobile":"https://m.tokopedia.com/sepatucompass/size-40-gazelle-98-vintage-hi-maroon-6947lhp2zm?trkid=f%3DP0Cb0_src%3Dsprint-sale_page%3D1_ob%3D17_catid%3D1845"
                }
                
                */
            }
        }
    } catch (error) {
        console.log(`[${a}] ${error.message}\n`)
    }

})();

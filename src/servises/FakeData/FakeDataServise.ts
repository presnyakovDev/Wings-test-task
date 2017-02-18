export class FakedataService{

    getData(){
        return this.data;
    }

    data=[
      {"id":1,"name":"Jabbercube","link":"http://usa.gov", children:[
        {"id":4,"name":"Dynabox","link":"http://timesonline.co.uk", children:[
          {"id":11,"name":"Meevee","link":"http://flavors.me", children:[]},
        ]},
        {"id":5,"name":"Avaveo","link":"https://prlog.org", children:[
          {"id":12,"name":"Wikizz","link":"http://comcast.net", children:[]}
        ]},
      ]},
      {"id":2,"name":"Skimia","link":"https://linkedin.com", children:[
        {"id":6,"name":"Voolia","link":"http://nbcnews.com", children:[
          {"id":13,"name":"Kwideo","link":"http://imageshack.us", children:[]},
          {"id":14,"name":"Muxo","link":"http://stanford.edu", children:[]}
        ]},
        {"id":7,"name":"Leenti","link":"https://zimbio.com", children:[
          {"id":15,"name":"Mycat","link":"https://vimeo.com", children:[
            {"id":19,"name":"Livetube","link":"http://dropbox.com", children:[]}
          ]}
        ]},
      ]},
      {"id":3,"name":"Mybuzz","link":"https://loc.gov", children:[
        {"id":8,"name":"Topicshots","link":"http://lycos.com", children:[
          {"id":15,"name":"Mycat","link":"https://vimeo.com", children:[
            {"id":20,"name":"Kaymbo","link":"https://nifty.com", children:[]}
          ]}
        ]},
        {"id":9,"name":"Skyba","link":"https://zdnet.com", children:[
          {"id":16,"name":"Buzzshare","link":"https://yolasite.com", children:[]},
          {"id":17,"name":"Gigazoom","link":"http://engadget.com", children:[]}
        ]},
        {"id":10,"name":"Flashset","link":"http://harvard.edu", children:[
          {"id":18,"name":"Youspan","link":"https://google.com.hk", children:[]}
        ]},
      ]}
    ]
}

export default FakedataService;

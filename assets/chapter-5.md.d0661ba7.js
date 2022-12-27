import{_ as n,c as r,b as o,w as a,a as t,d as s,e as l,r as c,o as p}from"./app.ce9799fb.js";const N=JSON.parse(`{"title":"\xC9tape 5 - Usage avanc\xE9 \u{1F680}","description":"","frontmatter":{},"headers":[{"level":2,"title":"Simulation d'un formulaire","slug":"simulation-d-un-formulaire"},{"level":2,"title":"D\xE9coder le tout","slug":"decoder-le-tout"}],"relativePath":"chapter-5.md"}`),i={name:"chapter-5.md"},D=t('<h1 id="etape-5-usage-avance-\u{1F680}" tabindex="-1">\xC9tape 5 - Usage avanc\xE9 \u{1F680} <a class="header-anchor" href="#etape-5-usage-avance-\u{1F680}" aria-hidden="true">#</a></h1><p>\u{1F3AF} L&#39;objectif ici est de simuler la connexion en oauth2 d&#39;un formulaire.</p><h2 id="simulation-d-un-formulaire" tabindex="-1">Simulation d&#39;un formulaire <a class="header-anchor" href="#simulation-d-un-formulaire" aria-hidden="true">#</a></h2><p>Nos agents nous informent que la derni\xE8re pass-phrase et le code de d\xE9cryptage sont prot\xE9g\xE9s derri\xE8re un formulaire de login accessible via l&#39;URL <a href="https://workshop-playwright-server.vercel.app/" target="_blank" rel="noreferrer">https://workshop-playwright-server.vercel.app/</a>.</p><p>Nous n&#39;avons pas r\xE9ussi \xE0 obtenir un login et un password, mais ils ont trouv\xE9 un jeton magique.</p><p>Afin d&#39;\xE9viter tout soup\xE7on de la part de leur syst\xE8me, vous devez \xEAtre invisibles pour cela vous allez utilisez les <a href="https://playwright.dev/docs/api/class-route" target="_blank" rel="noreferrer">route</a> playwright.</p><p>Editez le fichier de test <code>src/chapter_5.spec.ts</code>:</p><ul><li>Dans le hook <code>test.beforeEach</code>, qui est ex\xE9cut\xE9 avant chaque test, ajoutez une <a href="https://playwright.dev/docs/api/class-route" target="_blank" rel="noreferrer">route</a> playwright sur <code>https://accounts.google.com/ServiceLogin/webreauth</code>. Elle devra faire une redirection 302 qui ajoutera le query param <code>token=&lt;3WindowsVista&lt;3</code></li></ul>',8),y=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"test"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"beforeEach"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#C792EA"}},"async"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"({"),s("span",{style:{color:"#A6ACCD"}}," page "),s("span",{style:{color:"#89DDFF"}},"})"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"route"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://accounts.google.com/ServiceLogin/webreauth"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"route"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"route"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"fulfill"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      status"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"302"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      headers"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        Location"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://workshop-playwright-server.vercel.app?token=<3WindowsVista<3"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),F=s("ul",null,[s("li",null,[l("Dans le test nomm\xE9 "),s("code",null,"it should get the last secret phrase"),l(", naviguez vers "),s("code",null,"https://workshop-playwright-server.vercel.app/")])],-1),u=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"goto"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://workshop-playwright-server.vercel.app"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),d=s("ul",null,[s("li",null,"Remplissez les champs Login et Password avec des valeurs de votre choix.")],-1),A=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"fill"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},'"Login"'),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"mathieu.mure"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"fill"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},'"Password"'),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"pwd1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),C=s("ul",null,[s("li",null,"Cliquez sur le bouton de login")],-1),h=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"click"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},'"Connect"'),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),g=s("ul",null,[s("li",null,[l("Attendez qu'une navigation ait lieu sur "),s("code",null,"https://workshop-playwright-server.vercel.app/")])],-1),_=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"waitForNavigation"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F07178"}},"url"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#C3E88D"}}," "),s("span",{style:{color:"#89DDFF"}},"/"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"^"),s("span",{style:{color:"#C3E88D"}},"https:"),s("span",{style:{color:"#A6ACCD"}},"\\/\\/"),s("span",{style:{color:"#C3E88D"}},"workshop-playwright-server"),s("span",{style:{color:"#A6ACCD"}},"\\."),s("span",{style:{color:"#C3E88D"}},"vercel"),s("span",{style:{color:"#A6ACCD"}},"\\."),s("span",{style:{color:"#C3E88D"}},"app"),s("span",{style:{color:"#89DDFF"}},"/"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),v=s("ul",null,[s("li",null,[l("V\xE9rifiez que le titre la page rendue est bien "),s("code",null,"You're in Microsoft deep secrets page")])],-1),f=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"expect"),s("span",{style:{color:"#A6ACCD"}},"(page)"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"toHaveTitle"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"You're in Microsoft deep secrets page"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),m=s("ul",null,[s("li",null,"Faites ensuite un screenshot pour observer le contenu de la page")],-1),w=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"expect"),s("span",{style:{color:"#A6ACCD"}},"(page)"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"toHaveTitle"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"You're in Microsoft deep secrets page"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),b=t('<p>Bravo ! Vous avez r\xE9ussi \xE0 r\xE9cup\xE9rer l&#39;ensemble des passphrases et des codes ! Il est maintenant tant de d\xE9chiffrer tout cela</p><h2 id="decoder-le-tout" tabindex="-1">D\xE9coder le tout <a class="header-anchor" href="#decoder-le-tout" aria-hidden="true">#</a></h2><p>La cl\xE9 que vous avez r\xE9cup\xE9r\xE9e correspond \xE0 la position de chaque mot dans chacun des phrases.</p><p>Par exemple, si la cl\xE9 est <code>3 4 1+2 3 2</code>, alors la phrase secr\xE8te sera :</p><p><code>&lt;le 3\xE8me mot de la phrase de la phase 1&gt; &lt;le 4\xE8me mot de la phrase de la phase 2&gt; &lt;le 1er et le 2nd mot de la phrase de la phase 3&gt; &lt;le 3\xE8me mot de la phrase de la phase 4&gt; &lt;le 2nd mot de la phrase de la phase 5&gt;</code></p><p>D\xE9coder le tout \xE0 main pour trouver les codes secrets de Microsoft!... ou lancer simplement le script <code>npm run decode</code></p>',6);function E(k,T,x,S,z,V){const e=c("Solution");return p(),r("div",null,[D,o(e,null,{default:a(()=>[y]),_:1}),F,o(e,null,{default:a(()=>[u]),_:1}),d,o(e,null,{default:a(()=>[A]),_:1}),C,o(e,null,{default:a(()=>[h]),_:1}),g,o(e,null,{default:a(()=>[_]),_:1}),v,o(e,null,{default:a(()=>[f]),_:1}),m,o(e,null,{default:a(()=>[w]),_:1}),b])}var L=n(i,[["render",E]]);export{N as __pageData,L as default};

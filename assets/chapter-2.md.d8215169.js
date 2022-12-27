import{_ as t,c,b as o,w as a,a as n,d as s,e as l,r,o as p}from"./app.ce9799fb.js";var i="/workshop-playwright/assets/chapter2_screenshot.cec577e6.png",y="/workshop-playwright/assets/chapter2_screenshot_dark.9a99c55f.png";const G=JSON.parse('{"title":"\xC9tape 2 - D\xE9sassemblage \u{1F4A5}","description":"","frontmatter":{},"headers":[{"level":2,"title":"Se rendre sur playwright dev","slug":"se-rendre-sur-playwright-dev"},{"level":2,"title":"Screenshot","slug":"screenshot"},{"level":2,"title":"Multi-navigateur","slug":"multi-navigateur"}],"relativePath":"chapter-2.md"}'),D={name:"chapter-2.md"},F=n('<h1 id="etape-2-desassemblage-\u{1F4A5}" tabindex="-1">\xC9tape 2 - D\xE9sassemblage \u{1F4A5} <a class="header-anchor" href="#etape-2-desassemblage-\u{1F4A5}" aria-hidden="true">#</a></h1><p>\u{1F3AF} L&#39;objectif ici est de d\xE9couvrir l&#39;API de playwright sans s&#39;occuper des tests.</p><h2 id="se-rendre-sur-playwright-dev" tabindex="-1">Se rendre sur playwright dev <a class="header-anchor" href="#se-rendre-sur-playwright-dev" aria-hidden="true">#</a></h2><ul><li><p>Ouvrez le fichier <code>src/chapter_2.ts</code> qui nous servira de script.</p></li><li><p>Dans ce fichier, importez playwright et dans une fonction asynchrone, lancez un chromium et stockez l&#39;instance dans une variable <a href="https://playwright.dev/docs/api/class-browser" target="_blank" rel="noreferrer"><code>browser</code></a>.</p></li></ul>',4),A=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," playwright "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"playwright"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," run "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"async"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"browser"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"playwright"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"chromium"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"launch"),s("span",{style:{color:"#F07178"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"run"),s("span",{style:{color:"#A6ACCD"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),u=s("ul",null,[s("li",null,[l("\xC0 partir de ce "),s("code",null,"browser"),l(", cr\xE9ez une nouvelle page et stockez-la dans une variable "),s("code",null,"page"),l(".")])],-1),C=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," page "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," browser"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"newPage"),s("span",{style:{color:"#A6ACCD"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),d=s("ul",null,[s("li",null,[l("Faites naviguer votre page sur "),s("code",null,"https://playwright.dev/"),l(".")])],-1),h=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"goto"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://playwright.dev/"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),g=s("ul",null,[s("li",null,[l("Affichez dans le terminal, la valeur du "),s("code",null,"title"),l(" de cette page.")])],-1),_=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"title"),s("span",{style:{color:"#A6ACCD"}},"())"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),f=s("ul",null,[s("li",null,"Fermez le navigateur pour que le programme se termine")],-1),m=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," browser"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"close"),s("span",{style:{color:"#A6ACCD"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),v=n(`<ul><li>Ex\xE9cutez votre script</li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm ts-node src/chapter_2.ts</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn ts-node src/chapter_2.ts</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#A6ACCD;">./node_modules/.bin/ts-node src/chapter_2.ts</span></span>
<span class="line"></span></code></pre></div><p>Vous devriez obtenir</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Fast and reliable end-to-end testing for modern web apps | Playwright</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>Pensez \xE0 fermer vos pages et vos navigateurs, pour que le programme se termine.</p></div><ul><li>Modifiez votre script pour lancer le navigateur visuellement, c&#39;est-\xE0-dire sans mode headless.</li></ul>`,6),w=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," browser "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," playwright"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"chromium"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"launch"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"headless"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),b=s("h2",{id:"screenshot",tabindex:"-1"},[l("Screenshot "),s("a",{class:"header-anchor",href:"#screenshot","aria-hidden":"true"},"#")],-1),E=s("ul",null,[s("li",null,[l("Faites un "),s("a",{href:"https://playwright.dev/docs/screenshots",target:"_blank",rel:"noreferrer"},"screenshot"),l(" de la page enti\xE8re dans "),s("code",null,"src/screenshots/homepage.png"),l(".")])],-1),T=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"screenshot"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"path"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"src/screenshot/homepage.png"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"fullPage"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),x=s("p",null,[s("img",{src:i,alt:"resultat du screenshot"})],-1),k=s("ul",null,[s("li",null,[l("Configurez votre page pour avoir une pr\xE9f\xE9rence pour le dark mode gr\xE2ce \xE0 l'API "),s("a",{href:"https://playwright.dev/docs/api/class-page#page-emulate-media",target:"_blank",rel:"noreferrer"},[s("code",null,"emulateMedia")]),l(" et refaites un screenshot dans "),s("code",null,"src/screenshots/homepage_dark.png")])],-1),P=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"emulateMedia"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"colorScheme"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"dark"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," page"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"screenshot"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"path"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"src/screenshot/homepage_dark.png"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"fullPage"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"})])])],-1),S=s("p",null,[s("img",{src:y,alt:"resultat du screenshot en dark mode"})],-1),z=n(`<h2 id="multi-navigateur" tabindex="-1">Multi-navigateur <a class="header-anchor" href="#multi-navigateur" aria-hidden="true">#</a></h2><p>Une des puissances de playwright r\xE9side dans son support de plusieurs navigateurs comme <code>chromium</code>, <code>firefox</code> et <code>webkit</code>.</p><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>Playwright poss\xE8de \xE9galement un support exp\xE9rimental d&#39;<a href="https://playwright.dev/docs/api/class-android/" target="_blank" rel="noreferrer">Android</a> et d&#39;<a href="https://playwright.dev/docs/api/class-electron" target="_blank" rel="noreferrer">Electron</a>.</p></div><ul><li>Modifiez votre programme pour qu&#39;il ex\xE9cute ce code \xE9galement avec firefox. Vous pourriez par exemple passer un param\xE8tre \xE0 la fonction <code>run</code></li></ul><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>Vous pouvez r\xE9cup\xE9rer le nom du navigateur avec la commande suivante, ce qui peut vous \xEAtre utile pour avoir des screenshots par navigateur</p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> browserTypeName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> browser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">browserType</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">name</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></div>`,5),N=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," run "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"async"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"browserType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"firefox"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"chromium"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"browser"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"playwright"),s("span",{style:{color:"#F07178"}},"["),s("span",{style:{color:"#A6ACCD"}},"browserType"),s("span",{style:{color:"#F07178"}},"]"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"launch"),s("span",{style:{color:"#F07178"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"browserTypeName"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," ("),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"browser"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"browserType"),s("span",{style:{color:"#F07178"}},"())"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"name"),s("span",{style:{color:"#F07178"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"Promise"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"all"),s("span",{style:{color:"#A6ACCD"}},"(["),s("span",{style:{color:"#82AAFF"}},"run"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"chromium"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"run"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"firefox"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}},")])"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),V=n('<ul><li>Modifier votre script pour que les tests des diff\xE9rents navigateurs soient fait avec une \xE9mulation d&#39;un <code>Pixel 4</code>. Pas d&#39;inqui\xE9tude, il est d\xE9j\xE0 pr\xE9configur\xE9 dans <a href="https://playwright.dev/docs/api/class-playwright#playwright-devices" target="_blank" rel="noreferrer"><code>playwright.devices</code></a></li></ul><div class="warning custom-block"><p class="custom-block-title">ATTENTION</p><p>Les <code>devices</code> d\xE9finissent une propri\xE9t\xE9 <code>isMobile</code> qui n&#39;est pas compatible avec <code>firefox</code>.</p></div>',2),I=s("div",{class:"language-typescript"},[s("button",{class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," contextOption"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"playwright"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"BrowserContextOptions"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"..."),s("span",{style:{color:"#A6ACCD"}},"playwright"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"devices["),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"Pixel 4"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}},"]"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#A6ACCD"}}," (browserTypeName "),s("span",{style:{color:"#89DDFF"}},"==="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"firefox"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#A6ACCD"}},") "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#A6ACCD"}},"contextOption"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"isMobile"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," mobileContext "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," browser"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"newContext"),s("span",{style:{color:"#A6ACCD"}},"(contextOption)"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," page "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#A6ACCD"}}," mobileContext"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"newPage"),s("span",{style:{color:"#A6ACCD"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),O=s("p",null,"Nos agents nous informent que la seconde phrase qui vous permettra de d\xE9coder les codes secrets de Microsoft est le titre de la page que vous avez affich\xE9 dans votre terminal.",-1),q=s("p",null,[s("strong",null,"Notez-la pr\xE9cieusement"),l(" dans "),s("code",null,"src/passphrases.txt"),l(" et vous pouvez passer \xE0 la phase 3 du plan !")],-1);function B(M,R,$,j,L,J){const e=r("Solution");return p(),c("div",null,[F,o(e,null,{default:a(()=>[A]),_:1}),u,o(e,null,{default:a(()=>[C]),_:1}),d,o(e,null,{default:a(()=>[h]),_:1}),g,o(e,null,{default:a(()=>[_]),_:1}),f,o(e,null,{default:a(()=>[m]),_:1}),v,o(e,null,{default:a(()=>[w]),_:1}),b,E,o(e,null,{default:a(()=>[T]),_:1}),o(e,{title:"R\xE9sultat attendu"},{default:a(()=>[x]),_:1}),k,o(e,null,{default:a(()=>[P]),_:1}),o(e,{title:"R\xE9sultat attendu"},{default:a(()=>[S]),_:1}),z,o(e,null,{default:a(()=>[N]),_:1}),V,o(e,null,{default:a(()=>[I]),_:1}),O,q])}var H=t(D,[["render",B]]);export{G as __pageData,H as default};

(this["webpackJsonpfb-clone-yt"]=this["webpackJsonpfb-clone-yt"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(25),i=c.n(a),o=(c(79),c(35)),r=c.n(o),j=c(48),d=c.n(j),b=c(49),l=c.n(b),_=c(50),f=c.n(_),h=c(51),m=c.n(h),p=c(52),O=c.n(p),u=c(122),x=c(119),v=c(53),g=c.n(v),N=c(54),S=c.n(N),k=c(55),A=c.n(k),I=c(37),P=c.n(I),y=c(3),F=Object(n.createContext)(),C=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(y.jsx)(F.Provider,{value:Object(n.useReducer)(t,c),children:s})},w=function(){return Object(n.useContext)(F)};c(81);var L=function(){var e=w()[0].user;return Object(y.jsxs)("div",{className:"header",children:[Object(y.jsxs)("div",{className:"header__left",children:[Object(y.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",alt:""}),Object(y.jsxs)("div",{className:"header__input",children:[Object(y.jsx)(r.a,{}),Object(y.jsx)("input",{type:"text",placeholder:"Search Facebook"})]})]}),Object(y.jsxs)("div",{className:"header__center",children:[Object(y.jsx)("div",{className:"header__option header__option--active",children:Object(y.jsx)(d.a,{fontSize:"large"})}),Object(y.jsx)("div",{className:"header__option",children:Object(y.jsx)(l.a,{fontSize:"large"})}),Object(y.jsx)("div",{className:"header__option",children:Object(y.jsx)(f.a,{fontSize:"large"})}),Object(y.jsx)("div",{className:"header__option",children:Object(y.jsx)(m.a,{fontSize:"large"})}),Object(y.jsx)("div",{className:"header__option",children:Object(y.jsx)(O.a,{fontSize:"large"})})]}),Object(y.jsxs)("div",{className:"header__right",children:[Object(y.jsxs)("div",{className:"header__info",children:[Object(y.jsx)(u.a,{src:e.photoURL}),Object(y.jsx)("h4",{children:e.displayName})]}),Object(y.jsx)(x.a,{children:Object(y.jsx)(g.a,{})}),Object(y.jsx)(x.a,{children:Object(y.jsx)(S.a,{})}),Object(y.jsx)(x.a,{children:Object(y.jsx)(A.a,{})}),Object(y.jsx)(x.a,{children:Object(y.jsx)(P.a,{})})]})]})};c(87);var U=function(e){var t=e.src,c=e.Icon,n=e.title;return Object(y.jsxs)("div",{className:"sidebarRow",children:[t&&Object(y.jsx)(u.a,{src:t}),c&&Object(y.jsx)(c,{}),Object(y.jsx)("h4",{children:n})]})},M=c(56),D=c.n(M),G=c(57),X=c.n(G),z=c(58),B=c.n(z),T=c(59),E=c.n(T),R=c(60),Q=c.n(R),V=c(61),H=c.n(V),W=c(120);c(88);var Y=function(){var e=w()[0].user;return Object(y.jsxs)("div",{className:"sidebar",children:[Object(y.jsx)(U,{src:e.photoURL,title:e.displayName}),Object(y.jsx)(U,{Icon:D.a,title:"COVID-19 Information Center"}),Object(y.jsx)(U,{Icon:X.a,title:"Pages"}),Object(y.jsx)(U,{Icon:B.a,title:"Friends"}),Object(y.jsx)(U,{Icon:E.a,title:"Messenger"}),Object(y.jsx)(U,{Icon:Q.a,title:"Marketplace"}),Object(y.jsx)(U,{Icon:H.a,title:"Videos"}),Object(y.jsx)(U,{Icon:W.a,title:"Show More"})]})},J=c(18),Z=c(121),K=c(23),q=K.a.initializeApp({apiKey:"AIzaSyD4VkxOzsUgMdWFFBfbXlfBFzM9KPmgf_U",authDomain:"facebook-clone-yt-176fd.firebaseapp.com",projectId:"facebook-clone-yt-176fd",storageBucket:"facebook-clone-yt-176fd.appspot.com",messagingSenderId:"452357778727",appId:"1:452357778727:web:789c1e58b2aba590b9cd02",measurementId:"G-XZVENDLHK2"}).firestore(),$=K.a.auth(),ee=new K.a.auth.GoogleAuthProvider,te=q;c(93);var ce=function(){var e=w()[0].user,t=Object(n.useState)(""),c=Object(J.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(""),o=Object(J.a)(i,2),r=o[0],j=o[1];return Object(y.jsx)("div",{className:"messageSender",children:Object(y.jsxs)("div",{className:"messageSender__top",children:[Object(y.jsx)(u.a,{src:e.photoURL}),Object(y.jsxs)("form",{children:[Object(y.jsx)("input",{value:s,onChange:function(e){a(e.target.value)},className:"messageSender__input",placeholder:"What's on your mind, ".concat(e.displayName,"?")}),Object(y.jsx)("input",{value:r,onChange:function(e){j(e.target.value)},placeholder:"Image URL (Optional)"}),Object(y.jsx)(Z.a,{onClick:function(t){t.preventDefault(),""===s?alert("Please fill the input to post your feed"):te.collection("posts").add({message:s,timestamp:K.a.firestore.FieldValue.serverTimestamp(),profilePic:e.photoURL,username:e.displayName,image:r}),a(""),j("")},type:"submit",children:"Post"})]})]})})},ne=c(67),se=c.n(ne),ae=c(68),ie=c.n(ae);c(94);var oe=function(e){var t=e.commentProfilePic,c=e.commentUsername,n=e.comment,a=e.commentTimestamp,i=e.commentPostId,o=e.checkId;return Object(y.jsx)(s.a.Fragment,{children:o===i?Object(y.jsxs)("div",{className:"post__comments",children:[Object(y.jsxs)("div",{className:"post__commentTop",children:[Object(y.jsx)(u.a,{src:t,className:"post__commentAvatar"}),Object(y.jsxs)("div",{className:"post__commentTopInfo",children:[Object(y.jsx)("h5",{children:c}),Object(y.jsx)("p",{children:n})]})]}),Object(y.jsxs)("div",{className:"post__commentOptions",children:[Object(y.jsx)("div",{className:"post__commentOption",children:Object(y.jsx)("p",{children:"Like"})}),"\xb7",Object(y.jsx)("div",{className:"post__commentOption",children:Object(y.jsx)("p",{children:"Reply"})}),"\xb7",Object(y.jsx)("div",{className:"post__commentOption",children:Object(y.jsx)("p",{className:"post__commentOptionDate",children:new Date(null===a||void 0===a?void 0:a.toDate()).toLocaleTimeString()})})]})]}):null})},re=c(62),je=c.n(re),de=c(63),be=c.n(de),le=c(64),_e=c.n(le),fe=c(65),he=c.n(fe);c(95);var me=function(e){var t=e.postId,c=w()[0].user,s=Object(n.useState)(""),a=Object(J.a)(s,2),i=a[0],o=a[1];return Object(y.jsx)("div",{className:"postComments__form",children:Object(y.jsxs)("div",{className:"postComment__form",children:[Object(y.jsx)(u.a,{src:c.photoURL}),Object(y.jsxs)("form",{children:[Object(y.jsx)("input",{value:i,onChange:function(e){return o(e.target.value)},placeholder:"Write a comment..."}),Object(y.jsx)(je.a,{}),Object(y.jsx)(be.a,{}),Object(y.jsx)(_e.a,{}),Object(y.jsx)(he.a,{}),Object(y.jsx)("button",{onClick:function(e){e.preventDefault(),""===i?alert("Please type something to post comment."):te.collection("comments").add({comment:i,postId:t,commentProfilePic:c.photoURL,commenterUsername:c.displayName,timestamp:K.a.firestore.FieldValue.serverTimestamp()}),o("")},type:"submit",children:"Hidden Submit"})]})]})})},pe=c(66),Oe=c.n(pe);c(96);var ue=function(e){e.postId;var t=Object(n.useState)(0),c=Object(J.a)(t,2),a=c[0],i=c[1],o=Object(n.useState)(!1),r=Object(J.a)(o,2),j=r[0],d=r[1],b=Object(n.useState)(!1),l=Object(J.a)(b,2),_=l[0],f=l[1];return console.log(a),Object(y.jsxs)(s.a.Fragment,{children:[Object(y.jsx)("div",{className:"post__optionLike",children:!j&&Object(y.jsx)(Oe.a,{onClick:function(){i(a+1),d(!0),f(!1)}})}),Object(y.jsx)("div",{className:"postLikes",children:a}),Object(y.jsx)("div",{className:"post__optionLike",children:!_&&Object(y.jsx)(P.a,{onClick:function(){i(a-1),f(!0),d(!1)}})})]})};c(97);var xe=function(e){var t=e.postId,c=e.profilePic,s=e.image,a=e.username,i=e.timestamp,o=e.message,r=Object(n.useState)([]),j=Object(J.a)(r,2),d=j[0],b=j[1];return Object(n.useEffect)((function(){te.collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){return b(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(y.jsxs)("div",{className:"post",children:[Object(y.jsxs)("div",{className:"post__top",children:[Object(y.jsx)(u.a,{src:c,className:"post__avatar"}),Object(y.jsxs)("div",{className:"post__topInfo",children:[Object(y.jsx)("h3",{children:a}),Object(y.jsx)("p",{children:new Date(null===i||void 0===i?void 0:i.toDate()).toLocaleString()})]})]}),Object(y.jsx)("div",{className:"post__bottom",children:Object(y.jsx)("p",{children:o})}),Object(y.jsx)("div",{className:"post__image",children:Object(y.jsx)("img",{src:s,alt:""})}),Object(y.jsxs)("div",{className:"post__options",children:[Object(y.jsx)(ue,{postId:t}),Object(y.jsxs)("div",{className:"post__option",children:[Object(y.jsx)(se.a,{}),Object(y.jsx)("p",{children:"Comment"})]}),Object(y.jsxs)("div",{className:"post__option",children:[Object(y.jsx)(ie.a,{}),Object(y.jsx)("p",{children:"Share"})]})]}),d.filter((function(e){return e.data.postId===t})).map((function(e){return Object(y.jsx)(oe,{commentPostId:e.data.postId,commentId:e.id,commentProfilePic:e.data.commentProfilePic,commentUsername:e.data.commenterUsername,comment:e.data.comment,commentTimestamp:e.data.timestamp,checkId:t})})),Object(y.jsx)(me,{profilePic:c,postId:t})]})};c(98);var ve=function(){var e=Object(n.useState)([]),t=Object(J.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){te.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(y.jsxs)("div",{className:"feed",children:[Object(y.jsx)(ce,{}),c.map((function(e){return Object(y.jsx)(xe,{postId:e.id,profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image})}))]})},ge=c(41),Ne="SET_USER",Se=function(e,t){switch(t.type){case Ne:return Object(ge.a)(Object(ge.a)({},e),{},{user:t.user});default:return e}};c(99);var ke=function(){var e=w()[1];return Object(y.jsxs)("div",{className:"login",children:[Object(y.jsx)("div",{className:"login__logo",children:Object(y.jsx)("h1",{children:"My Website"})}),Object(y.jsx)(Z.a,{type:"submit",onClick:function(){$.signInWithPopup(ee).then((function(t){e({type:Ne,user:t.user})})).catch((function(e){alert(e.message)}))},children:"Sign In"})]})},Ae=c(69),Ie=c.n(Ae),Pe=c(70),ye=c.n(Pe);c(100);var Fe=function(e){var t=e.profileSrc,c=e.title;return Object(y.jsxs)("div",{className:"people",children:[Object(y.jsx)(u.a,{className:"people__avatar",src:t}),Object(y.jsx)("div",{className:"greenPoint"}),Object(y.jsx)("h4",{children:c})]})};c(101);var Ce=function(){return Object(y.jsxs)("div",{className:"peopleList",children:[Object(y.jsxs)("div",{className:"peopleSide",children:[Object(y.jsx)("h3",{children:"People"}),Object(y.jsx)(Ie.a,{}),Object(y.jsx)(r.a,{}),Object(y.jsx)(ye.a,{})]}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/61773499_2395925907363050_7117871780072521728_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XtmQ0PLUWGoAX-dGcoM&_nc_oc=AQnABPgGSf2J4qgH_swianCDVDX2grY4ghMQfyTwbhbvmzp_-LxFyRW4m8C9enYOwsBS6LzH0qFjQYeyIb_Yf22g&_nc_ht=scontent.fkhi22-1.fna&oh=35d2f0c458f1eb82eab4ad1c9ff1b060&oe=6126FF56",title:"Saad Ahmed"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/120001196_10221288164325869_1489685899080916846_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HYzM4LJG5WwAX_AlxIy&_nc_ht=scontent.fkhi22-1.fna&oh=5c001069efebc468dcb818fa2570ac4e&oe=61263240",title:"Atir Naveed"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/133938315_3599856676758587_136354274592597419_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=aPG_UiOfLSYAX80EhPw&_nc_ht=scontent.fkhi22-1.fna&oh=a93c38dbe58c085d0315d1d2ad7573d0&oe=61266A1B",title:"Muhammad Ahmed Khan"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/58755107_661204617656443_2215424129337655296_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-_VPQ6L3OhwAX_V6iau&_nc_ht=scontent.fkhi22-1.fna&oh=9a2b8fdb37afb8d99e25ffd03adeded1&oe=6127551A",title:"Muhammad Salman"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/219500188_2395268900616477_2790467034487934487_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeE1nPqbM4AxSqa-e7cml94eeRbtnGryJdB5Fu2cavIl0FPfEVIltPBz1ZjZgYcrRbQz7W0aMgcvv045lAyCt5PC&_nc_ohc=93X95O0ab2oAX9vSDp0&_nc_ht=scontent.fkhi17-1.fna&oh=be2e9be10c3c3aa201ac332a71bd9533&oe=6138EA7B",title:"Muhammad Zohaib"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/79858263_2586716661414351_3802321752441225216_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeE4Jmzgs_GL4J1pmWVTBGrAc22k24W9TXRzbaTbhb1NdEFBrOQ_510TGoITC5-ZJvB2gH9szg_hRe9l4KiY1WCv&_nc_ohc=vcUr58KYZUgAX_bDHQR&tn=Z8j2uESF8xTsMzuw&_nc_ht=scontent.fkhi17-1.fna&oh=7c4dcb63aaa5018f72a961c3f4bbd0c7&oe=6138B3F9",title:"Zeerick Steve"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/169156813_1365840437148244_5018693759011699593_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeF3LADiGLSkTYEFZ0sde5wfhdd6eDyG0VSF13p4PIbRVCBXAO4iQ6EMYdParj2SWwsfdiw38b6BNqvpIPCoSpJa&_nc_ohc=nQ58bUmmfTEAX_ozfyF&_nc_ht=scontent.fkhi17-1.fna&oh=7cb16cbf90169171c407cc50c34ffcec&oe=61375F41",title:"Sohail Aslam"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/200853472_1042966539568386_7711824799753192769_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeGMGa2-sagmvn5w9y8IXggAoyehrsuI4rOjJ6Guy4jis1TQ8QXVXCfnq75z1Bs2xjUGJJYr7zsI1Fmz4LG1-ol9&_nc_ohc=fjBmIHGsVUgAX89uHyc&tn=Z8j2uESF8xTsMzuw&_nc_ht=scontent.fkhi17-1.fna&oh=b06240551b7cbef5a0fd0e3bb6c17815&oe=6137B217",title:"Muneeb Saleem"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/202507996_4106069782825114_3272740554989451402_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEOKwhARWmCsexgx4l_DR9Fw8zGfVD6hQDDzMZ9UPqFADwRHiUVx1QPS7ns6jgAjuCPi2prueyGI4B5kmjDkAIC&_nc_ohc=eocNtB5GdhkAX9eO4iL&_nc_ht=scontent.fkhi17-1.fna&oh=a8b7cfbd185e21e631b1fc2c763de694&oe=6136168E",title:"Faiq Saeedi"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/61791008_864975153855700_1931784334490992640_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeHuCFOCt1tCZLxx93R4sGaT9c7TcC8nTWj1ztNwLydNaCA4pTwufSQk2mFjRHUuIhy6I3roAoJJop2AqlGVhV5-&_nc_ohc=7KgYkD1HLXMAX9dAuv4&_nc_ht=scontent.fkhi17-1.fna&oh=b044ed10729672503b0d8dd6b6dc2053&oe=613712A4",title:"Muhammad Muzammil"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/186198524_1904733659676230_8220813108125972026_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEX98wtXOfwZGHUyc_LOvkuTx30CaFTYlNPHfQJoVNiUzltmPUm-AVscZd8aflstE6joGATPGeiLJCsN9fRNlYs&_nc_ohc=xWrgYQ8k9b0AX8Tew95&_nc_ht=scontent.fkhi17-1.fna&oh=8ab71f3e6b21bbe5d40b954092477edb&oe=6138E640",title:"Harris Qureshi"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/161313469_5414957961877988_5755651056590688891_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEGk4bp9w-s0rIQhBczrSPmB4f5IuOMHAAHh_ki44wcANMfUnDm5RXwrEQlfKQNx9dzBY1HB-QpNexKMF9Ijq-B&_nc_ohc=dGaNR13OQBIAX-pKsKr&_nc_ht=scontent.fkhi17-1.fna&oh=a2505a9877067bd123aab300818c3683&oe=613968E3",title:"Arsalan Moin"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/125472160_1579028188973108_2124387205966715548_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeE_wBfpvqL1hZ9p55OFnm4qlVtoIrF1TW-VW2gisXVNb_doudirWbD0R_sRkJ-j8gD2w44xm3XaP23QUlVxQ_Xf&_nc_ohc=V0YGZMfEINQAX-M9ieb&_nc_ht=scontent.fkhi17-1.fna&oh=f3f64d2e25f218658cba8f471269f389&oe=613758AC",title:"Muhammad Umer Qadri"}),Object(y.jsx)(Fe,{profileSrc:"https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.18169-1/p200x200/16683830_118726865313548_2974915176937508821_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=7206a8&_nc_eui2=AeELy-WOYUpJ9_yXHHro1-Ok1MOX6YaDg7vUw5fphoODuzHJEqGUpPmYcRZJVefwgTPsFFzuLZapWFUH1m02Ku6G&_nc_ohc=76GZPPFM9IsAX9DUFdd&_nc_ht=scontent.fkhi17-1.fna&oh=eba1dfd9a10041c4bf7238fe92f22ee5&oe=6137BCDD",title:"Khalid Qurashi"})]})};c(102);var we=function(){var e=w()[0].user;return Object(n.useEffect)((function(){document.title="My App"}),[]),Object(y.jsx)("div",{className:"app",children:e?Object(y.jsxs)(s.a.Fragment,{children:[Object(y.jsx)(L,{}),Object(y.jsxs)("div",{className:"app__body",children:[Object(y.jsx)(Y,{}),Object(y.jsx)(ve,{}),Object(y.jsx)(Ce,{})]})]}):Object(y.jsx)(ke,{})})},Le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,123)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(C,{initialState:{user:null},reducer:Se,children:Object(y.jsx)(we,{})})}),document.getElementById("root")),Le()},79:function(e,t,c){},81:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.f03fa25e.chunk.js.map
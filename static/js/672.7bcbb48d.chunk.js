"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[672],{6672:function(A,t,e){e.r(t),e.d(t,{default:function(){return S}});var n,r=e(168),a=e(501),u=e(6871),c=e(6444),s=e(4299),i=e(5861),o=e(885),p=e(7757),l=e.n(p),f=e(2791),j=e(8565),k=e(5878),v=e(184),z=(0,c.ZP)(a.OL)(n||(n=(0,r.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),S=function(){var A,t,e=(0,u.TH)(),n=null!==(A=null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.from)&&void 0!==A?A:"/",r=function(){var A=(0,f.useState)(null),t=(0,o.Z)(A,2),e=t[0],n=t[1],r=(0,f.useState)(!1),a=(0,o.Z)(r,2),c=a[0],s=a[1],p=(0,f.useState)(""),z=(0,o.Z)(p,2),S=z[0],g=z[1],d=(0,f.useState)(""),h=(0,o.Z)(d,2),w=h[0],x=h[1],B=(0,f.useState)(""),Q=(0,o.Z)(B,2),L=Q[0],E=Q[1],C=(0,f.useState)([]),y=(0,o.Z)(C,2),U=y[0],Z=y[1],K=(0,f.useState)(""),m=(0,o.Z)(K,2),b=m[0],F=m[1],G=(0,u.UO)().itemId;return(0,f.useEffect)((function(){var A=function(){var A=(0,i.Z)(l().mark((function A(){var t,e,r,a,u,c,i,o,p,f;return l().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return s(!0),A.prev=1,A.next=4,(0,j.TP)(G);case 4:t=A.sent,e=t.poster_path,r=t.title,a=t.release_date,u=t.genres,c=t.vote_average,i=e?"https://image.tmdb.org/t/p/w500".concat(e):k,o=a.slice(0,4),p=u.length>0?(0,v.jsx)("p",{children:u.map((function(A){return A.name})).join(", ")}):(0,v.jsx)("p",{children:"No genres found"}),f=c||"No rating yet",n(t),g(r),x(i),E(o),Z(p),F(f),A.next=21;break;case 18:A.prev=18,A.t0=A.catch(1),console.log(A.t0);case 21:return A.prev=21,s(!1),A.finish(21);case 24:case"end":return A.stop()}}),A,null,[[1,18,21,24]])})));return function(){return A.apply(this,arguments)}}();A()}),[G]),{item:e,loading:c,title:S,poster:w,release:L,genres:U,rating:b}}(),a=r.item,c=r.loading,p=r.title,S=r.poster,g=r.release,d=r.genres,h=r.rating;return(0,v.jsxs)(v.Fragment,{children:[c&&(0,v.jsx)(s.Z,{}),a&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(z,{to:n,children:"Go back"}),(0,v.jsx)("hr",{}),(0,v.jsx)("img",{src:S,alt:p}),(0,v.jsxs)("h1",{children:[p," ",g]}),(0,v.jsx)("p",{children:"User Score: ".concat(h)}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:a.overview}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("div",{children:d}),(0,v.jsx)("hr",{}),(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsx)(z,{to:"cast",state:{from:n},children:"Cast"}),(0,v.jsx)(z,{to:"reviews",state:{from:n},children:"Reviews"}),(0,v.jsx)("hr",{}),(0,v.jsx)(u.j3,{})]})]})}},8565:function(A,t,e){e.d(t,{Df:function(){return i},E3:function(){return f},TP:function(){return o},tx:function(){return l},zv:function(){return p}});var n=e(5861),r=e(7757),a=e.n(r),u=e(4569),c=e.n(u),s="f954d1f327dcbc2e185dbd566025454c";c().defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var A=(0,n.Z)(a().mark((function A(){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/trending/all/day?api_key=".concat(s));case 2:return t=A.sent,A.next=5,t.data.results;case 5:return e=A.sent,A.abrupt("return",e);case 7:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),o=function(){var A=(0,n.Z)(a().mark((function A(t){var e,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=A.sent,A.next=5,e.data;case 5:return n=A.sent,A.abrupt("return",n);case 7:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),p=function(){var A=(0,n.Z)(a().mark((function A(t){var e,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=A.sent,A.next=5,e.data;case 5:return n=A.sent,A.abrupt("return",n);case 7:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),l=function(){var A=(0,n.Z)(a().mark((function A(t){var e,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return e=A.sent,A.next=5,e.data;case 5:return n=A.sent,A.abrupt("return",n);case 7:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),f=function(){var A=(0,n.Z)(a().mark((function A(t,e){var n,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("search/movie?api_key=".concat(s,"&page=").concat(e,"&language=en&query=").concat(t));case 2:return n=A.sent,A.next=5,n.data.results;case 5:return r=A.sent,A.abrupt("return",r);case 7:case"end":return A.stop()}}),A)})));return function(t,e){return A.apply(this,arguments)}}()},5878:function(A){A.exports="data:image/jpeg;base64,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8UffPo/MeKPvn0fmPFH3z6PzA5Ie+fR+Y8UPfPo/MeKHvn0fmLP5Oykk4HlLLricqb4UCe8CB6mucLc/MIWfMtSyXcgy1qawLYkyQAHf1Crfmz5z/J2xhKVLCXv1ZV82E3pv7/Np2wm0pUtPOLKkczTnErSQpNejJ3wzaEu88GaOIcKFLvXEFJvU9eWGrTlXloSm/AcJDa1IISv4Ew++3LMrecqEIFVGGLRl33ebF+lRSVJv0lIWkdaaw3akq6tCU3964aNuFBCFnsBiRnVTa5lKm1J5t1SU/pIqB/7E3Nvi0GJVtS20lBWtQbv60I7egdphFqSi1oSCu8Wq9Q4UkIUewKgzzAZmHaqvWCoLyZnTDtpSzKy3RxSwhKylCCo3quvJCrSlbxlaL9znhVsISVKIHSaQbRmFy7jzahknktJqmn6CQKEdvqU3Kvuvz60NkhyR5tB7V5ckGXe5+zFhBo00sLOaSgCFMzrfO3iXQhU64pwt05zmyBQpr3wZN/8AvrhStAUqXW2X11Ky0qtCo9BMPF6cn0tKZWzfyj6Rf0rVVOpPVEvKukyjSpeZvm1JK79080m8605cvcItVlx+zpltsXylIoE9piclXZialr3+ENPoUrNv0gCObmXpWWkjLLbU2Wr9ZoEANHpSeutIkEOtOzyFtKSFzCnEqyUIVSJmXcdn2l0IR/Z3kFfYVkUjmppyRYkDLLQtBaCnDS8AbIN8D11pD7U2mXtKWRKuLL63FIWCLyiwOk1yGJRl1E++4UFKVMspB7SitREpLzUiJN5bC13rC2XEpoVJqu+BAhmXeUy+XZZaSueDoQKEhNUmp1ZfUqDwutNPNqbcQlaFChSegiGJGUllLU00AVdKiSTQdVT5AyRQRQHyKD+jTAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazuj//xAAUEQEAAAAAAAAAAAAAAAAAAACA/9oACAECAQE/ABD/AP/EABwRAQABBAMAAAAAAAAAAAAAABEAEDAxYAFAUP/aAAgBAwEBPwDXGJG9mF/nPhFCp0Hbv//Z"},168:function(A,t,e){function n(A,t){return t||(t=A.slice(0)),Object.freeze(Object.defineProperties(A,{raw:{value:Object.freeze(t)}}))}e.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=672.7bcbb48d.chunk.js.map
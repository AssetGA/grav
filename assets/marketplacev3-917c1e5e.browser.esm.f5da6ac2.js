var g=Object.defineProperty;var l=(a,t,r)=>t in a?g(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var p=(a,t,r)=>(l(a,typeof t!="symbol"?t+"":t,r),r);import{a1 as f,a5 as s,a6 as W,a7 as m,a8 as E,C,A,a as w,a2 as R,c as I,d as T,i as L,G as O,h as S,k as F,l as _,T as U,a9 as n,aa as b,ab as D,ac as N}from"./index.e2ad2f96.js";const i=class{get directListings(){return s(this.detectDirectListings(),W)}get englishAuctions(){return s(this.detectEnglishAuctions(),m)}get offers(){return s(this.detectOffers(),E)}get chainId(){return this._chainId}constructor(t,r,e){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,o,h,e);this._chainId=d,this.abi=A.parse(o||[]),this.contractWrapper=u,this.storage=e,this.metadata=new w(this.contractWrapper,R,this.storage),this.app=new I(this.contractWrapper,this.metadata,this.storage),this.roles=new T(this.contractWrapper,i.contractRoles),this.encoder=new L(this.contractWrapper),this.estimator=new O(this.contractWrapper),this.events=new S(this.contractWrapper),this.platformFees=new F(this.contractWrapper),this.interceptor=new _(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async prepare(t,r,e){return U.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectDirectListings(){if(n(this.contractWrapper,"DirectListings"))return new b(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(n(this.contractWrapper,"EnglishAuctions"))return new D(this.contractWrapper,this.storage)}detectOffers(){if(n(this.contractWrapper,"Offers"))return new N(this.contractWrapper,this.storage)}};let c=i;p(c,"contractRoles",f);export{c as MarketplaceV3};

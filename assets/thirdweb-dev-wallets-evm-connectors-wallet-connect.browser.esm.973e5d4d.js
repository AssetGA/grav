import{aL as l,aM as d,aN as I,aS as W,aU as o,aQ as s,aO as y,aP as q,aT as L,aV as z,aR as K}from"./index.b5eb07ff.js";import{W as Y,U as k,S as O}from"./errors-4bdf81d2.browser.esm.6b46b131.js";const $=new Set([1,137,10,42161,56]),j="eip155",x="wagmi.requestedChains",N="wallet_addEthereumChain",S="last-used-chain-id";var n=new WeakMap,f=new WeakMap,u=new WeakMap,P=new WeakSet,H=new WeakSet,E=new WeakSet,M=new WeakSet,C=new WeakSet,A=new WeakSet,D=new WeakSet,U=new WeakSet;class tt extends Y{constructor(i){super({...i,options:{isNewChainsStale:!0,...i.options}}),l(this,U),l(this,D),l(this,A),l(this,C),l(this,M),l(this,E),l(this,H),l(this,P),d(this,"id",z.walletConnect),d(this,"name","WalletConnect"),d(this,"ready",!0),I(this,n,{writable:!0,value:void 0}),I(this,f,{writable:!0,value:void 0}),I(this,u,{writable:!0,value:void 0}),d(this,"filteredChains",void 0),d(this,"onAccountsChanged",t=>{t.length===0?this.emit("disconnect"):this.emit("change",{account:y(t[0])})}),d(this,"onChainChanged",async t=>{const a=Number(t),e=this.isChainUnsupported(a);await s(this,u).setItem(S,String(t)),this.emit("change",{chain:{id:a,unsupported:e}})}),d(this,"onDisconnect",async()=>{await o(this,C,g).call(this,[]),await s(this,u).removeItem(S),this.emit("disconnect")}),d(this,"onDisplayUri",t=>{this.emit("message",{type:"display_uri",data:t})}),d(this,"onConnect",()=>{this.emit("connect",{provider:s(this,n)})}),W(this,u,i.options.storage),o(this,P,T).call(this),this.filteredChains=this.chains.length>50?this.chains.filter(t=>$.has(t.chainId)):this.chains}async connect(){var a;let{chainId:i,pairingTopic:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{let e=i;if(!e){const w=await s(this,u).getItem(S),c=w?parseInt(w):void 0;c&&!this.isChainUnsupported(c)?e=c:e=(a=this.filteredChains[0])==null?void 0:a.chainId}if(!e)throw new Error("No chains found on connector.");const r=await this.getProvider();this.setupListeners();const p=await o(this,E,b).call(this);if(r.session&&p&&await r.disconnect(),!r.session||p){const w=this.filteredChains.filter(c=>c.chainId!==e).map(c=>c.chainId);this.emit("message",{type:"connecting"}),await r.connect({pairingTopic:t,chains:[e],optionalChains:w.length>0?w:[e]}),await o(this,C,g).call(this,this.filteredChains.map(c=>{let{chainId:J}=c;return J}))}const v=await r.enable();if(v.length===0)throw new Error("No accounts found on provider.");const _=y(v[0]),m=await this.getChainId(),G=this.isChainUnsupported(m);return{account:_,chain:{id:m,unsupported:G},provider:new q(r)}}catch(e){throw/user rejected/i.test(e==null?void 0:e.message)?new k(e):e}}async disconnect(){const i=await this.getProvider();try{await i.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{o(this,M,R).call(this),await o(this,C,g).call(this,[])}}async getAccount(){const{accounts:i}=await this.getProvider();if(i.length===0)throw new Error("No accounts found on provider.");return y(i[0])}async getChainId(){const{chainId:i}=await this.getProvider();return i}async getProvider(){let{chainId:i}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(s(this,n)||await o(this,P,T).call(this),i&&await this.switchChain(i),!s(this,n))throw new Error("No provider found.");return s(this,n)}async getSigner(){let{chainId:i}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[t,a]=await Promise.all([this.getProvider({chainId:i}),this.getAccount()]);return new q(t,i).getSigner(a)}async isAuthorized(){try{const[i,t]=await Promise.all([this.getAccount(),this.getProvider()]),a=await o(this,E,b).call(this);if(!i)return!1;if(a&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(i){var a;const t=this.chains.find(e=>e.chainId===i);if(!t)throw new O(`Chain with ID: ${i}, not found on connector.`);try{const e=await this.getProvider(),r=o(this,D,F).call(this),p=o(this,U,Q).call(this);if(!r.includes(i)&&p.includes(N)){const _=(a=t.explorers)!=null&&a.length?{blockExplorerUrls:[t.explorers[0].url]}:{};await e.request({method:N,params:[{chainId:L(t.chainId),chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpc],..._}]});const m=await o(this,A,V).call(this);m.push(i),await o(this,C,g).call(this,m)}return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:L(i)}]}),t}catch(e){const r=typeof e=="string"?e:e==null?void 0:e.message;throw/user rejected request/i.test(r)?new k(e):new O(e)}}async setupListeners(){!s(this,n)||(o(this,M,R).call(this),s(this,n).on("accountsChanged",this.onAccountsChanged),s(this,n).on("chainChanged",this.onChainChanged),s(this,n).on("disconnect",this.onDisconnect),s(this,n).on("session_delete",this.onDisconnect),s(this,n).on("display_uri",this.onDisplayUri),s(this,n).on("connect",this.onConnect))}}async function T(){return s(this,f)||W(this,f,o(this,H,B).call(this)),s(this,f)}async function B(){const{default:h,OPTIONAL_EVENTS:i,OPTIONAL_METHODS:t}=await K(()=>import("./index.es.b5bac6ad.js"),["assets/index.es.b5bac6ad.js","assets/index.b5eb07ff.js","assets/index.64b047fa.css","assets/index.3ec3aafb.js"]),[a,...e]=this.filteredChains.map(r=>{let{chainId:p}=r;return p});a&&W(this,n,await h.init({showQrModal:this.options.qrcode!==!1,projectId:this.options.projectId,optionalMethods:t,optionalEvents:i,chains:[a],optionalChains:e,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map(r=>[r.chainId,r.rpc[0]])),qrModalOptions:this.options.qrModalOptions}))}async function b(){if(o(this,U,Q).call(this).includes(N)||!this.options.isNewChainsStale)return!1;const i=await o(this,A,V).call(this),t=this.filteredChains.map(e=>{let{chainId:r}=e;return r}),a=o(this,D,F).call(this);return a.length&&!a.some(e=>t.includes(e))?!1:!t.every(e=>i.includes(e))}function R(){!s(this,n)||(s(this,n).removeListener("accountsChanged",this.onAccountsChanged),s(this,n).removeListener("chainChanged",this.onChainChanged),s(this,n).removeListener("disconnect",this.onDisconnect),s(this,n).removeListener("session_delete",this.onDisconnect),s(this,n).removeListener("display_uri",this.onDisplayUri),s(this,n).removeListener("connect",this.onConnect))}async function g(h){await s(this,u).setItem(x,JSON.stringify(h))}async function V(){const h=await s(this,u).getItem(x);return h?JSON.parse(h):[]}function F(){var i,t,a;if(!s(this,n))return[];const h=(a=(t=(i=s(this,n).session)==null?void 0:i.namespaces[j])==null?void 0:t.chains)==null?void 0:a.map(e=>parseInt(e.split(":")[1]||""));return h!=null?h:[]}function Q(){var i,t;if(!s(this,n))return[];const h=(t=(i=s(this,n).session)==null?void 0:i.namespaces[j])==null?void 0:t.methods;return h!=null?h:[]}export{tt as WalletConnectConnector};

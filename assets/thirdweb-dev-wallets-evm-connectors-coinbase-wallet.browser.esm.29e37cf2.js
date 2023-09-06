import{aL as I,aM as c,aN as w,aO as l,aP as m,aQ as o,aR as P,aS as v,aT as E,aU as C,aV as _}from"./index.b5eb07ff.js";import{W as U,U as u,C as b,A,S}from"./errors-4bdf81d2.browser.esm.6b46b131.js";import{n as f}from"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";var h=new WeakMap,d=new WeakMap,p=new WeakSet;class D extends U{constructor(t){let{chains:e,options:a}=t;super({chains:e,options:{reloadOnDisconnect:!1,...a}}),I(this,p),c(this,"id",_.coinbase),c(this,"name","Coinbase Wallet"),c(this,"ready",!0),w(this,h,{writable:!0,value:void 0}),w(this,d,{writable:!0,value:void 0}),c(this,"onAccountsChanged",n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:l(n[0])})}),c(this,"onChainChanged",n=>{const i=f(n),s=this.isChainUnsupported(i);this.emit("change",{chain:{id:i,unsupported:s}})}),c(this,"onDisconnect",()=>{this.emit("disconnect")})}async connect(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();this.setupListeners(),this.emit("message",{type:"connecting"});const a=await e.enable(),n=l(a[0]);let i=await this.getChainId(),s=this.isChainUnsupported(i);if(t&&i!==t)try{i=(await this.switchChain(t)).chainId,s=this.isChainUnsupported(i)}catch(r){console.error(`Connected but failed to switch to desired chain ${t}`,r)}return{account:n,chain:{id:i,unsupported:s},provider:new m(e)}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new u(e):e}}async disconnect(){if(!o(this,d))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});if(e.length===0)throw new Error("No accounts found");return l(e[0])}async getChainId(){const t=await this.getProvider();return f(t.chainId)}async getProvider(){var t;if(!o(this,d)){let e=(await P(()=>import("./index.4061750e.js").then(r=>r.i),["assets/index.4061750e.js","assets/index.b5eb07ff.js","assets/index.64b047fa.css","assets/index.3ec3aafb.js"])).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),v(this,h,new e(this.options));const a=(t=o(this,h).walletExtension)==null?void 0:t.getChainId(),n=this.chains.find(r=>this.options.chainId?r.chainId===this.options.chainId:r.chainId===a)||this.chains[0],i=this.options.chainId||(n==null?void 0:n.chainId),s=this.options.jsonRpcUrl||(n==null?void 0:n.rpc[0]);v(this,d,o(this,h).makeWeb3Provider(s,i))}return o(this,d)}async getSigner(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[e,a]=await Promise.all([this.getProvider(),this.getAccount()]);return new m(e,t).getSigner(a)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var n;const e=await this.getProvider(),a=E(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:a}]}),(n=this.chains.find(i=>i.chainId===t))!=null?n:{chainId:t,name:`Chain ${a}`,slug:`${a}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],testnet:!1,chain:"ethereum",shortName:"eth"}}catch(i){const s=this.chains.find(r=>r.chainId===t);if(!s)throw new b({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:a,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:s.rpc,blockExplorerUrls:this.getBlockExplorerUrls(s)}]}),s}catch(r){throw C(this,p,y).call(this,r)?new u(r):new A}throw C(this,p,y).call(this,i)?new u(i):new S(i)}}async setupListeners(){const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)}async getQrUrl(){if(await this.getProvider(),!o(this,h))throw new Error("Coinbase Wallet SDK not initialized");return o(this,h).getQrUrl()}}function y(g){return/(user rejected)/i.test(g.message)}export{D as CoinbaseWalletConnector};

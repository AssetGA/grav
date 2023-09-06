import{C as W,_ as s,a as d,T as o,u as n,A as m,c as g,aB as v,d as C,e as f,k as y,G as b,i as R,m as A,B as w,O as P,ai as k,J as O,aC as S}from"./index.b5eb07ff.js";class u{get chainId(){return this._chainId}constructor(e,t,a){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(e,t,c,r,a);s(this,"contractWrapper",void 0),s(this,"storage",void 0),s(this,"abi",void 0),s(this,"metadata",void 0),s(this,"app",void 0),s(this,"encoder",void 0),s(this,"estimator",void 0),s(this,"events",void 0),s(this,"roles",void 0),s(this,"interceptor",void 0),s(this,"_chainId",void 0),s(this,"withdraw",d(async i=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await n(i)]}))),s(this,"withdrawToken",d(async(i,l)=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:[await n(l),await n(i)]}))),s(this,"distribute",d(async()=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]}))),s(this,"distributeToken",d(async i=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await n(i)]}))),this._chainId=p,this.abi=m.parse(c||[]),this.contractWrapper=h,this.storage=a,this.metadata=new g(this.contractWrapper,v,this.storage),this.app=new C(this.contractWrapper,this.metadata,this.storage),this.roles=new f(this.contractWrapper,u.contractRoles),this.encoder=new y(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.events=new R(this.contractWrapper),this.interceptor=new A(this.contractWrapper)}onNetworkUpdated(e){this.contractWrapper.updateSignerOrProvider(e)}getAddress(){return this.contractWrapper.readContract.address}async getAllRecipients(){const e=[];let t=w.from(0);const a=await this.contractWrapper.readContract.payeeCount();for(;t.lt(a);)try{const r=await this.contractWrapper.readContract.payee(t);e.push(await this.getRecipientSplitPercentage(r)),t=t.add(1)}catch(r){if("method"in r&&r.method.toLowerCase().includes("payee(uint256)"))break;throw r}return e}async balanceOfAllRecipients(){const e=await this.getAllRecipients(),t={};for(const a of e)t[a.address]=await this.balanceOf(a.address);return t}async balanceOfTokenAllRecipients(e){const t=await n(e),a=await this.getAllRecipients(),r={};for(const c of a)r[c.address]=await this.balanceOfToken(c.address,t);return r}async balanceOf(e){const t=await n(e),a=await this.contractWrapper.readContract.provider.getBalance(this.getAddress()),r=await this.contractWrapper.readContract["totalReleased()"](),c=a.add(r);return this._pendingPayment(t,c,await this.contractWrapper.readContract["released(address)"](t))}async balanceOfToken(e,t){const a=await n(t),r=await n(e),p=await new P(a,k,this.contractWrapper.getProvider()).balanceOf(this.getAddress()),h=await this.contractWrapper.readContract["totalReleased(address)"](a),i=p.add(h),l=await this._pendingPayment(r,i,await this.contractWrapper.readContract["released(address,address)"](a,r));return await O(this.contractWrapper.getProvider(),a,l)}async getRecipientSplitPercentage(e){const t=await n(e),[a,r]=await Promise.all([this.contractWrapper.readContract.totalShares(),this.contractWrapper.readContract.shares(e)]);return{address:t,splitPercentage:r.mul(w.from(1e7)).div(a).toNumber()/1e5}}async _pendingPayment(e,t,a){return t.mul(await this.contractWrapper.readContract.shares(await n(e))).div(await this.contractWrapper.readContract.totalShares()).sub(a)}async prepare(e,t,a){return o.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:t,overrides:a})}async call(e,t,a){return this.contractWrapper.call(e,t,a)}}s(u,"contractRoles",S);export{u as Split};

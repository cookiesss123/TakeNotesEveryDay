import{x as Me,y as wh,B as Eh,C as bh}from"./index-c5b4433a.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=function(n,e){if(!n)throw Ut(e)},Ut=function(n){return new Error("Firebase Database ("+Ba.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ch=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],a=n[t++],d=n[t++],h=((s&7)<<18|(r&63)<<12|(a&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const r=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Bs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],a=s+1<n.length,d=a?n[s+1]:0,h=s+2<n.length,c=h?n[s+2]:0,g=r>>2,p=(r&3)<<4|d>>4;let _=(d&15)<<2|c>>6,v=c&63;h||(v=64,a||(_=64)),i.push(t[g],t[p],t[_],t[v])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ua(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ch(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||d==null||c==null||p==null)throw new Ih;const _=r<<2|d>>4;if(i.push(_),c!==64){const v=d<<4&240|c>>2;if(i.push(v),p!==64){const w=c<<6&192|p;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ih extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wa=function(n){const e=Ua(n);return Bs.encodeByteArray(e,!0)},Xn=function(n){return Wa(n).replace(/\./g,"")},Zn=function(n){try{return Bs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){return Ha(void 0,n)}function Ha(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Sh(t)||(n[t]=Ha(n[t],e[t]));return n}function Sh(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=()=>kh().__FIREBASE_DEFAULTS__,Rh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ph=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zn(n[1]);return e&&JSON.parse(e)},Us=()=>{try{return Ah()||Rh()||Ph()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$a=n=>{var e,t;return(t=(e=Us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Nh=n=>{const e=$a(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Va=()=>{var n;return(n=Us())===null||n===void 0?void 0:n.config},ja=n=>{var e;return(e=Us())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),d="";return[Xn(JSON.stringify(t)),Xn(JSON.stringify(a)),d].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ws(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Dh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xh(){const n=X();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function za(){return Ba.NODE_ADMIN===!0}function Mh(){try{return typeof indexedDB=="object"}catch{return!1}}function Lh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="FirebaseError";class Ke extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Fh,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sn.prototype.create)}}class Sn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?Bh(r,i):"Error",d=`${this.serviceName}: ${a} (${s}).`;return new Ke(s,d,i)}}function Bh(n,e){return n.replace(Uh,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Uh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n){return JSON.parse(n)}function q(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=fn(Zn(r[0])||""),t=fn(Zn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Wh=function(n){const e=Ga(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Hh=function(n){const e=Ga(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Nt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ei(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ti(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],a=e[s];if(No(r)&&No(a)){if(!ti(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function No(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function on(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function an(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const _=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(_<<1|_>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],a=this.chain_[2],d=this.chain_[3],h=this.chain_[4],c,g;for(let p=0;p<80;p++){p<40?p<20?(c=d^r&(a^d),g=1518500249):(c=r^a^d,g=1859775393):p<60?(c=r&a|d&(r|a),g=2400959708):(c=r^a^d,g=3395469782);const _=(s<<5|s>>>27)+c+h+g+i[p]&4294967295;h=d,d=a,a=(r<<30|r>>>2)&4294967295,r=s,s=_}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let a=this.inbuf_;for(;s<t;){if(a===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(r),a=0;break}}else for(;s<t;)if(r[a]=e[s],++a,++s,a===this.blockSize){this.compress_(r),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Vh(n,e){const t=new jh(n,e);return t.subscribe.bind(t)}class jh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");qh(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Zi),s.error===void 0&&(s.error=Zi),s.complete===void 0&&(s.complete=Zi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zi(){}function Ei(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,y(i<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(i)-56320;s=65536+(r<<10)+a}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n){return n&&n._delegate?n._delegate:n}class rt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Tn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yh(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,a]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(r);i===d&&a.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Kh(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kh(n){return n===et?void 0:n}function Yh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const Jh={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Xh=O.INFO,Zh={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ef=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Zh[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hs{constructor(e){this.name=e,this._logLevel=Xh,this._logHandler=ef,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const tf=(n,e)=>e.some(t=>n instanceof t);let Oo,Do;function nf(){return Oo||(Oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sf(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ka=new WeakMap,_s=new WeakMap,Ya=new WeakMap,es=new WeakMap,$s=new WeakMap;function rf(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t($e(n.result)),s()},a=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ka.set(t,n)}).catch(()=>{}),$s.set(e,n),e}function of(n){if(_s.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),s()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});_s.set(n,e)}let ms={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _s.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ya.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $e(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function af(n){ms=n(ms)}function lf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ts(this),e,...t);return Ya.set(i,e.sort?e.sort():[e]),$e(i)}:sf().includes(n)?function(...e){return n.apply(ts(this),e),$e(Ka.get(this))}:function(...e){return $e(n.apply(ts(this),e))}}function cf(n){return typeof n=="function"?lf(n):(n instanceof IDBTransaction&&of(n),tf(n,nf())?new Proxy(n,ms):n)}function $e(n){if(n instanceof IDBRequest)return rf(n);if(es.has(n))return es.get(n);const e=cf(n);return e!==n&&(es.set(n,e),$s.set(e,n)),e}const ts=n=>$s.get(n);function uf(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(n,e),d=$e(a);return i&&a.addEventListener("upgradeneeded",h=>{i($e(a.result),h.oldVersion,h.newVersion,$e(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),d.then(h=>{r&&h.addEventListener("close",()=>r()),s&&h.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),d}const df=["get","getKey","getAll","getAllKeys","count"],hf=["put","add","delete","clear"],ns=new Map;function xo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ns.get(e))return ns.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=hf.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||df.includes(t)))return;const r=async function(a,...d){const h=this.transaction(a,s?"readwrite":"readonly");let c=h.store;return i&&(c=c.index(d.shift())),(await Promise.all([c[t](...d),s&&h.done]))[0]};return ns.set(e,r),r}af(n=>({...n,get:(e,t,i)=>xo(e,t)||n.get(e,t,i),has:(e,t)=>!!xo(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pf(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function pf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ys="@firebase/app",Mo="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Hs("@firebase/app"),gf="@firebase/app-compat",_f="@firebase/analytics-compat",mf="@firebase/analytics",yf="@firebase/app-check-compat",vf="@firebase/app-check",wf="@firebase/auth",Ef="@firebase/auth-compat",bf="@firebase/database",Cf="@firebase/database-compat",If="@firebase/functions",Tf="@firebase/functions-compat",Sf="@firebase/installations",kf="@firebase/installations-compat",Af="@firebase/messaging",Rf="@firebase/messaging-compat",Pf="@firebase/performance",Nf="@firebase/performance-compat",Of="@firebase/remote-config",Df="@firebase/remote-config-compat",xf="@firebase/storage",Mf="@firebase/storage-compat",Lf="@firebase/firestore",Ff="@firebase/firestore-compat",Bf="firebase",Uf="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="[DEFAULT]",Wf={[ys]:"fire-core",[gf]:"fire-core-compat",[mf]:"fire-analytics",[_f]:"fire-analytics-compat",[vf]:"fire-app-check",[yf]:"fire-app-check-compat",[wf]:"fire-auth",[Ef]:"fire-auth-compat",[bf]:"fire-rtdb",[Cf]:"fire-rtdb-compat",[If]:"fire-fn",[Tf]:"fire-fn-compat",[Sf]:"fire-iid",[kf]:"fire-iid-compat",[Af]:"fire-fcm",[Rf]:"fire-fcm-compat",[Pf]:"fire-perf",[Nf]:"fire-perf-compat",[Of]:"fire-rc",[Df]:"fire-rc-compat",[xf]:"fire-gcs",[Mf]:"fire-gcs-compat",[Lf]:"fire-fst",[Ff]:"fire-fst-compat","fire-js":"fire-js",[Bf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Map,ws=new Map;function Hf(n,e){try{n.container.addComponent(e)}catch(t){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ot(n){const e=n.name;if(ws.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;ws.set(e,n);for(const t of ni.values())Hf(t,n);return!0}function Vs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ve=new Sn("app","Firebase",$f);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=Uf;function Qa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:vs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ve.create("bad-app-name",{appName:String(s)});if(t||(t=Va()),!t)throw Ve.create("no-options");const r=ni.get(s);if(r){if(ti(t,r.options)&&ti(i,r.config))return r;throw Ve.create("duplicate-app",{appName:s})}const a=new Qh(s);for(const h of ws.values())a.addComponent(h);const d=new Vf(t,i,a);return ni.set(s,d),d}function Ja(n=vs){const e=ni.get(n);if(!e&&n===vs&&Va())return Qa();if(!e)throw Ve.create("no-app",{appName:n});return e}function je(n,e,t){var i;let s=(i=Wf[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const d=[`Unable to register library "${s}" with version "${e}":`];r&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&d.push("and"),a&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(d.join(" "));return}Ot(new rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="firebase-heartbeat-database",qf=1,pn="firebase-heartbeat-store";let is=null;function Xa(){return is||(is=uf(jf,qf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pn)}}}).catch(n=>{throw Ve.create("idb-open",{originalErrorMessage:n.message})})),is}async function zf(n){try{return await(await Xa()).transaction(pn).objectStore(pn).get(Za(n))}catch(e){if(e instanceof Ke)ot.warn(e.message);else{const t=Ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(t.message)}}}async function Lo(n,e){try{const i=(await Xa()).transaction(pn,"readwrite");await i.objectStore(pn).put(e,Za(n)),await i.done}catch(t){if(t instanceof Ke)ot.warn(t.message);else{const i=Ve.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ot.warn(i.message)}}}function Za(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=1024,Kf=30*24*60*60*1e3;class Yf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Kf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fo(),{heartbeatsToSend:t,unsentEntries:i}=Qf(this._heartbeatsCache.heartbeats),s=Xn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Fo(){return new Date().toISOString().substring(0,10)}function Qf(n,e=Gf){const t=[];let i=n.slice();for(const s of n){const r=t.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),Bo(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Bo(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Jf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mh()?Lh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bo(n){return Xn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){Ot(new rt("platform-logger",e=>new ff(e),"PRIVATE")),Ot(new rt("heartbeat",e=>new Yf(e),"PRIVATE")),je(ys,Mo,n),je(ys,Mo,"esm2017"),je("fire-js","")}Xf("");var Zf="firebase",ep="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je(Zf,ep,"app");const Uo="@firebase/database",Wo="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el="";function tp(n){el=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),q(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:fn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return we(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new np(e)}}catch{}return new ip},nt=tl("localStorage"),Es=tl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Hs("@firebase/database"),sp=function(){let n=1;return function(){return n++}}(),nl=function(n){const e=zh(n),t=new $h;t.update(e);const i=t.digest();return Bs.encodeByteArray(i)},kn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=kn.apply(null,i):typeof i=="object"?e+=q(i):e+=i,e+=" "}return e};let it=null,Ho=!0;const rp=function(n,e){y(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Tt.logLevel=O.VERBOSE,it=Tt.log.bind(Tt),e&&Es.set("logging_enabled",!0)):typeof n=="function"?it=n:(it=null,Es.remove("logging_enabled"))},Y=function(...n){if(Ho===!0&&(Ho=!1,it===null&&Es.get("logging_enabled")===!0&&rp(!0)),it){const e=kn.apply(null,n);it(e)}},An=function(n){return function(...e){Y(n,...e)}},bs=function(...n){const e="FIREBASE INTERNAL ERROR: "+kn(...n);Tt.error(e)},ke=function(...n){const e=`FIREBASE FATAL ERROR: ${kn(...n)}`;throw Tt.error(e),new Error(e)},Z=function(...n){const e="FIREBASE WARNING: "+kn(...n);Tt.warn(e)},op=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},js=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ap=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Dt="[MIN_NAME]",at="[MAX_NAME]",ft=function(n,e){if(n===e)return 0;if(n===Dt||e===at)return-1;if(e===Dt||n===at)return 1;{const t=$o(n),i=$o(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},lp=function(n,e){return n===e?0:n<e?-1:1},tn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+q(e))},qs=function(n){if(typeof n!="object"||n===null)return q(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=q(e[i]),t+=":",t+=qs(n[e[i]]);return t+="}",t},il=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Q(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const sl=function(n){y(!js(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,a,d,h;n===0?(r=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=d+i,a=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(r=0,a=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(h=t;h;h-=1)c.push(a%2?1:0),a=Math.floor(a/2);for(h=e;h;h-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const g=c.join("");let p="";for(h=0;h<64;h+=8){let _=parseInt(g.substr(h,8),2).toString(16);_.length===1&&(_="0"+_),p=p+_}return p.toLowerCase()},cp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},up=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const hp=new RegExp("^-?(0*)\\d{1,10}$"),fp=-2147483648,pp=2147483647,$o=function(n){if(hp.test(n)){const e=Number(n);if(e>=fp&&e<=pp)return e}return null},$t=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Z("Exception was thrown by user callback.",t),e},Math.floor(0))}},gp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ln=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Z(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Y("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Z(e)}}class St{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}St.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="5",rl="v",ol="s",al="r",ll="f",cl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ul="ls",dl="p",Cs="ac",hl="websocket",fl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,i,s,r=!1,a="",d=!1,h=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=a,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=nt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&nt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function yp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gl(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let i;if(e===hl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===fl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yp(n)&&(t.ns=n.namespace);const s=[];return Q(t,(r,a)=>{s.push(r+"="+a)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.counters_={}}incrementCounter(e,t=1){we(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Th(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss={},rs={};function Gs(n){const e=n.toString();return ss[e]||(ss[e]=new vp),ss[e]}function wp(n,e){const t=n.toString();return rs[t]||(rs[t]=e()),rs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&$t(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="start",bp="close",Cp="pLPCommand",Ip="pRTLPCB",_l="id",ml="pw",yl="ser",Tp="cb",Sp="seg",kp="ts",Ap="d",Rp="dframe",vl=1870,wl=30,Pp=vl-wl,Np=25e3,Op=3e4;class Ct{constructor(e,t,i,s,r,a,d){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=a,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=An(e),this.stats_=Gs(t),this.urlFn=h=>(this.appCheckToken&&(h[Cs]=this.appCheckToken),gl(t,fl,h))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ep(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Op)),ap(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ks((...r)=>{const[a,d,h,c,g]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===Vo)this.id=d,this.password=h;else if(a===bp)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...r)=>{const[a,d]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(a,d)},()=>{this.onClosed_()},this.urlFn);const i={};i[Vo]="t",i[yl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Tp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[rl]=zs,this.transportSessionId&&(i[ol]=this.transportSessionId),this.lastSessionId&&(i[ul]=this.lastSessionId),this.applicationId&&(i[dl]=this.applicationId),this.appCheckToken&&(i[Cs]=this.appCheckToken),typeof location<"u"&&location.hostname&&cl.test(location.hostname)&&(i[al]=ll);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ct.forceAllow_=!0}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){return Ct.forceAllow_?!0:!Ct.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cp()&&!up()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Wa(t),s=il(i,Pp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Rp]="t",i[_l]=e,i[ml]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=q(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ks{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sp(),window[Cp+this.uniqueCallbackIdentifier]=e,window[Ip+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ks.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(d){Y("frame writing exception"),d.stack&&Y(d.stack),Y(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Y("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_l]=this.myID,e[ml]=this.myPW,e[yl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wl+i.length<=vl;){const a=this.pendingSegs.shift();i=i+"&"+Sp+s+"="+a.seg+"&"+kp+s+"="+a.ts+"&"+Ap+s+"="+a.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Np)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Y("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=16384,xp=45e3;let ii=null;typeof MozWebSocket<"u"?ii=MozWebSocket:typeof WebSocket<"u"&&(ii=WebSocket);class he{constructor(e,t,i,s,r,a,d){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=An(this.connId),this.stats_=Gs(t),this.connURL=he.connectionURL_(t,a,d,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const a={};return a[rl]=zs,typeof location<"u"&&location.hostname&&cl.test(location.hostname)&&(a[al]=ll),t&&(a[ol]=t),i&&(a[ul]=i),s&&(a[Cs]=s),r&&(a[dl]=r),gl(e,hl,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,nt.set("previous_websocket_failure",!0);try{let i;za(),this.mySock=new ii(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){he.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ii!==null&&!he.forceDisallow_}static previouslyFailed(){return nt.isInMemoryStorage||nt.get("previous_websocket_failure")===!0}markConnectionHealthy(){nt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=fn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=il(t,Dp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}he.responsesRequiredToBeHealthy=2;he.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ct,he]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=he&&he.isAvailable();let i=t&&!he.previouslyFailed();if(e.webSocketOnly&&(t||Z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[he];else{const s=this.transports_=[];for(const r of gn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);gn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=6e4,Lp=5e3,Fp=10*1024,Bp=100*1024,os="t",jo="d",Up="s",qo="r",Wp="e",zo="o",Go="a",Ko="n",Yo="p",Hp="h";class $p{constructor(e,t,i,s,r,a,d,h,c,g){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=a,this.onReady_=d,this.onDisconnect_=h,this.onKill_=c,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=An("c:"+this.id+":"),this.transportManager_=new gn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ln(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(os in e){const t=e[os];t===Go?this.upgradeIfSecondaryHealthy_():t===qo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=tn("t",e),i=tn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Go,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ko,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=tn("t",e),i=tn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=tn(os,e);if(jo in e){const i=e[jo];if(t===Hp){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Ko){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Up?this.onConnectionShutdown_(i):t===qo?this.onReset_(i):t===Wp?bs("Server Error: "+i):t===zo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),zs!==i&&Z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ln(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Mp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ln(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Lp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(nt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){y(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends bl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ws()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new si}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=32,Jo=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function P(){return new D("")}function T(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ze(n){return n.pieces_.length-n.pieceNum_}function M(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function Ys(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Vp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function _n(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Cl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function F(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof D)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new D(t,0)}function k(n){return n.pieceNum_>=n.pieces_.length}function ne(n,e){const t=T(n),i=T(e);if(t===null)return e;if(t===i)return ne(M(n),M(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function jp(n,e){const t=_n(n,0),i=_n(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=ft(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Qs(n,e){if(ze(n)!==ze(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function le(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ze(n)>ze(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class qp{constructor(e,t){this.errorPrefix_=t,this.parts_=_n(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=bi(this.parts_[i]);Il(this)}}function zp(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=bi(e),Il(n)}function Gp(n){const e=n.parts_.pop();n.byteLength_-=bi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Il(n){if(n.byteLength_>Jo)throw new Error(n.errorPrefix_+"has a key path longer than "+Jo+" bytes ("+n.byteLength_+").");if(n.parts_.length>Qo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qo+") or object contains a cycle "+tt(n))}function tt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends bl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Js}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=1e3,Kp=60*5*1e3,Xo=30*1e3,Yp=1.3,Qp=3e4,Jp="server_kill",Zo=3;class Se extends El{constructor(e,t,i,s,r,a,d,h){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=a,this.appCheckTokenProvider_=d,this.authOverride_=h,this.id=Se.nextPersistentConnectionId_++,this.log_=An("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=nn,this.maxReconnectDelay_=Kp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h&&!za())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Js.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&si.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(q(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Tn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const d=a.d;a.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+r),this.listens.has(a)||this.listens.set(a,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(a).has(r),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(a).set(r,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},a="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(a,r,d=>{const h=d.d,c=d.s;Se.warnOnListenWarnings_(h,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",d),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,h))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&we(e,"w")){const i=Nt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Hh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Wh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,a=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},a="n";s&&(r.q=i,r.t=s),this.sendRequest(a,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const a={p:t,d:i};r!==void 0&&(a.h=r),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+q(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):bs("Unrecognized action received from server: "+q(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=nn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=nn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Qp&&(this.reconnectDelay_=nn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Yp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Se.nextConnectionId_++,r=this.lastSessionId;let a=!1,d=null;const h=function(){d?d.close():(a=!0,i())},c=function(p){y(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(p)};this.realtime_={close:h,sendRequest:c};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,_]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);a?Y("getToken() completed but was canceled"):(Y("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=_&&_.token,d=new $p(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,v=>{Z(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jp)},r))}catch(p){this.log_("Failed to get token: "+p),a||(this.repoInfo_.nodeAdmin&&Z(p),h())}}}interrupt(e){Y("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Y("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gs(this.interruptReasons_)&&(this.reconnectDelay_=nn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>qs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new D(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Y("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zo&&(this.reconnectDelay_=Xo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Y("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+el.replace(/\./g,"-")]=1,Ws()?e["framework.cordova"]=1:qa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=si.getInstance().currentlyOnline();return gs(this.interruptReasons_)&&e}}Se.nextPersistentConnectionId_=0;Se.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new S(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new S(Dt,e),s=new S(Dt,t);return this.compare(i,s)!==0}minPost(){return S.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn;class Tl extends Ci{static get __EMPTY_NODE(){return jn}static set __EMPTY_NODE(e){jn=e}compare(e,t){return ft(e.name,t.name)}isDefinedOn(e){throw Ut("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return S.MIN}maxPost(){return new S(at,jn)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,jn)}toString(){return".key"}}const kt=new Tl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?i(e.key,t):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class V{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??V.RED,this.left=s??ie.EMPTY_NODE,this.right=r??ie.EMPTY_NODE}copy(e,t,i,s,r){return new V(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ie.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ie.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,V.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,V.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}V.RED=!0;V.BLACK=!1;class Xp{copy(e,t,i,s,r){return this}insert(e,t,i){return new V(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ie{constructor(e,t=ie.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ie(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,V.BLACK,null,null))}remove(e){return new ie(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,V.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qn(this.root_,null,this.comparator_,!0,e)}}ie.EMPTY_NODE=new Xp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(n,e){return ft(n.name,e.name)}function Xs(n,e){return ft(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is;function eg(n){Is=n}const Sl=function(n){return typeof n=="number"?"number:"+sl(n):"string:"+n},kl=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&we(e,".sv"),"Priority must be a string or number.")}else y(n===Is||n.isEmpty(),"priority of unexpected type.");y(n===Is||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;class ${constructor(e,t=$.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kl(this.priorityNode_)}static set __childrenNodeConstructor(e){ea=e}static get __childrenNodeConstructor(){return ea}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return k(e)?this:T(e)===".priority"?this.priorityNode_:$.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:$.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=T(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(y(i!==".priority"||ze(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,$.__childrenNodeConstructor.EMPTY_NODE.updateChild(M(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=sl(this.value_):e+=this.value_,this.lazyHash_=nl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=$.VALUE_TYPE_ORDER.indexOf(t),r=$.VALUE_TYPE_ORDER.indexOf(i);return y(s>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}$.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al,Rl;function tg(n){Al=n}function ng(n){Rl=n}class ig extends Ci{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ft(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return S.MIN}maxPost(){return new S(at,new $("[PRIORITY-POST]",Rl))}makePost(e,t){const i=Al(e);return new S(t,new $("[PRIORITY-POST]",i))}toString(){return".priority"}}const B=new ig;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=Math.log(2);class rg{constructor(e){const t=r=>parseInt(Math.log(r)/sg,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ri=function(n,e,t,i){n.sort(e);const s=function(h,c){const g=c-h;let p,_;if(g===0)return null;if(g===1)return p=n[h],_=t?t(p):p,new V(_,p.node,V.BLACK,null,null);{const v=parseInt(g/2,10)+h,w=s(h,v),I=s(v+1,c);return p=n[v],_=t?t(p):p,new V(_,p.node,V.BLACK,w,I)}},r=function(h){let c=null,g=null,p=n.length;const _=function(w,I){const L=p-w,ce=p;p-=w;const Ee=s(L+1,ce),oe=n[L],Pe=t?t(oe):oe;v(new V(Pe,oe.node,I,null,Ee))},v=function(w){c?(c.left=w,c=w):(g=w,c=w)};for(let w=0;w<h.count;++w){const I=h.nextBitIsOne(),L=Math.pow(2,h.count-(w+1));I?_(L,V.BLACK):(_(L,V.BLACK),_(L,V.RED))}return g},a=new rg(n.length),d=r(a);return new ie(i||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as;const bt={};class Ce{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return y(bt&&B,"ChildrenNode.ts has not been loaded"),as=as||new Ce({".priority":bt},{".priority":B}),as}get(e){const t=Nt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ie?t:null}hasIndex(e){return we(this.indexSet_,e.toString())}addIndex(e,t){y(e!==kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(S.Wrap);let a=r.getNext();for(;a;)s=s||e.isDefinedOn(a.node),i.push(a),a=r.getNext();let d;s?d=ri(i,e.getCompare()):d=bt;const h=e.toString(),c=Object.assign({},this.indexSet_);c[h]=e;const g=Object.assign({},this.indexes_);return g[h]=d,new Ce(g,c)}addToIndexes(e,t){const i=ei(this.indexes_,(s,r)=>{const a=Nt(this.indexSet_,r);if(y(a,"Missing index implementation for "+r),s===bt)if(a.isDefinedOn(e.node)){const d=[],h=t.getIterator(S.Wrap);let c=h.getNext();for(;c;)c.name!==e.name&&d.push(c),c=h.getNext();return d.push(e),ri(d,a.getCompare())}else return bt;else{const d=t.get(e.name);let h=s;return d&&(h=h.remove(new S(e.name,d))),h.insert(e,e.node)}});return new Ce(i,this.indexSet_)}removeFromIndexes(e,t){const i=ei(this.indexes_,s=>{if(s===bt)return s;{const r=t.get(e.name);return r?s.remove(new S(e.name,r)):s}});return new Ce(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sn;class b{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&kl(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return sn||(sn=new b(new ie(Xs),null,Ce.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||sn}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?sn:t}}getChild(e){const t=T(e);return t===null?this:this.getImmediateChild(t).getChild(M(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new S(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const a=s.isEmpty()?sn:this.priorityNode_;return new b(s,a,r)}}updateChild(e,t){const i=T(e);if(i===null)return t;{y(T(e)!==".priority"||ze(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(M(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(B,(a,d)=>{t[a]=d.val(e),i++,r&&b.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):r=!1}),!e&&r&&s<2*i){const a=[];for(const d in t)a[d]=t[d];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sl(this.getPriority().val())+":"),this.forEachChild(B,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":nl(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new S(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new S(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new S(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,S.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rn?-1:0}withIndex(e){if(e===kt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===kt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(B),s=t.getIterator(B);let r=i.getNext(),a=s.getNext();for(;r&&a;){if(r.name!==a.name||!r.node.equals(a.node))return!1;r=i.getNext(),a=s.getNext()}return r===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===kt?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class og extends b{constructor(){super(new ie(Xs),b.EMPTY_NODE,Ce.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const Rn=new og;Object.defineProperties(S,{MIN:{value:new S(Dt,b.EMPTY_NODE)},MAX:{value:new S(at,Rn)}});Tl.__EMPTY_NODE=b.EMPTY_NODE;$.__childrenNodeConstructor=b;eg(Rn);ng(Rn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=!0;function j(n,e=null){if(n===null)return b.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new $(t,j(e))}if(!(n instanceof Array)&&ag){const t=[];let i=!1;if(Q(n,(a,d)=>{if(a.substring(0,1)!=="."){const h=j(d);h.isEmpty()||(i=i||!h.getPriority().isEmpty(),t.push(new S(a,h)))}}),t.length===0)return b.EMPTY_NODE;const r=ri(t,Zp,a=>a.name,Xs);if(i){const a=ri(t,B.getCompare());return new b(r,j(e),new Ce({".priority":a},{".priority":B}))}else return new b(r,j(e),Ce.Default)}else{let t=b.EMPTY_NODE;return Q(n,(i,s)=>{if(we(n,i)&&i.substring(0,1)!=="."){const r=j(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(j(e))}}tg(j);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg extends Ci{constructor(e){super(),this.indexPath_=e,y(!k(e)&&T(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ft(e.name,t.name):r}makePost(e,t){const i=j(e),s=b.EMPTY_NODE.updateChild(this.indexPath_,i);return new S(t,s)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,Rn);return new S(at,e)}toString(){return _n(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg extends Ci{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ft(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,t){const i=j(e);return new S(t,i)}toString(){return".value"}}const ug=new cg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(n){return{type:"value",snapshotNode:n}}function xt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function mn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function yn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function dg(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.index_=e}updateChild(e,t,i,s,r,a){y(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(i.getChild(s))&&d.isEmpty()===i.isEmpty()||(a!=null&&(i.isEmpty()?e.hasChild(t)?a.trackChildChange(mn(t,d)):y(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?a.trackChildChange(xt(t,i)):a.trackChildChange(yn(t,i,d))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(B,(s,r)=>{t.hasChild(s)||i.trackChildChange(mn(s,r))}),t.isLeafNode()||t.forEachChild(B,(s,r)=>{if(e.hasChild(s)){const a=e.getImmediateChild(s);a.equals(r)||i.trackChildChange(yn(s,r,a))}else i.trackChildChange(xt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.indexedFilter_=new Zs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vn.getStartPost_(e),this.endPost_=vn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,a){return this.matches(new S(t,i))||(i=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,a)}updateFullNode(e,t,i){t.isLeafNode()&&(t=b.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(b.EMPTY_NODE);const r=this;return t.forEachChild(B,(a,d)=>{r.matches(new S(a,d))||(s=s.updateImmediateChild(a,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new vn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,a){return this.rangedFilter_.matches(new S(t,i))||(i=b.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,a):this.fullLimitUpdateChild_(e,t,i,r,a)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=b.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;r.hasNext()&&a<this.limit_;){const d=r.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),a++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(b.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let a=0;for(;r.hasNext();){const d=r.getNext();a<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?a++:s=s.updateImmediateChild(d.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let a;if(this.reverse_){const p=this.index_.getCompare();a=(_,v)=>p(v,_)}else a=this.index_.getCompare();const d=e;y(d.numChildren()===this.limit_,"");const h=new S(t,i),c=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),g=this.rangedFilter_.matches(h);if(d.hasChild(t)){const p=d.getImmediateChild(t);let _=s.getChildAfterChild(this.index_,c,this.reverse_);for(;_!=null&&(_.name===t||d.hasChild(_.name));)_=s.getChildAfterChild(this.index_,_,this.reverse_);const v=_==null?1:a(_,h);if(g&&!i.isEmpty()&&v>=0)return r!=null&&r.trackChildChange(yn(t,i,p)),d.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(mn(t,p));const I=d.updateImmediateChild(t,b.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(r!=null&&r.trackChildChange(xt(_.name,_.node)),I.updateImmediateChild(_.name,_.node)):I}}else return i.isEmpty()?e:g&&a(c,h)>=0?(r!=null&&(r.trackChildChange(mn(c.name,c.node)),r.trackChildChange(xt(t,i))),d.updateImmediateChild(t,i).updateImmediateChild(c.name,b.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=B}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dt}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:at}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===B}copy(){const e=new er;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fg(n){return n.loadsAllData()?new Zs(n.getIndex()):n.hasLimit()?new hg(n):new vn(n)}function ta(n){const e={};if(n.isDefault())return e;let t;if(n.index_===B?t="$priority":n.index_===ug?t="$value":n.index_===kt?t="$key":(y(n.index_ instanceof lg,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=q(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=q(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+q(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=q(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+q(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function na(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==B&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends El{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=An("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const a=oi.getListenId_(e,i),d={};this.listens_[a]=d;const h=ta(e._queryParams);this.restRequest_(r+".json",h,(c,g)=>{let p=g;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(r,p,!1,i),Nt(this.listens_,a)===d){let _;c?c===401?_="permission_denied":_="rest_error:"+c:_="ok",s(_,null)}})}unlisten(e,t){const i=oi.getListenId_(e,t);delete this.listens_[i]}get(e){const t=ta(e._queryParams),i=e._path.toString(),s=new Tn;return this.restRequest_(i+".json",t,(r,a)=>{let d=a;r===404&&(d=null,r=null),r===null?(this.onDataUpdate_(i,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wt(t);this.log_("Sending REST request for "+a);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(i&&d.readyState===4){this.log_("REST Response for "+a+" received. status:",d.status,"response:",d.responseText);let h=null;if(d.status>=200&&d.status<300){try{h=fn(d.responseText)}catch{Z("Failed to parse JSON response for "+a+": "+d.responseText)}i(null,h)}else d.status!==401&&d.status!==404&&Z("Got unsuccessful REST response for "+a+" Status: "+d.status),i(d.status);i=null}},d.open("GET",a,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){return{value:null,children:new Map}}function Nl(n,e,t){if(k(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=T(e);n.children.has(i)||n.children.set(i,ai());const s=n.children.get(i);e=M(e),Nl(s,e,t)}}function Ts(n,e,t){n.value!==null?t(e,n.value):gg(n,(i,s)=>{const r=new D(e.toString()+"/"+i);Ts(s,r,t)})}function gg(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Q(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=10*1e3,mg=30*1e3,yg=5*60*1e3;class vg{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new _g(e);const i=ia+(mg-ia)*Math.random();ln(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Q(e,(s,r)=>{r>0&&we(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),ln(this.reportStats_.bind(this),Math.floor(Math.random()*2*yg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fe||(fe={}));function tr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ir(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=fe.ACK_USER_WRITE,this.source=tr()}operationForChild(e){if(k(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new li(P(),t,this.revert)}}else return y(T(this.path)===e,"operationForChild called for unrelated child."),new li(M(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.source=e,this.path=t,this.type=fe.LISTEN_COMPLETE}operationForChild(e){return k(this.path)?new wn(this.source,P()):new wn(this.source,M(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=fe.OVERWRITE}operationForChild(e){return k(this.path)?new lt(this.source,P(),this.snap.getImmediateChild(e)):new lt(this.source,M(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=fe.MERGE}operationForChild(e){if(k(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new lt(this.source,P(),t.value):new Mt(this.source,P(),t)}else return y(T(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mt(this.source,M(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(k(e))return this.isFullyInitialized()&&!this.filtered_;const t=T(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Eg(n,e,t,i){const s=[],r=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&r.push(dg(a.childName,a.snapshotNode))}),rn(n,s,"child_removed",e,i,t),rn(n,s,"child_added",e,i,t),rn(n,s,"child_moved",r,i,t),rn(n,s,"child_changed",e,i,t),rn(n,s,"value",e,i,t),s}function rn(n,e,t,i,s,r){const a=i.filter(d=>d.type===t);a.sort((d,h)=>Cg(n,d,h)),a.forEach(d=>{const h=bg(n,d,r);s.forEach(c=>{c.respondsTo(d.type)&&e.push(c.createEvent(h,n.query_))})})}function bg(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Cg(n,e,t){if(e.childName==null||t.childName==null)throw Ut("Should only compare child_ events.");const i=new S(e.childName,e.snapshotNode),s=new S(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,e){return{eventCache:n,serverCache:e}}function cn(n,e,t,i){return Ii(new ct(e,t,i),n.serverCache)}function Ol(n,e,t,i){return Ii(n.eventCache,new ct(e,t,i))}function Ss(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ut(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls;const Ig=()=>(ls||(ls=new ie(lp)),ls);class x{constructor(e,t=Ig()){this.value=e,this.children=t}static fromObject(e){let t=new x(null);return Q(e,(i,s)=>{t=t.set(new D(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:P(),value:this.value};if(k(e))return null;{const i=T(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(M(e),t);return r!=null?{path:F(new D(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(k(e))return this;{const t=T(e),i=this.children.get(t);return i!==null?i.subtree(M(e)):new x(null)}}set(e,t){if(k(e))return new x(t,this.children);{const i=T(e),r=(this.children.get(i)||new x(null)).set(M(e),t),a=this.children.insert(i,r);return new x(this.value,a)}}remove(e){if(k(e))return this.children.isEmpty()?new x(null):new x(null,this.children);{const t=T(e),i=this.children.get(t);if(i){const s=i.remove(M(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new x(null):new x(this.value,r)}else return this}}get(e){if(k(e))return this.value;{const t=T(e),i=this.children.get(t);return i?i.get(M(e)):null}}setTree(e,t){if(k(e))return t;{const i=T(e),r=(this.children.get(i)||new x(null)).setTree(M(e),t);let a;return r.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,r),new x(this.value,a)}}fold(e){return this.fold_(P(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(F(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,P(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(k(e))return null;{const r=T(e),a=this.children.get(r);return a?a.findOnPath_(M(e),F(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,P(),t)}foreachOnPath_(e,t,i){if(k(e))return this;{this.value&&i(t,this.value);const s=T(e),r=this.children.get(s);return r?r.foreachOnPath_(M(e),F(t,s),i):new x(null)}}foreach(e){this.foreach_(P(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(F(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.writeTree_=e}static empty(){return new pe(new x(null))}}function un(n,e,t){if(k(e))return new pe(new x(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const a=ne(s,e);return r=r.updateChild(a,t),new pe(n.writeTree_.set(s,r))}else{const s=new x(t),r=n.writeTree_.setTree(e,s);return new pe(r)}}}function ks(n,e,t){let i=n;return Q(t,(s,r)=>{i=un(i,F(e,s),r)}),i}function sa(n,e){if(k(e))return pe.empty();{const t=n.writeTree_.setTree(e,new x(null));return new pe(t)}}function As(n,e){return pt(n,e)!=null}function pt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ne(t.path,e)):null}function ra(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(B,(i,s)=>{e.push(new S(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new S(i,s.value))}),e}function qe(n,e){if(k(e))return n;{const t=pt(n,e);return t!=null?new pe(new x(t)):new pe(n.writeTree_.subtree(e))}}function Rs(n){return n.writeTree_.isEmpty()}function Lt(n,e){return Dl(P(),n.writeTree_,e)}function Dl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Dl(F(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(F(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n,e){return Fl(e,n)}function Tg(n,e,t,i,s){y(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=un(n.visibleWrites,e,t)),n.lastWriteId=i}function Sg(n,e,t,i){y(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=ks(n.visibleWrites,e,t),n.lastWriteId=i}function kg(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Ag(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const d=n.allWrites[a];d.visible&&(a>=t&&Rg(d,i.path)?s=!1:le(i.path,d.path)&&(r=!0)),a--}if(s){if(r)return Pg(n),!0;if(i.snap)n.visibleWrites=sa(n.visibleWrites,i.path);else{const d=i.children;Q(d,h=>{n.visibleWrites=sa(n.visibleWrites,F(i.path,h))})}return!0}else return!1}function Rg(n,e){if(n.snap)return le(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&le(F(n.path,t),e))return!0;return!1}function Pg(n){n.visibleWrites=xl(n.allWrites,Ng,P()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ng(n){return n.visible}function xl(n,e,t){let i=pe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const a=r.path;let d;if(r.snap)le(t,a)?(d=ne(t,a),i=un(i,d,r.snap)):le(a,t)&&(d=ne(a,t),i=un(i,P(),r.snap.getChild(d)));else if(r.children){if(le(t,a))d=ne(t,a),i=ks(i,d,r.children);else if(le(a,t))if(d=ne(a,t),k(d))i=ks(i,P(),r.children);else{const h=Nt(r.children,T(d));if(h){const c=h.getChild(M(d));i=un(i,P(),c)}}}else throw Ut("WriteRecord should have .snap or .children")}}return i}function Ml(n,e,t,i,s){if(!i&&!s){const r=pt(n.visibleWrites,e);if(r!=null)return r;{const a=qe(n.visibleWrites,e);if(Rs(a))return t;if(t==null&&!As(a,P()))return null;{const d=t||b.EMPTY_NODE;return Lt(a,d)}}}else{const r=qe(n.visibleWrites,e);if(!s&&Rs(r))return t;if(!s&&t==null&&!As(r,P()))return null;{const a=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(le(c.path,e)||le(e,c.path))},d=xl(n.allWrites,a,e),h=t||b.EMPTY_NODE;return Lt(d,h)}}}function Og(n,e,t){let i=b.EMPTY_NODE;const s=pt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(B,(r,a)=>{i=i.updateImmediateChild(r,a)}),i;if(t){const r=qe(n.visibleWrites,e);return t.forEachChild(B,(a,d)=>{const h=Lt(qe(r,new D(a)),d);i=i.updateImmediateChild(a,h)}),ra(r).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const r=qe(n.visibleWrites,e);return ra(r).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function Dg(n,e,t,i,s){y(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=F(e,t);if(As(n.visibleWrites,r))return null;{const a=qe(n.visibleWrites,r);return Rs(a)?s.getChild(t):Lt(a,s.getChild(t))}}function xg(n,e,t,i){const s=F(e,t),r=pt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const a=qe(n.visibleWrites,s);return Lt(a,i.getNode().getImmediateChild(t))}else return null}function Mg(n,e){return pt(n.visibleWrites,e)}function Lg(n,e,t,i,s,r,a){let d;const h=qe(n.visibleWrites,e),c=pt(h,P());if(c!=null)d=c;else if(t!=null)d=Lt(h,t);else return[];if(d=d.withIndex(a),!d.isEmpty()&&!d.isLeafNode()){const g=[],p=a.getCompare(),_=r?d.getReverseIteratorFrom(i,a):d.getIteratorFrom(i,a);let v=_.getNext();for(;v&&g.length<s;)p(v,i)!==0&&g.push(v),v=_.getNext();return g}else return[]}function Fg(){return{visibleWrites:pe.empty(),allWrites:[],lastWriteId:-1}}function ci(n,e,t,i){return Ml(n.writeTree,n.treePath,e,t,i)}function rr(n,e){return Og(n.writeTree,n.treePath,e)}function oa(n,e,t,i){return Dg(n.writeTree,n.treePath,e,t,i)}function ui(n,e){return Mg(n.writeTree,F(n.treePath,e))}function Bg(n,e,t,i,s,r){return Lg(n.writeTree,n.treePath,e,t,i,s,r)}function or(n,e,t){return xg(n.writeTree,n.treePath,e,t)}function Ll(n,e){return Fl(F(n.treePath,e),n.writeTree)}function Fl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,yn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,mn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,xt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,yn(i,e.snapshotNode,s.oldSnap));else throw Ut("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Bl=new Wg;class ar{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ct(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return or(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ut(this.viewCache_),r=Bg(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(n){return{filter:n}}function $g(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Vg(n,e,t,i,s){const r=new Ug;let a,d;if(t.type===fe.OVERWRITE){const c=t;c.source.fromUser?a=Ps(n,e,c.path,c.snap,i,s,r):(y(c.source.fromServer,"Unknown source."),d=c.source.tagged||e.serverCache.isFiltered()&&!k(c.path),a=di(n,e,c.path,c.snap,i,s,d,r))}else if(t.type===fe.MERGE){const c=t;c.source.fromUser?a=qg(n,e,c.path,c.children,i,s,r):(y(c.source.fromServer,"Unknown source."),d=c.source.tagged||e.serverCache.isFiltered(),a=Ns(n,e,c.path,c.children,i,s,d,r))}else if(t.type===fe.ACK_USER_WRITE){const c=t;c.revert?a=Kg(n,e,c.path,i,s,r):a=zg(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===fe.LISTEN_COMPLETE)a=Gg(n,e,t.path,i,r);else throw Ut("Unknown operation type: "+t.type);const h=r.getChanges();return jg(e,a,h),{viewCache:a,changes:h}}function jg(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ss(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Pl(Ss(e)))}}function Ul(n,e,t,i,s,r){const a=e.eventCache;if(ui(i,t)!=null)return e;{let d,h;if(k(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ut(e),g=c instanceof b?c:b.EMPTY_NODE,p=rr(i,g);d=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const c=ci(i,ut(e));d=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=T(t);if(c===".priority"){y(ze(t)===1,"Can't have a priority with additional path components");const g=a.getNode();h=e.serverCache.getNode();const p=oa(i,t,g,h);p!=null?d=n.filter.updatePriority(g,p):d=a.getNode()}else{const g=M(t);let p;if(a.isCompleteForChild(c)){h=e.serverCache.getNode();const _=oa(i,t,a.getNode(),h);_!=null?p=a.getNode().getImmediateChild(c).updateChild(g,_):p=a.getNode().getImmediateChild(c)}else p=or(i,c,e.serverCache);p!=null?d=n.filter.updateChild(a.getNode(),c,p,g,s,r):d=a.getNode()}}return cn(e,d,a.isFullyInitialized()||k(t),n.filter.filtersNodes())}}function di(n,e,t,i,s,r,a,d){const h=e.serverCache;let c;const g=a?n.filter:n.filter.getIndexedFilter();if(k(t))c=g.updateFullNode(h.getNode(),i,null);else if(g.filtersNodes()&&!h.isFiltered()){const v=h.getNode().updateChild(t,i);c=g.updateFullNode(h.getNode(),v,null)}else{const v=T(t);if(!h.isCompleteForPath(t)&&ze(t)>1)return e;const w=M(t),L=h.getNode().getImmediateChild(v).updateChild(w,i);v===".priority"?c=g.updatePriority(h.getNode(),L):c=g.updateChild(h.getNode(),v,L,w,Bl,null)}const p=Ol(e,c,h.isFullyInitialized()||k(t),g.filtersNodes()),_=new ar(s,p,r);return Ul(n,p,t,s,_,d)}function Ps(n,e,t,i,s,r,a){const d=e.eventCache;let h,c;const g=new ar(s,e,r);if(k(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,a),h=cn(e,c,!0,n.filter.filtersNodes());else{const p=T(t);if(p===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),h=cn(e,c,d.isFullyInitialized(),d.isFiltered());else{const _=M(t),v=d.getNode().getImmediateChild(p);let w;if(k(_))w=i;else{const I=g.getCompleteChild(p);I!=null?Ys(_)===".priority"&&I.getChild(Cl(_)).isEmpty()?w=I:w=I.updateChild(_,i):w=b.EMPTY_NODE}if(v.equals(w))h=e;else{const I=n.filter.updateChild(d.getNode(),p,w,_,g,a);h=cn(e,I,d.isFullyInitialized(),n.filter.filtersNodes())}}}return h}function aa(n,e){return n.eventCache.isCompleteForChild(e)}function qg(n,e,t,i,s,r,a){let d=e;return i.foreach((h,c)=>{const g=F(t,h);aa(e,T(g))&&(d=Ps(n,d,g,c,s,r,a))}),i.foreach((h,c)=>{const g=F(t,h);aa(e,T(g))||(d=Ps(n,d,g,c,s,r,a))}),d}function la(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ns(n,e,t,i,s,r,a,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let h=e,c;k(t)?c=i:c=new x(null).setTree(t,i);const g=e.serverCache.getNode();return c.children.inorderTraversal((p,_)=>{if(g.hasChild(p)){const v=e.serverCache.getNode().getImmediateChild(p),w=la(n,v,_);h=di(n,h,new D(p),w,s,r,a,d)}}),c.children.inorderTraversal((p,_)=>{const v=!e.serverCache.isCompleteForChild(p)&&_.value===null;if(!g.hasChild(p)&&!v){const w=e.serverCache.getNode().getImmediateChild(p),I=la(n,w,_);h=di(n,h,new D(p),I,s,r,a,d)}}),h}function zg(n,e,t,i,s,r,a){if(ui(s,t)!=null)return e;const d=e.serverCache.isFiltered(),h=e.serverCache;if(i.value!=null){if(k(t)&&h.isFullyInitialized()||h.isCompleteForPath(t))return di(n,e,t,h.getNode().getChild(t),s,r,d,a);if(k(t)){let c=new x(null);return h.getNode().forEachChild(kt,(g,p)=>{c=c.set(new D(g),p)}),Ns(n,e,t,c,s,r,d,a)}else return e}else{let c=new x(null);return i.foreach((g,p)=>{const _=F(t,g);h.isCompleteForPath(_)&&(c=c.set(g,h.getNode().getChild(_)))}),Ns(n,e,t,c,s,r,d,a)}}function Gg(n,e,t,i,s){const r=e.serverCache,a=Ol(e,r.getNode(),r.isFullyInitialized()||k(t),r.isFiltered());return Ul(n,a,t,i,Bl,s)}function Kg(n,e,t,i,s,r){let a;if(ui(i,t)!=null)return e;{const d=new ar(i,e,s),h=e.eventCache.getNode();let c;if(k(t)||T(t)===".priority"){let g;if(e.serverCache.isFullyInitialized())g=ci(i,ut(e));else{const p=e.serverCache.getNode();y(p instanceof b,"serverChildren would be complete if leaf node"),g=rr(i,p)}g=g,c=n.filter.updateFullNode(h,g,r)}else{const g=T(t);let p=or(i,g,e.serverCache);p==null&&e.serverCache.isCompleteForChild(g)&&(p=h.getImmediateChild(g)),p!=null?c=n.filter.updateChild(h,g,p,M(t),d,r):e.eventCache.getNode().hasChild(g)?c=n.filter.updateChild(h,g,b.EMPTY_NODE,M(t),d,r):c=h,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=ci(i,ut(e)),a.isLeafNode()&&(c=n.filter.updateFullNode(c,a,r)))}return a=e.serverCache.isFullyInitialized()||ui(i,P())!=null,cn(e,c,a,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Zs(i.getIndex()),r=fg(i);this.processor_=Hg(r);const a=t.serverCache,d=t.eventCache,h=s.updateFullNode(b.EMPTY_NODE,a.getNode(),null),c=r.updateFullNode(b.EMPTY_NODE,d.getNode(),null),g=new ct(h,a.isFullyInitialized(),s.filtersNodes()),p=new ct(c,d.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ii(p,g),this.eventGenerator_=new wg(this.query_)}get query(){return this.query_}}function Qg(n){return n.viewCache_.serverCache.getNode()}function Jg(n,e){const t=ut(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!k(e)&&!t.getImmediateChild(T(e)).isEmpty())?t.getChild(e):null}function ca(n){return n.eventRegistrations_.length===0}function Xg(n,e){n.eventRegistrations_.push(e)}function ua(n,e,t){const i=[];if(t){y(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const a=r.createCancelEvent(t,s);a&&i.push(a)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const a=n.eventRegistrations_[r];if(!a.matches(e))s.push(a);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function da(n,e,t,i){e.type===fe.MERGE&&e.source.queryId!==null&&(y(ut(n.viewCache_),"We should always have a full cache before handling merges"),y(Ss(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Vg(n.processor_,s,e,t,i);return $g(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Wl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Zg(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(B,(r,a)=>{i.push(xt(r,a))}),t.isFullyInitialized()&&i.push(Pl(t.getNode())),Wl(n,i,t.getNode(),e)}function Wl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Eg(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;class e_{constructor(){this.views=new Map}}function t_(n){y(!hi,"__referenceConstructor has already been defined"),hi=n}function n_(){return y(hi,"Reference.ts has not been loaded"),hi}function i_(n){return n.views.size===0}function lr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return y(r!=null,"SyncTree gave us an op for an invalid query."),da(r,e,t,i)}else{let r=[];for(const a of n.views.values())r=r.concat(da(a,e,t,i));return r}}function s_(n,e,t,i,s){const r=e._queryIdentifier,a=n.views.get(r);if(!a){let d=ci(t,s?i:null),h=!1;d?h=!0:i instanceof b?(d=rr(t,i),h=!1):(d=b.EMPTY_NODE,h=!1);const c=Ii(new ct(d,h,!1),new ct(i,s,!1));return new Yg(e,c)}return a}function r_(n,e,t,i,s,r){const a=s_(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,a),Xg(a,t),Zg(a,t)}function o_(n,e,t,i){const s=e._queryIdentifier,r=[];let a=[];const d=Ge(n);if(s==="default")for(const[h,c]of n.views.entries())a=a.concat(ua(c,t,i)),ca(c)&&(n.views.delete(h),c.query._queryParams.loadsAllData()||r.push(c.query));else{const h=n.views.get(s);h&&(a=a.concat(ua(h,t,i)),ca(h)&&(n.views.delete(s),h.query._queryParams.loadsAllData()||r.push(h.query)))}return d&&!Ge(n)&&r.push(new(n_())(e._repo,e._path)),{removed:r,events:a}}function Hl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function At(n,e){let t=null;for(const i of n.views.values())t=t||Jg(i,e);return t}function $l(n,e){if(e._queryParams.loadsAllData())return Ti(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Vl(n,e){return $l(n,e)!=null}function Ge(n){return Ti(n)!=null}function Ti(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;function a_(n){y(!fi,"__referenceConstructor has already been defined"),fi=n}function l_(){return y(fi,"Reference.ts has not been loaded"),fi}let c_=1;class ha{constructor(e){this.listenProvider_=e,this.syncPointTree_=new x(null),this.pendingWriteTree_=Fg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jl(n,e,t,i,s){return Tg(n.pendingWriteTree_,e,t,i,s),s?Vt(n,new lt(tr(),e,t)):[]}function u_(n,e,t,i){Sg(n.pendingWriteTree_,e,t,i);const s=x.fromObject(t);return Vt(n,new Mt(tr(),e,s))}function He(n,e,t=!1){const i=kg(n.pendingWriteTree_,e);if(Ag(n.pendingWriteTree_,e)){let r=new x(null);return i.snap!=null?r=r.set(P(),!0):Q(i.children,a=>{r=r.set(new D(a),!0)}),Vt(n,new li(i.path,r,t))}else return[]}function Si(n,e,t){return Vt(n,new lt(nr(),e,t))}function d_(n,e,t){const i=x.fromObject(t);return Vt(n,new Mt(nr(),e,i))}function h_(n,e){return Vt(n,new wn(nr(),e))}function f_(n,e,t){const i=ur(n,t);if(i){const s=dr(i),r=s.path,a=s.queryId,d=ne(r,e),h=new wn(ir(a),d);return hr(n,r,h)}else return[]}function Os(n,e,t,i,s=!1){const r=e._path,a=n.syncPointTree_.get(r);let d=[];if(a&&(e._queryIdentifier==="default"||Vl(a,e))){const h=o_(a,e,t,i);i_(a)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=h.removed;if(d=h.events,!s){const g=c.findIndex(_=>_._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(r,(_,v)=>Ge(v));if(g&&!p){const _=n.syncPointTree_.subtree(r);if(!_.isEmpty()){const v=__(_);for(let w=0;w<v.length;++w){const I=v[w],L=I.query,ce=Gl(n,I);n.listenProvider_.startListening(dn(L),pi(n,L),ce.hashFn,ce.onComplete)}}}!p&&c.length>0&&!i&&(g?n.listenProvider_.stopListening(dn(e),null):c.forEach(_=>{const v=n.queryToTagMap.get(ki(_));n.listenProvider_.stopListening(dn(_),v)}))}m_(n,c)}return d}function p_(n,e,t,i){const s=ur(n,i);if(s!=null){const r=dr(s),a=r.path,d=r.queryId,h=ne(a,e),c=new lt(ir(d),h,t);return hr(n,a,c)}else return[]}function g_(n,e,t,i){const s=ur(n,i);if(s){const r=dr(s),a=r.path,d=r.queryId,h=ne(a,e),c=x.fromObject(t),g=new Mt(ir(d),h,c);return hr(n,a,g)}else return[]}function fa(n,e,t,i=!1){const s=e._path;let r=null,a=!1;n.syncPointTree_.foreachOnPath(s,(_,v)=>{const w=ne(_,s);r=r||At(v,w),a=a||Ge(v)});let d=n.syncPointTree_.get(s);d?(a=a||Ge(d),r=r||At(d,P())):(d=new e_,n.syncPointTree_=n.syncPointTree_.set(s,d));let h;r!=null?h=!0:(h=!1,r=b.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((v,w)=>{const I=At(w,P());I&&(r=r.updateImmediateChild(v,I))}));const c=Vl(d,e);if(!c&&!e._queryParams.loadsAllData()){const _=ki(e);y(!n.queryToTagMap.has(_),"View does not exist, but we have a tag");const v=y_();n.queryToTagMap.set(_,v),n.tagToQueryMap.set(v,_)}const g=sr(n.pendingWriteTree_,s);let p=r_(d,e,t,g,r,h);if(!c&&!a&&!i){const _=$l(d,e);p=p.concat(v_(n,e,_))}return p}function cr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(a,d)=>{const h=ne(a,e),c=At(d,h);if(c)return c});return Ml(s,e,r,t,!0)}function Vt(n,e){return ql(e,n.syncPointTree_,null,sr(n.pendingWriteTree_,P()))}function ql(n,e,t,i){if(k(n.path))return zl(n,e,t,i);{const s=e.get(P());t==null&&s!=null&&(t=At(s,P()));let r=[];const a=T(n.path),d=n.operationForChild(a),h=e.children.get(a);if(h&&d){const c=t?t.getImmediateChild(a):null,g=Ll(i,a);r=r.concat(ql(d,h,c,g))}return s&&(r=r.concat(lr(s,n,i,t))),r}}function zl(n,e,t,i){const s=e.get(P());t==null&&s!=null&&(t=At(s,P()));let r=[];return e.children.inorderTraversal((a,d)=>{const h=t?t.getImmediateChild(a):null,c=Ll(i,a),g=n.operationForChild(a);g&&(r=r.concat(zl(g,d,h,c)))}),s&&(r=r.concat(lr(s,n,i,t))),r}function Gl(n,e){const t=e.query,i=pi(n,t);return{hashFn:()=>(Qg(e)||b.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?f_(n,t._path,i):h_(n,t._path);{const r=dp(s,t);return Os(n,t,null,r)}}}}function pi(n,e){const t=ki(e);return n.queryToTagMap.get(t)}function ki(n){return n._path.toString()+"$"+n._queryIdentifier}function ur(n,e){return n.tagToQueryMap.get(e)}function dr(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function hr(n,e,t){const i=n.syncPointTree_.get(e);y(i,"Missing sync point for query tag that we're tracking");const s=sr(n.pendingWriteTree_,e);return lr(i,t,s,null)}function __(n){return n.fold((e,t,i)=>{if(t&&Ge(t))return[Ti(t)];{let s=[];return t&&(s=Hl(t)),Q(i,(r,a)=>{s=s.concat(a)}),s}})}function dn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(l_())(n._repo,n._path):n}function m_(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=ki(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function y_(){return c_++}function v_(n,e,t){const i=e._path,s=pi(n,e),r=Gl(n,t),a=n.listenProvider_.startListening(dn(e),s,r.hashFn,r.onComplete),d=n.syncPointTree_.subtree(i);if(s)y(!Ge(d.value),"If we're adding a query, it shouldn't be shadowed");else{const h=d.fold((c,g,p)=>{if(!k(c)&&g&&Ge(g))return[Ti(g).query];{let _=[];return g&&(_=_.concat(Hl(g).map(v=>v.query))),Q(p,(v,w)=>{_=_.concat(w)}),_}});for(let c=0;c<h.length;++c){const g=h[c];n.listenProvider_.stopListening(dn(g),pi(n,g))}}return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fr(t)}node(){return this.node_}}class pr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=F(this.path_,e);return new pr(this.syncTree_,t)}node(){return cr(this.syncTree_,this.path_)}}const w_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},pa=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return E_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return b_(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},E_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},b_=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&y(!1,"Unexpected increment value: "+i);const s=e.node();if(y(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const a=s.getValue();return typeof a!="number"?i:a+i},Kl=function(n,e,t,i){return gr(e,new pr(t,n),i)},Yl=function(n,e,t){return gr(n,new fr(e),t)};function gr(n,e,t){const i=n.getPriority().val(),s=pa(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const a=n,d=pa(a.getValue(),e,t);return d!==a.getValue()||s!==a.getPriority().val()?new $(d,j(s)):n}else{const a=n;return r=a,s!==a.getPriority().val()&&(r=r.updatePriority(new $(s))),a.forEachChild(B,(d,h)=>{const c=gr(h,e.getImmediateChild(d),t);c!==h&&(r=r.updateImmediateChild(d,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function mr(n,e){let t=e instanceof D?e:new D(e),i=n,s=T(t);for(;s!==null;){const r=Nt(i.node.children,s)||{children:{},childCount:0};i=new _r(s,i,r),t=M(t),s=T(t)}return i}function jt(n){return n.node.value}function Ql(n,e){n.node.value=e,Ds(n)}function Jl(n){return n.node.childCount>0}function C_(n){return jt(n)===void 0&&!Jl(n)}function Ai(n,e){Q(n.node.children,(t,i)=>{e(new _r(t,n,i))})}function Xl(n,e,t,i){t&&!i&&e(n),Ai(n,s=>{Xl(s,e,!0,i)}),t&&i&&e(n)}function I_(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Pn(n){return new D(n.parent===null?n.name:Pn(n.parent)+"/"+n.name)}function Ds(n){n.parent!==null&&T_(n.parent,n.name,n)}function T_(n,e,t){const i=C_(t),s=we(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Ds(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Ds(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=/[\[\].#$\/\u0000-\u001F\u007F]/,k_=/[\[\].#$\u0000-\u001F\u007F]/,cs=10*1024*1024,yr=function(n){return typeof n=="string"&&n.length!==0&&!S_.test(n)},Zl=function(n){return typeof n=="string"&&n.length!==0&&!k_.test(n)},A_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zl(n)},R_=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!js(n)||n&&typeof n=="object"&&we(n,".sv")},ec=function(n,e,t,i){i&&e===void 0||Ri(Ei(n,"value"),e,t)},Ri=function(n,e,t){const i=t instanceof D?new qp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+tt(i));if(typeof e=="function")throw new Error(n+"contains a function "+tt(i)+" with contents = "+e.toString());if(js(e))throw new Error(n+"contains "+e.toString()+" "+tt(i));if(typeof e=="string"&&e.length>cs/3&&bi(e)>cs)throw new Error(n+"contains a string greater than "+cs+" utf8 bytes "+tt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Q(e,(a,d)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(r=!0,!yr(a)))throw new Error(n+" contains an invalid key ("+a+") "+tt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zp(i,a),Ri(n,d,i),Gp(i)}),s&&r)throw new Error(n+' contains ".value" child '+tt(i)+" in addition to actual children.")}},P_=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=_n(i);for(let a=0;a<r.length;a++)if(!(r[a]===".priority"&&a===r.length-1)){if(!yr(r[a]))throw new Error(n+"contains an invalid key ("+r[a]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jp);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&le(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},N_=function(n,e,t,i){if(i&&e===void 0)return;const s=Ei(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Q(e,(a,d)=>{const h=new D(a);if(Ri(s,d,F(t,h)),Ys(h)===".priority"&&!R_(d))throw new Error(s+"contains an invalid value for '"+h.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(h)}),P_(s,r)},tc=function(n,e,t,i){if(!(i&&t===void 0)&&!Zl(t))throw new Error(Ei(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},O_=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tc(n,e,t,i)},vr=function(n,e){if(T(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},D_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!A_(t))throw new Error(Ei(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Qs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function nc(n,e,t){Pi(n,t),ic(n,i=>Qs(i,e))}function ge(n,e,t){Pi(n,t),ic(n,i=>le(i,e)||le(e,i))}function ic(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(M_(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function M_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();it&&Y("event: "+t.toString()),$t(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="repo_interrupt",F_=25;class B_{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new x_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ai(),this.transactionQueueTree_=new _r,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function U_(n,e,t){if(n.stats_=Gs(n.repoInfo_),n.forceRestClient_||gp())n.server_=new oi(n.repoInfo_,(i,s,r,a)=>{ga(n,i,s,r,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>_a(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{q(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Se(n.repoInfo_,e,(i,s,r,a)=>{ga(n,i,s,r,a)},i=>{_a(n,i)},i=>{W_(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=wp(n.repoInfo_,()=>new vg(n.stats_,n.server_)),n.infoData_=new pg,n.infoSyncTree_=new ha({startListening:(i,s,r,a)=>{let d=[];const h=n.infoData_.getNode(i._path);return h.isEmpty()||(d=Si(n.infoSyncTree_,i._path,h),setTimeout(()=>{a("ok")},0)),d},stopListening:()=>{}}),wr(n,"connected",!1),n.serverSyncTree_=new ha({startListening:(i,s,r,a)=>(n.server_.listen(i,r,s,(d,h)=>{const c=a(d,h);ge(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function sc(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ni(n){return w_({timestamp:sc(n)})}function ga(n,e,t,i,s){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(s)if(i){const h=ei(t,c=>j(c));a=g_(n.serverSyncTree_,r,h,s)}else{const h=j(t);a=p_(n.serverSyncTree_,r,h,s)}else if(i){const h=ei(t,c=>j(c));a=d_(n.serverSyncTree_,r,h)}else{const h=j(t);a=Si(n.serverSyncTree_,r,h)}let d=r;a.length>0&&(d=Ft(n,r)),ge(n.eventQueue_,d,a)}function _a(n,e){wr(n,"connected",e),e===!1&&V_(n)}function W_(n,e){Q(e,(t,i)=>{wr(n,t,i)})}function wr(n,e,t){const i=new D("/.info/"+e),s=j(t);n.infoData_.updateSnapshot(i,s);const r=Si(n.infoSyncTree_,i,s);ge(n.eventQueue_,i,r)}function Er(n){return n.nextWriteId_++}function H_(n,e,t,i,s){Oi(n,"set",{path:e.toString(),value:t,priority:i});const r=Ni(n),a=j(t,i),d=cr(n.serverSyncTree_,e),h=Yl(a,d,r),c=Er(n),g=jl(n.serverSyncTree_,e,h,c,!0);Pi(n.eventQueue_,g),n.server_.put(e.toString(),a.val(!0),(_,v)=>{const w=_==="ok";w||Z("set at "+e+" failed: "+_);const I=He(n.serverSyncTree_,c,!w);ge(n.eventQueue_,e,I),xs(n,s,_,v)});const p=Cr(n,e);Ft(n,p),ge(n.eventQueue_,p,[])}function $_(n,e,t,i){Oi(n,"update",{path:e.toString(),value:t});let s=!0;const r=Ni(n),a={};if(Q(t,(d,h)=>{s=!1,a[d]=Kl(F(e,d),j(h),n.serverSyncTree_,r)}),s)Y("update() called with empty data.  Don't do anything."),xs(n,i,"ok",void 0);else{const d=Er(n),h=u_(n.serverSyncTree_,e,a,d);Pi(n.eventQueue_,h),n.server_.merge(e.toString(),t,(c,g)=>{const p=c==="ok";p||Z("update at "+e+" failed: "+c);const _=He(n.serverSyncTree_,d,!p),v=_.length>0?Ft(n,e):e;ge(n.eventQueue_,v,_),xs(n,i,c,g)}),Q(t,c=>{const g=Cr(n,F(e,c));Ft(n,g)}),ge(n.eventQueue_,e,[])}}function V_(n){Oi(n,"onDisconnectEvents");const e=Ni(n),t=ai();Ts(n.onDisconnect_,P(),(s,r)=>{const a=Kl(s,r,n.serverSyncTree_,e);Nl(t,s,a)});let i=[];Ts(t,P(),(s,r)=>{i=i.concat(Si(n.serverSyncTree_,s,r));const a=Cr(n,s);Ft(n,a)}),n.onDisconnect_=ai(),ge(n.eventQueue_,P(),i)}function j_(n,e,t){let i;T(e._path)===".info"?i=fa(n.infoSyncTree_,e,t):i=fa(n.serverSyncTree_,e,t),nc(n.eventQueue_,e._path,i)}function ma(n,e,t){let i;T(e._path)===".info"?i=Os(n.infoSyncTree_,e,t):i=Os(n.serverSyncTree_,e,t),nc(n.eventQueue_,e._path,i)}function q_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(L_)}function Oi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Y(t,...e)}function xs(n,e,t,i){e&&$t(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const a=new Error(r);a.code=s,e(a)}})}function rc(n,e,t){return cr(n.serverSyncTree_,e,t)||b.EMPTY_NODE}function br(n,e=n.transactionQueueTree_){if(e||Di(n,e),jt(e)){const t=ac(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&z_(n,Pn(e),t)}else Jl(e)&&Ai(e,t=>{br(n,t)})}function z_(n,e,t){const i=t.map(c=>c.currentWriteId),s=rc(n,e,i);let r=s;const a=s.hash();for(let c=0;c<t.length;c++){const g=t[c];y(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const p=ne(e,g.path);r=r.updateChild(p,g.currentOutputSnapshotRaw)}const d=r.val(!0),h=e;n.server_.put(h.toString(),d,c=>{Oi(n,"transaction put response",{path:h.toString(),status:c});let g=[];if(c==="ok"){const p=[];for(let _=0;_<t.length;_++)t[_].status=2,g=g.concat(He(n.serverSyncTree_,t[_].currentWriteId)),t[_].onComplete&&p.push(()=>t[_].onComplete(null,!0,t[_].currentOutputSnapshotResolved)),t[_].unwatcher();Di(n,mr(n.transactionQueueTree_,e)),br(n,n.transactionQueueTree_),ge(n.eventQueue_,e,g);for(let _=0;_<p.length;_++)$t(p[_])}else{if(c==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Z("transaction at "+h.toString()+" failed: "+c);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=c}Ft(n,e)}},a)}function Ft(n,e){const t=oc(n,e),i=Pn(t),s=ac(n,t);return G_(n,s,i),i}function G_(n,e,t){if(e.length===0)return;const i=[];let s=[];const a=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const h=e[d],c=ne(t,h.path);let g=!1,p;if(y(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)g=!0,p=h.abortReason,s=s.concat(He(n.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=F_)g=!0,p="maxretry",s=s.concat(He(n.serverSyncTree_,h.currentWriteId,!0));else{const _=rc(n,h.path,a);h.currentInputSnapshot=_;const v=e[d].update(_.val());if(v!==void 0){Ri("transaction failed: Data returned ",v,h.path);let w=j(v);typeof v=="object"&&v!=null&&we(v,".priority")||(w=w.updatePriority(_.getPriority()));const L=h.currentWriteId,ce=Ni(n),Ee=Yl(w,_,ce);h.currentOutputSnapshotRaw=w,h.currentOutputSnapshotResolved=Ee,h.currentWriteId=Er(n),a.splice(a.indexOf(L),1),s=s.concat(jl(n.serverSyncTree_,h.path,Ee,h.currentWriteId,h.applyLocally)),s=s.concat(He(n.serverSyncTree_,L,!0))}else g=!0,p="nodata",s=s.concat(He(n.serverSyncTree_,h.currentWriteId,!0))}ge(n.eventQueue_,t,s),s=[],g&&(e[d].status=2,function(_){setTimeout(_,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(p==="nodata"?i.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):i.push(()=>e[d].onComplete(new Error(p),!1,null))))}Di(n,n.transactionQueueTree_);for(let d=0;d<i.length;d++)$t(i[d]);br(n,n.transactionQueueTree_)}function oc(n,e){let t,i=n.transactionQueueTree_;for(t=T(e);t!==null&&jt(i)===void 0;)i=mr(i,t),e=M(e),t=T(e);return i}function ac(n,e){const t=[];return lc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function lc(n,e,t){const i=jt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ai(e,s=>{lc(n,s,t)})}function Di(n,e){const t=jt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Ql(e,t.length>0?t:void 0)}Ai(e,i=>{Di(n,i)})}function Cr(n,e){const t=Pn(oc(n,e)),i=mr(n.transactionQueueTree_,e);return I_(i,s=>{us(n,s)}),us(n,i),Xl(i,s=>{us(n,s)}),t}function us(n,e){const t=jt(e);if(t){const i=[];let s=[],r=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(y(r===a-1,"All SENT items should be at beginning of queue."),r=a,t[a].status=3,t[a].abortReason="set"):(y(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),s=s.concat(He(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&i.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ql(e,void 0):t.length=r+1,ge(n.eventQueue_,Pn(e),s);for(let a=0;a<i.length;a++)$t(i[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Y_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Z(`Invalid query segment '${t}' in query '${n}'`)}return e}const ya=function(n,e){const t=Q_(n),i=t.namespace;t.domain==="firebase.com"&&ke(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ke("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||op();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new pl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new D(t.pathString)}},Q_=function(n){let e="",t="",i="",s="",r="",a=!0,d="https",h=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(d=n.substring(0,c-1),n=n.substring(c+2));let g=n.indexOf("/");g===-1&&(g=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(g,p)),g<p&&(s=K_(n.substring(g,p)));const _=Y_(n.substring(Math.min(n.length,p)));c=e.indexOf(":"),c>=0?(a=d==="https"||d==="wss",h=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const w=e.indexOf(".");i=e.substring(0,w).toLowerCase(),t=e.substring(w+1),r=i}"ns"in _&&(r=_.ns)}return{host:e,port:h,domain:t,subdomain:i,secure:a,scheme:d,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",J_=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=va.charAt(t%64),t=Math.floor(t/64);y(t===0,"Cannot push at time == 0");let a=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)a+=va.charAt(e[s]);return y(a.length===20,"nextPushId: Length should be 20."),a}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+q(this.snapshot.exportVal())}}class uc{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return k(this._path)?null:Ys(this._path)}get ref(){return new Re(this._repo,this._path)}get _queryIdentifier(){const e=na(this._queryParams),t=qs(e);return t==="{}"?"default":t}get _queryObject(){return na(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof Ir))return!1;const t=this._repo===e._repo,i=Qs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vp(this._path)}}class Re extends Ir{constructor(e,t){super(e,t,new er,!1)}get parent(){const e=Cl(this._path);return e===null?null:new Re(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class En{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),i=Bt(this.ref,e);return new En(this._node.getChild(t),i,B)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new En(s,Bt(this.ref,i),B)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Z_(n,e){return n=ee(n),n._checkNotDeleted("ref"),e!==void 0?Bt(n._root,e):n._root}function Bt(n,e){return n=ee(n),T(n._path)===null?O_("child","path",e,!1):tc("child","path",e,!1),new Re(n._repo,F(n._path,e))}function kv(n,e){n=ee(n),vr("push",n._path),ec("push",e,n._path,!0);const t=sc(n._repo),i=J_(t),s=Bt(n,i),r=Bt(n,i);let a;return e!=null?a=dc(r,e).then(()=>r):a=Promise.resolve(r),s.then=a.then.bind(a),s.catch=a.then.bind(a,void 0),s}function Av(n){return vr("remove",n._path),dc(n,null)}function dc(n,e){n=ee(n),vr("set",n._path),ec("set",e,n._path,!1);const t=new Tn;return H_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Rv(n,e){N_("update",e,n._path,!1);const t=new Tn;return $_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Tr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new cc("value",this,new En(e.snapshotNode,new Re(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new uc(this,e,t):null}matches(e){return e instanceof Tr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Sr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new uc(this,e,t):null}createEvent(e,t){y(e.childName!=null,"Child events should have a childName.");const i=Bt(new Re(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new cc(e.type,this,new En(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Sr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function em(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const h=t,c=(g,p)=>{ma(n._repo,n,d),h(g,p)};c.userCallback=t.userCallback,c.context=t.context,t=c}const a=new X_(t,r||void 0),d=e==="value"?new Tr(a):new Sr(e,a);return j_(n._repo,n,d),()=>ma(n._repo,n,d)}function tm(n,e,t,i){return em(n,"value",e,t,i)}t_(Re);a_(Re);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="FIREBASE_DATABASE_EMULATOR_HOST",Ms={};let im=!1;function sm(n,e,t,i){n.repoInfo_=new pl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function rm(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ke("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Y("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=ya(r,s),d=a.repoInfo,h,c;typeof process<"u"&&process.env&&(c=process.env[nm]),c?(h=!0,r=`http://${c}?ns=${d.namespace}`,a=ya(r,s),d=a.repoInfo):h=!a.repoInfo.secure;const g=s&&h?new St(St.OWNER):new mp(n.name,n.options,e);D_("Invalid Firebase Database URL",a),k(a.path)||ke("Database URL must point to the root of a Firebase Database (not including a child path).");const p=am(d,n,g,new _p(n.name,t));return new lm(p,n)}function om(n,e){const t=Ms[e];(!t||t[n.key]!==n)&&ke(`Database ${e}(${n.repoInfo_}) has already been deleted.`),q_(n),delete t[n.key]}function am(n,e,t,i){let s=Ms[e.name];s||(s={},Ms[e.name]=s);let r=s[n.toURLString()];return r&&ke("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new B_(n,im,t,i),s[n.toURLString()]=r,r}class lm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(U_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Re(this._repo,P())),this._rootInternal}_delete(){return this._rootInternal!==null&&(om(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ke("Cannot call "+e+" on a deleted database.")}}function cm(n=Ja(),e){const t=Vs(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Nh("database");i&&um(t,...i)}return t}function um(n,e,t,i={}){n=ee(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&ke("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ke('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new St(St.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Oh(i.mockUserToken,n.app.options.projectId);r=new St(a)}sm(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n){tp(Ht),Ot(new rt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rm(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),je(Uo,Wo,n),je(Uo,Wo,"esm2017")}Se.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Se.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};dm();function kr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function hc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hm=hc,fc=new Sn("auth","Firebase",hc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Hs("@firebase/auth");function fm(n,...e){gi.logLevel<=O.WARN&&gi.warn(`Auth (${Ht}): ${n}`,...e)}function Kn(n,...e){gi.logLevel<=O.ERROR&&gi.error(`Auth (${Ht}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,...e){throw Ar(n,...e)}function ye(n,...e){return Ar(n,...e)}function pm(n,e,t){const i=Object.assign(Object.assign({},hm()),{[e]:t});return new Sn("auth","Firebase",i).create(e,{appName:n.name})}function Ar(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return fc.create(n,...e)}function C(n,e,...t){if(!n)throw Ar(e,...t)}function Ie(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kn(e),new Error(e)}function Ae(n,e){n||Ie(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gm(){return wa()==="http:"||wa()==="https:"}function wa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gm()||Dh()||"connection"in navigator)?navigator.onLine:!0}function mm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ae(t>e,"Short delay should be less than long delay!"),this.isMobile=Ws()||qa()}get(){return _m()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n,e){Ae(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new Nn(3e4,6e4);function qt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zt(n,e,t,i,s={}){return gc(n,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const d=Wt(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),pc.fetch()(_c(n,n.config.apiHost,t,d),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},r))})}async function gc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},ym),e);try{const s=new wm(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw zn(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const d=r.ok?a.errorMessage:a.error.message,[h,c]=d.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw zn(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw zn(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw zn(n,"user-disabled",a);const g=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pm(n,g,c);_e(n,g)}}catch(s){if(s instanceof Ke)throw s;_e(n,"network-request-failed",{message:String(s)})}}async function On(n,e,t,i,s={}){const r=await zt(n,e,t,i,s);return"mfaPendingCredential"in r&&_e(n,"multi-factor-auth-required",{_serverResponse:r}),r}function _c(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Rr(n.config,s):`${n.config.apiScheme}://${s}`}class wm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ye(this.auth,"network-request-failed")),vm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ye(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(n,e){return zt(n,"POST","/v1/accounts:delete",e)}async function bm(n,e){return zt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cm(n,e=!1){const t=ee(n),i=await t.getIdToken(e),s=Pr(i);C(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:hn(ds(s.auth_time)),issuedAtTime:hn(ds(s.iat)),expirationTime:hn(ds(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ds(n){return Number(n)*1e3}function Pr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Kn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zn(t);return s?JSON.parse(s):(Kn("Failed to decode base64 JWT payload"),null)}catch(s){return Kn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Im(n){const e=Pr(n);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ke&&Tm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Tm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hn(this.lastLoginAt),this.creationTime=hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(n){var e;const t=n.auth,i=await n.getIdToken(),s=await bn(n,bm(t,{idToken:i}));C(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Rm(r.providerUserInfo):[],d=Am(n.providerData,a),h=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(d!=null&&d.length),g=h?c:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:d,metadata:new mc(r.createdAt,r.lastLoginAt),isAnonymous:g};Object.assign(n,p)}async function km(n){const e=ee(n);await _i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Am(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Rm(n){return n.map(e=>{var{providerId:t}=e,i=kr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(n,e){const t=await gc(n,{},async()=>{const i=Wt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=_c(n,s,"/v1/token",`key=${r}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",pc.fetch()(a,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Im(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Pm(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new Cn;return i&&(C(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(C(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(C(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return Ie("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n,e){C(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=kr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new mc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await bn(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Cm(this,e)}reload(){return km(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await _i(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bn(this,Em(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,a,d,h,c,g;const p=(i=t.displayName)!==null&&i!==void 0?i:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,v=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,w=(a=t.photoURL)!==null&&a!==void 0?a:void 0,I=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,ce=(c=t.createdAt)!==null&&c!==void 0?c:void 0,Ee=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:oe,emailVerified:Pe,isAnonymous:Ne,providerData:Ye,stsTokenManager:W}=t;C(oe&&W,e,"internal-error");const Qe=Cn.fromJSON(this.name,W);C(typeof oe=="string",e,"internal-error"),Le(p,e.name),Le(_,e.name),C(typeof Pe=="boolean",e,"internal-error"),C(typeof Ne=="boolean",e,"internal-error"),Le(v,e.name),Le(w,e.name),Le(I,e.name),Le(L,e.name),Le(ce,e.name),Le(Ee,e.name);const z=new st({uid:oe,auth:e,email:_,emailVerified:Pe,displayName:p,isAnonymous:Ne,photoURL:w,phoneNumber:v,tenantId:I,stsTokenManager:Qe,createdAt:ce,lastLoginAt:Ee});return Ye&&Array.isArray(Ye)&&(z.providerData=Ye.map(R=>Object.assign({},R))),L&&(z._redirectEventId=L),z}static async _fromIdTokenResponse(e,t,i=!1){const s=new Cn;s.updateFromServerResponse(t);const r=new st({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await _i(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Map;function Te(n){Ae(n instanceof Function,"Expected a class definition");let e=Ea.get(n);return e?(Ae(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ea.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yc.type="NONE";const ba=yc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n,e,t){return`firebase:${n}:${e}:${t}`}class Rt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Yn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Yn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Rt(Te(ba),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Te(ba);const a=Yn(i,e.config.apiKey,e.name);let d=null;for(const c of t)try{const g=await c._get(a);if(g){const p=st._fromJSON(e,g);c!==r&&(d=p),r=c;break}}catch{}const h=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!h.length?new Rt(r,e,i):(r=h[0],d&&await r._set(a,d.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(a)}catch{}})),new Rt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ec(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cc(e))return"Blackberry";if(Ic(e))return"Webos";if(Nr(e))return"Safari";if((e.includes("chrome/")||wc(e))&&!e.includes("edge/"))return"Chrome";if(bc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vc(n=X()){return/firefox\//i.test(n)}function Nr(n=X()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wc(n=X()){return/crios\//i.test(n)}function Ec(n=X()){return/iemobile/i.test(n)}function bc(n=X()){return/android/i.test(n)}function Cc(n=X()){return/blackberry/i.test(n)}function Ic(n=X()){return/webos/i.test(n)}function xi(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Nm(n=X()){var e;return xi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Om(){return xh()&&document.documentMode===10}function Tc(n=X()){return xi(n)||bc(n)||Ic(n)||Cc(n)||/windows phone/i.test(n)||Ec(n)}function Dm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n,e=[]){let t;switch(n){case"Browser":t=Ca(X());break;case"Worker":t=`${Ca(X())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ht}/${i}`}async function kc(n,e){return zt(n,"GET","/v2/recaptchaConfig",qt(n,e))}function Ia(n){return n!==void 0&&n.enterprise!==void 0}class Ac{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Rc(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ye("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",xm().appendChild(i)})}function Mm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Lm="https://www.google.com/recaptcha/enterprise.js?render=",Fm="recaptcha-enterprise",Bm="NO_RECAPTCHA";class Pc{constructor(e){this.type=Fm,this.auth=Gt(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,d)=>{kc(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ac(h);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,a(c.siteKey)}}).catch(h=>{d(h)})})}function s(r,a,d){const h=window.grecaptcha;Ia(h)?h.enterprise.ready(()=>{h.enterprise.execute(r,{action:e}).then(c=>{a(c)}).catch(()=>{a(Bm)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,a)=>{i(this.auth).then(d=>{if(!t&&Ia(window.grecaptcha))s(d,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}Rc(Lm+d).then(()=>{s(d,r,a)}).catch(h=>{a(h)})}}).catch(d=>{a(d)})})}}async function mi(n,e,t,i=!1){const s=new Pc(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const a=Object.assign({},e);return i?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((a,d)=>{try{const h=e(r);a(h)}catch(h){d(h)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ta(this),this.idTokenSubscription=new Ta(this),this.beforeStateQueue=new Um(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Te(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Rt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===d)&&(h!=null&&h.user)&&(s=h.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _i(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ee(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(e))})}async initializeRecaptchaConfig(){const e=await kc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ac(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Pc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Te(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await Rt.create(this,[Te(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return C(a,this,"internal-error"),a.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&fm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Gt(n){return ee(n)}class Ta{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vh(t=>this.observer=t)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(n,e){const t=Vs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ti(r,e??{}))return s;_e(s,"already-initialized")}return t.initialize({options:e})}function $m(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Te);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Vm(n,e,t){const i=Gt(n);C(i._canInitEmulator,i,"emulator-config-failed"),C(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Nc(e),{host:a,port:d}=jm(e),h=d===null?"":`:${d}`;i.config.emulator={url:`${r}//${a}${h}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:d,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||qm()}function Nc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function jm(n){const e=Nc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Sa(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:Sa(a)}}}function Sa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function qm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,t){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}}async function zm(n,e){return zt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(n,e){return On(n,"POST","/v1/accounts:signInWithPassword",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(n,e){return On(n,"POST","/v1/accounts:signInWithEmailLink",qt(n,e))}async function Km(n,e){return On(n,"POST","/v1/accounts:signInWithEmailLink",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Or{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new In(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new In(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await mi(e,i,"signInWithPassword");return hs(e,s)}else return hs(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await mi(e,i,"signInWithPassword");return hs(e,r)}else return Promise.reject(s)});case"emailLink":return Gm(e,{email:this._email,oobCode:this._password});default:_e(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return zm(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Km(e,{idToken:t,email:this._email,oobCode:this._password});default:_e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(n,e){return On(n,"POST","/v1/accounts:signInWithIdp",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="http://localhost";class dt extends Or{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_e("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=kr(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new dt(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Pt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Pt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pt(e,t)}buildRequest(){const e={requestUri:Ym,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jm(n){const e=on(an(n)).link,t=e?on(an(e)).deep_link_id:null,i=on(an(n)).deep_link_id;return(i?on(an(i)).link:null)||i||t||e||n}class Dr{constructor(e){var t,i,s,r,a,d;const h=on(an(e)),c=(t=h.apiKey)!==null&&t!==void 0?t:null,g=(i=h.oobCode)!==null&&i!==void 0?i:null,p=Qm((s=h.mode)!==null&&s!==void 0?s:null);C(c&&g&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=g,this.continueUrl=(r=h.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(d=h.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Jm(e);try{return new Dr(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.providerId=Kt.PROVIDER_ID}static credential(e,t){return In._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Dr.parseLink(t);return C(i,"argument-error"),In._fromEmailAndCode(e,i.code,i.tenantId)}}Kt.PROVIDER_ID="password";Kt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Oc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Dn{constructor(){super("facebook.com")}static credential(e){return dt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Dn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dt._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Be.credential(t,i)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Dn{constructor(){super("github.com")}static credential(e){return dt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com";Ue.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Dn{constructor(){super("twitter.com")}static credential(e,t){return dt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return We.credential(t,i)}catch{return null}}}We.TWITTER_SIGN_IN_METHOD="twitter.com";We.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(n,e){return On(n,"POST","/v1/accounts:signUp",qt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await st._fromIdTokenResponse(e,i,s),a=ka(i);return new ht({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=ka(i);return new ht({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function ka(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Ke{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,yi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new yi(e,t,i,s)}}function Dc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?yi._fromErrorAndOperation(n,r,e,i):r})}async function Xm(n,e,t=!1){const i=await bn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ht._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await bn(n,Dc(i,s,e,n),t);C(r.idToken,i,"internal-error");const a=Pr(r.idToken);C(a,i,"internal-error");const{sub:d}=a;return C(n.uid===d,i,"user-mismatch"),ht._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_e(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(n,e,t=!1){const i="signIn",s=await Dc(n,i,e),r=await ht._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function ey(n,e){return xc(Gt(n),e)}async function Pv(n,e,t){var i;const s=Gt(n),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let a;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await mi(s,r,"signUpPassword");a=fs(s,c)}else a=fs(s,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const g=await mi(s,r,"signUpPassword");return fs(s,g)}else return Promise.reject(c)});const d=await a.catch(c=>Promise.reject(c)),h=await ht._fromIdTokenResponse(s,"signIn",d);return await s._updateCurrentUser(h.user),h}function Nv(n,e,t){return ey(ee(n),Kt.credential(e,t))}function ty(n,e,t,i){return ee(n).onIdTokenChanged(e,t,i)}function ny(n,e,t){return ee(n).beforeAuthStateChanged(e,t)}function iy(n,e,t,i){return ee(n).onAuthStateChanged(e,t,i)}function sy(n){return ee(n).signOut()}const vi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vi,"1"),this.storage.removeItem(vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(){const n=X();return Nr(n)||xi(n)}const oy=1e3,ay=10;class Lc extends Mc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ry()&&Dm(),this.fallbackToPolling=Tc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,d,h)=>{this.notifyListeners(a,h)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);Om()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ay):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lc.type="LOCAL";const ly=Lc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fc.type="SESSION";const Bc=Fc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Mi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const d=Array.from(a).map(async c=>c(t.origin,r)),h=await cy(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((d,h)=>{const c=xr("",20);s.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===c)switch(_.data.status){case"ack":clearTimeout(g),r=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),d(_.data.response);break;default:clearTimeout(g),clearTimeout(r),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return window}function dy(n){ve().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){return typeof ve().WorkerGlobalScope<"u"&&typeof ve().importScripts=="function"}async function hy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function py(){return Uc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="firebaseLocalStorageDb",gy=1,wi="firebaseLocalStorage",Hc="fbase_key";class xn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Li(n,e){return n.transaction([wi],e?"readwrite":"readonly").objectStore(wi)}function _y(){const n=indexedDB.deleteDatabase(Wc);return new xn(n).toPromise()}function Fs(){const n=indexedDB.open(Wc,gy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(wi,{keyPath:Hc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(wi)?e(i):(i.close(),await _y(),e(await Fs()))})})}async function Aa(n,e,t){const i=Li(n,!0).put({[Hc]:e,value:t});return new xn(i).toPromise()}async function my(n,e){const t=Li(n,!1).get(e),i=await new xn(t).toPromise();return i===void 0?null:i.value}function Ra(n,e){const t=Li(n,!0).delete(e);return new xn(t).toPromise()}const yy=800,vy=3;class $c{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>vy)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mi._getInstance(py()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hy(),!this.activeServiceWorker)return;this.sender=new uy(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fs();return await Aa(e,vi,"1"),await Ra(e,vi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Aa(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>my(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ra(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Li(s,!1).getAll();return new xn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$c.type="LOCAL";const wy=$c;new Nn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(n,e){return e?Te(e):(C(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Or{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function by(n){return xc(n.auth,new Mr(n),n.bypassAuthState)}function Cy(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),Zm(t,new Mr(n),n.bypassAuthState)}async function Iy(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),Xm(t,new Mr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:d}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(h))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return by;case"linkViaPopup":case"linkViaRedirect":return Iy;case"reauthViaPopup":case"reauthViaRedirect":return Cy;default:_e(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new Nn(2e3,1e4);class It extends Vc{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,It.currentPopupAction&&It.currentPopupAction.cancel(),It.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=xr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,It.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ty.get())};e()}}It.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="pendingRedirect",Qn=new Map;class ky extends Vc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Qn.get(this.auth._key());if(!e){try{const i=await Ay(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Qn.set(this.auth._key(),e)}return this.bypassAuthState||Qn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ay(n,e){const t=Ny(e),i=Py(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Ry(n,e){Qn.set(n._key(),e)}function Py(n){return Te(n._redirectPersistence)}function Ny(n){return Yn(Sy,n.config.apiKey,n.name)}async function Oy(n,e,t=!1){const i=Gt(n),s=Ey(i,e),a=await new ky(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=10*60*1e3;class xy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!My(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!jc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ye(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pa(e))}saveEventToCache(e){this.cachedEventUids.add(Pa(e)),this.lastProcessedEventTime=Date.now()}}function Pa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function My(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(n,e={}){return zt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,By=/^https?/;async function Uy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ly(n);for(const t of e)try{if(Wy(t))return}catch{}_e(n,"unauthorized-domain")}function Wy(n){const e=Ls(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!By.test(t))return!1;if(Fy.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new Nn(3e4,6e4);function Na(){const n=ve().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $y(n){return new Promise((e,t)=>{var i,s,r;function a(){Na(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Na(),t(ye(n,"network-request-failed"))},timeout:Hy.get()})}if(!((s=(i=ve().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ve().gapi)===null||r===void 0)&&r.load)a();else{const d=Mm("iframefcb");return ve()[d]=()=>{gapi.load?a():t(ye(n,"network-request-failed"))},Rc(`https://apis.google.com/js/api.js?onload=${d}`).catch(h=>t(h))}}).catch(e=>{throw Jn=null,e})}let Jn=null;function Vy(n){return Jn=Jn||$y(n),Jn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=new Nn(5e3,15e3),qy="__/auth/iframe",zy="emulator/auth/iframe",Gy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ky=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yy(n){const e=n.config;C(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rr(e,zy):`https://${n.config.authDomain}/${qy}`,i={apiKey:e.apiKey,appName:n.name,v:Ht},s=Ky.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Wt(i).slice(1)}`}async function Qy(n){const e=await Vy(n),t=ve().gapi;return C(t,n,"internal-error"),e.open({where:document.body,url:Yy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gy,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=ye(n,"network-request-failed"),d=ve().setTimeout(()=>{r(a)},jy.get());function h(){ve().clearTimeout(d),s(i)}i.ping(h).then(h,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xy=500,Zy=600,ev="_blank",tv="http://localhost";class Oa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nv(n,e,t,i=Xy,s=Zy){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const h=Object.assign(Object.assign({},Jy),{width:i.toString(),height:s.toString(),top:r,left:a}),c=X().toLowerCase();t&&(d=wc(c)?ev:t),vc(c)&&(e=e||tv,h.scrollbars="yes");const g=Object.entries(h).reduce((_,[v,w])=>`${_}${v}=${w},`,"");if(Nm(c)&&d!=="_self")return iv(e||"",d),new Oa(null);const p=window.open(e||"",d,g);C(p,n,"popup-blocked");try{p.focus()}catch{}return new Oa(p)}function iv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="__/auth/handler",rv="emulator/auth/handler",ov=encodeURIComponent("fac");async function Da(n,e,t,i,s,r){C(n.config.authDomain,n,"auth-domain-config-required"),C(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ht,eventId:s};if(e instanceof Oc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",gs(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,p]of Object.entries(r||{}))a[g]=p}if(e instanceof Dn){const g=e.getScopes().filter(p=>p!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const d=a;for(const g of Object.keys(d))d[g]===void 0&&delete d[g];const h=await n._getAppCheckToken(),c=h?`#${ov}=${encodeURIComponent(h)}`:"";return`${av(n)}?${Wt(d).slice(1)}${c}`}function av({config:n}){return n.emulator?Rr(n,rv):`https://${n.authDomain}/${sv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="webStorageSupport";class lv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bc,this._completeRedirectFn=Oy,this._overrideRedirectResult=Ry}async _openPopup(e,t,i,s){var r;Ae((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await Da(e,t,i,Ls(),s);return nv(e,a,xr())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Da(e,t,i,Ls(),s);return dy(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Ae(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Qy(e),i=new xy(e);return t.register("authEvent",s=>(C(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ps,{type:ps},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ps];a!==void 0&&t(!!a),_e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Uy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tc()||Nr()||xi()}}const cv=lv;var xa="@firebase/auth",Ma="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hv(n){Ot(new rt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:d}=i.options;C(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:a,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sc(n)},c=new Wm(i,s,r,h);return $m(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ot(new rt("auth-internal",e=>{const t=Gt(e.getProvider("auth").getImmediate());return(i=>new uv(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),je(xa,Ma,dv(n)),je(xa,Ma,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=5*60,pv=ja("authIdTokenMaxAge")||fv;let La=null;const gv=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>pv)return;const s=t==null?void 0:t.token;La!==s&&(La=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _v(n=Ja()){const e=Vs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Hm(n,{popupRedirectResolver:cv,persistence:[wy,ly,Bc]}),i=ja("authTokenSyncURL");if(i){const r=gv(i);ny(t,r,()=>r(t.currentUser)),ty(t,a=>r(a))}const s=$a("auth");return s&&Vm(t,`http://${s}`),t}hv("Browser");const{VITE_API_KEY:mv,VITE_AUTH_DOMAIN:yv,VITE_URL:vv,VITE_SENDERID:wv,VITE_APPID:Ev,VITE_MEASUREMENTID:bv}={VITE_API_KEY:"AIzaSyCZWgCU7Df8MdIlkomf4MhABnnKKmZFj0U",VITE_AUTH_DOMAIN:"todolist-ca1a4.firebaseapp.com",VITE_URL:"https://todolist-ca1a4-default-rtdb.asia-southeast1.firebasedatabase.app",VITE_SENDERID:"1033752094577",VITE_APPID:"1:1033752094577:web:4ec22833789431a27d38d0",VITE_MEASUREMENTID:"G-4ZJY8LTQ0N",VITE_ADMIN_UID:"BRErpRLLibdS959TLjs9rQo9YQ13",BASE_URL:"/TakeNotesEveryDay/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Cv={apiKey:mv,authDomain:yv,databaseURL:vv,projectId:"todolist-ca1a4",storageBucket:"todolist-ca1a4.appspot.com",messagingSenderId:wv,appId:Ev,measurementId:bv},qc=Qa(Cv),Iv=cm(qc),Fa=_v(qc);var zc={exports:{}};/*!
* sweetalert2 v11.7.12
* Released under the MIT License.
*/(function(n,e){(function(t,i){n.exports=i()})(Me,function(){const i={},s=()=>{i.previousActiveElement instanceof HTMLElement?(i.previousActiveElement.focus(),i.previousActiveElement=null):document.body&&document.body.focus()},r=o=>new Promise(l=>{if(!o)return l();const u=window.scrollX,f=window.scrollY;i.restoreFocusTimeout=setTimeout(()=>{s(),l()},100),window.scrollTo(u,f)});var a={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const d="swal2-",c=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((o,l)=>(o[l]=d+l,o),{}),p=["success","warning","info","question","error"].reduce((o,l)=>(o[l]=d+l,o),{}),_="SweetAlert2:",v=o=>o.charAt(0).toUpperCase()+o.slice(1),w=o=>{console.warn(`${_} ${typeof o=="object"?o.join(" "):o}`)},I=o=>{console.error(`${_} ${o}`)},L=[],ce=o=>{L.includes(o)||(L.push(o),w(o))},Ee=(o,l)=>{ce(`"${o}" is deprecated and will be removed in the next major release. Please use "${l}" instead.`)},oe=o=>typeof o=="function"?o():o,Pe=o=>o&&typeof o.toPromise=="function",Ne=o=>Pe(o)?o.toPromise():Promise.resolve(o),Ye=o=>o&&Promise.resolve(o)===o,W=()=>document.body.querySelector(`.${c.container}`),Qe=o=>{const l=W();return l?l.querySelector(o):null},z=o=>Qe(`.${o}`),R=()=>z(c.popup),Yt=()=>z(c.icon),Gc=()=>z(c["icon-content"]),Lr=()=>z(c.title),Mn=()=>z(c["html-container"]),Fr=()=>z(c.image),Fi=()=>z(c["progress-steps"]),Ln=()=>z(c["validation-message"]),ue=()=>Qe(`.${c.actions} .${c.confirm}`),Je=()=>Qe(`.${c.actions} .${c.cancel}`),Oe=()=>Qe(`.${c.actions} .${c.deny}`),Kc=()=>z(c["input-label"]),gt=()=>Qe(`.${c.loader}`),Qt=()=>z(c.actions),Br=()=>z(c.footer),Fn=()=>z(c["timer-progress-bar"]),Bi=()=>z(c.close),Yc=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ui=()=>{const o=R().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),l=Array.from(o).sort((m,E)=>{const N=parseInt(m.getAttribute("tabindex")),H=parseInt(E.getAttribute("tabindex"));return N>H?1:N<H?-1:0}),u=R().querySelectorAll(Yc),f=Array.from(u).filter(m=>m.getAttribute("tabindex")!=="-1");return[...new Set(l.concat(f))].filter(m=>re(m))},Wi=()=>be(document.body,c.shown)&&!be(document.body,c["toast-shown"])&&!be(document.body,c["no-backdrop"]),Bn=()=>R()&&be(R(),c.toast),Qc=()=>R().hasAttribute("data-loading"),se=(o,l)=>{if(o.textContent="",l){const f=new DOMParser().parseFromString(l,"text/html");Array.from(f.querySelector("head").childNodes).forEach(m=>{o.appendChild(m)}),Array.from(f.querySelector("body").childNodes).forEach(m=>{m instanceof HTMLVideoElement||m instanceof HTMLAudioElement?o.appendChild(m.cloneNode(!0)):o.appendChild(m)})}},be=(o,l)=>{if(!l)return!1;const u=l.split(/\s+/);for(let f=0;f<u.length;f++)if(!o.classList.contains(u[f]))return!1;return!0},Jc=(o,l)=>{Array.from(o.classList).forEach(u=>{!Object.values(c).includes(u)&&!Object.values(p).includes(u)&&!Object.values(l.showClass).includes(u)&&o.classList.remove(u)})},ae=(o,l,u)=>{if(Jc(o,l),l.customClass&&l.customClass[u]){if(typeof l.customClass[u]!="string"&&!l.customClass[u].forEach){w(`Invalid type of customClass.${u}! Expected string or iterable object, got "${typeof l.customClass[u]}"`);return}A(o,l.customClass[u])}},Hi=(o,l)=>{if(!l)return null;switch(l){case"select":case"textarea":case"file":return o.querySelector(`.${c.popup} > .${c[l]}`);case"checkbox":return o.querySelector(`.${c.popup} > .${c.checkbox} input`);case"radio":return o.querySelector(`.${c.popup} > .${c.radio} input:checked`)||o.querySelector(`.${c.popup} > .${c.radio} input:first-child`);case"range":return o.querySelector(`.${c.popup} > .${c.range} input`);default:return o.querySelector(`.${c.popup} > .${c.input}`)}},Ur=o=>{if(o.focus(),o.type!=="file"){const l=o.value;o.value="",o.value=l}},Wr=(o,l,u)=>{!o||!l||(typeof l=="string"&&(l=l.split(/\s+/).filter(Boolean)),l.forEach(f=>{Array.isArray(o)?o.forEach(m=>{u?m.classList.add(f):m.classList.remove(f)}):u?o.classList.add(f):o.classList.remove(f)}))},A=(o,l)=>{Wr(o,l,!0)},me=(o,l)=>{Wr(o,l,!1)},De=(o,l)=>{const u=Array.from(o.children);for(let f=0;f<u.length;f++){const m=u[f];if(m instanceof HTMLElement&&be(m,l))return m}},_t=(o,l,u)=>{u===`${parseInt(u)}`&&(u=parseInt(u)),u||parseInt(u)===0?o.style[l]=typeof u=="number"?`${u}px`:u:o.style.removeProperty(l)},G=function(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";o&&(o.style.display=l)},J=o=>{o&&(o.style.display="none")},Hr=(o,l,u,f)=>{const m=o.querySelector(l);m&&(m.style[u]=f)},Un=function(o,l){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";l?G(o,u):J(o)},re=o=>!!(o&&(o.offsetWidth||o.offsetHeight||o.getClientRects().length)),Xc=()=>!re(ue())&&!re(Oe())&&!re(Je()),$r=o=>o.scrollHeight>o.clientHeight,Vr=o=>{const l=window.getComputedStyle(o),u=parseFloat(l.getPropertyValue("animation-duration")||"0"),f=parseFloat(l.getPropertyValue("transition-duration")||"0");return u>0||f>0},$i=function(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const u=Fn();re(u)&&(l&&(u.style.transition="none",u.style.width="100%"),setTimeout(()=>{u.style.transition=`width ${o/1e3}s linear`,u.style.width="0%"},10))},Zc=()=>{const o=Fn(),l=parseInt(window.getComputedStyle(o).width);o.style.removeProperty("transition"),o.style.width="100%";const u=parseInt(window.getComputedStyle(o).width),f=l/u*100;o.style.width=`${f}%`},jr=()=>typeof window>"u"||typeof document>"u",eu=`
 <div aria-labelledby="${c.title}" aria-describedby="${c["html-container"]}" class="${c.popup}" tabindex="-1">
   <button type="button" class="${c.close}"></button>
   <ul class="${c["progress-steps"]}"></ul>
   <div class="${c.icon}"></div>
   <img class="${c.image}" />
   <h2 class="${c.title}" id="${c.title}"></h2>
   <div class="${c["html-container"]}" id="${c["html-container"]}"></div>
   <input class="${c.input}" />
   <input type="file" class="${c.file}" />
   <div class="${c.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${c.select}"></select>
   <div class="${c.radio}"></div>
   <label for="${c.checkbox}" class="${c.checkbox}">
     <input type="checkbox" />
     <span class="${c.label}"></span>
   </label>
   <textarea class="${c.textarea}"></textarea>
   <div class="${c["validation-message"]}" id="${c["validation-message"]}"></div>
   <div class="${c.actions}">
     <div class="${c.loader}"></div>
     <button type="button" class="${c.confirm}"></button>
     <button type="button" class="${c.deny}"></button>
     <button type="button" class="${c.cancel}"></button>
   </div>
   <div class="${c.footer}"></div>
   <div class="${c["timer-progress-bar-container"]}">
     <div class="${c["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),tu=()=>{const o=W();return o?(o.remove(),me([document.documentElement,document.body],[c["no-backdrop"],c["toast-shown"],c["has-column"]]),!0):!1},Xe=()=>{i.currentInstance.resetValidationMessage()},nu=()=>{const o=R(),l=De(o,c.input),u=De(o,c.file),f=o.querySelector(`.${c.range} input`),m=o.querySelector(`.${c.range} output`),E=De(o,c.select),N=o.querySelector(`.${c.checkbox} input`),H=De(o,c.textarea);l.oninput=Xe,u.onchange=Xe,E.onchange=Xe,N.onchange=Xe,H.oninput=Xe,f.oninput=()=>{Xe(),m.value=f.value},f.onchange=()=>{Xe(),m.value=f.value}},iu=o=>typeof o=="string"?document.querySelector(o):o,su=o=>{const l=R();l.setAttribute("role",o.toast?"alert":"dialog"),l.setAttribute("aria-live",o.toast?"polite":"assertive"),o.toast||l.setAttribute("aria-modal","true")},ru=o=>{window.getComputedStyle(o).direction==="rtl"&&A(W(),c.rtl)},ou=o=>{const l=tu();if(jr()){I("SweetAlert2 requires document to initialize");return}const u=document.createElement("div");u.className=c.container,l&&A(u,c["no-transition"]),se(u,eu);const f=iu(o.target);f.appendChild(u),su(o),ru(f),nu()},Vi=(o,l)=>{o instanceof HTMLElement?l.appendChild(o):typeof o=="object"?au(o,l):o&&se(l,o)},au=(o,l)=>{o.jquery?lu(l,o):se(l,o.toString())},lu=(o,l)=>{if(o.textContent="",0 in l)for(let u=0;u in l;u++)o.appendChild(l[u].cloneNode(!0));else o.appendChild(l.cloneNode(!0))},Jt=(()=>{if(jr())return!1;const o=document.createElement("div"),l={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const u in l)if(Object.prototype.hasOwnProperty.call(l,u)&&typeof o.style[u]<"u")return l[u];return!1})(),cu=(o,l)=>{const u=Qt(),f=gt();!l.showConfirmButton&&!l.showDenyButton&&!l.showCancelButton?J(u):G(u),ae(u,l,"actions"),uu(u,f,l),se(f,l.loaderHtml),ae(f,l,"loader")};function uu(o,l,u){const f=ue(),m=Oe(),E=Je();ji(f,"confirm",u),ji(m,"deny",u),ji(E,"cancel",u),du(f,m,E,u),u.reverseButtons&&(u.toast?(o.insertBefore(E,f),o.insertBefore(m,f)):(o.insertBefore(E,l),o.insertBefore(m,l),o.insertBefore(f,l)))}function du(o,l,u,f){if(!f.buttonsStyling){me([o,l,u],c.styled);return}A([o,l,u],c.styled),f.confirmButtonColor&&(o.style.backgroundColor=f.confirmButtonColor,A(o,c["default-outline"])),f.denyButtonColor&&(l.style.backgroundColor=f.denyButtonColor,A(l,c["default-outline"])),f.cancelButtonColor&&(u.style.backgroundColor=f.cancelButtonColor,A(u,c["default-outline"]))}function ji(o,l,u){Un(o,u[`show${v(l)}Button`],"inline-block"),se(o,u[`${l}ButtonText`]),o.setAttribute("aria-label",u[`${l}ButtonAriaLabel`]),o.className=c[l],ae(o,u,`${l}Button`),A(o,u[`${l}ButtonClass`])}const hu=(o,l)=>{const u=Bi();u&&(se(u,l.closeButtonHtml||""),ae(u,l,"closeButton"),Un(u,l.showCloseButton),u.setAttribute("aria-label",l.closeButtonAriaLabel||""))},fu=(o,l)=>{const u=W();u&&(pu(u,l.backdrop),gu(u,l.position),_u(u,l.grow),ae(u,l,"container"))};function pu(o,l){typeof l=="string"?o.style.background=l:l||A([document.documentElement,document.body],c["no-backdrop"])}function gu(o,l){l in c?A(o,c[l]):(w('The "position" parameter is not valid, defaulting to "center"'),A(o,c.center))}function _u(o,l){if(l&&typeof l=="string"){const u=`grow-${l}`;u in c&&A(o,c[u])}}const mu=["input","file","range","select","radio","checkbox","textarea"],yu=(o,l)=>{const u=R(),f=a.innerParams.get(o),m=!f||l.input!==f.input;mu.forEach(E=>{const N=De(u,c[E]);Eu(E,l.inputAttributes),N.className=c[E],m&&J(N)}),l.input&&(m&&vu(l),bu(l))},vu=o=>{if(!te[o.input]){I(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${o.input}"`);return}const l=qr(o.input),u=te[o.input](l,o);G(l),o.inputAutoFocus&&setTimeout(()=>{Ur(u)})},wu=o=>{for(let l=0;l<o.attributes.length;l++){const u=o.attributes[l].name;["type","value","style"].includes(u)||o.removeAttribute(u)}},Eu=(o,l)=>{const u=Hi(R(),o);if(u){wu(u);for(const f in l)u.setAttribute(f,l[f])}},bu=o=>{const l=qr(o.input);typeof o.customClass=="object"&&A(l,o.customClass.input)},qi=(o,l)=>{(!o.placeholder||l.inputPlaceholder)&&(o.placeholder=l.inputPlaceholder)},Xt=(o,l,u)=>{if(u.inputLabel){o.id=c.input;const f=document.createElement("label"),m=c["input-label"];f.setAttribute("for",o.id),f.className=m,typeof u.customClass=="object"&&A(f,u.customClass.inputLabel),f.innerText=u.inputLabel,l.insertAdjacentElement("beforebegin",f)}},qr=o=>De(R(),c[o]||c.input),Wn=(o,l)=>{["string","number"].includes(typeof l)?o.value=`${l}`:Ye(l)||w(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof l}"`)},te={};te.text=te.email=te.password=te.number=te.tel=te.url=(o,l)=>(Wn(o,l.inputValue),Xt(o,o,l),qi(o,l),o.type=l.input,o),te.file=(o,l)=>(Xt(o,o,l),qi(o,l),o),te.range=(o,l)=>{const u=o.querySelector("input"),f=o.querySelector("output");return Wn(u,l.inputValue),u.type=l.input,Wn(f,l.inputValue),Xt(u,o,l),o},te.select=(o,l)=>{if(o.textContent="",l.inputPlaceholder){const u=document.createElement("option");se(u,l.inputPlaceholder),u.value="",u.disabled=!0,u.selected=!0,o.appendChild(u)}return Xt(o,o,l),o},te.radio=o=>(o.textContent="",o),te.checkbox=(o,l)=>{const u=Hi(R(),"checkbox");u.value="1",u.id=c.checkbox,u.checked=!!l.inputValue;const f=o.querySelector("span");return se(f,l.inputPlaceholder),u},te.textarea=(o,l)=>{Wn(o,l.inputValue),qi(o,l),Xt(o,o,l);const u=f=>parseInt(window.getComputedStyle(f).marginLeft)+parseInt(window.getComputedStyle(f).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const f=parseInt(window.getComputedStyle(R()).width),m=()=>{const E=o.offsetWidth+u(o);E>f?R().style.width=`${E}px`:R().style.width=null};new MutationObserver(m).observe(o,{attributes:!0,attributeFilter:["style"]})}}),o};const Cu=(o,l)=>{const u=Mn();u&&(ae(u,l,"htmlContainer"),l.html?(Vi(l.html,u),G(u,"block")):l.text?(u.textContent=l.text,G(u,"block")):J(u),yu(o,l))},Iu=(o,l)=>{const u=Br();u&&(Un(u,l.footer),l.footer&&Vi(l.footer,u),ae(u,l,"footer"))},Tu=(o,l)=>{const u=a.innerParams.get(o),f=Yt();if(u&&l.icon===u.icon){Gr(f,l),zr(f,l);return}if(!l.icon&&!l.iconHtml){J(f);return}if(l.icon&&Object.keys(p).indexOf(l.icon)===-1){I(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${l.icon}"`),J(f);return}G(f),Gr(f,l),zr(f,l),A(f,l.showClass.icon)},zr=(o,l)=>{for(const u in p)l.icon!==u&&me(o,p[u]);A(o,p[l.icon]),Ru(o,l),Su(),ae(o,l,"icon")},Su=()=>{const o=R(),l=window.getComputedStyle(o).getPropertyValue("background-color"),u=o.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let f=0;f<u.length;f++)u[f].style.backgroundColor=l},ku=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Au=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Gr=(o,l)=>{let u=o.innerHTML,f;l.iconHtml?f=Kr(l.iconHtml):l.icon==="success"?(f=ku,u=u.replace(/ style=".*?"/g,"")):l.icon==="error"?f=Au:f=Kr({question:"?",warning:"!",info:"i"}[l.icon]),u.trim()!==f.trim()&&se(o,f)},Ru=(o,l)=>{if(l.iconColor){o.style.color=l.iconColor,o.style.borderColor=l.iconColor;for(const u of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Hr(o,u,"backgroundColor",l.iconColor);Hr(o,".swal2-success-ring","borderColor",l.iconColor)}},Kr=o=>`<div class="${c["icon-content"]}">${o}</div>`,Pu=(o,l)=>{const u=Fr();if(u){if(!l.imageUrl){J(u);return}G(u,""),u.setAttribute("src",l.imageUrl),u.setAttribute("alt",l.imageAlt||""),_t(u,"width",l.imageWidth),_t(u,"height",l.imageHeight),u.className=c.image,ae(u,l,"image")}},Nu=(o,l)=>{const u=W(),f=R();if(!(!u||!f)){if(l.toast){_t(u,"width",l.width),f.style.width="100%";const m=gt();m&&f.insertBefore(m,Yt())}else _t(f,"width",l.width);_t(f,"padding",l.padding),l.color&&(f.style.color=l.color),l.background&&(f.style.background=l.background),J(Ln()),Ou(f,l)}},Ou=(o,l)=>{const u=l.showClass||{};o.className=`${c.popup} ${re(o)?u.popup:""}`,l.toast?(A([document.documentElement,document.body],c["toast-shown"]),A(o,c.toast)):A(o,c.modal),ae(o,l,"popup"),typeof l.customClass=="string"&&A(o,l.customClass),l.icon&&A(o,c[`icon-${l.icon}`])},Du=(o,l)=>{const u=Fi();if(!u)return;const{progressSteps:f,currentProgressStep:m}=l;if(!f||f.length===0||m===void 0){J(u);return}G(u),u.textContent="",m>=f.length&&w("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),f.forEach((E,N)=>{const H=xu(E);if(u.appendChild(H),N===m&&A(H,c["active-progress-step"]),N!==f.length-1){const K=Mu(l);u.appendChild(K)}})},xu=o=>{const l=document.createElement("li");return A(l,c["progress-step"]),se(l,o),l},Mu=o=>{const l=document.createElement("li");return A(l,c["progress-step-line"]),o.progressStepsDistance&&_t(l,"width",o.progressStepsDistance),l},Lu=(o,l)=>{const u=Lr();u&&(Un(u,l.title||l.titleText,"block"),l.title&&Vi(l.title,u),l.titleText&&(u.innerText=l.titleText),ae(u,l,"title"))},Yr=(o,l)=>{Nu(o,l),fu(o,l),Du(o,l),Tu(o,l),Pu(o,l),Lu(o,l),hu(o,l),Cu(o,l),cu(o,l),Iu(o,l);const u=R();typeof l.didRender=="function"&&u&&l.didRender(u)},Fu=()=>re(R()),Qr=()=>ue()&&ue().click(),Bu=()=>Oe()&&Oe().click(),Uu=()=>Je()&&Je().click(),mt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Jr=o=>{o.keydownTarget&&o.keydownHandlerAdded&&(o.keydownTarget.removeEventListener("keydown",o.keydownHandler,{capture:o.keydownListenerCapture}),o.keydownHandlerAdded=!1)},Wu=(o,l,u,f)=>{Jr(l),u.toast||(l.keydownHandler=m=>$u(o,m,f),l.keydownTarget=u.keydownListenerCapture?window:R(),l.keydownListenerCapture=u.keydownListenerCapture,l.keydownTarget.addEventListener("keydown",l.keydownHandler,{capture:l.keydownListenerCapture}),l.keydownHandlerAdded=!0)},zi=(o,l)=>{const u=Ui();if(u.length){o=o+l,o===u.length?o=0:o===-1&&(o=u.length-1),u[o].focus();return}R().focus()},Xr=["ArrowRight","ArrowDown"],Hu=["ArrowLeft","ArrowUp"],$u=(o,l,u)=>{const f=a.innerParams.get(o);f&&(l.isComposing||l.keyCode===229||(f.stopKeydownPropagation&&l.stopPropagation(),l.key==="Enter"?Vu(o,l,f):l.key==="Tab"?ju(l):[...Xr,...Hu].includes(l.key)?qu(l.key):l.key==="Escape"&&zu(l,f,u)))},Vu=(o,l,u)=>{if(oe(u.allowEnterKey)&&l.target&&o.getInput()&&l.target instanceof HTMLElement&&l.target.outerHTML===o.getInput().outerHTML){if(["textarea","file"].includes(u.input))return;Qr(),l.preventDefault()}},ju=o=>{const l=o.target,u=Ui();let f=-1;for(let m=0;m<u.length;m++)if(l===u[m]){f=m;break}o.shiftKey?zi(f,-1):zi(f,1),o.stopPropagation(),o.preventDefault()},qu=o=>{const l=ue(),u=Oe(),f=Je(),m=[l,u,f];if(document.activeElement instanceof HTMLElement&&!m.includes(document.activeElement))return;const E=Xr.includes(o)?"nextElementSibling":"previousElementSibling";let N=document.activeElement;for(let H=0;H<Qt().children.length;H++){if(N=N[E],!N)return;if(N instanceof HTMLButtonElement&&re(N))break}N instanceof HTMLButtonElement&&N.focus()},zu=(o,l,u)=>{oe(l.allowEscapeKey)&&(o.preventDefault(),u(mt.esc))};var Zt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Gu=()=>{Array.from(document.body.children).forEach(l=>{l===W()||l.contains(W())||(l.hasAttribute("aria-hidden")&&l.setAttribute("data-previous-aria-hidden",l.getAttribute("aria-hidden")||""),l.setAttribute("aria-hidden","true"))})},Zr=()=>{Array.from(document.body.children).forEach(l=>{l.hasAttribute("data-previous-aria-hidden")?(l.setAttribute("aria-hidden",l.getAttribute("data-previous-aria-hidden")||""),l.removeAttribute("data-previous-aria-hidden")):l.removeAttribute("aria-hidden")})},Ku=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!be(document.body,c.iosfix)){const l=document.body.scrollTop;document.body.style.top=`${l*-1}px`,A(document.body,c.iosfix),Qu(),Yu()}},Yu=()=>{const o=navigator.userAgent,l=!!o.match(/iPad/i)||!!o.match(/iPhone/i),u=!!o.match(/WebKit/i);l&&u&&!o.match(/CriOS/i)&&R().scrollHeight>window.innerHeight-44&&(W().style.paddingBottom="44px")},Qu=()=>{const o=W();let l;o.ontouchstart=u=>{l=Ju(u)},o.ontouchmove=u=>{l&&(u.preventDefault(),u.stopPropagation())}},Ju=o=>{const l=o.target,u=W();return Xu(o)||Zu(o)?!1:l===u||!$r(u)&&l instanceof HTMLElement&&l.tagName!=="INPUT"&&l.tagName!=="TEXTAREA"&&!($r(Mn())&&Mn().contains(l))},Xu=o=>o.touches&&o.touches.length&&o.touches[0].touchType==="stylus",Zu=o=>o.touches&&o.touches.length>1,ed=()=>{if(be(document.body,c.iosfix)){const o=parseInt(document.body.style.top,10);me(document.body,c.iosfix),document.body.style.top="",document.body.scrollTop=o*-1}},td=()=>{const o=document.createElement("div");o.className=c["scrollbar-measure"],document.body.appendChild(o);const l=o.getBoundingClientRect().width-o.clientWidth;return document.body.removeChild(o),l};let yt=null;const nd=()=>{yt===null&&document.body.scrollHeight>window.innerHeight&&(yt=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${yt+td()}px`)},id=()=>{yt!==null&&(document.body.style.paddingRight=`${yt}px`,yt=null)};function eo(o,l,u,f){Bn()?no(o,f):(r(u).then(()=>no(o,f)),Jr(i)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(l.setAttribute("style","display:none !important"),l.removeAttribute("class"),l.innerHTML=""):l.remove(),Wi()&&(id(),ed(),Zr()),sd()}function sd(){me([document.documentElement,document.body],[c.shown,c["height-auto"],c["no-backdrop"],c["toast-shown"]])}function xe(o){o=od(o);const l=Zt.swalPromiseResolve.get(this),u=rd(this);this.isAwaitingPromise?o.isDismissed||(en(this),l(o)):u&&l(o)}const rd=o=>{const l=R();if(!l)return!1;const u=a.innerParams.get(o);if(!u||be(l,u.hideClass.popup))return!1;me(l,u.showClass.popup),A(l,u.hideClass.popup);const f=W();return me(f,u.showClass.backdrop),A(f,u.hideClass.backdrop),ad(o,l,u),!0};function to(o){const l=Zt.swalPromiseReject.get(this);en(this),l&&l(o)}const en=o=>{o.isAwaitingPromise&&(delete o.isAwaitingPromise,a.innerParams.get(o)||o._destroy())},od=o=>typeof o>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},o),ad=(o,l,u)=>{const f=W(),m=Jt&&Vr(l);typeof u.willClose=="function"&&u.willClose(l),m?ld(o,l,f,u.returnFocus,u.didClose):eo(o,f,u.returnFocus,u.didClose)},ld=(o,l,u,f,m)=>{i.swalCloseEventFinishedCallback=eo.bind(null,o,u,f,m),l.addEventListener(Jt,function(E){E.target===l&&(i.swalCloseEventFinishedCallback(),delete i.swalCloseEventFinishedCallback)})},no=(o,l)=>{setTimeout(()=>{typeof l=="function"&&l.bind(o.params)(),o._destroy&&o._destroy()})},vt=o=>{let l=R();l||new Vn,l=R();const u=gt();Bn()?J(Yt()):cd(l,o),G(u),l.setAttribute("data-loading","true"),l.setAttribute("aria-busy","true"),l.focus()},cd=(o,l)=>{const u=Qt(),f=gt();!l&&re(ue())&&(l=ue()),G(u),l&&(J(l),f.setAttribute("data-button-to-replace",l.className)),f.parentNode.insertBefore(f,l),A([o,u],c.loading)},ud=(o,l)=>{l.input==="select"||l.input==="radio"?gd(o,l):["text","email","number","tel","textarea"].includes(l.input)&&(Pe(l.inputValue)||Ye(l.inputValue))&&(vt(ue()),_d(o,l))},dd=(o,l)=>{const u=o.getInput();if(!u)return null;switch(l.input){case"checkbox":return hd(u);case"radio":return fd(u);case"file":return pd(u);default:return l.inputAutoTrim?u.value.trim():u.value}},hd=o=>o.checked?1:0,fd=o=>o.checked?o.value:null,pd=o=>o.files.length?o.getAttribute("multiple")!==null?o.files:o.files[0]:null,gd=(o,l)=>{const u=R(),f=m=>{md[l.input](u,Gi(m),l)};Pe(l.inputOptions)||Ye(l.inputOptions)?(vt(ue()),Ne(l.inputOptions).then(m=>{o.hideLoading(),f(m)})):typeof l.inputOptions=="object"?f(l.inputOptions):I(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof l.inputOptions}`)},_d=(o,l)=>{const u=o.getInput();J(u),Ne(l.inputValue).then(f=>{u.value=l.input==="number"?`${parseFloat(f)||0}`:`${f}`,G(u),u.focus(),o.hideLoading()}).catch(f=>{I(`Error in inputValue promise: ${f}`),u.value="",G(u),u.focus(),o.hideLoading()})},md={select:(o,l,u)=>{const f=De(o,c.select),m=(E,N,H)=>{const K=document.createElement("option");K.value=H,se(K,N),K.selected=io(H,u.inputValue),E.appendChild(K)};l.forEach(E=>{const N=E[0],H=E[1];if(Array.isArray(H)){const K=document.createElement("optgroup");K.label=N,K.disabled=!1,f.appendChild(K),H.forEach(Et=>m(K,Et[1],Et[0]))}else m(f,H,N)}),f.focus()},radio:(o,l,u)=>{const f=De(o,c.radio);l.forEach(E=>{const N=E[0],H=E[1],K=document.createElement("input"),Et=document.createElement("label");K.type="radio",K.name=c.radio,K.value=N,io(N,u.inputValue)&&(K.checked=!0);const Xi=document.createElement("span");se(Xi,H),Xi.className=c.label,Et.appendChild(K),Et.appendChild(Xi),f.appendChild(Et)});const m=f.querySelectorAll("input");m.length&&m[0].focus()}},Gi=o=>{const l=[];return typeof Map<"u"&&o instanceof Map?o.forEach((u,f)=>{let m=u;typeof m=="object"&&(m=Gi(m)),l.push([f,m])}):Object.keys(o).forEach(u=>{let f=o[u];typeof f=="object"&&(f=Gi(f)),l.push([u,f])}),l},io=(o,l)=>l&&l.toString()===o.toString(),yd=o=>{const l=a.innerParams.get(o);o.disableButtons(),l.input?so(o,"confirm"):Yi(o,!0)},vd=o=>{const l=a.innerParams.get(o);o.disableButtons(),l.returnInputValueOnDeny?so(o,"deny"):Ki(o,!1)},wd=(o,l)=>{o.disableButtons(),l(mt.cancel)},so=(o,l)=>{const u=a.innerParams.get(o);if(!u.input){I(`The "input" parameter is needed to be set when using returnInputValueOn${v(l)}`);return}const f=dd(o,u);u.inputValidator?Ed(o,f,l):o.getInput().checkValidity()?l==="deny"?Ki(o,f):Yi(o,f):(o.enableButtons(),o.showValidationMessage(u.validationMessage))},Ed=(o,l,u)=>{const f=a.innerParams.get(o);o.disableInput(),Promise.resolve().then(()=>Ne(f.inputValidator(l,f.validationMessage))).then(E=>{o.enableButtons(),o.enableInput(),E?o.showValidationMessage(E):u==="deny"?Ki(o,l):Yi(o,l)})},Ki=(o,l)=>{const u=a.innerParams.get(o||void 0);u.showLoaderOnDeny&&vt(Oe()),u.preDeny?(o.isAwaitingPromise=!0,Promise.resolve().then(()=>Ne(u.preDeny(l,u.validationMessage))).then(m=>{m===!1?(o.hideLoading(),en(o)):o.close({isDenied:!0,value:typeof m>"u"?l:m})}).catch(m=>oo(o||void 0,m))):o.close({isDenied:!0,value:l})},ro=(o,l)=>{o.close({isConfirmed:!0,value:l})},oo=(o,l)=>{o.rejectPromise(l)},Yi=(o,l)=>{const u=a.innerParams.get(o||void 0);u.showLoaderOnConfirm&&vt(),u.preConfirm?(o.resetValidationMessage(),o.isAwaitingPromise=!0,Promise.resolve().then(()=>Ne(u.preConfirm(l,u.validationMessage))).then(m=>{re(Ln())||m===!1?(o.hideLoading(),en(o)):ro(o,typeof m>"u"?l:m)}).catch(m=>oo(o||void 0,m))):ro(o,l)};function Hn(){const o=a.innerParams.get(this);if(!o)return;const l=a.domCache.get(this);J(l.loader),Bn()?o.icon&&G(Yt()):bd(l),me([l.popup,l.actions],c.loading),l.popup.removeAttribute("aria-busy"),l.popup.removeAttribute("data-loading"),l.confirmButton.disabled=!1,l.denyButton.disabled=!1,l.cancelButton.disabled=!1}const bd=o=>{const l=o.popup.getElementsByClassName(o.loader.getAttribute("data-button-to-replace"));l.length?G(l[0],"inline-block"):Xc()&&J(o.actions)};function ao(){const o=a.innerParams.get(this),l=a.domCache.get(this);return l?Hi(l.popup,o.input):null}function lo(o,l,u){const f=a.domCache.get(o);l.forEach(m=>{f[m].disabled=u})}function co(o,l){if(o)if(o.type==="radio"){const f=o.parentNode.parentNode.querySelectorAll("input");for(let m=0;m<f.length;m++)f[m].disabled=l}else o.disabled=l}function uo(){lo(this,["confirmButton","denyButton","cancelButton"],!1)}function ho(){lo(this,["confirmButton","denyButton","cancelButton"],!0)}function fo(){co(this.getInput(),!1)}function po(){co(this.getInput(),!0)}function go(o){const l=a.domCache.get(this),u=a.innerParams.get(this);se(l.validationMessage,o),l.validationMessage.className=c["validation-message"],u.customClass&&u.customClass.validationMessage&&A(l.validationMessage,u.customClass.validationMessage),G(l.validationMessage);const f=this.getInput();f&&(f.setAttribute("aria-invalid",!0),f.setAttribute("aria-describedby",c["validation-message"]),Ur(f),A(f,c.inputerror))}function _o(){const o=a.domCache.get(this);o.validationMessage&&J(o.validationMessage);const l=this.getInput();l&&(l.removeAttribute("aria-invalid"),l.removeAttribute("aria-describedby"),me(l,c.inputerror))}const wt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Cd=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Id={},Td=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],mo=o=>Object.prototype.hasOwnProperty.call(wt,o),yo=o=>Cd.indexOf(o)!==-1,vo=o=>Id[o],Sd=o=>{mo(o)||w(`Unknown parameter "${o}"`)},kd=o=>{Td.includes(o)&&w(`The parameter "${o}" is incompatible with toasts`)},Ad=o=>{const l=vo(o);l&&Ee(o,l)},Rd=o=>{o.backdrop===!1&&o.allowOutsideClick&&w('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const l in o)Sd(l),o.toast&&kd(l),Ad(l)};function wo(o){const l=R(),u=a.innerParams.get(this);if(!l||be(l,u.hideClass.popup)){w("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const f=Pd(o),m=Object.assign({},u,f);Yr(this,m),a.innerParams.set(this,m),Object.defineProperties(this,{params:{value:Object.assign({},this.params,o),writable:!1,enumerable:!0}})}const Pd=o=>{const l={};return Object.keys(o).forEach(u=>{yo(u)?l[u]=o[u]:w(`Invalid parameter to update: ${u}`)}),l};function Eo(){const o=a.domCache.get(this),l=a.innerParams.get(this);if(!l){bo(this);return}o.popup&&i.swalCloseEventFinishedCallback&&(i.swalCloseEventFinishedCallback(),delete i.swalCloseEventFinishedCallback),typeof l.didDestroy=="function"&&l.didDestroy(),Nd(this)}const Nd=o=>{bo(o),delete o.params,delete i.keydownHandler,delete i.keydownTarget,delete i.currentInstance},bo=o=>{o.isAwaitingPromise?(Qi(a,o),o.isAwaitingPromise=!0):(Qi(Zt,o),Qi(a,o),delete o.isAwaitingPromise,delete o.disableButtons,delete o.enableButtons,delete o.getInput,delete o.disableInput,delete o.enableInput,delete o.hideLoading,delete o.disableLoading,delete o.showValidationMessage,delete o.resetValidationMessage,delete o.close,delete o.closePopup,delete o.closeModal,delete o.closeToast,delete o.rejectPromise,delete o.update,delete o._destroy)},Qi=(o,l)=>{for(const u in o)o[u].delete(l)};var Od=Object.freeze({__proto__:null,_destroy:Eo,close:xe,closeModal:xe,closePopup:xe,closeToast:xe,disableButtons:ho,disableInput:po,disableLoading:Hn,enableButtons:uo,enableInput:fo,getInput:ao,handleAwaitingPromise:en,hideLoading:Hn,rejectPromise:to,resetValidationMessage:_o,showValidationMessage:go,update:wo});const Dd=(o,l,u)=>{a.innerParams.get(o).toast?xd(o,l,u):(Ld(l),Fd(l),Bd(o,l,u))},xd=(o,l,u)=>{l.popup.onclick=()=>{const f=a.innerParams.get(o);f&&(Md(f)||f.timer||f.input)||u(mt.close)}},Md=o=>o.showConfirmButton||o.showDenyButton||o.showCancelButton||o.showCloseButton;let $n=!1;const Ld=o=>{o.popup.onmousedown=()=>{o.container.onmouseup=function(l){o.container.onmouseup=void 0,l.target===o.container&&($n=!0)}}},Fd=o=>{o.container.onmousedown=()=>{o.popup.onmouseup=function(l){o.popup.onmouseup=void 0,(l.target===o.popup||o.popup.contains(l.target))&&($n=!0)}}},Bd=(o,l,u)=>{l.container.onclick=f=>{const m=a.innerParams.get(o);if($n){$n=!1;return}f.target===l.container&&oe(m.allowOutsideClick)&&u(mt.backdrop)}},Ud=o=>typeof o=="object"&&o.jquery,Co=o=>o instanceof Element||Ud(o),Wd=o=>{const l={};return typeof o[0]=="object"&&!Co(o[0])?Object.assign(l,o[0]):["title","html","icon"].forEach((u,f)=>{const m=o[f];typeof m=="string"||Co(m)?l[u]=m:m!==void 0&&I(`Unexpected type of ${u}! Expected "string" or "Element", got ${typeof m}`)}),l};function Hd(){const o=this;for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];return new o(...u)}function $d(o){class l extends this{_main(f,m){return super._main(f,Object.assign({},o,m))}}return l}const Vd=()=>i.timeout&&i.timeout.getTimerLeft(),Io=()=>{if(i.timeout)return Zc(),i.timeout.stop()},To=()=>{if(i.timeout){const o=i.timeout.start();return $i(o),o}},jd=()=>{const o=i.timeout;return o&&(o.running?Io():To())},qd=o=>{if(i.timeout){const l=i.timeout.increase(o);return $i(l,!0),l}},zd=()=>!!(i.timeout&&i.timeout.isRunning());let So=!1;const Ji={};function Gd(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ji[o]=this,So||(document.body.addEventListener("click",Kd),So=!0)}const Kd=o=>{for(let l=o.target;l&&l!==document;l=l.parentNode)for(const u in Ji){const f=l.getAttribute(u);if(f){Ji[u].fire({template:f});return}}};var Yd=Object.freeze({__proto__:null,argsToParams:Wd,bindClickHandler:Gd,clickCancel:Uu,clickConfirm:Qr,clickDeny:Bu,enableLoading:vt,fire:Hd,getActions:Qt,getCancelButton:Je,getCloseButton:Bi,getConfirmButton:ue,getContainer:W,getDenyButton:Oe,getFocusableElements:Ui,getFooter:Br,getHtmlContainer:Mn,getIcon:Yt,getIconContent:Gc,getImage:Fr,getInputLabel:Kc,getLoader:gt,getPopup:R,getProgressSteps:Fi,getTimerLeft:Vd,getTimerProgressBar:Fn,getTitle:Lr,getValidationMessage:Ln,increaseTimer:qd,isDeprecatedParameter:vo,isLoading:Qc,isTimerRunning:zd,isUpdatableParameter:yo,isValidParameter:mo,isVisible:Fu,mixin:$d,resumeTimer:To,showLoading:vt,stopTimer:Io,toggleTimer:jd});class Qd{constructor(l,u){this.callback=l,this.remaining=u,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(l){const u=this.running;return u&&this.stop(),this.remaining+=l,u&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const ko=["swal-title","swal-html","swal-footer"],Jd=o=>{const l=typeof o.template=="string"?document.querySelector(o.template):o.template;if(!l)return{};const u=l.content;return rh(u),Object.assign(Xd(u),Zd(u),eh(u),th(u),nh(u),ih(u),sh(u,ko))},Xd=o=>{const l={};return Array.from(o.querySelectorAll("swal-param")).forEach(f=>{Ze(f,["name","value"]);const m=f.getAttribute("name"),E=f.getAttribute("value");typeof wt[m]=="boolean"?l[m]=E!=="false":typeof wt[m]=="object"?l[m]=JSON.parse(E):l[m]=E}),l},Zd=o=>{const l={};return Array.from(o.querySelectorAll("swal-function-param")).forEach(f=>{const m=f.getAttribute("name"),E=f.getAttribute("value");l[m]=new Function(`return ${E}`)()}),l},eh=o=>{const l={};return Array.from(o.querySelectorAll("swal-button")).forEach(f=>{Ze(f,["type","color","aria-label"]);const m=f.getAttribute("type");l[`${m}ButtonText`]=f.innerHTML,l[`show${v(m)}Button`]=!0,f.hasAttribute("color")&&(l[`${m}ButtonColor`]=f.getAttribute("color")),f.hasAttribute("aria-label")&&(l[`${m}ButtonAriaLabel`]=f.getAttribute("aria-label"))}),l},th=o=>{const l={},u=o.querySelector("swal-image");return u&&(Ze(u,["src","width","height","alt"]),u.hasAttribute("src")&&(l.imageUrl=u.getAttribute("src")),u.hasAttribute("width")&&(l.imageWidth=u.getAttribute("width")),u.hasAttribute("height")&&(l.imageHeight=u.getAttribute("height")),u.hasAttribute("alt")&&(l.imageAlt=u.getAttribute("alt"))),l},nh=o=>{const l={},u=o.querySelector("swal-icon");return u&&(Ze(u,["type","color"]),u.hasAttribute("type")&&(l.icon=u.getAttribute("type")),u.hasAttribute("color")&&(l.iconColor=u.getAttribute("color")),l.iconHtml=u.innerHTML),l},ih=o=>{const l={},u=o.querySelector("swal-input");u&&(Ze(u,["type","label","placeholder","value"]),l.input=u.getAttribute("type")||"text",u.hasAttribute("label")&&(l.inputLabel=u.getAttribute("label")),u.hasAttribute("placeholder")&&(l.inputPlaceholder=u.getAttribute("placeholder")),u.hasAttribute("value")&&(l.inputValue=u.getAttribute("value")));const f=Array.from(o.querySelectorAll("swal-input-option"));return f.length&&(l.inputOptions={},f.forEach(m=>{Ze(m,["value"]);const E=m.getAttribute("value"),N=m.innerHTML;l.inputOptions[E]=N})),l},sh=(o,l)=>{const u={};for(const f in l){const m=l[f],E=o.querySelector(m);E&&(Ze(E,[]),u[m.replace(/^swal-/,"")]=E.innerHTML.trim())}return u},rh=o=>{const l=ko.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(o.children).forEach(u=>{const f=u.tagName.toLowerCase();l.includes(f)||w(`Unrecognized element <${f}>`)})},Ze=(o,l)=>{Array.from(o.attributes).forEach(u=>{l.indexOf(u.name)===-1&&w([`Unrecognized attribute "${u.name}" on <${o.tagName.toLowerCase()}>.`,`${l.length?`Allowed attributes are: ${l.join(", ")}`:"To set the value, use HTML within the element."}`])})},Ao=10,oh=o=>{const l=W(),u=R();typeof o.willOpen=="function"&&o.willOpen(u);const m=window.getComputedStyle(document.body).overflowY;ch(l,u,o),setTimeout(()=>{ah(l,u)},Ao),Wi()&&(lh(l,o.scrollbarPadding,m),Gu()),!Bn()&&!i.previousActiveElement&&(i.previousActiveElement=document.activeElement),typeof o.didOpen=="function"&&setTimeout(()=>o.didOpen(u)),me(l,c["no-transition"])},Ro=o=>{const l=R();if(o.target!==l)return;const u=W();l.removeEventListener(Jt,Ro),u.style.overflowY="auto"},ah=(o,l)=>{Jt&&Vr(l)?(o.style.overflowY="hidden",l.addEventListener(Jt,Ro)):o.style.overflowY="auto"},lh=(o,l,u)=>{Ku(),l&&u!=="hidden"&&nd(),setTimeout(()=>{o.scrollTop=0})},ch=(o,l,u)=>{A(o,u.showClass.backdrop),l.style.setProperty("opacity","0","important"),G(l,"grid"),setTimeout(()=>{A(l,u.showClass.popup),l.style.removeProperty("opacity")},Ao),A([document.documentElement,document.body],c.shown),u.heightAuto&&u.backdrop&&!u.toast&&A([document.documentElement,document.body],c["height-auto"])};var Po={email:(o,l)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(o)?Promise.resolve():Promise.resolve(l||"Invalid email address"),url:(o,l)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(o)?Promise.resolve():Promise.resolve(l||"Invalid URL")};function uh(o){o.inputValidator||Object.keys(Po).forEach(l=>{o.input===l&&(o.inputValidator=Po[l])})}function dh(o){(!o.target||typeof o.target=="string"&&!document.querySelector(o.target)||typeof o.target!="string"&&!o.target.appendChild)&&(w('Target parameter is not valid, defaulting to "body"'),o.target="body")}function hh(o){uh(o),o.showLoaderOnConfirm&&!o.preConfirm&&w(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),dh(o),typeof o.title=="string"&&(o.title=o.title.split(`
`).join("<br />")),ou(o)}let de;class U{constructor(){if(typeof window>"u")return;de=this;for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];const m=Object.freeze(this.constructor.argsToParams(u));this.params=m,this.isAwaitingPromise=!1;const E=de._main(de.params);a.promise.set(this,E)}_main(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Rd(Object.assign({},u,l)),i.currentInstance&&(i.currentInstance._destroy(),Wi()&&Zr()),i.currentInstance=de;const f=ph(l,u);hh(f),Object.freeze(f),i.timeout&&(i.timeout.stop(),delete i.timeout),clearTimeout(i.restoreFocusTimeout);const m=gh(de);return Yr(de,f),a.innerParams.set(de,f),fh(de,m,f)}then(l){return a.promise.get(this).then(l)}finally(l){return a.promise.get(this).finally(l)}}const fh=(o,l,u)=>new Promise((f,m)=>{const E=N=>{o.close({isDismissed:!0,dismiss:N})};Zt.swalPromiseResolve.set(o,f),Zt.swalPromiseReject.set(o,m),l.confirmButton.onclick=()=>{yd(o)},l.denyButton.onclick=()=>{vd(o)},l.cancelButton.onclick=()=>{wd(o,E)},l.closeButton.onclick=()=>{E(mt.close)},Dd(o,l,E),Wu(o,i,u,E),ud(o,u),oh(u),_h(i,u,E),mh(l,u),setTimeout(()=>{l.container.scrollTop=0})}),ph=(o,l)=>{const u=Jd(o),f=Object.assign({},wt,l,u,o);return f.showClass=Object.assign({},wt.showClass,f.showClass),f.hideClass=Object.assign({},wt.hideClass,f.hideClass),f},gh=o=>{const l={popup:R(),container:W(),actions:Qt(),confirmButton:ue(),denyButton:Oe(),cancelButton:Je(),loader:gt(),closeButton:Bi(),validationMessage:Ln(),progressSteps:Fi()};return a.domCache.set(o,l),l},_h=(o,l,u)=>{const f=Fn();J(f),l.timer&&(o.timeout=new Qd(()=>{u("timer"),delete o.timeout},l.timer),l.timerProgressBar&&(G(f),ae(f,l,"timerProgressBar"),setTimeout(()=>{o.timeout&&o.timeout.running&&$i(l.timer)})))},mh=(o,l)=>{if(!l.toast){if(!oe(l.allowEnterKey)){vh();return}yh(o,l)||zi(-1,1)}},yh=(o,l)=>l.focusDeny&&re(o.denyButton)?(o.denyButton.focus(),!0):l.focusCancel&&re(o.cancelButton)?(o.cancelButton.focus(),!0):l.focusConfirm&&re(o.confirmButton)?(o.confirmButton.focus(),!0):!1,vh=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const o=new Date,l=localStorage.getItem("swal-initiation");l?(o.getTime()-Date.parse(l))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const u=document.createElement("audio");u.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",u.loop=!0,document.body.appendChild(u),setTimeout(()=>{u.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${o}`)}U.prototype.disableButtons=ho,U.prototype.enableButtons=uo,U.prototype.getInput=ao,U.prototype.disableInput=po,U.prototype.enableInput=fo,U.prototype.hideLoading=Hn,U.prototype.disableLoading=Hn,U.prototype.showValidationMessage=go,U.prototype.resetValidationMessage=_o,U.prototype.close=xe,U.prototype.closePopup=xe,U.prototype.closeModal=xe,U.prototype.closeToast=xe,U.prototype.rejectPromise=to,U.prototype.update=wo,U.prototype._destroy=Eo,Object.assign(U,Yd),Object.keys(Od).forEach(o=>{U[o]=function(){return de&&de[o]?de[o](...arguments):null}}),U.DismissReason=mt,U.version="11.7.12";const Vn=U;return Vn.default=Vn,Vn}),typeof Me<"u"&&Me.Sweetalert2&&(Me.swal=Me.sweetAlert=Me.Swal=Me.SweetAlert=Me.Sweetalert2)})(zc);var Tv=zc.exports;const Gn=wh(Tv);const Ov=Eh("utility",{state:()=>({loadingItem:"",bigLoading:"",userId:"",user:{},uid:null}),actions:{checkLogin(){iy(Fa,n=>{if(n){this.uid=n.uid;const e=Z_(Iv,"users/"+n.uid);tm(e,t=>{this.user=t.val()})}else this.uid=null,this.user={}})},logout(){sy(Fa).then(()=>{this.uid="",this.user={},Gn.fire({icon:"success",title:"已登出",showConfirmButton:!1,timer:1500}),window.location.href.includes("/home")?location.reload():bh.push("/home")}).catch(n=>{console.log(n,"登出錯誤")})},toastMessage(n,e="success"){Gn.mixin({toast:!0,showConfirmButton:!1,timer:1e3,didOpen:i=>{i.addEventListener("mouseenter",Gn.stopTimer),i.addEventListener("mouseleave",Gn.resumeTimer)}}).fire({icon:e,title:n})},goToTop(){window.scrollTo(0,0)}},getters:{}});export{Ov as a,Av as b,iy as c,Iv as d,Fa as e,Pv as f,Nv as g,tm as o,kv as p,Z_ as r,dc as s,Rv as u};

const assert=(x,m)=>{if(!x)throw new Error(m)};
const expected='03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4';
(async()=>{
  const enc=new TextEncoder();
  const hash=async s=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',enc.encode(s)))).map(b=>b.toString(16).padStart(2,'0')).join('');
  assert(await hash('1234')===expected,'SHA-256 for 1234 is wrong');
  assert(await hash('12345')!==expected,'Different password must hash differently');
  console.log('auth-tests: PASS');
})();

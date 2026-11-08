(()=>{const KEY='hell_creative_room_v1';const flows={scene:[
['Tyro','まず、どんな場面を考えています？ まだ曖昧でも大丈夫ですよ','場面の概要'],
['U-RED','で、この場面で一番「欲しい」奴は誰だ？ そいつは何を欲しがってる？目的はなんだ？','中心人物と目的'],
['Tyro','その目的を邪魔するものは何ですか？人でも事情でも感情でも良いですよ','障害'],
['U-RED','一発で上手くいきすぎるのもな。失敗も必要だぜ。最初に何を失敗させる？','最初の失敗'],
['Tyro','途中で何が変わりますか？ 情報、感情、立場、状況……色々ありますよね','転換点'],
['Tyro','この場面で読者に何を感じてほしいですか？','読者に残したい感情'],
['U-RED','よーし、芸術的に考えろ。最後に残る一枚絵を描けるか。イメージはどんなのだ？','最後の一枚絵'],
['Tyro','終わった時、始まる前と何が変わっていれば成功ですか？','終了時の変化'],
['U-RED','最後にヒキの話だ。次を読みたくなる餌を一個置くなら何がいい？','次へのフック']
],deep:[
['Tyro','深掘りするシーンを一言で教えてください','対象シーン'],
['Tyro','場所と時間帯は？ 雰囲気もあれば一緒に言ってみましょう','場所・時間・空気'],
['Tyro','視点人物は誰にしますか？ここ重要ですよね','視点人物'],
['U-RED','そいつはこの場面で、何をしたいんだ？手に入れたいものはあるか？','視点人物の目的'],
['Tyro','始まった時点で、その人はどんな感情ですか？','開始時の感情'],
['U-RED','そいつの不安は？何を恐れている？口に出さねえことでも良いぜ','恐れ'],
['Tyro','相手側にも目的がありますか？','相手側の目的'],
['U-RED','二人の目的がぶつかる場所があるか？','衝突点'],
['Tyro','最初に選ぶ手段は何です？','最初の手段'],
['U-RED','手段をどうする？成功させる？失敗させる？どんなふうにするかがキモだぜ','成功・失敗の設計'],
['Tyro','成功や失敗のあと、何を選び直します？','次の選択'],
['U-RED','ここで一番痛い一言か出来事も入れてみるか？','痛点'],
['Tyro','このシーンで新しく分かる情報は何です？','新情報'],
['Tyro','感情が反転する瞬間はあります？','感情の反転'],
['U-RED','誰が得して、誰が損するかだよな？','得失'],
['Tyro','人間関係はどう変わります？','関係性の変化'],
['Tyro','読者に残したい感情とかってあります？','読後感'],
['U-RED','イメージの話だぜ。最後にどんな絵面にしたい？心象風景とかでも良いぞ','最後の一枚絵'],
['Tyro','次のシーンへ持ち越すものはありますか？','持ち越し']
],stuck:[
['U-RED','まず単純に考えるぞ。この場面で一番面白え奴は誰だ？','中心人物'],
['Tyro','その人はいま何をしようとしてます？','現在の目的'],
['U-RED','そいつに一番やらせちゃまずいことは？','最悪の選択'],
['Tyro','それが起きたら誰が困りますか？','被害・反応'],
['U-RED','じゃあ、それを本当にやらせてみろ。結果、何が壊れちまう？どんな状況になる？','崩れるもの'],
['Swalo','停滞要因を整理シマス。今、一番決メ切れていナイのハ何デスか？','未確定点'],
['Tyro','そこから次の一歩だけ考えるなら、何をしましょうか？','次の一手']
],character:[
['Tyro','今日は誰を深めていきましょう？','キャラクター'],
['U-RED','そいつが一番欲しいものは何になる？','欲望'],
['Tyro','一番失いたくないものは？','恐れている喪失'],
['U-RED','他人に絶対知られたくねえことなんかはあるか？','秘密'],
['Tyro','自分で自分をどう思っています？','自己認識'],
['Tyro','周囲からはどう見られています？','他者からの見え方'],
['U-RED','そいつの一番みっともねえ弱点は？','弱点'],
['Tyro','つい繰り返してしまう失敗はあります？','反復パターン'],
['U-RED','追い詰められた時、普段なら絶対やらねえことをするかもよ。何をする？','限界時の行動'],
['Tyro','物語の終わりに、その人はどう変わりますか？','変化の方向']
],relation:[
['Tyro','深めたい二人の名前を教えてください。','対象人物'],
['Tyro','表向き、どんな関係です？','表向きの関係'],
['U-RED','お互い、本音じゃ相手に何を期待してると思う？','隠れた期待'],
['Tyro','相手について、何を誤解しています？','誤解'],
['U-RED','お互いに言えねえことはあるか？','言えないこと'],
['Tyro','二人の関係で、一番壊れやすい部分は？','脆い部分'],
['U-RED','逆に、簡単には切れねえ理由は？','つながる理由'],
['Tyro','この関係が一段階変わる出来事を置くなら、何になりますか？','関係転換イベント']
],dialogue:[
['Tyro','誰と誰が話します？','話者'],
['Tyro','表向きの話題は何です？','表向きの話題'],
['U-RED','で、本当は何を言いてえ？　本音の部分だよな','本音'],
['Tyro','それを受けたお互いの本音は？','相手側の本音'],
['U-RED','会話のすれ違いは発生するか？','すれ違い'],
['Tyro','会話の途中で空気が変わる一言は？','空気が変わる一言'],
['U-RED','そのままほのぼの終わる？それともガッツリ勝ち負けがわかれる？勝つならどっち？両方負けるってのもあるよな','会話の着地']
],foreshadow:[
['Tyro','後で回収したい伏線はありますか？','回収したい内容'],
['Tyro','読者に今どこまで見せます？','見せる範囲'],
['U-RED','露骨すぎねえかどうか検討しようぜ。もっと自然に置ける場所はあるかどうか？','自然な置き場所'],
['Swalo','反復可能ナ要素を確認。台詞・物・場所・癖ノどれデ再登場サセますか？','反復要素'],
['Tyro','誰に気づかせて、誰には気づかせないようにするか決めましょう','認識差'],
['U-RED','回収した時に意味がひっくり返るなら、どう変わるかだよな？','意味の反転'],
['Tyro','回収タイミングはいつ頃を想定しましょうか？','回収時期']
]};const imgs={'U-RED':['assets/images/ured_basic.png','assets/images/ured_basic.png'],'Tyro':['assets/images/tyro_think.png','assets/images/tyro_smile.png'],'Swalo':['assets/images/swalo_side.png','assets/images/swalo_front.png','assets/images/swalo_alt.png']};const breaks=[
['Tyro','お疲れ様です。お茶でも飲みましょう'],
['Tyro','ここまで結構考えましたね。少し休みません？お菓子も食べましょう！'],
['Tyro','ユーレッドさんは、コーヒーですよね？ブラックが良いですか？俺は甘いやつにしますよー'],
['U-RED','おう、ここで一息入れるか'],
['U-RED','いい感じにできたか？ ならちょっと休んでもいいんじゃねえか？'],
['U-RED','根詰めすぎんなよ。時間かけて考える方がいいこともあるんだぜ'],
['U-RED','聞くまでねえだろ。ま、珈琲でも飲みな'],
['Swalo','思考負荷ノ上昇ヲ検知。スワロは休憩ヲ推奨シマス'],
['Swalo','連続作業時間ヲ確認。短時間の離席ガ有効デスヨ！'],
['Swalo','ご主人たちのように休憩モードへ移行シマショー！']
];
const breakChats=[
['Tyro','お疲れ様です。お茶でも飲みましょう','U-RED','俺は珈琲な','Swalo','糖分摂取モ推奨シマス'],
['U-RED','根詰めすぎんなよ','Tyro','ユーレッドさんが言うと説得力あるような、ないような……','U-RED','どういう意味だよ'],
['Tyro','ここまで結構考えましたね。少し休みません？お菓子も食べましょう！','Swalo','糖分補給ハ有効デス','U-RED','なら俺の分も残しとけよ']
];const tips=[
'Swalo「入力内容ヲ要約中。未確定項目を残シテも問題ありマセン。」',
'Swalo「関連項目を検出。前の回答ト矛盾してイテモ、現時点では保留可能デスヨ」',
'Swalo「情報量は十分デス。必要ナラ次の項目へ進めマス」',
'Swalo「停滞ヲ検知シマシタ。回答ハ空欄のママ進行しても構イマセンヨー」'
];const breakImages=['assets/images/breakroom_bench.jpg','assets/images/breakroom_burger.jpg'];let breakImageIndex=0;function updateBreakImage(next=false){const el=$('breakIllustration');if(!el)return;if(next)breakImageIndex=(breakImageIndex+1)%breakImages.length;el.src=breakImages[breakImageIndex];}
let mode='scene',idx=0,answers=[];const $=id=>document.getElementById(id),pick=a=>a[Math.floor(Math.random()*a.length)];function setSpeaker(sp,expressionIndex=0){currentSpeaker=sp;$('speaker').textContent=sp;$('speaker').className='name '+(sp==='U-RED'?'u':sp==='Tyro'?'t':'s');setSmallIcon(sp,expressionIndex);}function maybeSwalo(){const b=$('swaloLine');if(mode!=='stuck'&&Math.random()<.26){b.style.display='block';b.textContent=pick(tips)}else b.style.display='none'}function showBreak(){updateBreakImage(true);if(Math.random()<.38){const c=pick(breakChats);$('breakText').textContent=c[0]+'「'+c[1]+'」　'+c[2]+'「'+c[3]+'」　'+c[4]+'「'+c[5]+'」';}else{const [sp,line]=pick(breaks);$('breakText').textContent=sp+'「'+line+'」';}}function render(){const f=flows[mode],s=f[idx];$('summary').hidden=true;$('answer').hidden=false;$('nextBtn').hidden=false;$('skipBtn').hidden=false;$('backBtn').hidden=false;$('question').textContent=s[1];const expression=(smallExpressionMap[mode]||[])[idx]??0;setSpeaker(s[0],expression);$('answer').value=answers[idx]||'';$('progress').textContent=(idx+1)+' / '+f.length;$('backBtn').disabled=idx===0;maybeSwalo();if((mode==='deep'||mode==='character')&&idx>0&&idx%6===0&&Math.random()<.5)showBreak();}function finish(){const f=flows[mode];$('answer').hidden=true;$('nextBtn').hidden=true;$('skipBtn').hidden=true;$('backBtn').hidden=true;$('question').textContent='まとまりました。ここまでを一度メモにしておきましょう';setSpeaker('Tyro',1);$('swaloLine').style.display='none';const dl=$('summaryList');dl.innerHTML='';f.forEach((s,n)=>{const dt=document.createElement('dt');dt.textContent=s[2];const dd=document.createElement('dd');dd.textContent=answers[n]||'（未記入）';dl.append(dt,dd)});$('resultText').value=f.map((s,n)=>s[2]+'：'+(answers[n]||'（未記入）')).join('\n');$('summary').hidden=false;$('progress').textContent='完成';$('breakText').textContent='Swalo「記録可能ナ状態デス」　U-RED「悪くねえな。あとは書くだけだ。お疲れ」';}function next(){answers[idx]=$('answer').value.trim();if(idx<flows[mode].length-1){idx++;render()}else finish()}function load(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch(e){return[]}}function store(v){try{localStorage.setItem(KEY,JSON.stringify(v));return true}catch(e){return false}}function label(m){return {scene:'シーンを作る',deep:'シーンを深める',stuck:'詰まりをほぐす',character:'キャラを深める',relation:'関係性を深める',dialogue:'会話を作る',foreshadow:'伏線を考える'}[m]}function draw(){const ms=load(),box=$('memoList');if(!ms.length){box.textContent='まだないよ。';return}box.innerHTML='';ms.slice().reverse().forEach(m=>{const d=document.createElement('div');d.className='memo';const h=document.createElement('h3');h.textContent=m.title;const meta=document.createElement('div');meta.className='meta';meta.textContent=m.date+' / '+m.mode;const p=document.createElement('div');p.style.whiteSpace='pre-wrap';p.style.lineHeight='1.55';p.textContent=m.text;const del=document.createElement('button');del.textContent='削除';del.style.marginTop='8px';del.onclick=()=>{store(load().filter(x=>x.id!==m.id));draw()};d.append(h,meta,p,del);box.appendChild(d)})}document.querySelectorAll('.mode').forEach(b=>b.onclick=()=>{document.querySelectorAll('.mode').forEach(x=>x.classList.remove('active'));b.classList.add('active');mode=b.dataset.mode;idx=0;answers=[];render()});$('nextBtn').onclick=next;$('skipBtn').onclick=()=>{$('answer').value='';next()};$('backBtn').onclick=()=>{if(idx>0){answers[idx]=$('answer').value.trim();idx--;render()}};$('againBtn').onclick=()=>{idx=0;answers=[];render()};$('saveMemo').onclick=()=>{const ms=load(),first=answers.find(x=>x&&x.trim())||'無題';ms.push({id:Date.now(),title:first.slice(0,32),date:new Date().toLocaleString('ja-JP'),mode:label(mode),text:$('resultText').value});if(store(ms)){draw();$('resultHint').textContent='保存したよ。'}};$('showText').onclick=()=>{$('resultText').hidden=false;$('resultHint').textContent='長押しでコピーできます。'};$('restNow').onclick=showBreak;$('exportAll').onclick=()=>{const ms=load(),text=ms.map(m=>'【'+m.title+'】\n'+m.date+' / '+m.mode+'\n'+m.text).join('\n\n---\n\n')||'保存メモはありません。';const blob=new Blob([text],{type:'text/plain;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='HELL_Creative_Room_メモ.txt';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);swaloActionMessage('テキストをエスクポートしマス')};
function swaloActionMessage(text){
 const b=$('swaloAction');
 b.style.display='block';
 b.textContent='Swalo「'+text+'」';
 $('swaloPic').src=pick(imgs['Swalo']);
 clearTimeout(window.__swaloActionTimer);
 window.__swaloActionTimer=setTimeout(()=>{b.style.display='none'},4200);
}
$('backupSave').onclick=()=>{
 const payload={app:'HELL Creative Room',version:1,exportedAt:new Date().toISOString(),memos:load()};
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8'}),a=document.createElement('a');
 a.href=URL.createObjectURL(blob);a.download='HELL_Creative_Room_backup.json';a.click();
 setTimeout(()=>URL.revokeObjectURL(a.href),500);
 swaloActionMessage('バックアップデータヲ生成シマシタ。保管ヲ推奨シマス');
};
$('backupLoad').onclick=()=>{$('backupFile').click()};
$('backupFile').addEventListener('change',async(ev)=>{
 const file=ev.target.files&&ev.target.files[0];
 if(!file)return;
 try{
  const raw=await file.text(),data=JSON.parse(raw);
  const memos=Array.isArray(data)?data:(data&&Array.isArray(data.memos)?data.memos:null);
  if(!memos)throw new Error('invalid');
  if(confirm('現在の保存メモを、バックアップの内容で置き換えますか？')){
   if(!store(memos))throw new Error('save');
   draw();
   swaloActionMessage('データを読み込ンデ、復元シテいマス');
  }
 }catch(e){
  swaloActionMessage('バックアップデータを読み込メマセンデシタ。形式ヲ確認シテクダサイ');
 }
 ev.target.value='';
});

const uredPortraits=['assets/images/ured_basic.png','assets/images/ured_proposal.png','assets/images/ured_think.png','assets/images/ured_smirk.png'];
const uredSecretPortrait='assets/images/ured_secret.png';
const uredSecretLines=[
 'うまくまとまったか？　まあ、あんまり根詰めんなよ',
 'ちゃんと進んでるじゃねえか。焦らなくていいぜ',
 '今日はここまででも十分だろ。無理すんなよ'
];
let uredTapCount=0;

let currentSpeaker='Tyro';
const smallIconSets={
 'U-RED':uredPortraits.slice(0,4),
 'Tyro':['assets/images/tyro_soft.png','assets/images/tyro_smile.png','assets/images/tyro_think.png'],
 'Swalo':imgs['Swalo']
};
// 小アイコン表情: U-RED 0基本/1提案/2考える/3ニヤリ, Tyro 0通常/1笑顔/2思案。
// Swalo は 0通常、1以降を補助・分析系として使用。
const smallExpressionMap={
 scene:[1,2,2,1,2,2,1,2,3],
 deep:[1,1,2,2,2,2,2,2,2,1,2,3,2,2,2,2,2,1,2],
 stuck:[0,2,3,2,3,1,1],
 character:[1,2,2,2,2,2,2,2,3,2],
 relation:[1,0,2,2,2,2,2,2],
 dialogue:[1,0,2,2,2,2,3],
 foreshadow:[1,2,1,0,2,2,2]
};
const smallIconIndex={'U-RED':0,'Tyro':0,'Swalo':0};
function setSmallIcon(sp,expressionIndex=0){
 const arr=smallIconSets[sp]||imgs[sp]||[];
 if(!arr.length)return;
 const safe=((expressionIndex%arr.length)+arr.length)%arr.length;
 smallIconIndex[sp]=safe;
 $('faceImg').src=arr[safe];
}
function cycleSmallIcon(){
 const sp=currentSpeaker;
 const arr=smallIconSets[sp]||[];
 if(arr.length<2)return;
 smallIconIndex[sp]=(smallIconIndex[sp]+1)%arr.length;
 $('faceImg').src=arr[smallIconIndex[sp]];
}
const portraitSets={
 'U-RED':uredPortraits,
 'Tyro':Array.from(new Set([$('tyroPic').src,...imgs['Tyro']])),
 'Swalo':Array.from(new Set([$('swaloPic').src,...imgs['Swalo']]))
};
const portraitIndex={'U-RED':0,'Tyro':0,'Swalo':0};
function setExpressionStatus(name,index,total){
 const s=$('expressionStatus');
 if(s)s.textContent=name+'：表情 '+(index+1)+' / '+total;
}
function cyclePortrait(name){
 const el=name==='U-RED'?$('uredPic'):name==='Tyro'?$('tyroPic'):$('swaloPic');
 const arr=portraitSets[name];
 if(!el||!arr||arr.length<2)return;
 if(name==='U-RED'){
   const secretLine=$('uredSecretLine');
   if(secretLine){secretLine.hidden=true;secretLine.textContent='';}
   uredTapCount++;
   // 6回目以降、約18%でシークレット。出た後は通常巡回へ戻る。
   if(uredTapCount>=6 && Math.random()<0.18){
     el.src=uredSecretPortrait;
     const line=$('uredSecretLine');
     if(line){line.textContent='U-RED「'+pick(uredSecretLines)+'」';line.hidden=false;}
     uredTapCount=0;
     return;
   }
 }
 portraitIndex[name]=(portraitIndex[name]+1)%arr.length;
 el.src=arr[portraitIndex[name]];
 setExpressionStatus(name,portraitIndex[name],arr.length);
}

function bindTap(el,fn){
 if(!el)return;
 let lastTouch=0;
 el.addEventListener('touchend',(ev)=>{
   lastTouch=Date.now();
   ev.preventDefault();
   ev.stopPropagation();
   fn(ev);
 },{passive:false});
 el.addEventListener('click',(ev)=>{
   if(Date.now()-lastTouch<700)return;
   ev.preventDefault();
   ev.stopPropagation();
   fn(ev);
 });
}
bindTap($('uredPic'),()=>cyclePortrait('U-RED'));
bindTap($('tyroPic'),()=>cyclePortrait('Tyro'));
bindTap($('swaloPic'),()=>cyclePortrait('Swalo'));
bindTap($('faceImg'),cycleSmallIcon);
document.querySelectorAll('.expr-btn').forEach(btn=>bindTap(btn,()=>cyclePortrait(btn.dataset.char)));
bindTap($('breakIllustration'),()=>updateBreakImage(true));

updateBreakImage(false);
render();draw();showBreak();})();

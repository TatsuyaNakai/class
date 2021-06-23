const menBtn=document.getElementById('men');
const womenBtn=document.getElementById('women');
const nameTag=document.getElementById('name')
const outBtn=document.querySelector('button');
let ul=document.querySelector('.out');
const over=document.querySelector('.over');
let span;
let li;


// 択一選択の部分
menBtn.addEventListener('click', function(){
    womenBtn.checked=false;
});
womenBtn.addEventListener('click', function(){
    menBtn.checked=false;
});

// インスタンス
class Character{
    constructor(img, name){
        this.img=img,
        this.name=name
    }
}

// メインの処理
outBtn.addEventListener('click', function(){
    if(ul.childElementCount <=6){
        
        if(womenBtn.checked){
            images="images/women.png";
        }else{
            images="images/men.png";
        }
        let newInstance=new Character(images, nameTag.value);
        li=document.createElement('li');
        li.classList.add('out__list');
        createImg(newInstance);
        createP(newInstance);
        ul.appendChild(li);
        
        deleteBtn();
        // ul.appendChildよりも後にしないと最新で作られたLiには読み込みが行われない状態になる。
        // trashのクラスを取得する(66行目)のは、Liタグが生成されてからじゃないと最新版は読まれない。
    }else{
        over.innerHTML='これ以上打てません。';
    }
});

//imgタグ作成のための関数
function createImg(instance){
    let img=document.createElement('img');
    li.appendChild(img);
    img.setAttribute('src', instance.img);
}


// pタグ作成のための関数
function createP(instance){
    const pTag=document.createElement('p');
    li.appendChild(pTag);
    pTag.innerHTML=instance.name;
}

// 削除ボタンの関数
function deleteBtn(){
    span=document.createElement('span');
    span.classList.add('trash');
    span.innerHTML='削除';
    li.appendChild(span);
    trash=document.getElementsByClassName('trash');
    // 以下　押した時の処理
    for(let i=0; i<trash.length; i++){
        trash[i].addEventListener('click', function(){
            over.innerHTML='';
            this.parentNode.remove();
        })
    }
}

// 作成するボタンのため処理
nameTag.addEventListener('change', handleChange);
// ★inputタグが空白になっても作成ボタンの色が戻りません。常に監視しているような形にしたいです。

function handleChange(){
    if(nameTag.value !=="" && (womenBtn.checked || menBtn.checked)){
        outBtn.style.backgroundColor='orange';
        outBtn.classList.remove('none');
    }
}
function btnControl(gender){
    gender.addEventListener('click', handleChange);
}
btnControl(menBtn);
btnControl(womenBtn);

//★ボタンの押される順番においてどちらであっても反応が返ってくるようにこのようにしました。
// 格好が悪いのですが、もう少し綺麗に書くことができる方法などありませんか？

const menBtn=document.getElementById('men');
const womenBtn=document.getElementById('women');
const nameTag=document.getElementById('name')
const outBtn=document.querySelector('button');
let ul=document.querySelector('.out');
const img=document.createElement('img');
const pTag=document.createElement('p');
const span=document.createElement('span');
const trash=document.getElementsByClassName('trash');
let li=document.createElement('li');


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

// 出力結果の処理
outBtn.addEventListener('click', function(){
    li=document.createElement('li');
    if(womenBtn.checked){
        images="images/women.png";
    }else{
        images="images/men.png";
    }
    let newInstance=new Character(images, nameTag.value);

    li.classList.add('out__list');

    li.appendChild(img);
    img.setAttribute('src', newInstance.img);

    li.appendChild(pTag);
    pTag.innerHTML=newInstance.name;
    
    deleteBtn();
    ul.appendChild(li);
    
    
})

// 削除ボタンの関数
function deleteBtn(){
    li.appendChild(span);
    span.classList.add('trash');
    span.innerHTML='削除';
    // 以下　押した時の処理
    for(let i=0; i<trash.length; i++){
        trash[i].addEventListener('click', function(){
            this.parentNode.remove();
        })
    }
}

// 作成するボタンの処理
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

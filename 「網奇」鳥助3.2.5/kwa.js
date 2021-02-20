console.log('%c 您已使用「『網奇』鳥助！」','background:#ffeba0;color:#905000')
console.log('%c「網奇」鳥助是一款由貓虎皮開發的瀏覽器外掛。','background:#ffeba0;color:#905000')
//()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
const kwaDivO = document.createElement('div');
kwaDivO.setAttribute('id', 'kwaDivO');
kwaDivO.setAttribute('title', '點擊以開啟「『網奇』鳥助」的其他互動區塊');
kwaDivO.setAttribute('onclick', 'op()');
kwaDivO.style.position = 'fixed';
kwaDivO.style.bottom = '90px';
kwaDivO.style.left = '0px';
kwaDivO.style.background = 'white';
kwaDivO.style.width = '40px';
kwaDivO.style.height = '40px';
kwaDivO.style.padding = '5px';
kwaDivO.innerHTML = `<div id='BtnOP'></div>`;
document.body.appendChild(kwaDivO)
const kwaStyleO = document.createElement('style')
kwaStyleO.innerHTML = `
    #kwaDivO {
        border-radius: 0px 5px 5px 0px;
        box-shadow: 0px 0px 8px 3px black;
        z-index: 999;
    }
    #BtnOP {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-size: 100%;
        background-image: url('https://1.bp.blogspot.com/-tb7Qj7m2qOM/YCzU6IFSD6I/AAAAAAAAJpg/qLiD8YRCbJgIRQEdrNrWBm7SOc9IcDYZgCLcBGAsYHQ/s2048/op.PNG');
    }
    `;
document.body.appendChild(kwaStyleO)
//()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
const kwaDivX = document.createElement('div');
kwaDivX.setAttribute('id', 'kwaDivX');
kwaDivX.setAttribute('title', '點擊以關閉「『網奇』鳥助」的其他互動區塊');
kwaDivX.setAttribute('onclick', 'cl()');
kwaDivX.style.position = 'fixed';
kwaDivX.style.bottom = '90px';
kwaDivX.style.left = '0px';
kwaDivX.style.background = 'white';
kwaDivX.style.width = '40px';
kwaDivX.style.height = '40px';
kwaDivX.style.padding = '5px';
kwaDivX.innerHTML = `<div id='BtnCL'></div>`;
document.body.appendChild(kwaDivX)
const kwaStyleX = document.createElement('style')
kwaStyleX.innerHTML = `
    #kwaDivX {
        border-radius: 0px 5px 5px 0px;
        box-shadow: 0px 0px 8px 3px black;
        z-index: 1000;
    }
    #BtnCL {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-size: 100%;
        background-image: url('https://1.bp.blogspot.com/-4WJM0dB8APE/YCzU6K7hu3I/AAAAAAAAJpc/4wjJ8vtjRzw5TsbB2Pp-yXUE57Zc9xYZgCLcBGAsYHQ/s2048/cl.PNG');
    }
    `;
document.body.appendChild(kwaStyleX)
const kwAll = document.createElement('style');
kwAll.setAttribute('id', 'kwAll');
document.body.appendChild(kwAll);
//()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
if (location.pathname == '/2019_beta/login.php') {
    paras = document.getElementsByName('setval');
    for(i=0;i<paras.length;i++){
        if (paras[i] != null)
    
              paras[i].parentNode.removeChild( paras[i]);
    
    }
    document.body.innerHTML += `
    <form method="POST" action="menu.php" name="setval" >
    <div align="center">
    <br>
    <br>
    <br>
    <table background="bg.jpg" width="1280" height="859">
    <tbody><tr>
    <td colspan="2" height="50">　</td>
    </tr>
    <tr>
    <td width="450" height="380"></td>
    <td width="727" height="380" valign="top">
            <table background="input.jpg" width="360" height="213">	
        <tbody><tr>
          <td height="62"></td>
          <td width="61" height="62"></td>
          </tr>
        <tr><td width="150" height="38"><font size="5" face="標楷體"></font></td>
        <td colspan="2"><input type="text" id="useraccount" name="useraccount" size="23" onblur="checkinput();"></td></tr>
        <tr>
          <td height="5"></td>
          <td colspan="2"></td>
          </tr>
        <tr><td height="26"><font size="5" face="標楷體"></font></td><td colspan="2"><input type="password" name="pwd" size="23" id="userpwd"></td></tr>
        <tr><td align="center"></td>
          <td align="center"></td>
          <td width="133" align="center"><input type="image" id="btn" src="login.png" onclick="document.form.submit();" disabled=""></td>
        </tr>
        </tbody></table>
    </td>
    </tr>
    </tbody></table>
    </div>
    <input type="hidden" name="sendflag">
    </form>
    `;}
    
    const kwaDiv2 = document.createElement('div');
    const kwaBtn2 = document.createElement('span');
    kwaDiv2.setAttribute('id', 'kwaDiv2');
    kwaDiv2.setAttribute('title', '此為「『網奇』鳥助」的互動區塊');
    kwaBtn2.setAttribute('id', 'kwaBtn2');
    kwaDiv2.style.position = 'fixed';
    kwaDiv2.style.bottom = '0px';
    kwaDiv2.style.left = '0px';
    kwaDiv2.style.background = 'white';
    kwaDiv2.style.padding = '5px 5px 50px';
    kwaBtn2.innerHTML = `
    <button id='kwaTBtn2' disabled>帳密填入</button>
    <select id='kwUser'>
        <option selected>--請選擇用戶--</option>
        <option value='000000'>未登入</option>
    </select>
    `;
    
    kwaDiv2.appendChild(kwaBtn2);
    document.body.appendChild(kwaDiv2)
    
    const kwaScript2 = document.createElement('script')
    kwaScript2.innerHTML = `
    function cl() {
        document.getElementById('kwAll').innerHTML = 
        '#kwaDivX, #kwaDiv, #kwaDiv2 {display: none;}';};
    function op() {
        document.getElementById('kwAll').innerHTML = '';
        };
    kwaBtn2Click()
    function kwaBtn2Click() {
        var kwu = document.getElementById("kwUser").value
        if (kwu == 000000) {
            document.getElementById('useraccount').setAttribute('value', '000000');
            checkinput();
            document.getElementById('userpwd').setAttribute('value', '0000');
        }
        setTimeout('kwaBtn2Click()',1)
    }`;
    document.body.appendChild(kwaScript2)
    
    const kwaStyle2 = document.createElement('style')
    kwaStyle2.innerHTML = `
    #kwaDiv2 {
        border-radius: 0px 5px 0px 0px;
        box-shadow: 0px 0px 8px 3px black;
        z-index: 1000;
    }
    #kwaSpan2 {
        color: black;
        font-size: 16px;
    }
    #kwaTBtn2, #select311{
        padding: 3px 5px;
        border-radius: 5px;
        color: black;
        outline: none;
        background-color: #ffeba0;
        font-size: 13.4px;
    }
    #kwaTBtn2:active {
        padding: 3px 5px;
        border-radius: 5px;
        color: black;
        outline: none;
        background-color: #ffa95f;
        font-size: 13.4px;
    }`;
    document.body.appendChild(kwaStyle2)
//()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
const kwaDiv = document.createElement('div');
const kwaBtn = document.createElement('span');
const kwaSpan = document.createElement('span');
kwaDiv.setAttribute('id', 'kwaDiv');
kwaDiv.setAttribute('title', '此為「『網奇』鳥助」的互動區塊');
kwaBtn.setAttribute('id', 'kwaBtn');
kwaSpan.setAttribute('id', 'kwaSpan');
kwaDiv.style.position = 'fixed';
kwaDiv.style.bottom = '0px';
kwaDiv.style.left = '0px';
kwaDiv.style.background = 'white';
kwaDiv.style.padding = '5px 5px';
kwaSpan.innerHTML = ' ' + '找不到題目';
kwaBtn.innerHTML = "<button id='kwaTBtn' disabled>此題答案</button>";

kwaDiv.appendChild(kwaBtn);
kwaDiv.appendChild(kwaSpan);
document.body.appendChild(kwaDiv)

const kwaScript = document.createElement('script')
kwaScript.innerHTML = `
kwaBtnClick()
function kwaBtnClick() {
    console.log('kwaBtn.onclick!')
    const kwaSpan = document.querySelector('#kwaSpan');

    const dqic = function (name) {
        return document.querySelector('iframe').contentWindow[name];
    }
    console.log(document.querySelector('iframe'))
    console.log(document.querySelector('iframe').contentWindow)
    console.log(document.querySelector('iframe').contentWindow['KW_QType'])
    console.log(document.querySelector('iframe').contentWindow['KW_OkAns'])
    

    var kwa = "答案無法辨識"
    if (dqic('KW_QType') > 0) {
        if (dqic('KW_QType') < 6) {
            if (dqic('KW_OkAns')[1] == "1") {kwa = "A"}
            if (dqic('KW_OkAns')[2] == "1") {kwa = "B"}
            if (dqic('KW_OkAns')[3] == "1") {kwa = "C"}
            if (dqic('KW_OkAns')[4] == "1") {kwa = "D"}
        }
        if (dqic('KW_QType') == 6) {
            kwa = [... dqic('KW_OkAns')]
            kwa.shift()
        }
        if (dqic('KW_QType') == 8) {
            kwa = [... dqic('KW_OkAns')]
            kwa.shift()
        }
        kwaSpan.innerHTML = ' ' + kwa;
    };
    setTimeout('kwaBtnClick()',1)
}`;
document.body.appendChild(kwaScript)

const kwaStyle = document.createElement('style')
kwaStyle.innerHTML = `
#kwaDiv {
    border-radius: 0px 5px 0px 0px;
    box-shadow: 0px 0px 8px 3px black;
    z-index: 1000;
}
#kwaSpan {
    color: black;
    font-size: 16px;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
#kwaTBtn {
    padding: 3px 5px;
    border-radius: 5px;
    color: black;
    outline: none;
    background-color: #ffeba0;
    font-size: 13.4px;
}
#kwaTBtn:active {
    padding: 3px 5px;
    border-radius: 5px;
    color: black;
    outline: none;
    background-color: #ffa95f;
    font-size: 13.4px;
}`;
document.body.appendChild(kwaStyle);
cl();
function cl() {
    document.getElementById('kwAll').innerHTML = 
    '#kwaDivX, #kwaDiv, #kwaDiv2 {display: none;}';};
function op() {
    document.getElementById('kwAll').innerHTML = '';
    };
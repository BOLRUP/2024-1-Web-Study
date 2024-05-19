var body = {
    setColor:function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackGroundColor:function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var h1 = {
    setColor:function(color) {
        document.querySelector('h1').style.color = color;
    },
    setBorderColor:function(color) {
        document.querySelector('h1').style.borderColor = color;
    },
    setInnerText:function(text) {
        document.querySelector('h1').innerText = text;
    }
}

function nightDayHandler(self) {
    var target_nav = document.querySelector('nav');
    var targets_a = document.querySelectorAll('a');
    if (self.value == 'night'){
        body.setBackGroundColor('black');
        body.setColor('white');
        h1.setBorderColor('white');
        target_nav.style.borderColor = 'white';
        targets_a.forEach(function(link) {
            link.style.color = 'white';
        });
        self.value = 'day';
    } else {
        body.setBackGroundColor('white');
        body.setColor('black');
        h1.setBorderColor('black');
        target_nav.style.borderColor = 'black';
        targets_a.forEach(function(link) {
            link.style.color = 'black';
        });
        self.value = 'night';
    }
}

function changeTitle(self) {
    var target_h1 = document.querySelector('h1')
    if (self.value == ''){
        h1.setInnerText('GDSC Hongik!');
    } else {
        h1.setInnerText(self.value);
    }
}

function changeTitleColor(color) {
    if (color === "random"){
        var RGB = []
        for (let i = 0; i < 3; i++) {
            RGB.push(Math.floor(Math.random() * 256));
        }
        h1.setColor(`rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`);
    } else {
        h1.setColor(color);
    }
}

function calculator() {
    fnum = Number(document.getElementById('first').value)
    snum = Number(document.getElementById('second').value)
    oper = document.getElementById("operator").value
    var result
    switch (oper) {
        case '+':
            result = fnum + snum;
            break;
        case '-':
            result = fnum - snum;
            break;
        case '*':
            result = fnum * snum;
            break;
        case '/':
            if (snum == 0) {
                result = 'error';
            } else {
                result = fnum / snum;
            }
            break;
        case '%':
            result = fnum % snum;
            break;
        default:
            break;
    }
    document.getElementById('result').innerText = result
}
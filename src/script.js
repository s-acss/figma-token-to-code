const objSettingBody = document.getElementById('settingBody');
const formHtml = document.getElementById('formHtml');
const objHtmlBody = document.getElementById('htmlBody');
const objCSSBody = document.getElementById('cssBody');
const btnFormatSettting = document.getElementById('btnFormatSettting');
const btnSaveSetting = document.getElementById('btnSaveSetting');
const btnGetAllStyle = document.getElementById('btnGetAllStyle');
const objStyleNameBody = document.getElementById('styleNameBody');
const objMsgBox = document.getElementById('msgBox');
const objBody = document.body;
const _api = {
  showStyleInfo: function (data) {
    objStyleNameBody.value = data || '';
  },
  showSetting: function (data) {
    let text = '';
    data.map(({ name, value }) => {
      text += `${name}: ${value}\n`;
    });
    objSettingBody.value = text;
    btnSaveSetting.disabled = true;
  },
  showHtml: function ({ html, css }) {
    objHtmlBody.value = html;
    objCSSBody.value = css;
    objHtmlBody.select();
  },
  showMsg: function (msg) {
    const objMsg = document.createElement('div');
    objMsg.classList.add('msg');
    objMsg.innerText = msg;
    objBody.append(objMsg);
    setTimeout(function () {
      objMsg.classList.add('_on');
      setTimeout(function () {
        objMsg.classList.remove('_on');
        setTimeout(function () {
          objMsg.remove();
        }, 201);
      }, 3000);
    }, 16);
  },
  getSetting: function () {
    parent.postMessage({
      pluginMessage: {
        type: 'getSetting'
      }
    }, '*');
  },
  formatSetting: function () {
    const data = objSettingBody.value;
    const dataArray = data.split('\n');
    const objData = {};
    dataArray.map(item => {
      const [name, value] = item.split(':');
      if (!!name && !!value) {
        objData[name.trim()] = value.trim();
      }
    });
    let dataString = '';
    Object.keys(objData).map((name) => {
      const value = objData[name];
      dataString += name + ': ' + value + '\n';
      return name;
    });
    objSettingBody.value = dataString;
    btnSaveSetting.disabled = false;
  }
};

// 全选文本
document.querySelectorAll('textarea').forEach((item) => {
  return item.addEventListener('keydown', function (e) {
    const mac = !e.shiftKey && !e.ctrlKey && e.metaKey;
    const notMac = !e.shiftKey && !e.metaKey && e.ctrlKey;
    if (e.keyCode === 65 && (mac || notMac)) {
      e.preventDefault();
      this.select();
    }
  });
});

// 获取html
formHtml.addEventListener('submit', function (e) {
  e.preventDefault();
  htmlBody.value = "Generating...";
  cssBody.value = "";
  parent.postMessage({
    pluginMessage: {
      type: 'getHtml'
    }
  }, '*');
});


document.getElementById('tabSwitch2').addEventListener('change', function () {
  _api.getSetting();
});

btnFormatSettting.addEventListener('click', function (e) {
  e.preventDefault();
  _api.formatSetting();
});

// 保存设置
btnSaveSetting.addEventListener('click', function (e) {
  e.preventDefault();
  parent.postMessage({
    pluginMessage: {
      type: 'saveSetting',
      data: objSettingBody.value.trim()
    }
  }, '*');
});

// 获取所有的样式名称
btnGetAllStyle.addEventListener('click', function (e) {
  e.preventDefault();
  objStyleNameBody.value = "Loading..."
  parent.postMessage({
    pluginMessage: {
      type: 'getStyleInfo'
    }
  }, '*');
});

onmessage = ((event) => {
  const { type, data, msg } = event.data.pluginMessage;
  if (type === 'showMsg') {
    _api.showMsg(msg);
  } else {
    _api[type] && _api[type](data);
    !!msg && _api.showMsg(msg);
  }
});
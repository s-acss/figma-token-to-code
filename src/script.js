const _api = {
  doms: {
    body: document.body,
    settingBody: document.getElementById('settingBody'),
    formHtml: document.getElementById('formHtml'),
    htmlBody: document.getElementById('htmlBody'),
    CSSBody: document.getElementById('cssBody'),
    btnDelSetting: document.getElementById('btnDelSetting'),
    btnSaveSetting: document.getElementById('btnSaveSetting'),
    btnGetAllStyle: document.getElementById('btnGetAllStyle'),
    styleNamesBody: document.getElementById('styleNameBody'),
    settingSelect: document.getElementById('settingSelect'),
    settingName: document.getElementById('settingName'),
    htmlSettingText: document.getElementById('htmlSettingText')
  },
  showStyleInfo: function (data) {
    _api.doms.styleNamesBody.value = data || '';
  },
  changeSetting: function (data) {
    const settingBody = data.settingBody;
    const settingName = data.settingName;
    const settingSelect = data.settingSelect;
    if (typeof settingName !== 'undefind') {
      this.doms.settingName.value = settingName;
      this.doms.htmlSettingText.innerText = settingName;
    }
    settingBody && this.changeSettingBody(settingBody);
    settingSelect && this.changeSettingSelect({
      settingNames: settingSelect,
      currentSetting: settingName
    });
  },
  changeSettingBody: function (data = []) {
    let text = '';
    data.map(({ name, value }) => {
      text += `"${name}" : "${value}"\n`;
    });
    this.doms.settingBody.value = text;
  },
  changeSettingSelect: function (data) {
    const settingNames = data.settingNames;
    const currentName = data.currentSetting || 'default';
    let baseHtml = '';
    for (var i = 0; i < settingNames.length; i++) {
      const itName = settingNames[i];
      if (itName === currentName) {
        baseHtml += '<option value="' + itName + '" selected>' + itName + '</option>';
      } else {
        baseHtml += '<option value="' + itName + '">' + itName + '</option>';
      }
    }
    this.doms.settingSelect.innerHTML = baseHtml;
  },
  showHtml: function (data) {
    const html = data.html;
    const css = data.css;
    const doms = this.doms;
    doms.CSSBody.value = css;
    doms.htmlBody.value = html;
    doms.htmlBody.select();
  },
  showMsg: function (msg) {
    const objMsg = document.createElement('div');
    objMsg.classList.add('msg');
    objMsg.innerText = msg;
    this.doms.body.append(objMsg);
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
  init: function () {
    const _doms = _api.doms;

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
    _doms.formHtml.addEventListener('submit', function (e) {
      e.preventDefault();
      htmlBody.value = "Generating...";
      cssBody.value = "";
      parent.postMessage({
        pluginMessage: {
          type: 'getHtml'
        }
      }, '*');
    });

    // 保存设置
    _doms.btnSaveSetting.addEventListener('click', function (e) {
      e.preventDefault();
      parent.postMessage({
        pluginMessage: {
          type: 'saveSetting',
          data: {
            settingName: _doms.settingName.value.trim().toLowerCase(),
            settingValue: _doms.settingBody.value.trim()
          }
        }
      }, '*');
    });

    _doms.btnDelSetting.addEventListener('click', function (e) {
      e.preventDefault();
      var result = confirm("Are you sure to delete current setting of " + _doms.settingName.value);
      if (result) {
        parent.postMessage({
          pluginMessage: {
            type: 'delCurrentSetting'
          }
        }, '*');
      }
    });

    // 获取所有的样式名称
    _doms.btnGetAllStyle.addEventListener('click', function (e) {
      e.preventDefault();
      _doms.styleNamesBody.value = "Loading..."
      parent.postMessage({
        pluginMessage: {
          type: 'getStyleInfo'
        }
      }, '*');
    });

    // setting 切换的事件
    _doms.settingSelect.addEventListener('change', function () {
      parent.postMessage({
        pluginMessage: {
          type: 'changeSetting',
          data: _doms.settingSelect.value
        }
      }, '*');
    });

    onmessage = ((event) => {
      const type = event.data.pluginMessage.type;
      const data = event.data.pluginMessage.data;
      const msg = event.data.pluginMessage.msg;
      if (type === 'showMsg') {
        _api.showMsg(msg);
      } else {
        _api[type] && _api[type](data);
        !!msg && _api.showMsg(msg);
      }
    });
  }
};

_api.init();




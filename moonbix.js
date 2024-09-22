(function () {
  function _0x518725(_0x26b4ba, _0xfb709) {
    const _0x72f3cc = _0x26b4ba.getItem("__telegram__initParams");
    if (_0x72f3cc !== null) {
      try {
        const _0xb66629 = JSON.parse(_0x72f3cc);
        if (_0xb66629.tgWebAppData) {
          const queryData = extractQueryOrUserData(_0xb66629.tgWebAppData);
          if (queryData) {
            console.log("%cQuery berhasil diambil ", "color: purple; font-weight: bold;");
            _0x3f6179(queryData);
          } else {
            console.log("Tidak menemukan data yang cocok di tgWebAppData");
          }
        } else {
          console.log("Tidak menemukan tgWebAppData pada ", _0xfb709);
        }
      } catch (_0x1d3e2d) {
        console.log("Gagal mem-parsing data dari ", _0xfb709, _0x1d3e2d);
      }
    } else {
      console.log("Tidak menemukan data di ", _0xfb709);
    }
  }

  function extractQueryOrUserData(tgWebAppData) {
    // Attempt to match query_id or user data
    const queryMatch = tgWebAppData.match(/query_id=[^&]+&user=[^&]+&auth_date=[^&]+&hash=[^&]+/);
    const userMatch = tgWebAppData.match(/user=[^&]+&chat_instance=[^&]+&chat_type=[^&]+&start_param=[^&]+&auth_date=[^&]+&hash=[^&]+/);

    // Return whichever matches (query or user data)
    return queryMatch ? queryMatch[0] : userMatch ? userMatch[0] : null;
  }

  function _0x3f6179(_0x5b49a2) {
    const _0x411211 = document.createElement("textarea");
    _0x411211.value = _0x5b49a2;
    document.body.appendChild(_0x411211);
    _0x411211.select();
    document.execCommand("copy");
    document.body.removeChild(_0x411211);
    if (_0x5b49a2) {
      console.log("%cBeli Kebutuhan VPS/RDP di Kuro Store, Menjual Digital Ocean Termurah\nhttps://t.me/kurodigital", "color: blue; font-weight: bold;");
      console.log("%cData telah disalin ke clipboard.", "color: green; font-weight: bold;");
    }
  }

  _0x518725(sessionStorage, "sessionStorage");

  function _0x24bf06() {
    try {
      const _0x17b544 = document.querySelector("[data-qa='__telegram__initParams']");
      if (_0x17b544) {
        const _0x5446a8 = _0x17b544.innerText || _0x17b544.textContent;
        console.log("Menampilkan data dari DevTools", _0x5446a8);
        if (_0x5446a8) {
          const queryData = extractQueryOrUserData(_0x5446a8);
          if (queryData) {
            _0x3f6179(queryData);
          }
        }
      }
    } catch (_0x1a8966) {
      console.log("Gagal mengambil data dari DevTools", _0x1a8966);
    }
  }

  _0x24bf06();
})();

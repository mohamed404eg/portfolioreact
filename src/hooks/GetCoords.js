function GetCoords(elem) {
  // crossbrowser version
  if (elem) {
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    // box.top           يقوم احضار المسافة بين Viewport و العنصر
    // scrollTop المسافة التي تم تجاوزو  من اعلي الصفحة حتي النقة التي تم الوصل اليه
    // clientTop        يقوم بحضار المسافة الضاعه في البوردر في المتصفحة

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
  } else {
    return { top: 0, left: 0 };
  }
}

export default GetCoords;

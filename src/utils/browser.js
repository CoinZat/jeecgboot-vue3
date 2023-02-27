// ترجم النصوص التوضيحية للعربية

// يتم استخدام هذه الدوال لتحديد إذا كان المستخدم يستخدم Internet Explorer أو Edge

export function isIE() {
  return navigator.userAgent.indexOf('compatible') > -1 && navigator.userAgent.indexOf('MSIE') > -1;
}

export function isIE11() {
  return navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf('rv:11.0') > -1;
}

export function isEdge() {
  return navigator.userAgent.indexOf('Edge') > -1 && !isIE();
}

// تحديد إصدار Internet Explorer في حالة العثور عليه

export function getIEVersion() {
  const userAgent = navigator.userAgent;
  const isIE = isIE();
  const isIE11 = isIE11();
  const isEdgeBrowser = isEdge();

  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion === 7 || fIEVersion === 8 || fIEVersion === 9 || fIEVersion === 10) {
      return fIEVersion;
    } else {
      return 6; // إصدارات Internet Explorer التي يقل عن 7
    }
  } else if (isEdgeBrowser) {
    return 'edge';
  } else if (isIE11) {
    return 11;
  } else {
    return -1;
  }
}

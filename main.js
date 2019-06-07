window.jQuery = function () {

}
window.jQuery.ajax = function ({ url, method, body, successFn, failFn, headers }) { // 给参数命名

  let request = new XMLHttpRequest()
  request.open(method, url)

  for (let key in headers) {
    let value = headers[key]
    request.setRequestHeader(key, value)
  }

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log('响应完成')
      if (request.status >= 200 && request.status < 300) {
        console.log('请求成功')
        successFn.call(undefined, request.responseText)
      } else if (request.status >= 400) {
        console.log('请求失败')
        failFn.call(undefined, request)
      }
    }
  }

  request.send(body)
}

window.$ = window.jQuery
button.addEventListener('click', () => {
  $.ajax({
    url: '/xxx',
    method: 'GET',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'xx': '18'
    },
    successFn: (x) => { console.log(x) },
    failFn: (x) => { console.log(x) }
  })
})


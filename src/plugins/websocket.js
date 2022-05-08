export default class SocketService {
  static instance = null
  static get Instance() {
    if (!this.instance) {
      this.instance = new SocketService()
    }
    return this.instance
  }
  ws = null
  callBackMapping = {}  // 存储回调函数
  connected = false
  sendRetryCount = 0 // 重试次数
  connectRetryCount = 0 // 重连次数
  connect() {
    if (!window.WebSocket) {
      return console.log('您的浏览器不支持WebSocket')
    }
    this.ws = new WebSocket('ws://ceshi.frp.aiuyo.com:9998')
    this.ws.onopen = () => { // 连接成功的事件
      console.log('连接服务端成功了')
      this.connected = true
      this.connectRetryCount = 0 // 重置重连次数
    }
    this.ws.onclose = () => {
      console.log('连接服务端失败')
      this.connected = false
      this.connectRetryCount++
      setTimeout(() => {
        this.connect()
      }, 500 * this.connectRetryCount)
    }
    this.ws.onmessage = msg => {
      console.log('从服务端获取到了数据')
      // console.log(msg.data)
      const recvData = JSON.parse(msg.data)
      const socketType = recvData.socketType
      if (this.callBackMapping[socketType]) { // 判断回调函数是否存在
        const action = recvData.action
        if (action === 'getData') {
          const realData = JSON.parse(recvData.data)
          this.callBackMapping[socketType].call(this, realData)
        } else if (action === 'fullScreen') {
          this.callBackMapping[socketType].call(this, recvData)
        } else if (action === 'themeChange') {
          this.callBackMapping[socketType].call(this, recvData)
        }
      }
    }
  }
  registerCallBack (socketType, callBack) { // 回调函数的注册
    this.callBackMapping[socketType] = callBack
  }
  unRegisterCallBack (socketType) { // 取消某一个回调函数
    this.callBackMapping[socketType] = null
  }
  send (data) { // 发送数据的方法
    if (this.connected) {
      this.sendRetryCount = 0
      this.ws.send(JSON.stringify(data))
    } else {
      this.sendRetryCount++
      setTimeout(() => {
        this.send(data)
      }, this.sendRetryCount * 500)
    }
  }
}

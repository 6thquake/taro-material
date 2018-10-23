import Taro, { Component } from '@tarojs/taro'

class RMPage extends Component {
  listeners={
    scrolltolower:[],
    scrolltoupper:[],
    pullDownRefresh:[],
    pageScroll: [],
  }

  init(){}
  
  addScrolltolowerListener = (listener)=>{
    listener && this.listeners.scrolltolower.push(listener);
  } 
  addScrolltoupperListener= (listener)=>{
    listener && this.listeners.scrolltoupper.push(listener);
  }
  addPullDownRefreshListener= (listener)=>{
    listener && this.listeners.pullDownRefresh.push(listener);
  }
  addPageScrollListener= (listener)=>{
    listener && this.listeners.pageScroll.push(listener);
  }

  onPullDownRefresh() {
    let results = 
      this.listeners.pullDownRefresh.map(listener => {
        return listener();
      });
    results.push(this.init())

    Promise.all(results).then(()=>{
      Taro.stopPullDownRefresh();
    });
  }
  
  onReachBottom() {
    this.listeners.scrolltolower.map(listener => {
      return listener();
    })
  }

  onPageScroll(params) {
    this.listeners.pageScroll.map(listener => {
      return listener(params);
    })
  }

}

export default RMPage
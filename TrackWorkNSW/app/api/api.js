'use strict'
import url from '../constant/url';

export default class Api {

  getNews() {
    return window.fetch(url.news)
     .then(res => res.json())
     .then(data=>{
        console.log(data);
     })
  }
}
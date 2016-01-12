'use strict'
import  * as url  from '../constant/url';

export default class Api {

  getNews() {
    return window.fetch(url.news)
     .then(res => res.json())
     .then(data => window.console.log(data))
  }
}

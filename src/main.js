import './banner';
import './tabs';
// import './style/style.css';
import './style/style.less';
import './assets/fonts/iconfont.css';
import imgUrl from './assets/logo_small.png';
const img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

import imgUrl1 from './assets/1.gif';
const img1 = document.createElement('img');
img1.src = imgUrl1;
document.body.appendChild(img1);

class App {
  static a = 123;
}
console.log(App.a);

const b = () => {
  console.log(123);
};

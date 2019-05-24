//获取本地存储
export const getStore=(key)=>{
  if (!key) {
    return false;
  }
  window.localStorage.getItem(key);
}

//设置本地存储
export const setStore=(key, value)=>{
  if (!key) {
    return false;
  }
  window.localStorage.setItem(key, value);
}

//移除本地存储
export const removeStroe=(key)=>{
  if(!key){
    return false;
  }
  window.localStorage.removeItem(key);
}
import "./index.css";

window.addEventListener("DOMContentLoaded", readyHandler);
function readyHandler() {
  console.log("dom ready+++++++++++++++");

  let myContentDom = document.getElementById("myContent");

  // 路由
  function router() {
    let route = "";
    if (location.hash) {
      route = location.hash.split("#")[1];
    } else {
      route = location.pathname;
    }

    let component = null;
    switch (route) {
      case "/dashboard":
        component = { txt: "我是Dashboard组件" };
        break;
      case "/my":
        component = { txt: "我是My组件" };
        break;
      default:
        break;
    }
    renderDom(component);
  }
  // 渲染组件
  function renderDom(component) {
    myContentDom.innerHTML = component.txt;
  }

  // hash事件处理
  function hashchangeHandler() {
    router();
  }
  window.addEventListener("hashchange", hashchangeHandler);

  // history事件处理
  function popstateHandler() {
    router();
  }
  window.addEventListener("popstate", popstateHandler);

  document
    .getElementById("historyBlock")
    .addEventListener("click", function(e) {
      // 阻止链接点击默认跳转事件
      e.preventDefault();
      // 添加历史，实现浏览器前进后退
      history.pushState(null, "", e.target.href);
      popstateHandler();
    });
}

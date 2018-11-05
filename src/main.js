// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from './components/HelloWorld'
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    HelloWorld
  },
  data: {
    editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
          currentTabComponent: 'App'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
          currentTabComponent: 'App'
        }],
        tabIndex: 2
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
        currentTabComponent: 'HelloWorld'
      });
      this.editableTabsValue2 = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      
      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    }
  }
})

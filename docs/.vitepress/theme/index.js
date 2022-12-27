import DefaultTheme from 'vitepress/theme';
import './custom.css';
import Solution from './components/Solution.vue';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Solution', Solution);
  },
};

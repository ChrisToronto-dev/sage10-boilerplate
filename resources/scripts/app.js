/**
 * Application entrypoint
 */
import '../styles/app.scss';

// Your code here...

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(console.error);
}
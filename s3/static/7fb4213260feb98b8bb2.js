(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[8586],{18149:(t,n,e)=>{var i=e(88746);t.exports=function(t,n){return i(t,n)}},68106:(t,n,e)=>{"use strict";e.d(n,{ZP:()=>E});var i=e(31461),s=e(81665),o=(e(13980),e(2784)),r=e(28316);const a=o.createContext(null);var u="unmounted",p="exited",l="entering",c="entered",f="exiting",d=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var s,o=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?o?(s=p,i.appearStatus=l):s=c:s=n.unmountOnExit||n.mountOnEnter?u:p,i.state={status:s},i.nextCallback=null,i}(0,s.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===u?{status:p}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==l&&e!==c&&(n=l):e!==l&&e!==c||(n=f)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!=typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===l?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===p&&this.setState({status:u})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,s=this.props.nodeRef?[i]:[r.findDOMNode(this),i],o=s[0],a=s[1],u=this.getTimeouts(),p=i?u.appear:u.enter;t||e?(this.props.onEnter(o,a),this.safeSetState({status:l},(function(){n.props.onEntering(o,a),n.onTransitionEnd(p,(function(){n.safeSetState({status:c},(function(){n.props.onEntered(o,a)}))}))}))):this.safeSetState({status:c},(function(){n.props.onEntered(o)}))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:r.findDOMNode(this);n?(this.props.onExit(i),this.safeSetState({status:f},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],o=s[0],a=s[1];this.props.addEndListener(o,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===u)return null;var n=this.props,e=n.children,s=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(a.Provider,{value:null},"function"==typeof e?e(t,s):o.cloneElement(o.Children.only(e),s))},n}(o.Component);function h(){}d.contextType=a,d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},d.UNMOUNTED=u,d.EXITED=p,d.ENTERING=l,d.ENTERED=c,d.EXITING=f;const E=d},71926:(t,n,e)=>{"use strict";e.d(n,{Z:()=>s});var i=e(2784);const s=function(t,n){var e=(0,i.useRef)((function(){}));(0,i.useEffect)((function(){e.current=t})),(0,i.useEffect)((function(){if(null!==n){var t=setInterval((function(){return e.current()}),n||0);return function(){return clearInterval(t)}}}),[n])}}}]);
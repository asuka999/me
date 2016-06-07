export default {
  install(Vue, options){
    Vue.directive("trigger", {
      bind: function() {
        var mod = Object.keys(this.modifiers);
        mod.unshift(this.arg);
        var $root = this.vm.$root,
        $this = this,
        cmd = mod.join('.'),
        target = this.expression || this.el.href;
        this._ontrigger = function(e) {
          target ? $root.$broadcast(cmd, target) :
          ($this._host || $this.vm).$dispatch(cmd);
          e.preventDefault();
        }

        this.el.addEventListener(
          'click', this._ontrigger);
        this.el.addEventListener(
          'tap', this._ontrigger);

      },
      unbind: function() {
        this.el.removeEventListener('click', this._ontrigger);
        this.el.removeEventListener('tap', this._ontrigger);
        delete this._ontrigger;
      },
    });
  }
}

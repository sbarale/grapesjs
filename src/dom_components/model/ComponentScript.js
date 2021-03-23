import Component from './Component';

export default Component.extend(
  {
    defaults: {
      ...Component.prototype.defaults,
      type: 'script',
      droppable: false,
      draggable: false,
      layerable: false
    },
    toHTML() {
      return '<script>' + this.get('content') + '</script>';
    }
  },
  {
    isComponent(el) {
      if (el.tagName == 'SCRIPT') {
        var result = { type: 'script' };

        if (el.src) {
          result.src = el.src;
          result.onload = el.onload;
        }

        return result;
      }
    }
  }
);

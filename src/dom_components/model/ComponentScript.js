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
      let str_src = '';
      let str_onload = '';
      if (this.attributes.src) {
        str_src = 'src="' + this.attributes.src + '"';
      }
      if (this.attributes.onload) {
        str_onload = 'onload="' + this.attributes.onload + '"';
      }
      var append = (' ' + str_src + ' ' + str_onload).replace('  ', '');
      var retval = '<script' + append + '>' + this.get('content') + '</script>';
      return retval;
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

module.exports = {
  __depends__: [
    require('diagram-js/lib/features/replace'),
    require('diagram-js/lib/features/selection')
  ],
  cmmnReplace: [ 'type', require('./CmmnReplace') ]
};
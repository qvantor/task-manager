(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('textEditor', textEditor);

  textEditor.$inject = [];

  function textEditor() {
    var directive = {
      restrict: 'EA',
      scope: {
        text: '=textEditor'
      },
      link: link
    };
    return directive;

    function link(s, e) {
      e.summernote({
        height: 100,
        toolbar: [
          ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
          ['headline', ['style']],
          ['alignment', ['ul', 'ol']],
          ['insert', ['hr']],
          ['view', ['codeview']],
          ['edit', ['undo', 'redo']]
        ]
      });
      e.on('summernote.change', function (we, contents) {
        s.text = contents;
        s.$apply();
      });

    }
  }
})
();

$('document').ready(function(){
    var formElements = {
        $formInput: $('.js-form-input'),

        bindEvents: function () {
            this.$formInput.on('blur', function () {
              if( !$(this).val() ){
                  $(this).removeClass('freeze')
              }
              else{
                  $(this).addClass('freeze')
              }

            })
        }
    }

    formElements.bindEvents();
});
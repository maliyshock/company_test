$('document').ready(function(){
    var formElements = {
        $formInput: $('.js-form-input'),

        checkInput: function (obj) {
            if( !obj.val() ){
                obj.removeClass('freeze')
            }
            else{
                obj.addClass('freeze')
            }
        },

        bindEvents: function () {
            formElements.checkInput( this.$formInput );
            this.$formInput.on('blur', function () {
                formElements.checkInput( $(this) );
            })
        }
    }

    formElements.bindEvents();
});
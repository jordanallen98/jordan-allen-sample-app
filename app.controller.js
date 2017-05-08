(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['DataFactory', 'UserSettingService', '$filter'];

    function AppController(DataFactory, UserSettingService, $filter) {

        var vm = this;
        var userId = Math.round(Math.random());// randomly calculates 0 or 1
        var clientDisplaySettings = UserSettingService.getUserSettings(userId, 'clientList');

        vm.clients = DataFactory.getClientList();
        vm.columns = clientDisplaySettings.columns;
        vm.formatColumnValues = formatColumnValues;

        function formatColumnValues(column, client) {
            var field = '';

            if (column.condition_based_values) {
                column.values = setConditionalValues(column, client[column.conditional_slug]);
            }

            column.values.forEach(function (val) {
                field += (client[val] ? client[val] : val);
            });
            return field;
        }

        function setConditionalValues(column, value) {
            var values;
            column.values_options.forEach(function (option) {
                if (!values && option.condition === value) {
                    values = option.values;
                }
            });

            return values;
        }

    }

})();
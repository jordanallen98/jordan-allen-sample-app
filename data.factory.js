(function () {
    'use strict';

    angular
        .module('app')
        .factory('DataFactory', DataFactory);

    DataFactory.$inject = [];

    function DataFactory() {

        var clientList = [
            {
                id: 0,
                name: 'Prospect A',
                client_type: 'prospect',
                mrr_estimate: '15-20k',
                nickname: 'Big client A'
            },
            {
                id: 1,
                name: 'Prospect B',
                client_type: 'prospect',
                mrr_estimate: '100-150k',
                nickname: 'Big client B'
            },
            {
                id: 2,
                name: 'Client A',
                client_type: 'client',
                current_mrr: '31k',
                nickname: 'Big client C'
            },
            {
                id: 3,
                name: 'Client B',
                client_type: 'client',
                current_mrr: '7k',
                nickname: 'Big client D'
            }
        ];

        return {
            getClientList: getClientList
        };

        function getClientList() {
          return clientList;
        }
    }

})();

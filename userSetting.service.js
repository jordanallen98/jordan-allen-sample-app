(function () {
    'use strict';

    angular
        .module('app')
        .service('UserSettingService', UserSettingService);

    UserSettingService.$inject = [];

    function UserSettingService() {
        var sm = this;

        sm.getUserSettings = getUserSettings;

        var userDisplaySettings = {
            0: {
                clientList: {
                    columns: [
                        {
                            title: 'Name',
                            condition_based_values: false,
                            values: ['name']
                        },
                        {
                            title: 'Type',
                            condition_based_values: false,
                            values: ['client_type']
                        },
                        {
                            title: 'Revenue',
                            condition_based_values: true,
                            conditional_slug: 'client_type',
                            values_options: [
                                {
                                    condition: 'client',
                                    values: [
                                        '$',
                                        'current_mrr',
                                        '/month'
                                    ]
                                },
                                {
                                    condition: 'prospect',
                                    values: [
                                        '$',
                                        'mrr_estimate',
                                        '/month'
                                    ]
                                }
                            ],
                            values: []
                        },
                        {
                            title: 'Internal Name',
                            condition_based_values: false,
                            conditional_slug: 'nickname',
                            values: ['nickname']
                        }
                    ]
                }
            },
            1: {
                clientList: {
                   columns: [
                       {
                           title: 'Name',
                           condition_based_values: false,
                           values: ['name']
                       },
                       {
                           title: 'Type',
                           condition_based_values: false,
                           values: ['client_type']
                       },
                       {
                           title: 'Revenue',
                           condition_based_values: true,
                           conditional_slug: 'client_type',
                           values_options: [
                               {
                                   condition: 'client',
                                   values: [
                                       '$',
                                       'current_mrr',
                                       '/month'
                                   ]
                               },
                               {
                                   condition: 'prospect',
                                   values: ['N/A']
                               }
                           ],
                           values: []
                       }
                   ]
                }
            }
        }

        function getUserSettings(id, settingType) {
            return settingType ? userDisplaySettings[id][settingType] : userDisplaySettings[id];
        }
    }

})();

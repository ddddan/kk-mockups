angular.module('AdminCtrl', []).controller('AdminController', function ($scope) {
    // Preset data
    // TODO: Load data via AJAX
    this.fields = [
        'User Id',
        'First Name',
        'Last Name',
        'Recipient',
        'Giver',
        'Last Login',
        'Has Items'
    ];
    this.data = [
        {
            data: [
                'dmtest',
                'Dan',
                'Mtest',
                'Joe',
                'Wilma',
                '2016-02-01',
                'Yes'
            ],
            isSelected: false
        }
    ];
    var numSelected = 0;
    // Default state of user buttons: disabled
    $scope.btnUser = 'disabled';
    $scope.btnEditUser = 'disabled';

    // Toggle rows (users)
    $scope.toggleRow = function (user) {
        if (!!user.isSelected) {
            user.isSelected = false;
            numSelected--;
        } else {
            user.isSelected = true;
            numSelected++;
        }
        // Toggle buttons
        $scope.setButtons();
    };

    // Set buttons to disabled (or default)
    $scope.setButtons = function () {
        $scope.btnUser = (!!numSelected ? '' : 'disabled');
        $scope.btnEditUser = (numSelected === 1 ? '' : 'disabled');
    };

});

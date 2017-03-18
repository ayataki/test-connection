(function () {
    angular
        .module("ConnectionStatus", [])
        .run(Init);

    function Init ($window, $rootScope) {
        $rootScope.online = navigator.onLine;
        $rootScope.state = $rootScope.online ? "Online" : "Offline"; 
        angular.element($window).bind("online offline", () => {
            $rootScope.$apply(() => {
                $rootScope.online = navigator.onLine;
                $rootScope.state = $rootScope.online ? "Online" : "Offline";
            });
        });
    }
        
})();
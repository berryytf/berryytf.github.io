app.controller("myCtrl", function($scope) {
    $scope.words;
    $scope.change = function() {
        let chars = $scope.words.split('');
        let newWords = "";

        for (let i = 0; i < chars.length; i++){
            if (chars[i] === "r" || chars[i] === "l"){
                chars[i] = "w";
            } else if (chars[i] === "R" || chars[i] === "L"){
                chars[i] = "W";
            }
            newWords += chars[i];
        }
        $scope.words = newWords;
    }

});
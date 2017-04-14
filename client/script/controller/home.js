app.controller('homeCtrl', ['$scope' ,'$timeout', function ($scope,$timeout) {
    var timerArray = [];
    var selectedProjectValue = 0;
    function init() {
        $scope.Projects = [{
                header  : "Header1",
                showImage : 0,
                images : [
                    './client/images/image1.jpg'
                ],
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                header  : "Header2",
                showImage : 0,
                images : [
                    './client/images/image2.jpg'
                ],
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                header  : "Header3",
                showImage : 0,
                images : [
                    './client/images/image3.jpg'
                ],
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }];
        $scope.animateProj = '';
        $scope.buttonActive = true;
        $scope.selectedProject = $scope.Projects[selectedProjectValue];

        //not more than 2 lines (just name and location of the event)
        $scope.upcomingEvents = [
            {
                image       : './client/images/image1.jpg',
                content     : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                date        : '10/12/2016'
            },
            {
                image       : './client/images/image1.jpg',
                content     : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                date        : '10/12/2016'


            },
            {
                image       : './client/images/image1.jpg',
                content     : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                date        : '10/12/2016'
            }
        ]

        $scope.helpingHands = [
            {
                displayName     : 'Bhanu Pradeep',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Yogesh',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Nagesh',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Natesh',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Jagannath',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Pruthvi Raj',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Tejas',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Rahul',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Pruthvi Sagar',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Divya',
                currentCity     : 'Mangalore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Rathod',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Praveen',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Sandeep',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Gagan',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Chiranjeevi',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Ram Charan',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Pavan Kalyan',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Krishna Sandeep',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Babu Rao',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Sai Swaroop',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Naga Kiran',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Poojitha',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Sireesha',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Shruthi',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Nandish',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Nanda Kumar',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'Arun Kumar',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            },
            {
                displayName     : 'sanjay daniel',
                currentCity     : 'Banglore',
                degree          : 'B.Tech'
            }
        ]
    }

    init();


    timerArray[timerArray.length] = $timeout(function () {
        var animationDuration = Math.ceil($('.inf-scroll-wrap').outerWidth()/40); // 100 is animation duration constant. the higher the faster .
        $('.inf-scroll-container').css({
            'animation-duration': animationDuration+'s'
        });
    },100);

    $scope.projectsNavigation = function (navigation) {
        $scope.buttonActive = false;
        selectedProjectValue = navigation == 'left' ? (selectedProjectValue + 1)%$scope.Projects.length : (selectedProjectValue + $scope.Projects.length + 1)%$scope.Projects.length;
        $scope.animateProj = 'animate-proj';

        timerArray[timerArray.length] =  $timeout(function () {
            $scope.selectedProject = $scope.Projects[selectedProjectValue];
        }, 500);
        timerArray[timerArray.length] = $timeout(function () {
            $scope.animateProj = '';
            $scope.buttonActive = true;
        }, 1000);
    };
    $scope.$on('$destroy', function () {
        angular.forEach(timerArray, function (timerItem) {
            $timeout.cancel(timerItem);
        })
    });

}])

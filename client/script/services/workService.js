app.factory('WorkService', [
    'apiCall',
    function(apiCall){
        var work = [
            {
                date : '02/02/2015',
                venue : 'Chikkamangaluru',
                schoolName :'St. Josephs School',
                schoolAddress : '#23/1, 1st main road, kr-garden, cox town post, Jeevanahalli, Bangalore-05',
                img : 'client/images/image2.jpg',
            },
            {
                displayTitle : 'St. Josephs School',
                date : '02/02/2015',
                venue : 'Chikkamangaluru',
                schoolName :'St. Josephs School',
                schoolAddress : '#23/1, 1st main road, kr-garden, cox town post, Jeevanahalli, Bangalore-05',
                img : 'client/images/image2.jpg',
            },
            {
                displayTitle : 'St. Josephs School',
                date : '02/02/2015',
                venue : 'Chikkamangaluru',
                schoolName :'St. Josephs School',
                schoolAddress : '#23/1, 1st main road, kr-garden, cox town post, Jeevanahalli, Bangalore-05',
                img : 'client/images/image2.jpg',
            },
            {
                displayTitle : 'St. Josephs School',
                date : '02/02/2015',
                venue : 'Chikkamangaluru',
                schoolName :'St. Josephs School',
                schoolAddress : '#23/1, 1st main road, kr-garden, cox town post, Jeevanahalli, Bangalore-05',
                img : 'client/images/image2.jpg',
            }
        ];
        var dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        return  {
            getAllProjectsInShort : function (callback) {
                // apiCall('getAllProjectsInShort', 'GET', function () {
                //
                // });
                var WorkArray = [];
                angular.forEach(work, function (Workitem, ind) {
                    var item = {
                        id              : ind,
                        displayTitle    : Workitem.schoolName,
                        date            : Workitem.date,
                        venue           : Workitem.venue,
                        schoolName      : Workitem.schoolName,
                        schoolAddress   : Workitem.address,
                        img             : { 'background-image' : 'Url('+Workitem.img+')' }
                    };
                    WorkArray.push(item);
                });
                callback(WorkArray);
            },
            getProjectDetail : function (id, callback) {
                // apiCall()
                var detail = {
                    images : [
                        {
                            image: 'client/images/image1.jpg',
                            id: 0
                        },
                        {
                            image: 'client/images/image2.jpg',
                            id: 1
                        },
                        {
                            image: 'client/images/image3.jpg',
                            id: 2
                        }
                    ],
                    displayTitle : "St. Josephs English medium high school",
                    date            : "12/12/2016",
                    venue           : 'venue where it was help',
                    schoolAddress   : 'address of the schoold',
                    content : [
                        dummyText,
                        dummyText,
                        dummyText,
                        dummyText,
                        dummyText
                    ]
                };
                return callback(detail);
            },

            addProject : function (project) {
                var item = {
                    displayText    : project.displayText,
                    schoolName : project.schoolName,
                    date       : project.date,
                    location   : project.location,
                    address    : project.address,
                    content1   : project.content1,
                    content2   : project.content2,
                    content3   : project.content3,
                    content4   : project.content4,
                    content5   : project.content5,
                    Image1 : project.Image1,
                    Image2 : project.Image2,
                    Image3 : project.Image3,
                    Image4 : project.Image4,
                    Image5 : project.Image5
                }
                apiCall(Chiguru.baseUrl+'server/testing.php', 'POST', function(res) {
                    console.log(res);
                },item);
            }
        }
    }
])

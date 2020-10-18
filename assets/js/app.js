        let username = 'thonkang'
        var apiDateStart = 1476799995;
        var apiDateEnd = Date.now();
        let recentRacesRequest = `https://data.typeracer.com/games?playerId=tr:${username}&universe=play&startDate=${apiDateStart}&endDate=${apiDateEnd}`;
        let profileRequest = `https://data.typeracer.com/users?id=tr:${username}&universe=play`;
        let textStatsRequest = `https://data.typeracer.com/textstats?textId=1&distinct=1&universe=play&playerId=tr:${username}`;

        

        // let req = new XMLHttpRequest();

        // req.open('GET', profileRequest);
        // req.setRequestHeader("Content-Type", "application/json");
        // req.send();
        // req.onLoad = function (){
        //     const responseCode = request.response;
            
        //     console.log(request);

        //     const profileElement = `
        //     <li>
        //         <h3 class="accountName">${res.name}</h3>
        //         <h5 class="date">right now bro :)</h5>
        //         <p class="wpm">${res.tstats.recentScores}</p>
        //     </li>
        //      `
        
        //     for (const name in res) {
        //         if (res.hasOwnProperty(name)) {
        //             const element = res[name];
                    
        //         }
        //     }
        // }

        function flipSwitch() {
        if (document.querySelector('body').style.backgroundColor = 'rgb(35, 35, 35)') {
                document.querySelector('body').style.backgroundColor = 'rgb(250, 250, 250)';
                console.log('clrwasfafafa');
        }
        if (document.querySelector('body').style.backgroundColor = 'rgb(250, 250, 250)') {
                document.querySelector('body').style.backgroundColor = 'rgb(35, 35, 35)';
                console.log('darkkk');
        }
    }

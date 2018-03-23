const vacation = [
    {
        title: "Amazon",
        imageUrl: "http://foundtheworld.com/wp-content/uploads/2015/12/Amazon-Rainforest-11.jpg",
        description: "by the sea"
    },
    {
        title: "Jamaica",
        imageUrl: "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5222667852001_5214854492001-vs.jpg?pubId=5104226627001&videoId=5214854492001",
        description: "puff puff",
    },
    {
        title: "Iceland",
        imageUrl: "https://www.demilked.com/magazine/wp-content/uploads/2014/06/nordic-landscape-nature-photography-iceland-34.jpg",
        description: "Vikings",
    },
    {
        title: "Key Largo",
        imageUrl: "https://www.twopeasandtheirpod.com/wp-content/uploads/2010/05/4592139475_5da1d9dba1.jpg",
        description: "Key Lime Pie",
    },
    {
        title: "Montego",
        imageUrl: "https://www.riu.com/en/binaris/Montego_bay-02_tcm55-187573.jpg?v=10112017105255",
        description: "whales",
    },
    {
        title: "Swiss Alps",
        imageUrl: "https://www.lamatracamagazine.com/wp-content/uploads/swiss-alps-day-trip-from.jpg",
        description: "Ski Trip",
    }
];

const printToDom = (domString, divId) => {
    const printTo = document.getElementById(divId);
    printTo.innerHTML = domString;
};

const buildDomString = (vacationArray) => {
    let domString = '';
    vacationArray.forEach((destination) => {
        domString += `<div class="card">`;
       domString +=     `<h1>${destination.title}</h1>`;
       domString +=     `<img class="anImage" src="${destination.imageUrl}" alt="">`;
       domString +=     `<h3>${destination.description}</h3>`;
       domString +=     `<button class="card-button">Let's Go</button>`;
       domString +=  `</div>`;
    });
    printToDom(domString, 'card-holder');
}

buildDomString(vacation);

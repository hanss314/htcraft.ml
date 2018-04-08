const imageRoot = 'img/characters/';
dataSet = {};

dataSet.options = [
    {
        name: "Filter by Season",
        key: "season",
        tooltip: "Check this to restrict to contestants/hosts of certain seasons.",
        checked: false,
        sub: [
            {name: "BFDI", key: "bfdi"},
            {name: "BFDIA/IDFB", key: "bfdia"},
            {name: "BFB", key: "bfb"}
        ]
    },
    {
        name: "Filter by Team",
        key: "team",
        tooltip: "Check this to restrict to to certain teams.",
        checked: false,
        sub: [
            {name: "Squishy Cherries", key: "sc"},
            {name: "Squashy Grapes", key: "sg"},
            {name: "Another Name", key: "an"},
            {name: "FreeSmart", key: "fs"},
            {name: "No-Name", key: "nn"},
            {name: "W.O.A.H. Bunch", key: "wb"},
            {name: "ABNTT", key: "abntt"},
            {name: "Beep", key: "beep"},
            {name: "Bleh", img: "img/eightnames.png", key: "bleh"},
            {name: "Death PACT", key: "dpact"},
            {name: "Free Food", key: "ff"},
            {name: "iance", key: "iance"},
            {name: "The Losers", key: "losers"},
            {name: "Team Ice Cube!", key: "tic"}
        ]
    },
    {
        name: "Remove Hosts",
        key: "host",
        tooltip: "Check this to remove host only characters"
    }
];

dataSet.characterData = [
    {
        name: "Blocky",
        img: "blocky.png",
        opts: {
            season: ["bfdi", "bfb"],
            team: ["sc", "sg", "abntt"],
        },
    },
    {
        name: "Bubble",
        img: "bubble.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sc", "freesmart", "iance"],
        },
    },
    {
        name: "Coiny",
        img: "coiny.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sg", "wb", "losers"],
        },
    },
    {
        name: "David",
        img: "david.png",
        opts: {
            season: ["bfdi", "bfb"],
            team: ["beep"],
        },
    },
    {
        name: "Eraser",
        img: "eraser.png",
        opts: {
            season: ["bfdi", "bfb"],
            team: ["sc", "ff"],
        },
    },
    {
        name: "Firey",
        img: "firey.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sc", "sg", "an", "nn", "losers"],
        },
    },
    {
        name: "Flower",
        img: "flower.png",
        opts: {
            season: ["bfdi", "bfb"],
            team: ["sg", "iance"],
        },
    },
    {
        name: "Golf Ball",
        img: "golfball.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sc", "an", "nn", "abntt"],
        },
    },
    {
        name: "Ice Cube",
        img: "icecube.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sg", "nn", "fs", "bleh"],
        },
    },
    {
        name: "Leafy",
        img: "leafy.png",
        opts: {
            season: ["bfdi", "bfb"],
            team: ["sg", "beep"],
        },
    },
    {
        name: "Match",
        img: "match.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sc", "nn", "fs", "iance"],
        },
    },
    {
        name: "Needle",
        img: "needle.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sg", "nn", "wb", "losers"],
        },
    },
    {
        name: "Pen",
        img: "pen.png",
        opts: {
            season: ["bfdi", "bfb"],
            team: ["sc", "dpact"],
        },
    },
    {
        name: "Pencil",
        img: "pencil.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sc", "fs", "iance"],
        },
    },
    {
        name: "Pin",
        img: "pin.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sc", "wb", "losers"],
        },
    },
    {
        name: "Rocky",
        img: "rocky.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sc", "sg", "an", "nn", "beep"],
        },
    },
    {
        name: "Snowball",
        img: "snowball.png",
        opts: {
            season: ["bfdi", "bfb"],
            team: ["sc", "sg", "iance"],
        },
    },
    {
        name: "Spongy",
        img: "spongy.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sc", "nn", "wb", "tic"],
        },
    },
    {
        name: "Teardrop",
        img: "teardrop.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sg", "nn", "wb", "bleh"],
        },
    },
    {
        name: "Tennis Ball",
        img: "tennisball.png",
        opts: {
            season: ["bfdi", "bfdia", "bfb"],
            team: ["sg", "an", "nn", "abntt"],
        },
    },
    {
        name: "Woody",
        img: "woody.png",
        opts: {
            season: ["bfdi", "bfb"],
            team: ["sc", "beep"],
        },
    },
    {
        name: "Announcer",
        img: "announcer.png",
        opts: {
            season: ["bfdi"],
            host: true
        },
    },
    {
        name: "Firey Speaker Box",
        img: "fireybox.png",
        opts: {
            season: ["bfdi", "bfdia"],
            host: true
        },
    },
    {
        name: "Flower Speaker Box",
        img: "flowerbox.png",
        opts: {
            season: ["bfdi"],
            host: true
        },
    },
    {
        name: "Bomby",
        img: "bomby.png",
        opts: {
            season: ["bfdia", "bfb"],
            team: ["wb", "tic"],
        },
    },
    {
        name: "Book",
        img: "book.png",
        opts: {
            season: ["bfdia", "bfb"],
            team: ["nn", "fs", "bleh"],
        },
    },
    {
        name: "Donut",
        img: "donut.png",
        opts: {
            season: ["bfdia", "bfb"],
            team: ["wb", "tic"],
        },
    },
    {
        name: "Dora",
        img: "dora.png",
        opts: {
            season: ["bfdia", "bfb"],
            team: ["nn", "bleh"],
        },
    },
    {
        name: "Fries",
        img: "fries.png",
        opts: {
            season: ["bfdia", "bfb"],
            team: ["nn", "ff"],
        },
    },
    {
        name: "Gelatin",
        img: "gelatin.png",
        opts: {
            season: ["bfdia", "bfb"],
            team: ["nn", "tic"],
        },
    },
    {
        name: "Nickel",
        img: "nickel.png",
        opts: {
            season: ["bfdia", "bfb"],
            team: ["wb", "beep"],
        },
    },
    {
        name: "Puffball",
        img: "puffball.png",
        opts: {
            season: ["bfdia", "bfb"],
            team: ["nn", "ff"],
        },
    },
    {
        name: "Yellow Face",
        img: "yellowface.png",
        opts: {
            season: ["bfdia", "bfb"],
            team: ["wb", "nn", "ff"],
        },
    },
    {
        name: "TV",
        img: "tv.png",
        opts: {
            season: ["bfdia", "bfb"],
            team: ["abntt"],
        },
    },
    {
        name: "Puffball Speaker Box",
        img: "puffballbox.png",
        opts: {
            season: ["bfdia"],
            host: true
        },
    },
    {
        name: "Four",
        img: "four.png",
        opts: {
            season: ["bfb"],
            host: true
        },
    },
    {
        name: "X",
        img: "x.png",
        opts: {
            season: ["bfb"],
            host: true
        },
    },
    {
        name: "8 Ball",
        img: "8ball.png",
        opts: {
            season: ["bfb"],
            team: ["abntt"]
        },
    },
    {
        name: "Balloony",
        img: "balloony.png",
        opts: {
            season: ["bfb"],
            team: ["beep"]
        },
    },
    {
        name: "Barf Bag",
        img: "barfbag.png",
        opts: {
            season: ["bfb"],
            team: ["tic"]
        },
    },
    {
        name: "Basketball",
        img: "basketball.png",
        opts: {
            season: ["bfb"],
            team: ["abntt"]
        },
    },
    {
        name: "Bell",
        img: "bell.png",
        opts: {
            season: ["bfb"],
            team: ["ff"]
        },
    },
    {
        name: "Black Hole",
        img: "blackhole.png",
        opts: {
            season: ["bfb"],
            team: ["dpact"]
        },
    },
    {
        name: "Bottle",
        img: "bottle.png",
        opts: {
            season: ["bfb"],
            team: ["dpact"]
        },
    },
    {
        name: "Bracelety",
        img: "bracelety.png",
        opts: {
            season: ["bfb"],
            team: ["tic"]
        },
    },
    {
        name: "Cake",
        img: "cake.png",
        opts: {
            season: ["bfb"],
            team: ["losers"]
        },
    },
    {
        name: "Clock",
        img: "clock.png",
        opts: {
            season: ["bfb"],
            team: ["losers"]
        },
    },
    {
        name: "Cloudy",
        img: "cloudy.png",
        opts: {
            season: ["bfb"],
            team: ["beep"]
        },
    },
    {
        name: "Eggy",
        img: "eggy.png",
        opts: {
            season: ["bfb"],
            team: ["losers"]
        },
    },
    {
        name: "Fanny",
        img: "fanny.png",
        opts: {
            season: ["bfb"],
            team: ["iance"]
        },
    },
    {
        name: "Firey Jr.",
        img: "fireyjr.png",
        opts: {
            season: ["bfb"],
            team: ["tic"]
        },
    },
    {
        name: "Foldy",
        img: "foldy.png",
        opts: {
            season: ["bfb"],
            team: ["ff"]
        },
    },
    {
        name: "Gaty",
        img: "gaty.png",
        opts: {
            season: ["bfb"],
            team: ["bleh"]
        },
    },
    {
        name: "Grassy",
        img: "grassy.png",
        opts: {
            season: ["bfb"],
            team: ["abntt"]
        },
    },
    {
        name: "Lightning",
        img: "lightning.png",
        opts: {
            season: ["bfb"],
            team: ["iance"]
        },
    },
    {
        name: "Liy",
        img: "liy.png",
        opts: {
            season: ["bfb"],
            team: ["dpact"]
        },
    },
    {
        name: "Lollipop",
        img: "lollipop.png",
        opts: {
            season: ["bfb"],
            team: ["bleh"]
        },
    },
    {
        name: "Loser",
        img: "loser.png",
        opts: {
            season: ["bfb"],
            team: ["losers"]
        },
    },
    {
        name: "Marker",
        img: "marker.png",
        opts: {
            season: ["bfb"],
            team: ["ff"]
        },
    },
    {
        name: "Naily",
        img: "naily.png",
        opts: {
            season: ["bfb"],
            team: ["tic"]
        },
    },
    {
        name: "Pie",
        img: "pie.png",
        opts: {
            season: ["bfb"],
            team: ["dpact"]
        },
    },
    {
        name: "Pillow",
        img: "pillow.png",
        opts: {
            season: ["bfb"],
            team: ["dpact"]
        },
    },
    {
        name: "Remote",
        img: "remote.png",
        opts: {
            season: ["bfb"],
            team: ["dpact"]
        },
    },
    {
        name: "Robot Flower",
        img: "robotflower.png",
        opts: {
            season: ["bfb"],
            team: ["abntt"]
        },
    },
    {
        name: "Roboty",
        img: "roboty.png",
        opts: {
            season: ["bfb"],
            team: ["beep"]
        },
    },
    {
        name: "Saw",
        img: "saw.png",
        opts: {
            season: ["bfb"],
            team: ["bleh"]
        },
    },
    {
        name: "Stapy",
        img: "stapy.png",
        opts: {
            season: ["bfb"],
            team: ["ff"]
        },
    },
    {
        name: "Taco",
        img: "taco.png",
        opts: {
            season: ["bfb"],
            team: ["bleh"]
        },
    },
    {
        name: "Tree",
        img: "tree.png",
        opts: {
            season: ["bfb"],
            team: ["dpact"]
        },
    },
    {
        name: "TV",
        img: "tv.png",
        opts: {
            season: ["bfb"],
            team: ["abntt"]
        },
    },
];

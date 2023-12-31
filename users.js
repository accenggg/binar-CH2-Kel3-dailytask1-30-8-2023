const users = [
    {
      "_id": "64f08cf553157ae9f9472293",
      "name": "Mcmillan Patel",
      "eyeColor": "green",
      "age": 30,
      "balance": "$2,548.14",
      "gender": "male",
      "company": "ZAYA",
      "email": "mcmillanpatel@zaya.com",
      "phone": "+1 (949) 440-2055",
      "address": "500 Polar Street, Coalmont, District Of Columbia, 9263",
      "registered": "2020-09-21T07:49:09 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Adella"
        },
        {
          "id": 1,
          "name": "Grace"
        },
        {
          "id": 2,
          "name": "Grace"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "_id": "64f08cf544aa3ded8f98b2b9",
      "name": "Bruce Hale",
      "eyeColor": "green",
      "age": 37,
      "balance": "$2,585.67",
      "gender": "male",
      "company": "PURIA",
      "email": "brucehale@puria.com",
      "phone": "+1 (872) 575-3744",
      "address": "547 Plaza Street, Brewster, Virginia, 6522",
      "registered": "2014-06-28T04:44:47 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Imam"
        },
        {
          "id": 1,
          "name": "Irfi"
        },
        {
          "id": 2,
          "name": "Alim"
        }
      ],
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "64f08cf53f958000ce8feb92",
      "name": "Christa Gilliam",
      "eyeColor": "green",
      "age": 30,
      "balance": "$1,502.24",
      "gender": "female",
      "company": "EYEWAX",
      "email": "christagilliam@eyewax.com",
      "phone": "+1 (906) 413-2221",
      "address": "901 Cheever Place, Twilight, Virgin Islands, 4560",
      "registered": "2017-08-21T11:43:00 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Adrian"
        },
        {
          "id": 1,
          "name": "Grace"
        },
        {
          "id": 2,
          "name": "Adrian"
        }
      ],
      "favoriteFruit": "apple"
    },
    {
      "_id": "64f08cf557094858169c511c",
      "name": "Leticia Dean",
      "eyeColor": "brown",
      "age": 28,
      "balance": "$1,568.33",
      "gender": "female",
      "company": "TROPOLIS",
      "email": "leticiadean@tropolis.com",
      "phone": "+1 (850) 471-3012",
      "address": "306 Guider Avenue, Stouchsburg, Delaware, 4773",
      "registered": "2020-08-22T06:45:34 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Irfi"
        },
        {
          "id": 1,
          "name": "Adrian"
        },
        {
          "id": 2,
          "name": "Irfi"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "_id": "64f08cf55b9af56ba1c3016f",
      "name": "Taylor Stark",
      "eyeColor": "blue",
      "age": 37,
      "balance": "$3,769.31",
      "gender": "female",
      "company": "CINESANCT",
      "email": "taylorstark@cinesanct.com",
      "phone": "+1 (898) 471-3683",
      "address": "912 Duryea Place, Grill, Michigan, 5376",
      "registered": "2014-08-08T04:27:26 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Adella"
        },
        {
          "id": 1,
          "name": "Adrian"
        },
        {
          "id": 2,
          "name": "Irfi"
        }
      ],
      "favoriteFruit": "apple"
    },
    {
      "_id": "64f08cf55c62af60ef703550",
      "name": "Tanisha Head",
      "eyeColor": "brown",
      "age": 40,
      "balance": "$1,812.73",
      "gender": "female",
      "company": "ISOTERNIA",
      "email": "tanishahead@isoternia.com",
      "phone": "+1 (862) 457-3493",
      "address": "844 Homecrest Court, Gibsonia, Indiana, 4362",
      "registered": "2016-06-20T03:05:10 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Grace"
        },
        {
          "id": 1,
          "name": "Alim"
        },
        {
          "id": 2,
          "name": "Alim"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "_id": "64f08cf599baeb5e4edb739d",
      "name": "Harriet Benjamin",
      "eyeColor": "brown",
      "age": 22,
      "balance": "$2,543.16",
      "gender": "female",
      "company": "COMSTRUCT",
      "email": "harrietbenjamin@comstruct.com",
      "phone": "+1 (976) 499-2507",
      "address": "170 Linden Street, Kohatk, Minnesota, 9702",
      "registered": "2016-10-28T11:33:57 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Adella"
        },
        {
          "id": 1,
          "name": "Adella"
        },
        {
          "id": 2,
          "name": "Adrian"
        }
      ],
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "64f08cf540ddfd5af58aa695",
      "name": "Clay Wade",
      "eyeColor": "green",
      "age": 35,
      "balance": "$2,275.22",
      "gender": "male",
      "company": "AQUAFIRE",
      "email": "claywade@aquafire.com",
      "phone": "+1 (871) 493-3026",
      "address": "530 Highlawn Avenue, Madrid, American Samoa, 5532",
      "registered": "2018-02-28T09:58:43 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Irfi"
        },
        {
          "id": 1,
          "name": "Adella"
        },
        {
          "id": 2,
          "name": "Adrian"
        }
      ],
      "favoriteFruit": "banana"
    },
    {
      "_id": "64f08cf517ea292688e48b1a",
      "name": "Rena Hinton",
      "eyeColor": "blue",
      "age": 29,
      "balance": "$3,315.33",
      "gender": "female",
      "company": "TECHADE",
      "email": "renahinton@techade.com",
      "phone": "+1 (972) 441-3036",
      "address": "830 Micieli Place, Vowinckel, Idaho, 3314",
      "registered": "2019-12-17T03:13:24 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Adrian"
        },
        {
          "id": 1,
          "name": "Alim"
        },
        {
          "id": 2,
          "name": "Alim"
        }
      ],
      "favoriteFruit": "banana"
    }
  ]

module.exports = users
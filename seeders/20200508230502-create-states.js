'use strict';

const states = [  
  {  
     "name":"Alabama",
     "lat":32.7794,
     "lon":-86.8287,
     "zoom":5
  },
  {  
     "name":"Alaska",
     "lat":64.0685,
     "lon":-152.2782,
     "zoom":3
  },
  {  
     "name":"Arizona",
     "lat":34.2744,
     "lon":-111.6602,
     "zoom":5
  },
  {  
     "name":"Arkansas",
     "lat":34.8938,
     "lon":-92.4426,
     "zoom":5
  },
  {  
     "name":"California",
     "lat":37.1841,
     "lon":-119.4696,
     "zoom":5
  },
  {  
     "name":"Colorado",
     "lat":38.9972,
     "lon":-105.5478,
     "zoom":5
  },
  {  
     "name":"Connecticut",
     "lat":41.6219,
     "lon":-72.7273,
     "zoom":7
  },
  {  
     "name":"Delaware",
     "lat":38.9896,
     "lon":-75.505,
     "zoom":7
  },
  {  
     "name":"Washington DC",
     "lat":38.9101,
     "lon":-77.0147,
     "zoom":7
  },
  {  
     "name":"Florida",
     "lat":28.6305,
     "lon":-82.4497,
     "zoom":5
  },
  {  
     "name":"Georgia",
     "lat":32.6415,
     "lon":-83.4426,
     "zoom":5
  },
  {  
     "name":"Hawaii",
     "lat":20.2927,
     "lon":-156.3737,
     "zoom":7
  },
  {  
     "name":"Idaho",
     "lat":44.3509,
     "lon":-114.613,
     "zoom":5
  },
  {  
     "name":"Illinois",
     "lat":40.0417,
     "lon":-89.1965,
     "zoom":5
  },
  {  
     "name":"Indiana",
     "lat":39.8942,
     "lon":-86.2816,
     "zoom":5
  },
  {  
     "name":"Iowa",
     "lat":42.0751,
     "lon":-93.496,
     "zoom":5
  },
  {  
     "name":"Kansas",
     "lat":38.4937,
     "lon":-98.3804,
     "zoom":5
  },
  {  
     "name":"Kentucky",
     "lat":37.5347,
     "lon":-85.3021,
     "zoom":5
  },
  {  
     "name":"Louisiana",
     "lat":31.0689,
     "lon":-91.9968,
     "zoom":5
  },
  {  
     "name":"Maine",
     "lat":45.3695,
     "lon":-69.2428,
     "zoom":6
  },
  {  
     "name":"Maryland",
     "lat":39.055,
     "lon":-76.7909,
     "zoom":7
  },
  {  
     "name":"Massachusetts",
     "lat":42.2596,
     "lon":-71.8083,
     "zoom":6
  },
  {  
     "name":"Michigan",
     "lat":44.3467,
     "lon":-85.4102,
     "zoom":5
  },
  {  
     "name":"Minnesota",
     "lat":46.2807,
     "lon":-94.3053,
     "zoom":5
  },
  {  
     "name":"Mississippi",
     "lat":32.7364,
     "lon":-89.6678,
     "zoom":5
  },
  {  
     "name":"Missouri",
     "lat":38.3566,
     "lon":-92.458,
     "zoom":5
  },
  {  
     "name":"Montana",
     "lat":47.0527,
     "lon":-109.6333,
     "zoom":5
  },
  {  
     "name":"Nebraska",
     "lat":41.5378,
     "lon":-99.7951,
     "zoom":5
  },
  {  
     "name":"Nevada",
     "lat":39.3289,
     "lon":-116.6312,
     "zoom":5
  },
  {  
     "name":"New Hampshire",
     "lat":43.6805,
     "lon":-71.5811,
     "zoom":5
  },
  {  
     "name":"New Jersey",
     "lat":40.1907,
     "lon":-74.6728,
     "zoom":5
  },
  {  
     "name":"New Mexico",
     "lat":34.4071,
     "lon":-106.1126,
     "zoom":5
  },
  {  
     "name":"New York",
     "lat":42.9538,
     "lon":-75.5268,
     "zoom":5
  },
  {  
     "name":"North Carolina",
     "lat":35.5557,
     "lon":-79.3877,
     "zoom":5
  },
  {  
     "name":"North Dakota",
     "lat":47.4501,
     "lon":-100.4659,
     "zoom":5
  },
  {  
     "name":"Ohio",
     "lat":40.2862,
     "lon":-82.7937,
     "zoom":5
  },
  {  
     "name":"Oklahoma",
     "lat":35.5889,
     "lon":-97.4943,
     "zoom":5
  },
  {  
     "name":"Oregon",
     "lat":43.9336,
     "lon":-120.5583,
     "zoom":5
  },
  {  
     "name":"Pennsylvania",
     "lat":40.8781,
     "lon":-77.7996,
     "zoom":5
  },
  {  
     "name":"Rhode Island",
     "lat":41.6762,
     "lon":-71.5562,
     "zoom":7
  },
  {  
     "name":"South Carolina",
     "lat":33.9169,
     "lon":-80.8964,
     "zoom":5
  },
  {  
     "name":"South Dakota",
     "lat":44.4443,
     "lon":-100.2263,
     "zoom":5
  },
  {  
     "name":"Tennessee",
     "lat":35.858,
     "lon":-86.3505,
     "zoom":5
  },
  {  
     "name":"Texas",
     "lat":31.4757,
     "lon":-99.3312,
     "zoom":5
  },
  {  
     "name":"Utah",
     "lat":39.3055,
     "lon":-111.6703,
     "zoom":5
  },
  {  
     "name":"Vermont",
     "lat":44.0687,
     "lon":-72.6658,
     "zoom":6
  },
  {  
     "name":"Virginia",
     "lat":37.5215,
     "lon":-78.8537,
     "zoom":5
  },
  {  
     "name":"Washington",
     "lat":47.3826,
     "lon":-120.4472,
     "zoom":5
  },
  {  
     "name":"West Virginia",
     "lat":38.6409,
     "lon":-80.6227,
     "zoom":5
  },
  {  
     "name":"Wisconsin",
     "lat":44.6243,
     "lon":-89.9941,
     "zoom":5
  },
  {  
     "name":"Wyoming",
     "lat":42.9957,
     "lon":-107.5512,
     "zoom":5
  }
]
// Up is for seeding a database, down is for reverting it, so deleting all the data
// for every row, the statesDates will add the created and uploaded data as well.
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var statesDates = states.map(function(s) { 
      s.visited = false; 
      s.createdAt = new Date(), 
      s.updatedAt = new Date()
      return s 
    })
    
    return queryInterface.bulkInsert('States', statesDates, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('States', null, {});

  }
};

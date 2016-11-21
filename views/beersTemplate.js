const require = require('superagent');
const html = require('yo-yo')


function getBeers() => {
  .get(https://rogue-beers.herokuapp.com/api/v1/beers)
  .end(err, res) {
    if (err) console.log(err)
    dispatch({type: 'ADD_BEERS', payload: res.body.beers})
  }
}

module.exports = beers

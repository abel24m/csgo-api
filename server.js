const express = require('express')
const app = express()
const {HLTV} = require ('hltv')


app.listen(3000, function(){
  console.log("Server started on port 3000");
}); /*() => console.log('Example app listening on port 3000!'))*/


app.get('/', function(req, res) {
  var formatted;
  HLTV.getMatches().then((result) =>{
    res.send(result)
  })
  return res
})

app.get('/player', function(req, res) {
  var name = req.query.name;
  HLTV.getPlayerByName({name: name}).then((data) => {
    res.send(data)
  })
  return res
})

app.get('/team', function(req, res) {
  var teamid = req.query.teamid;
  HLTV.getTeam({id: teamid}).then((team) => {
    res.send(team)
  })
  return res
})

app.get('/match', function(req, res) {
  var matchid = req.query.matchid;
  console.log(matchid);
  HLTV.getMatch({id: matchid}).then((match) => {
    console.log(match);
    res.send(match)
  })
  return res
})

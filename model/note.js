var path=require('path')
var Sequelize=require('sequelize')

var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  // storage: '../database/database.sqlite'
  storage: path.join(__dirname,'../database/database.sqlite')
});


const Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  }
});

//add
// Note.sync().then(() => {
//   Note.create({text:'hello world'})
// }).then(function(){
// 	Note.findAll({raw:true}).then(function(notes){
// 		console.log(notes)
// 	})
// })
//查询
Note.findAll({raw:true,where:{id:2}}).then(function(notes){
	console.log(notes)
})
module.exports.Note=Note
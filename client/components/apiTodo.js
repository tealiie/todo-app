import request from 'superagent'

export default {
  getTaskdo:getTaskdo
}

function getTaskdo(callback){
  request
   .get('http://localhost:3000/v1/tasks')
   .end((err, res) => {
     if(!err){
       callback(null, res.body)
     } else {
       callback(err)
     }
   })
 }

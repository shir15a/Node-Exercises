const e = require("express");
const express = require("express");
const router = express.Router();

const workersJson = require("../Workers.json");
let workers = workersJson.workers;

router.get("/", (req, res) => {
  return res.status(200).json({ workers: workers });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  return res.status(200).json({
    workers: workers.filter((worker) => worker.id === id)[0],
  });
});

router.post("/", (req, res) => {
  const isActive = 'false';
  const { name, id } = req.body;
  let result = workers.find((w)=>{
    return w.id === id
  })
  if(!name || !id){
    return res.status(200).json({error: 'enter id and name'})
  }
  else if(name.length < 6 || !name.includes(' ')){
    return res.status(200).json({error: 'name less than 6 chars and without space'})

  }
  else if(result){
    return res.status(200).json({error: 'exist'})
  }
  workers.push({ name, id, isActive });
  console.log(workers);

});


module.exports = router;


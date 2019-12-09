const express = require('express');
const router = express.Router();
const members = require('../../members');

// get all the members
router.get('/',(req,res)=>  {
    res.json(members);

});

// get the selected member
router.get('/:id' ,(req,res) => {
    // some is similar to filter but gives true or false
    const found = members.some(item => item.id ===parseInt(req.params.id));
    if(found){
        res.json(
            members.filter( item => item.id === parseInt(req.params.id) )
        );  
    }
    else{
        res.status(400).json({ msg: `No member with the id of ${req.params.id} `  })
    }
  
} );
module.exports = router
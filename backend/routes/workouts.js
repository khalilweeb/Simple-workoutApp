const express = require('express');


const router = express.Router();
// get all workouts
router.get('/', (req, res) => {
    // req.body;
    res.json({msg: 'GET all workouts'})

});

//get a single workout
router.get('/:id' , (req , res) => {
    res.json({msg : 'get a single workout'});
});

//Post a ne workout 

router.post('/' , (req , res ) => {
    res.json({msg:'Post a new workout'});
})

//Delete a ne workout 

router.delete('/:id' , (req , res ) => {
    res.json('delete workout');
})

//Update a ne workout 

router.patch('/:id' , (req , res ) => {
    res.json('update  a  workout');
})


module.exports = router
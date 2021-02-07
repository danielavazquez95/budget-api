const router = require('express').Router();
const { Operation } = require('../../db'); 

router.get('/:userId', async (req, res) => {
    const operations = await Operation.findAll({
        where: {userId : req.params.userId },
        order : [ 
            [ 'createdAt' ,  'desc' ] 
          ] 
    });
    res.json(operations);
});

router.post('/', async (req, res) => {
    const operation = await Operation.create(req.body);
    res.json(operation);
});

router.put('/:operationId', async (req,res) => {
    await Operation.update(req.body, {
        where: {id: req.params.operationId}
    });
    res.json({success: 'It was modified'})
});

router.delete('/:operationId', async (req, res) => {
    await Operation.destroy({
        where: {id: req.params.operationId}
    });
    res.json({success: 'It was deleted'})
});

module.exports = router;


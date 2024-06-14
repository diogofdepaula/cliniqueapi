const express = require('express')
const router = express.Router();

const atendimentoscontroller = require('../controllers/atendimentoscontroller');

router.post('/atendimentos', atendimentoscontroller.Insert);
router.get('/atendimentos/all', atendimentoscontroller.SearchAll);
router.get('/atendimentos/:id', atendimentoscontroller.SearchOne);
router.put('/atendimentos/:id', atendimentoscontroller.Update);
router.delete('/atendimentos/:id', atendimentoscontroller.Delete);

module.exports = router;
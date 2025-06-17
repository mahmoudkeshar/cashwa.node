import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('disease route works!');
});

export default router;

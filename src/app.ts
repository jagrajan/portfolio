import express from 'express';

const app: Express.Application = express();

app.set('port', process.env.PORT || 3000);

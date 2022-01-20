import { Request, Response } from 'express';
import { sequelize } from '../instances/pg';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    res.render('pages/home')
}

export const users = async (req: Request, res: Response)=>{
    res.send('deu certo')
}
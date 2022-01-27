import { Request, Response } from 'express';
import { User } from '../models/User';
import { sequelize } from '../instances/pg';

export const home = async (req: Request, res: Response)=>{
    res.redirect('/cadastro')
}

export const register = async (req: Request, res: Response)=>{
    res.render('pages/home')
}

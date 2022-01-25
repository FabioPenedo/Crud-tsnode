import { Request, Response } from 'express';
import { User } from '../models/User';
import { Op } from 'sequelize';

export const search = async (req: Request, res: Response) => {
    let query: string = req.query.search as string
    if(!query){
        res.redirect('/usuarios')
    }
    let nameUpperCase = query.charAt(0).toUpperCase() + query.slice(1)
    let usersSearch = await User.findAll({
        where: {
            name: {
                [Op.like]: `%${nameUpperCase}%`
            }
        },
        order:[
            ['name', 'ASC']
        ]
    })

    res.render('pages/users', {
        usersSearch,
        query
    })
}
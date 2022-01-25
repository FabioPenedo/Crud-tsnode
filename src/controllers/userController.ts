import { Request, Response } from 'express';
import { User } from '../models/User';


export const users = async (req: Request, res: Response)=>{
    let usersList = await User.findAll({
        attributes: ['name', 'email', 'age', 'id']
    })
    res.render('pages/users', {
        usersList
    })
}

export const newUser = async (req: Request, res: Response)=>{
    type UserQuery = {
        email: string,
        name: string,
        age: string
    }
    const {email, name, age}: UserQuery = req.body
    if(name){
        let nameUpperCase = name[0].toUpperCase() + name.slice(1)
        const userInsert = User.build({
            email: email,
            name: nameUpperCase,
            age: undefined
        })
        if(age){
            userInsert.age = parseInt(age)
        }
        await userInsert.save()
    }
    res.redirect('/usuarios')
}

export const editUser = async (req: Request, res: Response)=>{
    const id: string = req.params.id
    let conditional = {
        where: {
            id: id
        }
    }
    const userResults = await User.findAll(conditional)
    if(userResults.length > 0){
        let user = userResults[0]
    }
    res.render('pages/editUser', {
        userResults
    })
}

export const newEditUser = async (req: Request, res: Response)=>{
    type UserQuery = {
        email: string,
        name: string,
        age: string
    }
    const {email, name, age}: UserQuery = req.body
    let conditional = {
        where: {
            id: req.params.id
        }
    }
    const userResults = await User.findAll(conditional)
    if(userResults.length > 0){
        let nameUpperCase = name[0].toUpperCase() + name.slice(1)
        let user = userResults[0]
        user.email = email,
        user.name = nameUpperCase
        user.age = parseInt(age)
        await user.save()
    }
    res.redirect('/usuarios')
}

export const deleteUser = async (req: Request, res: Response)=>{
    await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/usuarios')
}
import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export default function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Joao',
        email: 'eliandrogermano@gmail.com',
        password: '12345678',
        techs: [
            "Node",
            "React",
            "React Native",
            { title: 'Javascript', experience: 100 },
        ],
    });

    return response.json(user);
}

interface TechDescription {
    title: string;
    experience: number;
}

interface UserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechDescription>
}

export default function createUser({ name = '', email, password, techs }: UserData) {
    const user = {
        name,
        email,
        password,
        techs
    };

    return user;
}
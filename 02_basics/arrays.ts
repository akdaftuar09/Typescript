const SuperHeroes: string[] = [];
const heroAbilities: Array<number> = [];

type User = {
    name: string;
    isActive: boolean;
};
const usersList: User[] = [];

const MLModels: number[][] = [
    [225, 255, 225],
    [100, 200, 300] // Added data to the second array
];

// Fixed the empty name issue
usersList.push({ name: "John Doe", isActive: true });
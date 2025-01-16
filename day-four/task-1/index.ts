async function cleanUserData(users: { name: string; email: string; isActive: boolean }[]): Promise<any[]> {
    if (Math.random() < 0.1) {
        throw new Error("Случайная ошибка при обработке данных"); 
    }

    return users
        .filter(user => user.isActive) 
        .map(user => {
            return {
                name: user.name.trim().toLowerCase(), 
                email: user.email.toLowerCase(), 
                isActive: user.isActive
            };
        });
}


const users = [
    { name: "    ВИКА ", email: "Vikaluk@puk.com", isActive: true },
    { name: "Ксю", email: "ksu@pik.com", isActive: false }
];

(async () => {
    try {
        const cleanedUsers = await cleanUserData(users);
        console.log(cleanedUsers);
    } catch (error) {
        console.error("Ошибка");
    }
})();

const giveRole = (user) => {
    try {
        const userRoles = user.roles.cache.map(role => role.name);
    
        // A remplacer le string quand on pourra récupérer l'info
        const wantedRole = user.guild.roles.cache.find(r => r.name === "basique");;
    
        if (!userRoles.includes(wantedRole)) {
            user.roles.add(wantedRole);
        }
    } catch (error) {
        console.log(error);
    }
}

const removeRole = () => {
    const user = message.member;
    const userRoles = user.roles.cache.map(role => role.name);

    // A remplacer le string quand on pourra récupérer l'info
    const unwantedRole = message.guild.roles.cache.find(r => r.name === "basique");;

    if (userRoles.includes(unwantedRole)) {
        user.roles.remove(unwantedRole);
    }
}

export { giveRole, removeRole };
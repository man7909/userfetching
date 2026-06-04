const getUser = async () => {
    const user = await Promise.resolve({
        name: "Riya"
    });

    console.log(user);
};

module.exports = getUser;
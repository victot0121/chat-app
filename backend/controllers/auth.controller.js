import User from "../models/user.models.js";


export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        console.log(req.body);


        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({ userName }); 

        console.log(user);

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        console.log(newUser);

        await newUser.save();

        return res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        });

    } catch (error) {
        console.log("Error in signup controller ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const login = (req, res) => {
    console.log("signup ROUTE")
}



export const Logout = (req, res) => {

    console.log("Logout ROUTE")
}
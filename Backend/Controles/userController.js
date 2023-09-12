import User from "../models/UserSchema.js";




export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updateUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Succesfully updated", data: updateUser });


    } catch (err) {
        res.status(500).json({ success: false, message: "failed to update" })


    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdDelete(id,);

        res.status(200).json({ success: true, message: "Succesfully Deleted" })


    } catch (err) {
        res.status(404).json({ success: false, message: "failed to delete" })

    }
}


export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id,).select('-password');

        res.status(200).json({ success: true, message: "User Found", data: user })


    } catch (err) {
        res.status(404).json({ success: false, message: "Not user found" })

    }
}


export const getAllUser = async (req, res) => {

    try {
        const users = await User.findById({}).select('-password');

        res.status(200).json({ success: true, message: "User Found", data: users })


    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found" })

    }
}
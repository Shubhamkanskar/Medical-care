import Doctor from "../models/DoctorSchema.js";




export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Succesfully updated", data: updateDoctor });


    } catch (err) {
        res.status(500).json({ success: false, message: "failed to update" })


    }
}


export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(id);

        if (!deletedDoctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        res.status(204).send(); // 204 No Content on successful deletion
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to delete doctor" });
    }
}



export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id)
            .populate("reviews")
            .select('-password');

        res.status(200).json({
            success: true,
            message: "Doctor Found",
            data: doctor,
        })


    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not Doctor found"
        })

    }
}


export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: 'approved',
                $or: [
                    { name: { $regex: query, $options: 'i' } },
                    { specialization: { $regex: query, $options: 'i' } },
                ],
            }).select('-password');
        } else {
            doctors = await Doctor.find({ isApproved: 'approved' }).select('-password');
        }

        if (!doctors || doctors.length === 0) {
            return res.status(404).json({ success: false, message: 'No doctors found' });
        }

        res.status(200).json({ success: true, message: 'Doctors found', data: doctors });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

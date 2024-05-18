const treatments = require('./treatmentModel')

exports.addtreatments = async (req, res) => {
    console.log("control inside treatment control");
    const { therapy, rate, duration, oils, image } = req.body
    console.log({ therapy, rate, duration, oils, image });

    try {
        const updatedtreatment = await treatments.findOne({ therapy })
        if (updatedtreatment) {
            res.status(406).json("Treatment Already Updated")
        }
        else {
            const newtreatment = new treatments({
                therapy, rate, duration, oils, image
            })
            await newtreatment.save()
            res.status(200).json(newtreatment)
        }

    } catch (err) {
        res.status(401).json(err)
    }
}

// get treatments

exports.gettreatments = async (req, res) => {
    try {
        const alltreatments = await treatments.find()
        res.status(200).json(alltreatments)
    } catch (err) {
        res.status(401).json(err)
    }
}
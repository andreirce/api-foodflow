import { Donation } from "../models/Donation.model.js"


export const createDonation = async (req, res) => {

    try {

        const { date_donation, validity, type_food, quantity, donor_id, request_id } = req.body

        await Donation.sync()

        const newDonation = await Donation.create({ date_donation, validity, type_food, quantity, donor_id, request_id })
        return res.status(201).json({ newDonation })

    } catch (error) {
        return res.status(400).json({ messageError: error.message })

    }

}

export const getAllDonation = async (req, res) => {

    try {

        const donations = await Donation.findAll()

        return res.status(200).json({ donations })

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }

}

export const deleteDonation = async (req, res) => {

    try {

        const { donation_id } = req.params;

        await Donation.destroy({
            where: {
                donation_id
            }
        })

        return res.status(200).json({ message: 'Doação deletado com sucesso' });

    } catch (error) {

        return res.status(400).json({ messageError: error.message });
    }

}

export const updateDonation = async (req, res) => {
    const { donation_id } = req.params;
    const { date_donation, validity, type_food, quantity } = req.body;

    await Donation.update({ date_donation, validity, type_food, quantity }, {
        where: {
            donation_id
        }
    })

    return res.status(200).json({ message: 'Doação editado com sucesso' });
}

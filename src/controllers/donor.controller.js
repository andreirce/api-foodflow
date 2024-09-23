import { Donor } from "../models/Donor.model.js"

export const createDonor = async (req, res) => {

    try {

        const { name, email, password, cnpj, category, phone, address_id } = req.body

        await Donor.sync()

        const newDonor = await Donor.create({ name, email, password, cnpj, category, phone, address_id })
        return res.status(201).json({ newDonor })

    } catch (error) {
        return res.status(400).json({ messageError: error.message })

    }

}

export const uploadImageDonor = async (req, res) => {

    try {


        if (!req.file) {
            return res.status(400).json({ messageError: 'Imagem não encontrada, envie uma imagem válida.' });
        }

        const { donor_id } = req.params
        const image = `/uploads/${req.file.filename}`

        await Donor.update({ image }, { where: { donor_id } });

        return res.status(200).json({ message: 'Imagem enviada e associada ao usuário com sucesso', image });
    } catch (error) {
        return res.status(500).json({ messageError: error.message });
    }

}

export const getAllDonor = async (req, res) => {

    try {

        const donors = await Donor.findAll({
            attributes: { exclude: ['password'] }
        })

        return res.status(200).json({ donors })

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }

}

export const deleteDonor = async (req, res) => {

    try {

        const { donor_id } = req.params;

        await Donor.destroy({
            where: {
                donor_id
            }
        })

        return res.status(200).json({ message: 'Doador deletado com sucesso' });

    } catch (error) {

        return res.status(400).json({ messageError: error.message });
    }

}

export const updateDonor = async (req, res) => {
    const { donor_id } = req.params;
    const { name, email, password, cnpj, category, phone } = req.body;

    await Donor.update({ name, email, password, cnpj, category, phone, }, {
        where: {
            donor_id
        }
    })

    return res.status(200).json({ message: 'Doador editado com sucesso' });
}
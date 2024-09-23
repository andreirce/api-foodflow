import { Address } from "../models/Address.model.js"


export const createAddress = async (req, res) => {

    try {

        const { street, number, neighborhood, complement, city, state, country } = req.body

        await Address.sync()

        const newAddress = await Address.create({  street, number, neighborhood, complement, city, state, country })
        return res.status(201).json({ newAddress })

    } catch (error) {
        return res.status(400).json({ messageError: error.message })

    }

}

export const getAllAddress = async (req, res) => {

    try {

        const addresses = await Address.findAll()

        return res.status(200).json({ addresses })

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }

}

export const deleteAddress = async (req, res) => {

    try {

        const { address_id } = req.params;

        await Address.destroy({
            where: {
                address_id
            },
        })

        return res.status(200).json({ message: 'Endereço deletado com sucesso' });

    } catch (error) {

        return res.status(400).json({ messageError: error.message });
    }

}

export const updateAddress = async (req, res) => {

    try {
        
        const { address_id } = req.params;
        const {  street, number, neighborhood, complement, city, state, country } = req.body;
    
        await Address.update({  street, number, neighborhood, complement, city, state, country }, {
            where: {
                address_id
            }
        })
    
        return res.status(200).json({ message: 'Endereço editado com sucesso' });
    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}



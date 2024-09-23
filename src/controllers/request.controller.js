import { Request } from "../models/Request.model.js"


export const createRequest = async (req, res) => {

    try {

        const { date_request, type_food, quantity, user_id } = req.body

        await Request.sync()

        const newRequest = await Request.create({ date_request, type_food, quantity, user_id })
        return res.status(201).json({ newRequest })

    } catch (error) {
        return res.status(400).json({ messageError: error.message })

    }

}

export const getAllRequest = async (req, res) => {

    try {

        const requests = await Request.findAll()

        return res.status(200).json({ requests })

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }

}

export const deleteRequest = async (req, res) => {

    try {

        const { request_id } = req.params;

        await Request.destroy({
            where: {
                request_id
            }
        })

        return res.status(200).json({ message: 'Pedido deletado com sucesso' });

    } catch (error) {

        return res.status(400).json({ messageError: error.message });
    }

}

export const updateRequest = async (req, res) => {
    const { request_id } = req.params;
    const { date_request, type_food, quantity } = req.body;

    await Request.update({ date_request, type_food, quantity }, {
        where: {
            request_id
        }
    })

    return res.status(200).json({ message: 'Pedido editado com sucesso' });
}

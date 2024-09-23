import { User } from "../models/User.model.js"


export const createUser = async (req, res) => {

    try {

        const { username, password, email, phone, address_id } = req.body

        await User.sync()

        const newUser = await User.create({ username, password, email, phone, address_id })
        return res.status(201).json({ newUser })

    } catch (error) {
        return res.status(400).json({ messageError: error.message })

    }

}

export const uploadImageUser = async (req, res) => {

    try {


        if (!req.file) {
            return res.status(400).json({ messageError: 'Imagem não encontrada, envie uma imagem válida.' });
        }

        const { user_id } = req.params
        const image = `/uploads/${req.file.filename}`

        await User.update({ image }, { where: { user_id } });

        return res.status(200).json({ message: 'Imagem enviada e associada ao usuário com sucesso', image });
    } catch (error) {
        return res.status(500).json({ messageError: error.message });
    }

}



export const getAllUser = async (req, res) => {

    try {

        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        })

        return res.status(200).json({ users })

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }

}

export const deleteUser = async (req, res) => {

    const { user_id } = req.params;

    await User.destroy({
        where: {
            user_id
        }
    })

    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
}

export const updateUser = async (req, res) => {
    const { user_id } = req.params;
    const { username, password, email, phone } = req.body;

    await User.update({username, password, email, phone}, {
        where: {
            user_id
        }
    })

    return res.status(200).json({ message: 'Usuário editado com sucesso' });
}

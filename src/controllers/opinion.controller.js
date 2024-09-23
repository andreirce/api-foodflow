import { Opinion } from "../models/Opinions.model.js"


export const createOpinion = async (req, res) => {

    try {

        const { user_id, text, grade } = req.body

        await Opinion.sync()

        const newOpinion = await Opinion.create({ user_id, text, grade })
        return res.status(201).json({ newOpinion })

    } catch (error) {
        return res.status(400).json({ messageError: error.message })

    }  

}

export const getAllOpinions = async (req, res) => {

    try {

        const opinions = await Opinion.findAll();

        return res.status(200).json({ opinions })

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }

}

export const deleteOpinion = async (req, res) => {

    const { opinion_id } = req.params;

    await Opinion.destroy({
        where: {
            opinion_id
        }
    })

    return res.status(200).json({ message: 'Comentário deletado com sucesso' });
}

export const updateOpinion = async (req, res) => {
    const { opinion_id } = req.params;
    const { text, grade } = req.body;

    await Opinion.update({text, grade}, {
        where: {
            opinion_id
        }
    })

    return res.status(200).json({ message: 'Comentário editado com sucesso' });
}
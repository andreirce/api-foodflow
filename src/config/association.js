import { User } from "../models/User.model.js";
import { Opinion } from "../models/Opinions.model.js";


User.hasMany(Opinion, { foreignKey: 'user_id' });
Opinion.belongsTo(User, { foreignKey: 'user_id' });


export { User, Opinion };
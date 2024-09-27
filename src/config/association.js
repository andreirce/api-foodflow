import { User } from "../models/User.model.js";
import { Opinion } from "../models/Opinions.model.js";
import { Address } from "../models/Address.model.js";
import { Donor } from "../models/Donor.model.js";
import { Request } from "../models/Request.model.js";
import { Donation } from "../models/Donation.model.js";


User.hasMany(Opinion, { foreignKey: 'user_id' });
Opinion.belongsTo(User, { foreignKey: 'user_id' });

User.belongsTo(Address,  { foreignKey: 'address_id' })
Address.hasMany(User,  { foreignKey: 'address_id' })

User.hasMany(Request, { foreignKey: 'request_id' })
Request.belongsTo(User, { foreignKey: 'request_id' })

Donor.belongsTo(Address,  { foreignKey: 'address_id' })
Address.hasMany(Donor,  { foreignKey: 'address_id' })

Donor.hasMany(Donation, { foreignKey: 'donor_id' })
Donation.belongsTo(Donor, { foreignKey: 'donor_id' })

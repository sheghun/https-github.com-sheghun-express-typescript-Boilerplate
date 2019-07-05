import {
	Model,
	HasManyHasAssociationMixin, HasManyCountAssociationsMixin,
	HasManyCreateAssociationMixin,
	HasManyGetAssociationsMixin,
	HasManyAddAssociationMixin,
	Association,
	DataTypes,
	HasManySetAssociationsMixin
} from "sequelize";
import { sequelize } from "../util/secrets";
import bcrypt from "bcrypt";

class User extends Model {
	public id!: number;
	public firstName!: string;
	public lastName!: string;
	public phoneNumber!: string;
	public password!: string;
	public email!: string;

	// timestamps!
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;

	public toJSON(): User {
		// Get the values
		const user = <User>{ ...this.get() };
		// Delete values before returning to the client
		delete user.password;
		// @ts-ignore
		delete user.createdAt;
		// @ts-ignore
		delete user.updatedAt;
		return user;
	}
	/**
	 *
	 * @param password The pass in password to compare
	 * @param encrypted The hashed password in the database
	 */
	async compare(password: string, encrypted: string): Promise<boolean> {
		return await bcrypt.compare(password, encrypted);
	}

}

// Init the user
User.init({
	id: {
		type: DataTypes.INTEGER({ length: 11 }).UNSIGNED,
		primaryKey: true,
		autoIncrement: true
	},
	firstName: {
		type: DataTypes.STRING(25),
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING(25),
		allowNull: false
	},
	email: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
	phoneNumber: {
		type: DataTypes.STRING(13),
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING(100),
		allowNull: false
	},
	resetPasswordToken: {
		type: DataTypes.STRING(100)
	}

},
	{
		tableName: "users",
		modelName: "user",
		timestamps: true,
		sequelize: sequelize
	}
);


// Add hooks to the user

User.addHook("beforeCreate", async (user: User, options) => {
	// Hash the password
	let password = user.password;
	password = await bcrypt.hash(password, 10);
	user.password = password;
});

export default User;

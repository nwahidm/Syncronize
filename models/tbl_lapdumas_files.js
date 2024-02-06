// tbl_lapdumas_files schema
module.exports = (sequelize, DataTypes) => {
    const tbl_lapdumas_files = sequelize.define('tbl_lapdumas_files', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_lapdumas: DataTypes.INTEGER,
        filename: DataTypes.STRING,
        originalname: DataTypes.STRING,
        keterangan: DataTypes.STRING
    },
    { 
        freezeTableName: false,
        timestamps: false,
        schema: 'pemberkasan' 
    }
    );

    tbl_lapdumas_files.associate = function (models) {
        tbl_lapdumas_files.belongsTo(models.tbl_lapdumas, {
            foreignKey: 'id_lapdumas',
            as: 'lapdumas'
        });
        models.tbl_lapdumas.hasMany(tbl_lapdumas_files, {
            foreignKey: 'id_lapdumas',
            as: 'files'
        });
    };

    return tbl_lapdumas_files;
}
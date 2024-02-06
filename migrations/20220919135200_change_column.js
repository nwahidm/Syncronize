'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn(
                'tbl_lapdumas_files',
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'tbl_penyelidikan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'tbl_penyidikan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'tbl_prapenuntutan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            )
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn(
                'tbl_lapdumas_files',
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'tbl_penyelidikan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'tbl_penyidikan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            ),
            queryInterface.changeColumn(
                'tbl_prapenuntutan_files',  
                'filename',
                { 
                    type: Sequelize.TEXT,
                    allowNull: true
                }
            )
        ]);
    }
};

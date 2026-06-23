const sql = require("mssql");

const config = {
    user: "Nikshika",
    password: "nikshika1109",
    server: "NIKSHIKA",
    database: "InternDB",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

sql.connect(config)
    .then(() => {
        console.log("✅ SQL Server Connected");
    })
    .catch((err) => {
        console.error("❌ Database Connection Failed");
        console.error(err);
    });

module.exports = sql;
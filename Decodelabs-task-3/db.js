const sql = require("mssql/msnodesqlv8");

const config = {
    connectionString:
        "Driver={ODBC Driver 17 for SQL Server};Server=NIKSHIKA;Database=RVCreationsDB;Trusted_Connection=Yes;"
};

sql.connect(config)
    .then(() => console.log("✅ SQL Server Connected"))
    .catch(err => console.log(err));

module.exports = sql;

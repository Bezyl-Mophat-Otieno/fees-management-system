BEGIN TRY
    CREATE TABLE studentFeeTable (
        id VARCHAR(250) NOT NULL PRIMARY KEY,
        fullname VARCHAR(250) NOT NULL UNIQUE,
        current_class VARCHAR(250) NOT NULL,
        status BIT DEFAULT 1,
        feebalance DECIMAL(10,2) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    
     );
END TRY
BEGIN CATCH
    THROW 50000, 'An error occurred while creating the tables', 1;
END CATCH;


    INSERT INTO studentFeeTable (id, fullname, current_class, feebalance) VALUES ('1', 'John Doe', 'JSS 1', 50000);

SELECT * FROM studentFeeTable;
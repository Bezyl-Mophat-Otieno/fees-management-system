--  Add a student in the studentFeeTable

CREATE OR ALTER PROCEDURE addStudents
    @id VARCHAR(250),
    @fullname VARCHAR(250),
    @current_class VARCHAR(250),
    @feebalance DECIMAL(10,2)

AS
BEGIN
    BEGIN TRY
        INSERT INTO studentFeeTable (id, fullname, current_class, feebalance)
        VALUES (@id, @fullname, @current_class, @feebalance);
    END TRY
    BEGIN CATCH
        THROW 50000, 'An error occurred while adding a student', 1;
    END CATCH;
END
GO


-- fetching all students from the table

CREATE OR ALTER PROCEDURE fetchStudents
AS
BEGIN
    BEGIN TRY
        SELECT * FROM studentFeeTable;
    END TRY
    BEGIN CATCH
        THROW 50000, 'An error occurred while fetching students', 1;
    END CATCH;
END

GO

-- Fetching a single student from the table
CREATE OR ALTER PROCEDURE fetchStudent
    @id VARCHAR(250)
AS
BEGIN
    BEGIN TRY
        SELECT * FROM studentFeeTable WHERE id = @id;
    END TRY
    BEGIN CATCH
        THROW 50000, 'An error occurred while fetching a student', 1;
    END CATCH;
END


GO

-- updating student fees balance in the table
CREATE OR ALTER PROCEDURE updateStudentFeeBalance
    @id VARCHAR(250),
    @feebalance DECIMAL(10,2)
AS
BEGIN
    BEGIN TRY
        UPDATE studentFeeTable SET feebalance = @feebalance WHERE id = @id;
    END TRY
    BEGIN CATCH
        THROW 50000, 'An error occurred while updating a student fee balance', 1;
    END CATCH;
END

GO

-- deleting a student from the table
CREATE OR ALTER PROCEDURE deleteStudent
    @id VARCHAR(250)
AS
BEGIN
    BEGIN TRY
        UPDATE studentFeeTable SET status = 0 WHERE id = @id;
    END TRY
    BEGIN CATCH
        THROW 50000, 'An error occurred while deleting a student', 1;
    END CATCH;
END

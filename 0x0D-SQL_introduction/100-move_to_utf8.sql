-- Step 1: Change the database character set and collation
ALTER DATABASE hbtn_0c_0 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Step 2: Use the database
USE hbtn_0c_0;

-- Step 3: Get the list of tables and change the character set and collation for each table
SET @tables = NULL;
SELECT GROUP_CONCAT(table_name) INTO @tables
FROM information_schema.tables
WHERE table_schema = 'hbtn_0c_0';

-- Step 4: Change character set and collation for each table
-- Prepare the SQL statement for each table
SET @sql = CONCAT('ALTER TABLE ', @tables, ' CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;


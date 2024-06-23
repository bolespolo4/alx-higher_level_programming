-- Enable output to a file
SET @output_file = '/path/to/your/dump_file.sql';
SELECT CONCAT('USE ', SCHEMA_NAME, ';') INTO OUTFILE @output_file
FROM information_schema.schemata
WHERE SCHEMA_NAME = 'hbtn_0c_0';

-- Generate DDL for each table
SELECT CONCAT('SHOW CREATE TABLE ', table_name, ';') AS ddl_statements
INTO OUTFILE @output_file
FROM information_schema.tables
WHERE table_schema = 'hbtn_0c_0';

-- select score and name from table two that name not equal null and order it
SELECT score, name
FROM second_table
HAVING name IS NOT NULL
ORDER BY score DESC;

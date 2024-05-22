-- select from score and use count fun as number then group and order it
SELECT score, COUNT(1) AS number FROM second_table
GROUP BY score
ORDER BY number DESC;

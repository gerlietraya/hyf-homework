SELECT task.title
FROM task;

SELECT task.title
FROM task
WHERE due_date is null;

SELECT task.title
FROM task
WHERE status = 'done';

SELECT task.title
FROM task
WHERE status != 'done';

SELECT task.tile
FROM task
ORDER BY date_created DESC;

SELECT task.title
FROM task
ORDER BY date_created ASC
LIMIT 1;

SELECT task.title, task.due_date
FROM task
WHERE title LIKE '%database%' 
	OR description LIKE '%database%';


    

    




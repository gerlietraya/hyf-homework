Use datapractice;

show tables;
 
select count(*)
FROM task;

select count(*)
from task
where due_date = null;

select title
from task join status ON status_id = status.id
where status.name = "done";

select title
from task join status On status_id = status.id
where status.name = "not done";

select title
from task 
order by created desc;

select title 
from task
order by created desc
limit 1;

select title,due_date
from task
where description or title like "%database%";

select title, name
from task join status on status_id = status.id;

select name, count(status_id)
from status join task on status_id =status.id
group by status_id;

select name, status_id
from status join task on status_id = status.id
order by status_id desc;







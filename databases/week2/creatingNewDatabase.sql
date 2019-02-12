CREATE TABLE class(
	id INT,
    name TEXT,
    start_date INT,
    end_date INT );
ALTER TABLE class
ADD COLUMN status TEXT;

INSERT INTO class(status)
VALUES('not-started','ongoing' 'finished');

    
CREATE TABLE student(
	id INT,
    name TEXT,
    start_date INT,
    end_date INT); 



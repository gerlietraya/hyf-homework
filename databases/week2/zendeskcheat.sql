start transaction;
SET NAMES utf8mb4;
drop table if exists takes_class;
drop table if exists class;
drop table if exists student cascade;

CREATE TABLE student (
  id int primary key auto_increment,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(255)
);

CREATE TABLE class (
  id int primary key auto_increment,
  name varchar(255) NOT NULL,  
  start_date DATETIME NOT NULL,
  end_date DATETIME DEFAULT NULL,
  status enum('not-started', 'ongoing','finished')
  
) ;
CREATE TABLE takes_class (
	class_id int ,
    student_id int,
    Foreign key (class_id) references class(id),
	Foreign key (student_id) references student(id)
    

);


insert into student (id, name, email, phone) values (1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795');
insert into student (id, name, email, phone) values (2, 'Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467');
insert into student (id, name, email, phone) values (3, 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683');
insert into student (id, name, email, phone) values (4, 'Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191');
insert into student (id, name, email, phone) values (5, 'Aubry Polak', 'apolak4@indiatimes.com', '302-678-7931');
insert into student (id, name, email, phone) values (6, 'Maryrose Meadows', 'mmeadows5@comcast.net', '251-524-6594');
insert into student (id, name, email, phone) values (7, 'Pavel Brushneen', 'pbrushneen6@techcrunch.com', '316-170-3640');
insert into student (id, name, email, phone) values (8, 'Hedy Gerault', 'hgerault7@nymag.com', '176-177-5579');
insert into student (id, name, email, phone) values (9, '王秀英', 'wang.xiuying@weebly.com', '891-952-6749');
insert into student (id, name, email, phone) values (10, 'إلياس', 'elias@github.com', '202-517-6983');
insert into student (id, name, email, phone) values (11, 'Donald Duck', 'donald@duck.com', NULL);
insert into student (id, name, email, phone) values (12, 'Adam Smith', 'smith@bla.com', NULL);

insert into class
  (id, name, start_date, end_date,status)
values
  (1, 'databases', '2017-10-25','2019-10-25','ongoing'),
  (2, 'javascript', '2017-10-25',null,'finished');
  
insert into takes_class
  (class_id,student_id)
values
  (2,12);
  
commit;
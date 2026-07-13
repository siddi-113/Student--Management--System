create table Students_details(
    StudentID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(100),
    LastName VARCHAR(100),
    Email VARCHAR(150) UNIQUE,
    ContactNumber VARCHAR(15),
    AadhaarNumber VARCHAR(12),
    Address VARCHAR(500),
    Gender VARCHAR(20),
    DOB DATE,
    Qualification VARCHAR(100),
    CollegeName VARCHAR(200),
    CourseInterested VARCHAR(100),
    Password VARCHAR(100),
    RegisteredDate DATETIME DEFAULT GETDATE()
);
insert into Students_details(FirstName,
    LastName,
    Email,
    ContactNumber,
    AadhaarNumber,
    Address,
    Gender,
    DOB,
    Qualification,
    CollegeName,
    CourseInterested,
    Password)
    values('Ajay',
    'kumar',
    'ajay@gmail.com',
    '9896544210',
    '323956789012',
    'Kakinada, Andhra Pradesh',
    'Male',
    '2003-04-15',
    'B.Tech',
    'Pydah College',
    'Full Stack Development',
    'arun@123'
);
insert into Students_details(FirstName,
    LastName,
    Email,
    ContactNumber,
    AadhaarNumber,
    Address,
    Gender,
    DOB,
    Qualification,
    CollegeName,
    CourseInterested,
    Password)
    values('Priya',
    'Singh',
    'Priya@gmail.com',
    '9886543219',
    '223456789023',
    'Tuni, Andhra Pradesh',
    'FeMale',
    '2003-03-12',
    'B.com',
    'Aditya College',
    'Digital Marketing',
    'Priya@123'
);
select *from Students_details
alter table Students_details
add role varchar(20);
update Students_details
set role='Student'
where StudentID=77
delete  Students_details
where StudentID=87
alter table Students_details
add default 'Student' for role

alter table Students_details
alter column Student
//students_file-tables

create table student_files(
file_name varchar,
StudentId int,
 foreign key(StudentId)  references students_details(StudentID))
 alter table student_files
 alter column StudentId varchar(150);
 alter table student_files
  add foreign key(StudentId)  references students_details(Email)
  alter table student_files
  alter column description varchar(150)
 select *from  student_files
 select *from Students_details
 sp_help student_files
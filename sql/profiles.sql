use cattos;

create table profiles(
    name varchar(20) not null,
    lastName varchar(20) not null,
    email varchar(20) not null,
    passport int not null,
    city varchar(20) not null,
    status int,
	level int not null,
    salary int not null,
    startDate timestamp,
    skills varchar(50) not null,
    photo varchar(50) not null,
    cv varchar(50) not null,
    id int not null auto_increment,
    primary key (id)    
);

insert into profiles (name, lastname, email, passport, city, status,
level, salary, startDate, skills, photo, cv) values 
('Acacia', 'Fritz', 'acacia@gmail.com', 34123897, 'Cordoba', 1, 3, 20000,'2017-07-23','english, spanish, chinese,machine learning','a','a'),
('Artemisa', 'Fritz', 'artemisa@gmail.com', 34839180, 'Berlin', 1,1, 5000, '2020-09-24', 'designer, dev', 'a', 'a'),
('Aurora', 'Fritz', 'aurora@gmail.com', 23686489, 'Paris', 1,1, 5000, '2020-03-02', 'finance, cryptocurrency, bigData', 'a', 'a'),
('Magnolia', 'Fritz', 'magnolia@gmail.com', 11222333, 'Valencia', 1,2, 10000, '2022-11-24', 'Backend, Nodejs, Java, Spring, Dango', 'a', 'a'),
('Frederika', 'Wolfgang', 'frederika@gmail.com', 98737090, 'Barcelona', 1,3, 20000, '2022-09-14', 'Frontend, react, angular, vue, UX', 'a', 'a'),
('Lilly', 'Wolfgang', 'lilly@gmail.com', 9111322, 'Buenos Aires', 1, 1, 5000, '2021-08-16', 'Photoshop, Ilustrator, photographer', 'a', 'a'),
('Violet', 'Acosta', 'violet@gmail.com', 15667556, 'Sao Paulo', 1, 1, 5000, '2022-02-22', 'Wordpress, SEO', 'a', 'a'),
('Olivia', 'Acosta', 'olivia@gmail.com', 78890909, 'New York', 1, 1, 5000, '2022-02-22', 'writer, translator', 'a', 'a'),
('Damian', 'Williams', 'damian@gmail.com', 45678342, 'Las vegas', 1,2, 10000, '2022-12-04', 'IA, engineering, TI', 'a', 'a'),
('Amadeus', 'Williams', 'amadeus@gmail.com' , 11290987, 'L.A', 1, 2, 10000, '2022-12-03', 'social worker, human recourses', 'a', 'a'),
('Hell', 'Williams','hell@destiny.com', 26626626, 'Sidney', 0,1, 20000, '2010-06-09', 'cool', 'a', 'a')
;
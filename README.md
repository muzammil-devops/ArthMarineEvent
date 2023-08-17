## Create a Ec2 Machine "Minimum 2xCpu"
## Install Packages:- apt install node npm mysql-sever openjdk-11-jdk maven -y
## edit configuration file in mysql:- cd /etc/mysql/mysql.conf.d/ => nano mysqld.cnf => bind-address 0.0.0.0
## Restart Mysql :- systemctl restart mysql
## Setup Mysql:- mysql
- **create database AthmarineEvent;
- **RENAME USER 'root'@'locahost' TO 'root'@'%';
- **ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'mysql23';
- **GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
- **FLUSH PRIVILEGES;
## Clone Project "git clone https://github.com/kushwahvishal939/ArthMarineEvent.git

## Frontend = cd /MarineEventWeb/src/Container/Home/ = nano index.js  => Enter public ip => http://18.143.169.22:8080/event/register

## Backend = cd /MarineEvent/src/main/resources/application.properties  => jdbc:mysql://public_Ip:3306/AthmarineEvent





CREATE DATABASE proyect;
USE proyect;
CREATE TABLE Users (
    id INT AUTO_INCREMENT ,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario VARCHAR(100) NOT NULL,
    contrasena VARCHAR(50) NOT NULL,
    CONSTRAINT PK_User PRIMARY KEY
    (id, usuario)
);
INSERT INTO Users (fecha_creacion, usuario, contrasena) VALUES (NOW(), 'demo', '1234');
INSERT INTO Users (fecha_creacion, usuario, contrasena) VALUES (NOW(), 'test', '2');
select * from users
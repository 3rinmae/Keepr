CREATE TABLE
    IF NOT EXISTS accounts(
        id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        name varchar(255) COMMENT 'User Name',
        email varchar(255) COMMENT 'User Email',
        picture varchar(255) COMMENT 'User Picture'
    ) default charset utf8 COMMENT '';

ALTER TABLE accounts ADD coverImg VARCHAR(1000);

CREATE TABLE
    IF NOT EXISTS keeps(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(1500) NOT NULL,
        img VARCHAR(1000) NOT NULL,
        views INT NOT NULL DEFAULT 0,
        creatorId VARCHAR(255) NOT NULL,
        Foreign Key (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

CREATE TABLE
    IF NOT EXISTS vaults(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(1500) NOT NULL,
        img VARCHAR(1000) NOT NULL,
        isPrivate BOOLEAN DEFAULT false,
        creatorId VARCHAR(255) NOT NULL,
        Foreign Key (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

CREATE TABLE
    IF NOT EXISTS vaultKeeps(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        creatorId VARCHAR(255) NOT NULL,
        vaultId INT NOT NULL,
        keepId INT NOT NULL,
        Foreign Key (creatorId) REFERENCES accounts(id) ON DELETE CASCADE,
        Foreign Key (vaultId) REFERENCES vaults(id) ON DELETE CASCADE,
        Foreign Key (keepId) REFERENCES keeps(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

DROP TABLE `vaultKeep`

SELECT
    keeps.*,
    COUNT(vaultKeeps.id) AS kept,
    accounts.*
FROM keeps
    JOIN accounts ON accounts.id = keeps.creatorId
    LEFT JOIN vaultKeeps ON vaultKeeps.vaultId = keeps.id
GROUP BY(keeps.id);

SELECT * FROM keeps;
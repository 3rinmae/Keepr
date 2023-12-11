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
    LEFT JOIN vaultKeeps ON vaultKeeps.keepId = keeps.id
WHERE keeps.id = 73
GROUP BY(keeps.id);

SELECT
    kee.*,
    COUNT(vk.id) AS kept,
    acc.*
FROM keeps kee
    JOIN accounts acc ON acc.id = kee.creatorId
    LEFT JOIN vaultKeeps vk ON vk.keepId = kee.id
GROUP BY (kee.id);

SELECT * FROM keeps;

SELECT
    k.*,
    acc.*,
    vk.id AS vaultKeepId
FROM vaults v
    JOIN vaultKeeps vk ON v.id = vk.vaultId AND v.creatorId = vk.creatorId
    JOIN keeps k ON vk.keepId = k.id
    JOIN accounts acc ON acc.id = v.creatorId;

SELECT
    k.*,
    vk.id AS VaultKeepId,
    acc.*
FROM vaults v
    JOIN vaultKeeps vk ON v.id = vk.vaultId
    JOIN keeps k ON vk.keepId = k.id
    JOIN accounts acc ON acc.id = v.creatorId
WHERE
    v.id = 41
    AND (
        v.creatorId = @userId
        OR v.isPrivate = false
    );

SELECT
    kee.*,
    COUNT(vk.id) AS kept,
    acc.*
FROM keeps kee
    JOIN accounts acc ON acc.id = kee.creatorId
    LEFT JOIN vaultKeeps vk ON vk.keepId = kee.id
WHERE kee.id = 73
GROUP BY (kee.id);

SELECT k.*, acc.*
FROM keeps k
    JOIN accounts acc ON acc.id = k.creatorId
WHERE
    k.creatorId = '65418297a9f6909bc3e92f61';
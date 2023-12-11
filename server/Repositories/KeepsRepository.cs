




namespace Keepr.Repositories;

public class KeepsRepository
{
  private readonly IDbConnection _db;

  public KeepsRepository(IDbConnection db)
  {
    _db = db;
  }

  internal Keep CreateKeep(Keep keepData)
  {
    string sql = @"
      INSERT INTO
      keeps(name, description, img, creatorId)
      VALUES(@Name, @Description, @Img, @CreatorId);

      SELECT
      kee.*,
      acc.*
      FROM keeps kee
      JOIN accounts acc ON acc.id = kee.creatorId
      WHERE kee.id = LAST_INSERT_ID();";
    Keep keep = _db.Query<Keep, Profile, Keep>(sql, KeepBuilder, keepData).FirstOrDefault();
    return keep;
  }

  internal void DestroyKeep(int keepId)
  {
    string sql = "DELETE FROM keeps WHERE id = @keepId LIMIT 1;";
    _db.Execute(sql, new { keepId });
  }

  internal Keep GetKeepById(int keepId)
  {
    string sql = @"
      SELECT
      kee.*,
      COUNT(vk.id) AS kept,
      acc.*
      FROM keeps kee
      JOIN accounts acc ON acc.id = kee.creatorId
      LEFT JOIN vaultKeeps vk ON vk.keepId = kee.id
      WHERE kee.id = @keepId
      GROUP BY (kee.id);";
    Keep keep = _db.Query<Keep, Profile, Keep>(sql, KeepBuilder, new { keepId }).FirstOrDefault();
    return keep;
  }

  // LEFT JOIN vaultKeep vk ON vk.keepId = kee.id
  //       GROUP BY(kee.id)
  internal List<Keep> GetKeeps()
  {
    string sql = @"
      SELECT
      kee.*,
      COUNT(vk.id) AS kept,
      acc.*
      FROM keeps kee
      JOIN accounts acc ON acc.id = kee.creatorId
      LEFT JOIN vaultKeeps vk ON vk.keepId = kee.id
      GROUP BY (kee.id);";
    List<Keep> keeps = _db.Query<Keep, Profile, Keep>(sql, KeepBuilder).ToList();
    return keeps;
  }

  internal List<VaultVaultKeep> GetKeepsInVault(int vaultId, string userId)
  {
    string sql = @"
    SELECT k.*,
    vk.id AS VaultKeepId,
    acc.*
    FROM vaults v
    JOIN vaultKeeps vk ON v.id = vk.vaultId 
    JOIN keeps k ON vk.keepId = k.id 
    JOIN accounts acc ON acc.id = v.creatorId
    WHERE v.id = @vaultId AND (v.creatorId = @userId OR v.isPrivate = false);";
    List<VaultVaultKeep> vaultVaultKeeps = _db.Query<VaultVaultKeep, Profile, VaultVaultKeep>(sql, (vaultVaultKeeps, profile) =>
    {
      vaultVaultKeeps.Creator = profile;
      return vaultVaultKeeps;
    }, new { vaultId, userId }).ToList();
    return vaultVaultKeeps;

  }

  internal Keep UpdateKeep(Keep keepToUpdate)
  {
    string sql = @"
    UPDATE keeps
    SET
    name = @Name,
    description = @Description,
    img = @Img,
    views = @Views
    WHERE id = @Id LIMIT 1;
    
    SELECT
    kee.*,
    acc.*
    FROM keeps kee
    JOIN accounts acc ON acc.id = kee.creatorId
    WHERE kee.id = @Id;";

    Keep keep = _db.Query<Keep, Profile, Keep>(sql, KeepBuilder, keepToUpdate).FirstOrDefault();
    return keep;
  }

  private Keep KeepBuilder(Keep keep, Profile profile)
  {
    keep.Creator = profile;
    return keep;
  }
}